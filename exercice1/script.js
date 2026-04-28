var div = document.getElementById('container');
var p = document.createElement('p');

p.textContent = 'Ceci est un paragraphe';
div.appendChild(p);

p.textContent = 'Le texte a été modifié';

p.style.backgroundColor = 'lightblue';
p.style.textAlign = 'center';
p.style.padding = '10px';

div.addEventListener('click', function() {
  p.textContent = 'Un clic a été détecté';
});