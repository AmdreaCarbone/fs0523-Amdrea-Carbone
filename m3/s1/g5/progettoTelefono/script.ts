

interface ISim{
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;


    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

class Smartphone implements ISim{

    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    
   
        constructor(carica:number, numeroChiamate: number, costoMinuto: number){

             this.carica= carica;
             this.numeroChiamate= numeroChiamate;
             this.costoMinuto= costoMinuto;
            
        }

    ricarica(euro: number): void {
        this.carica = this.carica += euro;
    }

    numero404(): string {
        return `il credito residuo è di ${this.carica} €`   
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    chiamata(min:number):void {
        this.carica = this.carica - (this.costoMinuto*min)
        this.numeroChiamate = this.numeroChiamate + 1
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}


// istanza classe 
let iphone:Smartphone = new Smartphone ( 10, 3, 0.25)


console.log(iphone);

iphone.ricarica(15);

console.log(iphone.numero404());

console.log(iphone.getNumeroChiamate());

iphone.chiamata(9);

console.log(iphone);

iphone.azzeraChiamate();

console.log(iphone);



//istanza classe

let samsung:Smartphone = new Smartphone ( 3, 13, 0.33)

console.log(samsung);

samsung.ricarica(25);

console.log(samsung.numero404());

console.log(samsung.getNumeroChiamate());

samsung.chiamata(12);

console.log(samsung);

samsung.azzeraChiamate();

console.log(samsung);




//istanza classe

let galaxyNote:Smartphone = new Smartphone ( 0, 5, 0.28)


console.log(galaxyNote);

galaxyNote.ricarica(17);

console.log(galaxyNote.numero404());

console.log(galaxyNote.getNumeroChiamate());

galaxyNote.chiamata(7);

console.log(galaxyNote);

galaxyNote.azzeraChiamate();

console.log(galaxyNote);







/////////////////////////////////////prova extra 

type chiamata ={
    id:number;

    durata:number;

    dataOra:Date;
}


class SmartphoneRegistro extends Smartphone {

    registroChiamate: chiamata[];

    constructor(carica:number, numeroChiamate: number, costoMinuto: number, registroChiamate: chiamata[]) {
        super(carica,numeroChiamate,costoMinuto);
        this.registroChiamate = registroChiamate

    }

    ottieniRegistroChiamate():string {
        return `le chiamate effettuate sono state ${this.registroChiamate.length} `
         
    }
   
}


let nuovoIphone = new SmartphoneRegistro(10,3,0.30,[{
    id: 3262636426,
    durata: 5,
    dataOra: (new Date(2023,12,25,11,30))
},

{
   id: 326245426,
   durata: 3,
   dataOra: (new Date(2023,12,23,10,30))
},

{
id: 326234526,
durata: 2,
dataOra: (new Date(2023,12,24,12,30))
}])

console.log(nuovoIphone.ottieniRegistroChiamate())



