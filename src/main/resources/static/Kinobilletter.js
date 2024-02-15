const kjopteFilmer = [];
function kjop(){
    let valgtFilm = document.getElementById("film").value;
    let antallBilletter = document.getElementById("antall").value;
    let fornavnet = document.getElementById("fornavn").value;
    let etternavnet = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let eposten = document.getElementById("epost").value;

    const billetten ={
        Film : valgtFilm,
        Antall : antallBilletter,
        Fornavn : fornavnet,
        Etternavn : etternavnet,
        Telefonnr : telefonnr,
        Epost : eposten
    };

    kjopteFilmer.push(billetten);
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

    if (billetten.Film === "----------" || billetten.Film === ""){
        document.getElementById("feilFilm").innerHTML = "Du må velge en film"
    }
    else{
        document.getElementById("feilFilm").innerHTML = "";
        skrivUt();
    }
    if (isNaN(billetten.Antall) || billetten.Antall === ""){
        document.getElementById("feilAntall").innerHTML = "Du må skrive inn antall billetter"
    }
    else{
        document.getElementById("feilAntall").innerHTML = "";
        skrivUt();
    }
    if (billetten.Fornavn === ""){
        document.getElementById("feilFornavn").innerHTML = "Du må skrive inn fornavnet ditt"
    }
    else{
        document.getElementById("feilFornavn").innerHTML = "";
        skrivUt();
    }
    if (billetten.Etternavn === ""){
        document.getElementById("feilEtternavn").innerHTML = "Du må skrive inn etternavnet ditt"
    }
    else{
        document.getElementById("feilEtternavn").innerHTML = "";
        skrivUt();
    }
    if (isNaN(billetten.Telefonnr) || billetten.Telefonnr === ""){
        document.getElementById("feilTelefonnr").innerHTML = "Du må skrive inn telefonnummeret ditt"
    }
    else{
        document.getElementById("feilTelefonnr").innerHTML = "";
        skrivUt();
    }
    if (billetten.Epost === ""){
        document.getElementById("feilEpost").innerHTML = "Du må skrive inn eposten ditt"
    }
    else{
        document.getElementById("feilEpost").innerHTML = "";
        skrivUt();
    }

}

function skrivUt(){
    let ut = "";
    for (let i = 0;i < kjopteFilmer.length;i++){
        ut+=kjopteFilmer[i].Film+" "+kjopteFilmer[i].Antall+" "+kjopteFilmer[i].Fornavn+" "+kjopteFilmer[i].Etternavn+" "
            +kjopteFilmer[i].Telefonnr+" "+kjopteFilmer[i].Epost+"</br>";
    }
    document.getElementById("kjopteFilmer").innerHTML = ut;
}

function slett(){
    kjopteFilmer.length = 0;
    skrivUt();
}