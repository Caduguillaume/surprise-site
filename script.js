// Définir la date de fin du compte à rebours
var countdownDate = new Date("Feb 2, 2025 17:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
var x = setInterval(function() {

    // Obtenir la date et l'heure actuelles
    var now = new Date().getTime();
    
    // Calculer la différence de temps
    var distance = countdownDate - now;
    
    // Calculer les jours, heures, minutes et secondes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Afficher le compte à rebours dans l'élément HTML
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Si le compte à rebours a expiré, afficher le contenu final
    if (distance < 0) {
        clearInterval(x); // Arrêter le compte à rebours
        document.getElementById("balloons").style.display = "none"; // Masquer les ballons
        document.getElementById("timer").style.display = "none"; // Masquer le timer
        document.getElementById("final-content").style.display = "block"; // Afficher le contenu final
    }
}, 1000);
