export interface Rental{
    carName:number;
    customerFirsName:string;
    customerLastName:string;
    rentDate:Date;
    returnDate?:Date;
    carId:number;
    customerId:number
}