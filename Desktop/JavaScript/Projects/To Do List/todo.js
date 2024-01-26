let todolist = JSON.parse(localStorage.getItem('todolist')) || [
  { item: "Study for the test", dueDate: "2024-01-23" },
  { item: "Build Website", dueDate: "2024-01-25" },
];

displayItem();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todolist.push({ item: todoItem, dueDate: todoDate });

  inputElement.value = "";
  dateElement.value = "";

  saveToLocalStorage();
  displayItem();
}

function displayItem() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todolist.length; i++) {
    let { item, dueDate } = todolist[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
      <button class="btn-complete" onclick="completeTodo(${i})">Mark as complete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todolist.splice(index, 1);
  saveToLocalStorage();
  displayItem();
}

function completeTodo(index) {
  todolist.splice(index, 1);
  saveToLocalStorage();
  displayItem();
}

function saveToLocalStorage() {
  localStorage.setItem('todolist', JSON.stringify(todolist));
}

function resetTodoList() {
  todolist = [];
  saveToLocalStorage();
  displayItem();
}
