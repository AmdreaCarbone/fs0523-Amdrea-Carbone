var Capo = /** @class */ (function () {
    function Capo(id, codProd, collezione, capo, quantità, colore, prezzoNoIva, prezzoIva, disponibile, saldo) {
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
    Capo.prototype.getsaldocapo = function (prezzoIva) {
        var saldoDaApplicare = ((prezzoIva * this.saldo) / 100);
        console.log(" il saldo da applicare è di " + saldoDaApplicare + " al prezzo sul cartellino di " + this.prezzoIva);
    };
    Capo.prototype.getacquistocapo = function (prezzoIva) {
        var prezzoSaldato = this.prezzoIva - ((prezzoIva * this.saldo) / 100);
        console.log(" il prezzo d'acquisto è di " + prezzoSaldato);
    };
    return Capo;
}());
var pantalone = new Capo(1, 2, "estate", "pantalone", 3, "rosso", 55, 90, "si", 40);
pantalone.getacquistocapo(90);
pantalone.getsaldocapo(90);
