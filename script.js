// Simuler un compte à rebours de 5 secondes pour test
const endDate = new Date(new Date().getTime() + 5000); // 5 secondes après l'heure actuelle

let timer = setInterval(function() {
  const today = new Date().getTime();
  const diff = endDate - today;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "<div class=\"days\">" + days + " days</div> \
    <div class=\"hours\">" + hours + " hours</div> \
    <div class=\"minutes\">" + minutes + " minutes</div> \
    <div class=\"seconds\">" + seconds + " seconds</div>";

  if (diff <= 0) {
    clearInterval(timer); // Stop the timer
    document.getElementById("timer").style.display = "none"; // Masquer le timer
    document.getElementById("final-content").style.display = "block"; // Afficher le contenu final
  }

}, 1000);

// Optionnel : Afficher immédiatement après 1 seconde pour tester
setTimeout(function() {
  document.getElementById("timer").style.display = "none"; // Masquer le timer
  document.getElementById("final-content").style.display = "block"; // Afficher le contenu final
}, 1000); // Afficher après 1 seconde
