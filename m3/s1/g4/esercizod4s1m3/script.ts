

class Capo{
 public id:number;
 public codProd:number;
 public collezione:string;
 public capo:string;
 public modello:number;
 public quantità:number;
 public colore:string;
 public prezzoNoIva:number;
 public prezzoIva:number;
 public disponibile:string;
 public saldo:number;


 constructor(id:number, codProd:number, collezione:string, capo:string, quantità:number, colore:string, prezzoNoIva:number, prezzoIva:number, disponibile:string ,saldo:number){
    this.id = id;
    this.codProd = codProd;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = quantità;
    this.quantità = quantità;
    this.colore = colore;
    this.prezzoNoIva = prezzoIva;
    this.prezzoIva = prezzoIva;
    this.disponibile = disponibile;
    this.saldo = saldo;

 }

    public   getsaldocapo(prezzoIva:number):void{
        let saldoDaApplicare = ((prezzoIva * this.saldo)/ 100)
        console.log( " il saldo da applicare è di " + saldoDaApplicare + " al prezzo sul cartellino di " + this.prezzoIva)
       
    }

      
    public   getacquistocapo(prezzoIva:number):void{ 
        let prezzoSaldato = this.prezzoIva - ((prezzoIva * this.saldo)/ 100)
        console.log(" il prezzo d'acquisto è di "+ prezzoSaldato)

    }


}

let pantalone:Capo = new Capo(1, 2, "estate", "pantalone", 3, "rosso", 55, 90, "si", 40)

pantalone.getacquistocapo(90)
pantalone.getsaldocapo(90)