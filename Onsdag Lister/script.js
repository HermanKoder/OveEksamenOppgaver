let gruzzListe = ["", 10, 20, 30, 40, 50]
let henteTallEl = document.getElementById("henteTall")
let endreTekstEl = document.getElementById("endreTekst")
let visListeEl = document.getElementById("visListe")
let velgeTallEl = document.getElementById("velgeTall")
let endreTallEl = document.getElementById("endreTall")

let visListe2 = ""
for (let i = 0; i < gruzzListe.length; i++){
    visListe2 += gruzzListe[i] + " - "
}
visListeEl.innerText = visListe2

henteTallEl.addEventListener("change", endreTekstJS)
function endreTekstJS() {
    endreTekstEl.innerText = (gruzzListe[henteTallEl.value])
    henteTallEl.value = ""
}


velgeTallEl.addEventListener("change", endreInputJS)
function endreInputJS() {
    endreTallEl = velgeTallEl.value
}

endreTallEl.addEventListener("change", endreTallJS)
function endreTallJS() {

}



endreTallEl = gruzzListe[velgeTallEl.value]

