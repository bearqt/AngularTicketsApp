import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";


@Injectable()
export class DataService {
    private url = environment.apiUrl;
    constructor(private http: HttpClient) { }
    
    getTicketsByDocNumber(documentNumber: string) {
        console.log(this.url);
        return this.http.post(this.url + "/by_doc_number", {
            documentNumber
        });
    }
    
    getTicketsByTicket(ticketNumber: string, displayAllTickets: boolean = false) {
        return this.http.post(this.url + "/by_ticket_number", {
            ticketNumber,
            displayAllTickets
        });
    }
    
    requestCsvByDocNumber(docNumber: string, companyCode: string) {
        const options: {
            headers?: HttpHeaders;
            observe?: 'body';
            params?: HttpParams;
            reportProgress?: boolean;
            responseType: 'arraybuffer';
            withCredentials?: boolean;
        } = {
            responseType: 'arraybuffer'
        };

        return this.http.post(this.url + "/csv_by_doc", {
                docNumber,
                companyCode
            }, options);
    }

    requestCsvByTicketNumber(ticketNumber: string, companyCode: string, allTickets: boolean) {
        const options: {
            headers?: HttpHeaders;
            observe?: 'body';
            params?: HttpParams;
            reportProgress?: boolean;
            responseType: 'arraybuffer';
            withCredentials?: boolean;
        } = {
            responseType: 'arraybuffer'
        };

        return this.http.post(this.url + "/csv_by_ticket", {
            ticketNumber,
            companyCode,
            allTickets
        }, options);
    }
}