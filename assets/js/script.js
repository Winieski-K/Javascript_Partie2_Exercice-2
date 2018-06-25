function dislayOnFocusLost() {
  // Definition des variables
  var lastname = document.getElementById('lastname').value;
  var regex = /^[a-zA-Z\-éèêëàâäîï]+$/;
  // Vérifie si les inputs sont des caractères valides
  if (regex.test(lastname) == true) {
    // Affiche un message lorsque le focus est perdu
    alert('Merci de votre participation');
  } else {
    // Affiche un message si les caractères ne sont pas valides
    alert('Veuillez entrer un caractère valide');
  }
}
