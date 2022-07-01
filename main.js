var divgame = document.getElementById("print");


function AIgame () {
    var random = Math.floor(Math.random() * 3)
    console.log(random)
    if (random == 0) {
        divgame.innerHTML("Pierre")
    } else if (random == 1) {
        divgame.innerHTML("Papier")
    } else {
        divgame.innerHTML("Ciseaux")
    }

}

AIgame();


var btntype = ["debug"]

function pierrebtnclick() {
    btntype.push("Pierre")
    console.log(btntype[1])
    btntype.splice[1];
}


function feuillebtnclick() {
    btntype.push("Papier")
    console.log(btntype[1])
    btntype.splice[1];
}
console.log("salut");
