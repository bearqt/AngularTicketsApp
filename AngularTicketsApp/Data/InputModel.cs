using Microsoft.AspNetCore.Mvc;

namespace AngularTicketsApp
{
    public class InputModel
    {
        public string? DocumentNumber { get; set; }

        public string? TicketNumber { get; set; }

        public bool DisplayAllTickets { get; set; } = false;
    }
}