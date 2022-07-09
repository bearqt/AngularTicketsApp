using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using AngularTicketsApp.Data;
using AngularTicketsApp.Data.Services;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;

namespace AngularTicketsApp.Controllers
{
    [ApiController]
    [Route("api/tickets")]
    public class TicketsController : ControllerBase
    {
        private readonly ITicketsRepository _service;

        public TicketsController(ITicketsRepository service)
        {
            _service = service;
        }
        
        [HttpPost("by_doc_number")]
        public async Task<ActionResult> GetTicketsByDocNumber(InputModel inputModel)
        {
            var result = await _service.GetTicketsByDocNumberAsync(inputModel.DocumentNumber);
            if (result.Any())
            {
                return Ok(result);
            }
            return NotFound();
        }
        
        [HttpPost("by_ticket_number")]
        public async Task<ActionResult> GetTicketsByTicketNumber(InputModel inputModel)
        {
            var result = await _service.GetTicketsByTicketNumberAsync(inputModel.TicketNumber, inputModel.DisplayAllTickets);
            if (result.Any())
            {
                return Ok(result);
            }
            return NotFound();
        }

        [HttpPost("csv_by_doc")]
        public async Task<ActionResult> ExportCsvByDocNumber(GenerateFileInputModel inputModel)
        {
            var result = await _service.GetReportByDocumentNumber(inputModel.DocNumber, inputModel.CompanyCode);

            var cd = new ContentDisposition()
            {
                FileName = "report.csv",
                Inline = false
            };
            Response.Headers.Add("Content-Disposition", cd.ToString());
            Response.Headers.Add("Content-Type", "text/csv");
            return Ok(result);
        }

        [HttpPost("csv_by_ticket")]
        public async Task<ActionResult> ExportCsvByTicketNumber(GenerateFileInputModel inputModel)
        {
            var result = await _service.GetReportByTicketNumber(inputModel.TicketNumber, inputModel.AllTickets, inputModel.CompanyCode);
            var cd = new ContentDisposition()
            {
                FileName = "report.csv",
                Inline = false
            };
            Response.Headers.Add("Content-Disposition", cd.ToString());
            Response.Headers.Add("Content-Type", "text/csv");
            return Ok(result);
        }
    }
}