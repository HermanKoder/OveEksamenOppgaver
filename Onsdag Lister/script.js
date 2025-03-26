var gruzzListe = ["Skriv inn ett tall mellom 1-5", 10, 20, 30, 40, 50]
var henteTallEl = document.getElementById("henteTall")
var endreTekstEl = document.getElementById("endreTekst")

henteTallEl.addEventListener("change", endreTekstJS)
function endreTekstJS() {
    endreTekstEl.innerText = (gruzzListe[henteTallEl.value])
    henteTallEl.value = ""
}

