import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {Ticket} from "./ticket";
import {InputData} from "./ticket-form/ticket-form.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit{
    
    tickets: Ticket[] = [];
    docButtonIsDisable : boolean = true;
    ticketButtonIsDisable : boolean = true;
    spinnerIsHidden: boolean = true;
    
    currentDocNumber : string;
    currentTicketNumber: string;
    currentCheckboxValue: boolean;
    
    responseStatusCode : number = 200;
    
    constructor(private dataService: DataService) {}
    
    ngOnInit() {
    }
    
    showSpinner() {
        this.spinnerIsHidden = false;
    }
    
    hideSpinner() {
        this.spinnerIsHidden = true;
    }
    
    handleError(error: HttpErrorResponse) {
        this.responseStatusCode = error.status;
        console.log(this.responseStatusCode);
        this.hideSpinner();
        this.tickets = [];
    }
    
    loadDataByDocNumber(docNumber: string) {
        this.currentDocNumber = docNumber;
        this.currentTicketNumber = "";
        
        this.showSpinner();
        this.dataService.getTicketsByDocNumber(docNumber).subscribe((data: Ticket[]) =>
        {
            this.tickets = data;
            this.hideSpinner();
        },
            error => {
            console.log("CAUGHT ERROR", error);
            this.handleError(error);
            });
    }
    
    loadDataByTicketNumber(input: InputData) {
        this.currentTicketNumber = input.ticketNumber;
        this.currentDocNumber = "";
        this.currentCheckboxValue = input.allTickets;
        
        this.showSpinner();
        this.dataService.getTicketsByTicket(input.ticketNumber, input.allTickets).subscribe((data: Ticket[]) =>
        {
            this.tickets = data;
            this.hideSpinner();
        });
    }

    blockTicketButton(documentButtonIsSelected: boolean) {
        this.ticketButtonIsDisable = true;
        this.docButtonIsDisable = !documentButtonIsSelected;
    }
    
    blockDocumentButton(ticketButtonIsSelected: boolean) {
        this.docButtonIsDisable = true;
        this.ticketButtonIsDisable = !ticketButtonIsSelected;
        
    }
}