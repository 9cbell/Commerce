class Bank{
    accountID:string[];
    accountName:string[];
    total:number[];
    accountPinn:string[];
    verifyAccount()
    verifyAccess()
    deposit()
    withdraw()
}//end of Bank class
class Customer{
    accountID:string[];
    accountName:string[];
    total:number[];
    accountPinn:string[];
}//end of Customer class
class Transaction{
    FromAccountID:string
    pinn:string
    ToAccountID:string
    transType:string
    amount:number
}//end of Transaction class
//creating the tests
function main () : void{

//Create some customers
let charliedata = ["12315673","charbell1231",2.37,"7133"];
const Charlie = new Customer(...charliedata);

let C = ["34659678","dillydilly",47.53,"8255"];
const Dillion = new Customer(...dilliondata);

let delanodata = ["34567655",delwalk,97.45,"8765"];
const Delano = new Customer(...delanodata);

let jamesdata = ["89798674","jimmy56",8.88,"8976"];
const James = new Customer(...jamesdata);

let kewendata = ["89763554","Batman",2005467.34,"5467"];
const Kewen = new Customer(...kewendata);



let customerdata = [charliedata,dilliondata,delanodata,jamesdata,kewendata];



//Make a Bank
const BankofAmerica = new Bank(customerdata);


//Have some customers make transactions with the bank





}

//executing the tests
main();











/**
***
*** THIS IS FOR THE NEXT PHASE...PHASE 2!
***
**/


class ATM{


}//end of ATM class




class DebitCard{


}//end of Debit Card class
