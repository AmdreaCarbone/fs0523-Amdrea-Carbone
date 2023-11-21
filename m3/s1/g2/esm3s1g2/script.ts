
class Account{
     constructor(saldo:number){

        this.saldo = saldo;
    }
     saldo:number = 0;

    deposito(s:number):void{
       this.saldo += s;
       console.log("il tuo saldo ora è di " + this.saldo)
    }

    prelievo(s:number):void{
        this.saldo -= s;
        console.log("il saldo rimanente dopo il prelievo di " + s + " è di " + this.saldo)
    }
    
    

}

    let sonAccount:Account = new Account(1000);
    
    sonAccount.deposito(100)
    sonAccount.prelievo(35)
    console.log("il saldo contabile è di " + sonAccount.saldo);

    class MotherAccount extends Account{

            addInterest():void{

            this.saldo *= 1.1;
    
        }

    }

    let motherAccount = new MotherAccount(1500);

    motherAccount.deposito(100)
    motherAccount.prelievo(35)
    motherAccount.addInterest()
    console.log(motherAccount.saldo);