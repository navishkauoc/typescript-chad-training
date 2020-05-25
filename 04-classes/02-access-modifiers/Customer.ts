class Customer{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer;

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);