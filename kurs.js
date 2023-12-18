// Button Kurs buchen onclick Startseite
function buchenClicked(){
    window.location.href="formular1.html";
}

function dokumentGeladen(event) {
    window.alert('Dokument wurde geladen! Zugriff auf das komplette DOM möglich.')
    document.getElementById('interaktiv').addEventListener('click', clickHandler, false);
  }
  


//Kontaktformular Seite 1
//Button weiter onclick
function weiterClicked(){
    const anrede = document.getElementById("anrede").value;
    const vname = document.getElementById("vname").value;
    const nname = document.getElementById("nname").value;
    const geb = document.getElementById("geb").value;
    const mail = document.getElementById("mail").value;
    
    // console.log("Anrede:", anrede);
    // console.log("Vorname:", vname);
    // console.log("Nachname:", nname);
    // console.log("Geburtsdatum:", geb);
    if (!anrede || !vname || !nname || !geb || !mail){
        document.getElementById("error-message").style.display = "block";
        
    } else {
        document.getElementById("error-message").style.display = "none";

        sessionStorage.setItem("anrede", anrede);
        sessionStorage.setItem("vname", vname);
        sessionStorage.setItem("nname", nname);
        sessionStorage.setItem("geb", geb);
        sessionStorage.setItem("mail", mail);

    window.location.href="formular2.html";}
}
//Button zurück onclick
function zurückClicked(){
    window.location.href="home.html";
}


//Kontaktformular Seite 2
//Button weiter onclick zu Bestätigungs-Seite

// window.onload = function() {

// };


function weiter1Clicked() {
    const strasse = document.getElementById("strasse").value;
    const plz = document.getElementById("plz").value;
    const ort = document.getElementById("ort").value;
    const tel = document.getElementById("tel").value;
    const agbCheckbox = document.getElementById("agb");
    //const news = document.getElementById("news").value;
    const newsletterCheckbox = document.querySelector('input[name="INXMAIL_TRACKINGPERMISSION"]:checked');

    if (!strasse || !plz || !ort || !tel || !agbCheckbox.checked){
        document.getElementById("error-message").style.display = "block";
    
    } else{
        
        document.getElementById("error-message").style.display = "none";
        
        sessionStorage.setItem("strasse", strasse);
        sessionStorage.setItem("plz", plz);
        sessionStorage.setItem("ort", ort);
        sessionStorage.setItem("tel", tel);
        sessionStorage.setItem("agb", agbCheckbox.checked);
    //    sessionStorage.setItem("news", news);
        sessionStorage.setItem("newsletter", newsletterCheckbox ? newsletterCheckbox.value : false);


        window.location.href="confirm.html";}
}
//Button zurück zu Kontakformular Seite 1

function zurück1Clicked(){
    window.location.href="formular1.html";
}

//Bestätigungs-Seite
//Button Home onclick zur Startseite zurück

function homeClicked(){
    window.location.href="home.html";
}