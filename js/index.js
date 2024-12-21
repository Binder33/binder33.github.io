//PRIKAŽI VEČ O PROJEKTU
function prikaziVec(podrobenOpisID, gumbID) {
    const podrobenOpis = document.getElementById(podrobenOpisID);
    const gumb = document.getElementById(gumbID);

    if (!podrobenOpis.classList.contains('show')) {
        podrobenOpis.style.maxHeight = podrobenOpis.scrollHeight + "px";
        podrobenOpis.classList.add('show');
        gumb.textContent = "Prikaži manj";
        gumb.setAttribute('onclick', `prikaziManj('${podrobenOpisID}', '${gumbID}')`);
    }
}

//PRIKAŽI MANJ O PROJEKTU
function prikaziManj(podrobenOpisID, gumbID) {
    const podrobenOpis = document.getElementById(podrobenOpisID);
    const gumb = document.getElementById(gumbID);

    podrobenOpis.style.maxHeight = "0";
    podrobenOpis.classList.remove('show');
    gumb.textContent = "Prikaži več";
    gumb.setAttribute('onclick', `prikaziVec('${podrobenOpisID}', '${gumbID}')`);
}

//SCROLLANJE DO SEKCIJ
function premikDoSekcije(sekcijaID) {
    var elementSekcija = document.getElementById(sekcijaID); 

    window.scrollTo({
        top: elementSekcija.offsetTop - 70,  
        behavior: 'smooth'  
    });
}

//PRELOADER
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = 0;

        setTimeout(function() {
            document.getElementById('vsebina').style.display = 'flex';
            document.getElementById('preloader').style.display = 'none';
        }, 600); 

    }, 2800); 
};


//PREVERJANJE VELJAVNOSTI VNOSOV INPUTOV
function preveriVeljavnostVnosov(event) {
    event.preventDefault();

    let ime = document.getElementById("ime");
    let priimek = document.getElementById("priimek");
    let email = document.getElementById("email");
    let sporocilo = document.getElementById("sporocilo");

    let pogoj = true;

    if(ime.value === "") {
        ime.style.border = "2px solid red"; //če vnos ni veljaven, se border obarva rdeče
        pogoj = false;
    }
    else {
        ime.style.border = "2px solid black"; //če pa je vnos pravilen, in mogoče še kakšen drug ni, ga obarvamo nazaj na črno da lažje presodimo kateri so še neveljavni(rdeči)
    }

    if(priimek.value === "") {
        priimek.style.border = "2px solid red";
        pogoj = false;
    }
    else {
        priimek.style.border = "2px solid black";
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.value.match(emailRegex)) {
        email.style.border = "2px solid red";
        pogoj = false;
    }
    else {
        email.style.border = "2px solid black";
    }

    if(sporocilo.value === "") {
        sporocilo.style.border = "2px solid red";
        pogoj = false;
    }
    else {
        sporocilo.style.border = "2px solid black";
    }

    if(pogoj) {
        document.getElementById("potrditev").style.display = "flex";

        document.getElementById("kontakt").reset();
    }
}

//ZAPRI POTRDITEV
function zapriPotrditev() {
    document.getElementById("potrditev").style.display = "none";
}

//DARK / WHITE MODE
function preklopiTemo() {
    const trenutnaTema = document.documentElement.getAttribute("data-theme");
    let novaTema;
    if(trenutnaTema === "dark") {
        novaTema = "light";
    }
    else {
        novaTema = "dark";
    }

    document.documentElement.setAttribute("data-theme", novaTema);

    localStorage.setItem("theme", novaTema);

    let preklopiIkonco = document.getElementById("preklop_ikonca");
    if(novaTema === "dark") {
        preklopiIkonco.src = "slike/light-mode.png";
    }
    else {
        preklopiIkonco.src = "slike/dark-mode.png";
    }
}

window.addEventListener("DOMContentLoaded", () => {//se sproži, ko se naloži html
    const shranjenaTema = localStorage.getItem("theme") || "dark";//če še ni nobena tema izbrana, je naša privzeta tema dark-mode

    document.documentElement.setAttribute("data-theme", shranjenaTema);

    let preklopiIkonco = document.getElementById("preklop_ikonca");
    if (shranjenaTema === "dark") {
        preklopiIkonco.src = "slike/light-mode.png"; 
    } else {
        preklopiIkonco.src = "slike/dark-mode.png";
    }
});




