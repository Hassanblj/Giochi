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
//Array
var immagine = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
//Variabili
var countA = 0;
var countB = 0;
var count = 0;
var a = 1;
var b = 2;
//Funzione click
function cliccami(n) {
    var numId = document.getElementById(n);
    m = n - 1;
    if (controllo(m) == true) {
        if (count % 2 == 0) {           
            numId.src = "img/1.gif";
            immagine.splice(m, 1, a);
            count++;
            countA++;         
            controlloVincitoreA();} 
        else {          
            numId.src = "img/2.gif";
            immagine.splice(m, 1, b);
            count++;
            countB++;           
            controlloVincitoreB();
        }  } 
        else {
        pareggio();
    }}
function controllo(n) {
    if (immagine[n] == 0) {
        return true;
    } else {
        return false;
    }}
//Vittoria A
function controlloVincitoreA() {
    if (((immagine[0] == a) && (immagine[1] == a) && (immagine[2] == a)) ||
        ((immagine[3] == a) && (immagine[4] == a) && (immagine[5] == a)) ||
        ((immagine[6] == a) && (immagine[7] == a) && (immagine[8] == a)) ||

        ((immagine[0] == a) && (immagine[3] == a) && (immagine[6] == a)) ||
        ((immagine[1] == a) && (immagine[4] == a) && (immagine[7] == a)) ||
        ((immagine[2] == a) && (immagine[5] == a) && (immagine[8] == a)) ||

        ((immagine[0] == a) && (immagine[4] == a) && (immagine[8] == a)) ||
        ((immagine[2] == a) && (immagine[4] == a) && (immagine[6] == a))) {

        $(document).ready(function() {          
            alert ("Ha vinto il giocatore " + a + ", con : " + countA + " mosse");
            window.location.reload()          
        });       
    }}
//Vittoria B
function controlloVincitoreB() {
    if (((immagine[0] == b) && (immagine[1] == b) && (immagine[2] == b)) ||
        ((immagine[3] == b) && (immagine[4] == b) && (immagine[5] == b)) ||
        ((immagine[6] == b) && (immagine[7] == b) && (immagine[8] == b)) ||

        ((immagine[0] == b) && (immagine[3] == b) && (immagine[6] == b)) ||
        ((immagine[1] == b) && (immagine[4] == b) && (immagine[7] == b)) ||
        ((immagine[2] == b) && (immagine[5] == b) && (immagine[8] == b)) ||

        ((immagine[0] == b) && (immagine[4] == b) && (immagine[8] == b)) ||
        ((immagine[2] == b) && (immagine[4] == b) && (immagine[6] == b))) {

        $(document).ready(function() {          
            alert ("Ha vinto il giocatore " + b + ", con : " + countB + " mosse");  
            window.location.reload()         
        });       
    }}
//Pareggio
function pareggio() {
    if (immagine.indexOf(0)) {
        $(document).ready(function() {          
            alert ("PAREGGIO TRA I GIOCATORI !!\nCon : \n" + countA + " mosse del " + a + " giocatore.\nE con : \n" + countB + " mosse del " + b + " giocatore. ");            
            window.location.reload()
        });
    }}
    