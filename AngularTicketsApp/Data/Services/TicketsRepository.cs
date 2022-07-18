using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace AngularTicketsApp.Data.Services
{
    public class TicketsRepository : ITicketsRepository
    {
        private readonly OperatorTicketsAppContext _context;
        private readonly IConfiguration _configuration;
        private readonly ILogger<TicketsRepository> _logger;

        public TicketsRepository(OperatorTicketsAppContext context, IConfiguration configuration, ILogger<TicketsRepository> logger)
        {
            _context = context;
            _configuration = configuration;
            _logger = logger;
        }

        public async Task<IList<DataAll>> GetTicketsByDocNumberAsync(string docNumber)
        {
            var queryPath = _configuration.GetSection("SqlQueriesPaths")["TicketsByDocNumber"];
            var query = await File.ReadAllTextAsync(queryPath);
            _logger.LogInformation($"{DateTime.Now}: Returned tickets list by document number ");
            return await _context.DataAlls.FromSqlRaw(query, docNumber).ToListAsync();
        }

        public async Task<IList<DataAll>> GetTicketsByTicketNumberAsync(string ticketNumber, bool displayAllTickets)
        {
            var queriesPathsSection = _configuration.GetSection("SqlQueriesPaths");
            var queryPath = displayAllTickets
                ? queriesPathsSection["AllTicketsByTicketNumber"]
                : queriesPathsSection["TicketsByTicketNumber"];
            var query = await File.ReadAllTextAsync(queryPath);
            _logger.LogInformation($"{DateTime.Now}: Returned tickets list by ticket number ");
            return await _context.DataAlls.FromSqlRaw(query, ticketNumber).ToListAsync();
        }

        public async Task<IList<DataAll>> GetReportByDocumentNumber(string docNumber, string companyCode)
        {
            var tickets = await GetTicketsByDocNumberAsync(docNumber);
            _logger.LogInformation($"{DateTime.Now}: Returned xlsx report by document number ");
            return tickets.ToCompany(companyCode);
        }
        
        public async Task<IList<DataAll>> GetReportByTicketNumber(string ticketNumber, bool displayAllTickets, string companyCode)
        {
            var tickets = await GetTicketsByTicketNumberAsync(ticketNumber, displayAllTickets);
            _logger.LogInformation($"{DateTime.Now}: Returned xlsx report by ticket number ");
            return tickets.ToCompany(companyCode);
        }
    }
    
    public static class TicketsExtensions
    {
        public static IList<DataAll> ToCompany(this IList<DataAll> tickets, string companyCode)
        {
            foreach (var t in tickets)
            {
                if (t.AirlineCode != companyCode)
                {
                    t.TicketNumber = string.Concat("*******", t.TicketNumber[7..]);
                    t.Place = "";
                    t.Sender = "";
                    t.AirlineCode = "";
                    t.DepartPlace = "";
                    t.ArrivePlace = "";
                    t.ArriveDatetime = null;
                    t.PnrId = "";
                    t.OperatingAirlineCode = "";
                    t.CityFromName = "";
                    t.AirportFromName = "";
                    t.CityToName = "";
                    t.AirportToName = "";
                    t.FlightNums = "";
                    t.FareCode = "";
                    t.FarePrice = null;
                }
                
            }
            return tickets;
        }
    }
}