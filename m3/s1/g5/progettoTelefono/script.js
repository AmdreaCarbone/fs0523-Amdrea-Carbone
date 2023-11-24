var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    Smartphone.prototype.ricarica = function (euro) {
        this.carica = this.carica += euro;
    };
    Smartphone.prototype.numero404 = function () {
        return "il credito residuo \u00E8 di ".concat(this.carica, " \u20AC");
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        this.carica = this.carica - (this.costoMinuto * min);
        this.numeroChiamate = this.numeroChiamate + 1;
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Smartphone;
}());
// istanza classe 
var iphone = new Smartphone(10, 3, 0.25);
console.log(iphone);
iphone.ricarica(15);
console.log(iphone.numero404());
console.log(iphone.getNumeroChiamate());
iphone.chiamata(9);
console.log(iphone);
iphone.azzeraChiamate();
console.log(iphone);
//istanza classe
var samsung = new Smartphone(3, 13, 0.33);
console.log(samsung);
samsung.ricarica(25);
console.log(samsung.numero404());
console.log(samsung.getNumeroChiamate());
samsung.chiamata(12);
console.log(samsung);
samsung.azzeraChiamate();
console.log(samsung);
//istanza classe
var galaxyNote = new Smartphone(0, 5, 0.28);
console.log(galaxyNote);
galaxyNote.ricarica(17);
console.log(galaxyNote.numero404());
console.log(galaxyNote.getNumeroChiamate());
galaxyNote.chiamata(7);
console.log(galaxyNote);
galaxyNote.azzeraChiamate();
console.log(galaxyNote);
var SmartphoneRegistro = /** @class */ (function (_super) {
    __extends(SmartphoneRegistro, _super);
    function SmartphoneRegistro(carica, numeroChiamate, costoMinuto, registroChiamate) {
        var _this = _super.call(this, carica, numeroChiamate, costoMinuto) || this;
        _this.registroChiamate = registroChiamate;
        return _this;
    }
    SmartphoneRegistro.prototype.ottieniRegistroChiamate = function () {
        return "le chiamate effettuate sono state ".concat(this.registroChiamate.length, " ");
    };
    return SmartphoneRegistro;
}(Smartphone));
var nuovoIphone = new SmartphoneRegistro(10, 3, 0.30, [{
        id: 3262636426,
        durata: 5,
        dataOra: (new Date(2023, 12, 25, 11, 30))
    },
    {
        id: 326245426,
        durata: 3,
        dataOra: (new Date(2023, 12, 23, 10, 30))
    },
    {
        id: 326234526,
        durata: 2,
        dataOra: (new Date(2023, 12, 24, 12, 30))
    }]);
console.log(nuovoIphone.ottieniRegistroChiamate());
