import { format } from "url";


export class EwSelect {
    
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