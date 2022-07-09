using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AngularTicketsApp.Data.Services
{
    public class TicketsRepository : ITicketsRepository
    {
        private readonly OperatorTicketsAppContext _context;
        private readonly IConfiguration _configuration;

        public TicketsRepository(OperatorTicketsAppContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<IList<DataAll>> GetTicketsByDocNumberAsync(string docNumber)
        {
            var query = _configuration.GetSection("SqlQueries")["TicketsByDocNumber"];
            var tickets = await _context.DataAlls.FromSqlRaw(query, docNumber).ToListAsync();
            return tickets;
        }

        public async Task<IList<DataAll>> GetTicketsByTicketNumberAsync(string ticketNumber, bool displayAllTickets)
        {
            var queriesSection = _configuration.GetSection("SqlQueries");
            var query = displayAllTickets
                ? queriesSection["AllTicketsByTicketNumber"]
                : queriesSection["TicketOperations"];
            return await _context.DataAlls.FromSqlRaw(query, ticketNumber).ToListAsync();
        }

        public async Task<IList<DataAll>> GetReportByDocumentNumber(string docNumber, string companyCode)
        {
            var tickets = await GetTicketsByDocNumberAsync(docNumber);
            return tickets.ToCompany(companyCode);
        }
        
        public async Task<IList<DataAll>> GetReportByTicketNumber(string ticketNumber, bool displayAllTickets, string companyCode)
        {
            var tickets = await GetTicketsByTicketNumberAsync(ticketNumber, displayAllTickets);
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
                }
                t.Place = "";
                t.Sender = "";
                t.AirlineRouteId = null;
                t.AirlineCode = "";
                t.DepartPlace = "";
                t.ArrivePlace = "";
                t.ArriveDatetime = null;
                t.PnrId = "";
                t.OperatingAirlineCode = "";
                t.CityFromCode = "";
                t.CityFromName = "";
                t.AirportFromIcaoCode = "";
                t.AirportFromRfCode = "";
                t.AirportFromName = "";
                t.CityToCode = "";
                t.CityToName = "";
                t.AirportToIcaoCode = "";
                t.AirportToRfCode = "";
                t.AirportToName = "";
                t.FlightNums = "";
                t.FareCode = "";
                t.FarePrice = null;
            }
            return tickets;
        }
    }
}