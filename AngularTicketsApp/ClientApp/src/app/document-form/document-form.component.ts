import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit, OnChanges {
  @Output() searchTicketsEvent = new EventEmitter<string>();
  
  // ????
  @Input() buttonIsDisable : boolean;
  
  @Output() inputIsSelected = new EventEmitter<boolean>();

  @ViewChild('documentInput') documentInput: ElementRef;
  
  constructor() { }

  searchTickets(docNumber: string) {
    this.searchTicketsEvent.emit(docNumber);
  }
  
  ngOnChanges(changes) {
    // if other input is selected
    if (this.buttonIsDisable && this.documentInput) {
      this.documentInput.nativeElement.value = '';
      this.inputChangeHandler();
    }
  }

  inputChangeHandler() {
      this.inputIsSelected.emit(this.documentInput.nativeElement.value != '');
  }
  
  ngOnInit(): void {
  }

}
