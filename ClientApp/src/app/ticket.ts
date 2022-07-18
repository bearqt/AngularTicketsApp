export class Ticket {
    constructor(
        public passengerDocumentNumber?: string,
        public surname?: string,
        public name?: string,
        public sender?: string,
        public validationStatus?: string,
        public time?: string,
        public type?: string,
        public ticketNumber?: string,
        public departDatetime?: string,
        public airlineCode?: string,
        public cityFromName?: string,
        public cityToName?: string,
        public operationTimeTimezone?: number,
        departDatetimeTimezone? : number
        ) { }
}