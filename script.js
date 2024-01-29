document.querySelectorAll('.toggle-button').forEach(button => {
   button.addEventListener('click', () => {
       const imageContainer = button.nextElementSibling;
       if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
           imageContainer.style.display = 'block';
           button.textContent = "Cacher l'image"; // Change le texte du bouton quand l'image est affichée
       } else {
           imageContainer.style.display = 'none';
           button.textContent = "Montrer l'image"; // Change le texte du bouton quand l'image est cachée
       }
   });
});