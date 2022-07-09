namespace AngularTicketsApp.Data
{
    public class GenerateFileInputModel
    {
        public string? CompanyCode { get; set; }
        public string? TicketNumber { get; set; }
        public string? DocNumber { get; set; }
        public bool AllTickets { get; set; } = false;
    }
}