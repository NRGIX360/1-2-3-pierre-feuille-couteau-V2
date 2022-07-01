const divgame = document.getElementsByClassName('divincr')


function AIgame () {
    var random = Math.floor(Math.random() * 3)
    console.log(random)
    if (random == 0) {
        divgame.write = "Pierre"
    } else if (random == 1) {
        divgame.write = "Papier"
    } else {
        divgame.write = "Ciseaux"
    }

}

AIgame();


var btntype = "null"

function pierrebtnclick() {
    btntype = "Pierre"
    console.log(btntype)
}


function feuillebtnclick() {
    btntype = "feuille"
    console.log(btntype)
}

function couteaubtnclick(){

btntype = "couteau"
console.log(btntype);



}
