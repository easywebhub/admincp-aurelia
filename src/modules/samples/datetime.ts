import { format } from "url";


export class DateTime {
    
    lbStandardDate : Date; //standard date for API Backend: loopback
    //datetime picker
    dateTimePicker : any = {
        pickerOptions : {
            format: 'YYYY-MM-DD'
        },
    }    
    date1 : EWDateTimePicker = new EWDateTimePicker()
    date2 : EWDateTimePicker = new EWDateTimePicker()

    constructor(){
        // this.dateTimePicker.dateEntered = new Date(2017,12,3);
    }  
    activate() {
        this.dateTimePicker.dateEntered = new Date(2017,12,3);
    }
}    

export class EWDateTimePicker {
    date : Date;
    options : {
        format: 'DD-MM-YYYY'
    }

    constructor() {
        this.date = new Date();    
    }


    getDate() :Date {
        return new Date(this.date);    
    }
}