class Bank{
    accountIDs:string[];
    accountNames:string[];
    totals:number[];
    accountPinns:string[];
    
    constructor(acId,acNa,total,acPin){
        this.accountIDs = acId;
        this.accountNames = acNa;
        this.totals = total;
        this.accountPinns= acPin;
    };

    //a deposit
    verifyAccount(t :Transaction):boolean {
        for(let d=0; d<=accountIDs.lenth; d++){
            if(t.ToAccountID === this.accountIDs[d]){
                return true;
            }
        }
        return false;
    };

    //a withdraw
    verifyAccess(t :Transaction):boolean {
        for(let b=0; b<=accountIDs.lenth; b++){
            if(t.FromAccountID === this.accountIDs[b]){
                return true;
            }
        }
        return false;
    }; 

    deposit(Deposemoney:number, accountID:string, total:number){
        if(Bank.verifyAccount == true){
            total = Deposemoney + total;
        }
        else{
            console.log("go home goof");
        }
    };

    withdraw(withdraw:number, accountID:string, total:number){
        if(Bank.verifyAccount == true & Bank.verifyAccess == true){
            total = total - withdraw;
        }
        else{
            console.log("go home goof")
        }
    };
}
//end of Bank class


class Customer{
    accountID:string;
    accountName:string;
    total:number;
    accountPinn:string;

    constructor(aid,an,t,ap){
        this.accountID = aid;
        this.accountName = an;
        this.total = t;
        this.accountPinn = ap;
    };
    
}
//end of Customer class

class Transaction{
    FromAccountID:string
    pinn:string
    ToAccountID:string
    transType:string
    amount:number

    constructor(paid,p,taid,tt,a){
        this.FromAccountID = paid;
        this.pinn = p;
        this.ToAccountID = taid;
        this.transType = tt;
        this.amount = a;
    };
}
//end of Transaction class

























//creating the tests
function main () : void{

//Create some customers
let charliedata = ["12315673","charbell1231",2.37,"7133"];
const Charlie = new Customer(...charliedata);

let dillondata = ["34659678","dillydilly",47.53,"8255"];
const Dillon = new Customer(...dillondata);

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
