/* FONCTION POUR CHANGER LES IMAGES DES BAGUETTES DE LA PAGE BAGUETTE  */

function changementVersImageUn() {

    var imageUn = document.getElementById("imageUn");
    var titreUn = document.getElementById("titreUn");
    var boisNumeroUn = document.getElementById("boisNumeroUn");
 
    imageUn.style.display = 'flex';
    imageDeux.style.display = 'none';
    imageTrois.style.display = 'none';

    titreUn.style.display = 'flex';
    titreDeux.style.display = 'none';
    titreTrois.style.display = 'none';

    boisNumeroUn.style.border = '3px solid rgb(80, 0, 0)';
    boisNumeroDeux.style.border = 'none';
    boisNumeroTrois.style.border = 'none';




}

function changementVersImageDeux() {

    var imageDeux = document.getElementById("imageDeux");
    var titreDeux = document.getElementById("titreDeux");
    var boisNumeroDeux = document.getElementById("boisNumeroDeux");

    imageUn.style.display = 'none';
    imageDeux.style.display = 'flex';
    imageTrois.style.display = 'none';

    titreUn.style.display = 'none';
    titreDeux.style.display = 'flex';
    titreTrois.style.display = 'none';

    boisNumeroUn.style.border = 'none';
    boisNumeroDeux.style.border = '3px solid rgb(80, 0, 0)';
    boisNumeroTrois.style.border = 'none';
    
}

function changementVersImageTrois() {

    var imageTrois = document.getElementById("imageTrois");
    var titreTrois = document.getElementById("titreTrois");
    var boisNumeroTrois = document.getElementById("boisNumeroTrois");

    imageUn.style.display = 'none';
    imageDeux.style.display = 'none';
    imageTrois.style.display = 'flex';

    titreUn.style.display = 'none';
    titreDeux.style.display = 'none';
    titreTrois.style.display = 'flex';

    boisNumeroUn.style.border = 'none';
    boisNumeroDeux.style.border = 'none';
    boisNumeroTrois.style.border = '3px solid rgb(80, 0, 0)';
    
}

/* SCRIPT POUR GERER LE DECOCHAGE AUTOMATIQUE DES CASES  */

document.addEventListener("DOMContentLoaded", function() {
    const casesACocher = document.querySelectorAll('.case-a-cocher');

    casesACocher.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {

            /*  PARTIE DU SCRIPT QUI VERIFIE SI AUCUNE CASE COCHEE ET REINITIALISE PRIX SI  */

            if (!document.getElementById("caseUne").checked && !document.getElementById("caseDeux").checked) {
                document.getElementById("prixProduit").textContent = "Prix : 15 Gallions d'or";

            } else {
            // Si une case est cochée, décocher les autres
    
                casesACocher.forEach(function(otherCheckbox) {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });

                /* SCRIPT POUR GERER LES PRIX EN FONCTION DES CASES COCHEES  */
                if (this.id === "caseUne") {
                    document.getElementById("prixProduit").textContent = "Prix : 16 Gallions d'or";
                } else if (this.id === "caseDeux") {
                    document.getElementById("prixProduit").textContent = "Prix : 18 Gallions d'or";
                }
            }
        });
    });
});


/* JAVA SCRIPT POUR LA BAR NAV */ 

// Sélectionnez l'élément de case à cocher et l'élément du menu hamburger par leur ID
var menuToggle = document.getElementById("menu-toggle");
var menuItems = document.querySelector(".menu-items");


menuToggle.addEventListener("click", function () {
    // Vérifiez si la case à cocher est cochée ou non
    if (menuToggle.checked) {
        // Si la case à cocher est cochée, affichez le menu hamburger
        menuItems.style.display = "block";
    } else {
        // Si la case à cocher est décochée, masquez le menu hamburger
        menuItems.style.display = "none";
    }
});

/* ==================================*/
