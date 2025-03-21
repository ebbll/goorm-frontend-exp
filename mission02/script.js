const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener("click", createNewTodo);

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: "",
    complete: false,
  };

  todos.unshift(item);

  const { itemElement, inputElement, editBtnElement, removeBtnElement } =
    createTodoElement(item);

  list.prepend(itemElement);

  inputElement.removeAttribute("disabled");

  inputElement.focus();

  saveToLocalStorage();
}

function createTodoElement(item) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("todo-item");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.classList.add("todo-check");
  checkboxElement.checked = item.complete;

  if (item.complete) {
    itemElement.classList.add("complete");
  }

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = item.text;
  inputElement.setAttribute("disabled", "");
  inputElement.classList.add("todo-text");

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("actions");

  const editBtnElement = document.createElement("button");
  editBtnElement.classList.add("edit-btn", "action-btn");
  editBtnElement.innerText = "수정";

  const removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("remove-btn", "action-btn");
  removeBtnElement.innerText = "삭제";

  checkboxElement.addEventListener("change", () => {
    item.complete = checkboxElement.checked;

    if (item.complete) {
      itemElement.classList.add("complete");
    } else {
      itemElement.classList.remove("complete");
    }
    saveToLocalStorage();
  });

  inputElement.addEventListener("blur", () => {
    inputElement.setAttribute("disabled", "");
    saveToLocalStorage();
  });

  inputElement.addEventListener("input", () => {
    item.text = inputElement.value;
    saveToLocalStorage();
  });

  editBtnElement.addEventListener("click", () => {
    inputElement.removeAttribute("disabled");
    inputElement.focus();
  });

  removeBtnElement.addEventListener("click", () => {
    todos = todos.filter((t) => t.id !== item.id);

    itemElement.remove();
    saveToLocalStorage();
  });

  actionsElement.append(editBtnElement);
  actionsElement.append(removeBtnElement);

  itemElement.append(checkboxElement);
  itemElement.append(inputElement);
  itemElement.append(actionsElement);

  return { itemElement, inputElement, editBtnElement, removeBtnElement };
}

function saveToLocalStorage() {
  const data = JSON.stringify(todos);

  window.localStorage.setItem("my_todos", data);
}

function loadFromLocalStorage() {
  const data = window.localStorage.getItem("my_todos");

  if (data) {
    todos = JSON.parse(data);

    todos.forEach((item) => {
      const { itemElement } = createTodoElement(item);

      list.append(itemElement);
    });
  }
}
