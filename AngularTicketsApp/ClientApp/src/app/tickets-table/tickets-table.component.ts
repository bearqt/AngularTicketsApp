import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ticket} from "../ticket";
import {DataService} from "../data.service";
import { saveAs } from 'file-saver';

export interface AirlineCompany {
  name: string,
  code: string
}

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css'],
  providers: [DataService]
})
export class TicketsTableComponent implements OnInit {
  @Input() dataSource : Ticket[];
  
  @Input() currentDocNumber: string;
  @Input() currentTicketNumber: string;
  @Input() currentCheckbox: boolean;
  
  displayedColumns: string[] = ["passengerDocNumber", "surname", "name",
    "sender", "validationStatus", "time", "type", "ticketNumber",
    "departDatetime", "airlineCode", "cityFromName", "cityToName"
  ];
  airlineCompanies : AirlineCompany[] = [
    {name: "АО \"Авиакомпания \"Азимут\"\"", code: "A4"},
    {name: "АО \"Авиакомпания \"Икар\"\"", code: "EO"},
    {name: "АО \"Авиакомпания \"Россия\"\"", code: "FV"},
    {name: "АО \"Авиакомпания \"Сибирь\"\"", code: "S7"},
    {name: "АО \"Авиакомпания \"Якутия\"\"", code: "R3"},
    {name: "АО \"Авиакомпания АЛРОСА\"", code: "6R"},
    {name: "АО \"АК НордСтар\"", code: "Y7"},
    {name: "АО \"АК Смартавиа\"", code: "5N"},
    {name: "АО \"ИрАэро\"", code: "IO"},
    {name: "АО \"Ред Вингс\"", code: "WZ"},
    {name: "ОАО АК \"Уральские авиалинии\"", code: "U6"},
    {name: "ООО \"Северный Ветер\"", code: "N4"},
    {name: "ПАО \"Авиакомпания \"Ютэйр\"\"", code: "UT"},
    {name: "ПАО \"Аэрофлот\"", code: "SU"},
    {name: "АО \"Авиакомпания «Ижавиа»\"", code: "I8"},
  ];
  
  selectedCompany : string = "";
  downloadCsv(companyCode: string) {
    if (this.currentDocNumber != "") {
      this.dataService.requestCsvByDocNumber(this.currentDocNumber, companyCode).subscribe(data => {
        const blob = new Blob([data], { type: 'text/csv' });
        const fileName = 'report.csv';
        saveAs(blob, fileName);
      });
    }
    else {
      this.dataService.requestCsvByTicketNumber(this.currentTicketNumber, companyCode, this.currentCheckbox).subscribe(data => {
        const blob = new Blob([data], { type: 'text/csv' });
        const fileName = 'report.csv';
        saveAs(blob, fileName);
      });
    }
  }
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {}
}
