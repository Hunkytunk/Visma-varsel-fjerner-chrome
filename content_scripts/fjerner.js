function fjernVarsler() {
    let ikkeLeste = document.body.querySelectorAll("[aria-label='Ikke lest varsel']");
    for (let ikkeLest of ikkeLeste) {
        ikkeLest.click();
    }
    alert("Fjernet");
}
fjernVarsler()