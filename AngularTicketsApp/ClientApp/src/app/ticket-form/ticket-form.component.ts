import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

export interface InputData {
  ticketNumber: string,
  allTickets: boolean
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit, OnChanges {
  @Output() searchTicketsByTicketEvent = new EventEmitter<InputData>();
  
  @Input() buttonIsDisable : boolean;
  @Output() inputIsSelected = new EventEmitter<boolean>();
  
  @ViewChild('ticketInput') ticketInput: ElementRef;

  ticketFormControl = new FormControl('', [Validators.pattern("[a-zA-Z0-9]{13}")]);

  matcher = new MyErrorStateMatcher();
  
  callEvent(ticketNumber: string, allTickets: boolean) {
    this.searchTicketsByTicketEvent.emit({ticketNumber, allTickets});
  }
  
  inputChangeHandler() {
      this.inputIsSelected.emit(this.ticketInput.nativeElement.value != '');
  }

  ngOnChanges(changes) {
    if (this.buttonIsDisable) {
      this.ticketInput.nativeElement.value = '';
      this.inputChangeHandler();
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
