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
    let ut = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"+"</tr>";


    for (let i in kjopteFilmer){
        ut+="<tr>";
        ut+="<td>"+kjopteFilmer[i].Film+"</td><td>"+kjopteFilmer[i].Antall+"</td><td>"+kjopteFilmer[i].Fornavn+"</td><td>"+kjopteFilmer[i].Etternavn+"</td>";
        ut+="<td>"+kjopteFilmer[i].Telefonnr+"</td><td>"+kjopteFilmer[i].Epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("kjopteFilmer").innerHTML = ut;
}

function slett(){
    kjopteFilmer.length = 0;
    skrivUt();
}