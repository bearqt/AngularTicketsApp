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
using OfficeOpenXml;
using OfficeOpenXml.Table;

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

        [HttpGet("airline_companies")]
        public async Task<ActionResult> GetAirlineCompanies()
        {
            return Ok(await _service.GetAllAirlineCompanies());
        }
        
        [HttpPost("xlsx_by_doc")]
        public async Task<ActionResult> ExportCsvByDocNumber(GenerateFileInputModel inputModel)
        {
            var result = await _service.GetReportByDocumentNumber(inputModel.DocNumber, inputModel.CompanyCode);
            var exportbytes = ExporttoExcel(result, "repost.xlsx");
            return File(exportbytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "repost.xlsx");
        }

        [HttpPost("xlsx_by_ticket")]
        public async Task<ActionResult> ExportCsvByTicketNumber(GenerateFileInputModel inputModel)
        {
            var result = await _service.GetReportByTicketNumber(inputModel.TicketNumber, inputModel.AllTickets, inputModel.CompanyCode);
            var exportbytes = ExporttoExcel(result, "repost.xlsx");
            return File(exportbytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "repost.xlsx");
        }

        private byte[] ExporttoExcel(IList<DataAll> table, string filename)
        {
            using ExcelPackage pack = new ExcelPackage();
            ExcelWorksheet ws = pack.Workbook.Worksheets.Add(filename);
            ws.Cells["A1"].LoadFromCollection(table, true, TableStyles.Light1);
            return pack.GetAsByteArray();
        }
    }
}