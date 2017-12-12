import { format } from "url";


export class Sample {
    
    lbStandardDate : Date; //standard date for API Backend: loopback
    //datetime picker
    dateTimePicker : any = {
        pickerOptions : {
            format: 'YYYY-MM-DD'
        },
    }    
    date1 : EWDateTimePicker = new EWDateTimePicker()
    date2 : EWDateTimePicker = new EWDateTimePicker()

    selectedProduct : Product;     
    selectedProducts : Product[];     
    
    products: Product[]  = [
        new Product(1, 'Motherboard'),
        new Product(2, 'CPU'),
        new Product(3, 'Memory')
    ];
    /**
    * link http://aurelia.io/docs/binding/selects#select-number
    * 
    */

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

export class Product {
    id: number;
    name: string;
    constructor(id, name){
        this.id = id;
        this.name = name;    
    }
}