// nomi giocatori 
var Giocatore1 = "Giocatore 1"; 
var Giocatore2 = "Giocatore 2"; 
// cambiare nomi
function editNames() { 
Giocatore1 = prompt("Primo Giocatore"); 
Giocatore2 = prompt("Secondo Giocatore"); 

document.querySelector("p.Giocatore1") 
                    .innerHTML = Giocatore1; 
                    
document.querySelector("p.Giocatore2") 
                    .innerHTML = Giocatore2; 
}
//Dado Rosso
var DadoRosso = new Array("imag/R1.jpg","imag/R2.jpg","imag/R3.jpg","imag/R4.jpg","imag/R5.jpg","imag/R6.jpg")
function Animazione1() {
    ran1 = Math.floor(6 * Math.random());
    document.images.dado1r.src = DadoRosso[ran1]
    r = setTimeout('Animazione1()', 500)
}
//Dado Verde
var DadoVerde = new Array("imag/V1.jpg","imag/V2.jpg","imag/V3.jpg","imag/V4.jpg","imag/V5.jpg","imag/V6.jpg")
function Animazione2() {
    ran2 = Math.floor(6 * Math.random());
    document.images.dado2v.src = DadoVerde[ran2]
    v = setTimeout('Animazione2()', 500)
}
//Stop Rosso
function stopR() {
    clearTimeout(r)
    stopR = true
}
//Stop Verde
function stopV() {
    clearTimeout(v)
    stopV = true
}
//Punteggio Giocatore 1
function punteggio1() {
    var a = ran1 + 1
    var b = ran2 + 1
    var tot1 = a + b
    if (stopR == true && stopV == true)
        alert("Giocatore 1 il tuo punteggio è: " + tot1)
    else
        alert("Clicca Stop ricevere il punteggio")
}
//Stampa Punteggio Giocatore 1
function stampaPunteggio1() {
    var a = ran1 + 1
    var b = ran2 + 1
    var tot2 = a + b
    if (stopV == true)
        alert("Giocatore 1 il tuo punteggio è: " + tot2)
}

//Punteggio Giocatore 2
function punteggio2() {
    var x = ran1 + 1
    var y = ran2 + 1
    var tot3 = x + y
    if (stopR == true && stopV == true)
        alert("Giocatore 2 il tuo punteggio è: " + tot3)
    else
        alert("Clicca Stop ricevere il punteggio")
}
//Stampa Punteggio Giocatore 2
function stampaPunteggio2() {
    var x = ran1 + 1
    var y = ran2 + 1
    var tot4 = x + y
    if (stopV == true)
        alert("Giocatore 2 il tuo punteggio è: " + tot4)
}
//Ricarica
function ricarica() {
    if (stopR == true && stopV == true) {
        window.location.reload()
    }
}