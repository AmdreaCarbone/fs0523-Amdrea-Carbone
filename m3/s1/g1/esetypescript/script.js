function numeroCasuale(giocatore1, giocatore2) {
    var casuale = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(casuale);
    var casuale1 = Math.abs(casuale - giocatore1);
    var casuale2 = Math.abs(casuale - giocatore2);
    if (casuale1 < casuale2) {
        console.log("con il numero " + giocatore1 + " Giocatore1 si è avvicinato di più al numero casuale!!!!");
    }
    else if (casuale2 < casuale1) {
        console.log("con il numero " + giocatore2 + " Giocatore2 si è avvicinato di più al numero casuale!!!!");
    }
    else if (casuale == giocatore1) {
        console.log("Giocatore 1 ha azzeccato!!");
    }
    else if (casuale == giocatore2) {
        console.log("giocatore 2 ha azzeccato!!");
    }
    ;
}
numeroCasuale(25, 56);
