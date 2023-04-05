const form = document.querySelector('form');
const newTaskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTask = document.createElement('li');
  const taskText = document.createTextNode(newTaskInput.value);
  const deleteButton = document.createElement('span');

  newTask.appendChild(taskText);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  newTaskInput.value = '';

  deleteButton.innerHTML = 'x';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(newTask);
  });

  newTask.addEventListener('click', function() {
    newTask.classList.toggle('completed');
  });
});
