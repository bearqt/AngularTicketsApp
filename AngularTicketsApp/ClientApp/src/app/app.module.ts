import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { DocumentFormComponent } from './document-form/document-form.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketsTableComponent } from './tickets-table/tickets-table.component'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule,
        MatGridListModule, MatButtonModule, MatInputModule,
        MatTableModule, BrowserAnimationsModule, MatCheckboxModule,
        MatProgressSpinnerModule, ReactiveFormsModule, MatSelectModule],
    declarations: [ AppComponent , DocumentFormComponent, 
                    TicketsTableComponent, TicketFormComponent], 
    bootstrap:    [ AppComponent ]
})
export class AppModule { }