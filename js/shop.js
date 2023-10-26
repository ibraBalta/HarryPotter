/* JAVA SCRIP POUR LA BAR NAV */ 

// Sélectionnez l'élément de case à cocher et l'élément du menu hamburger par leur ID
var menuToggle = document.getElementById("menu-toggle");
var menuItems = document.querySelector(".menu-items");

// Écoutez les événements de clic sur la case à cocher
menuToggle.addEventListener("click", function () {
    // Vérifiez si la case à cocher est cochée ou non
    if (menuToggle.checked) {
        // Si la case à cocher est cochée, affichez le menu hamburger
        menuItems.style.display = "block"; // Vous pouvez utiliser "block" pour afficher le menu
    } else {
        // Si la case à cocher est décochée, masquez le menu hamburger
        menuItems.style.display = "none";
    }
});

/* ==================================*/



