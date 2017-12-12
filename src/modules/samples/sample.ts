
export class Sample {
    
    //datetime picker
    dateTimePicker : any = {
        pickerOptions : {
            format: 'YYYY-MM-DD'
        },
    }    

    constructor(){
        // this.dateTimePicker.dateEntered = new Date(2017,12,3);
    }  
    activate() {
        this.dateTimePicker.dateEntered = new Date(2017,12,3);
    }
}    