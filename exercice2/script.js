var input = document.getElementById('task-input');
var addBtn = document.getElementById('add-btn');
var taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function() {
  var texte = input.value;
  if (texte == '') return;

  var li = document.createElement('li');

  var span = document.createElement('span');
  span.textContent = texte;

  var btnAcc = document.createElement('button');
  btnAcc.textContent = 'Accomplie';
  btnAcc.className = 'btn-accomplie';
  btnAcc.addEventListener('click', function() {
    li.classList.toggle('accomplie');
  });

  var btnSup = document.createElement('button');
  btnSup.textContent = 'Supprimer';
  btnSup.className = 'btn-supprimer';
  btnSup.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(btnAcc);
  li.appendChild(btnSup);
  taskList.appendChild(li);

  input.value = '';
});