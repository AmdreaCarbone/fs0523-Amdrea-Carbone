/*abstract class Conto{
    constructor(
       public coefficente:number,
       public redditoLOrdo:number,
       public tasseImponibili:number,
       public tasseIrpef:number
    ){}
    utileTasse

}


class ContoMio extends Conto {
    sa
}*/

abstract class CalcoloTasse{

    tasseIrpef: number = 15;
    tasseInps: number = 24;


    constructor(
        protected reddAnnuo:number = 0,
        protected codRedd:number
        ){};


          abstract getUtileTasse(): number
          abstract getTasseInps(): number
          abstract getTasseIrpef(): number
          abstract getReddAnnuoNetto(): number
} 


class WebDeveloper extends CalcoloTasse {

constructor(protected redAnnuo:number = 0){
    super(redAnnuo,78);
}


getUtileTasse()


getRedditoAnnuoNetto(): number {
    return this.redAnnuo * this.codRedd/ 200
}


















}