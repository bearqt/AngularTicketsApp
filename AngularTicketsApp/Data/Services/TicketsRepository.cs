using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AngularTicketsApp.Data.Models;
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
            // if (ticketNumber != "1234567890111")
            // {
            var queriesPathsSection = _configuration.GetSection("SqlQueriesPaths");
            var queryPath = displayAllTickets
                ? queriesPathsSection["AllTicketsByTicketNumber"]
                : queriesPathsSection["TicketsByTicketNumber"];
            var query = await File.ReadAllTextAsync(queryPath);
            _logger.LogInformation($"{DateTime.Now}: Returned tickets list by ticket number ");
            return await _context.DataAlls.FromSqlRaw(query, ticketNumber).ToListAsync();
            // }
            // return new List<DataAll>
            //     {
            //         new DataAll
            //         {
            //             OperationId = 1,
            //             Type = "someType",
            //             Time = "12:34",
            //             Place = "place",
            //             Sender = "sender",
            //             TransactionTime = DateTime.Now,
            //             ValidationStatus = "validation status",
            //             PassengerId = 1,
            //             Surname = "surname",
            //             Name = "name",
            //             Patronymic = "patronymic",
            //             Birthdate = "03.07.2001",
            //             PassengerDocumentId = 1,
            //             PassengerDocumentType = "type",
            //             PassengerDocumentNumber = "1234567890",
            //             PassengerDocumentDisabledNumber = "disabled number",
            //             PassengerDocumentLargeNumber = "large family",
            //             PassengerTypeName = "typename",
            //             PassengerTypeType = "typettype",
            //             RaCategory = "ra catergory",
            //             Description = "description",
            //             IsQuota = true,
            //             TicketNumber = "1234567890111",
            //             TicketType = 1,
            //             AirlineCode = "airlone conde",
            //             DepartPlace = "deprat place",
            //             DepartDatetime = "depart datetime",
            //             ArrivePlace = "arrive place",
            //             ArriveDatetime = "arrive datetime",
            //             PnrId = "pnrId",
            //             OperatingAirlineCode = "airline code",
            //             CityFromName = "cityFromName",
            //             AirportFromName = "airport from",
            //             CityToName = "city to name",
            //             AirportToName = "airport to name",
            //             FlightNums = "123",
            //             FareCode = "fare code",
            //             FarePrice = 123
            //         }
            //     };
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

        public async Task<IList<AirlineCompany>> GetAllAirlineCompanies()
        {
            return await _context.AirlineCompanies.ToListAsync();
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