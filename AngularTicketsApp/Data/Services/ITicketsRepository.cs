using System.Collections.Generic;
using System.Threading.Tasks;
using AngularTicketsApp.Data.Models;

namespace AngularTicketsApp.Data.Services
{
    public interface ITicketsRepository
    {
        Task<IList<DataAll>> GetTicketsByDocNumberAsync(string docNumber);
        Task<IList<DataAll>> GetTicketsByTicketNumberAsync(string ticketNumber, bool displayAllTickets);
        Task<IList<DataAll>> GetReportByDocumentNumber(string docNumber, string companyCode);
        Task<IList<DataAll>> GetReportByTicketNumber(string ticketNumber, bool displayAllTickets, string companyCode);
        Task<IList<AirlineCompany>> GetAllAirlineCompanies();
    }
}