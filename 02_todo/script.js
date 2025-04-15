const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");
const filterBtn = document.getElementById("filter-btn");
const sortBtn = document.getElementById("sort-btn");

let todos = [];
let currentFilter = "all"; // all, completed, uncompleted, starred
let sortDirection = "desc"; // desc, asc

createBtn.addEventListener("click", createNewTodo);
filterBtn.addEventListener("click", filterTodos);
sortBtn.addEventListener("click", sortTodos);
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: "",
    complete: false,
  };

  todos.unshift(item);

  const { itemElement } = createTodoElement(item);

  list.prepend(itemElement);

  saveToLocalStorage();
  updateListDisplay();
}

function filterTodos() {
  // Toggle filter state
  if (currentFilter === "all") {
    currentFilter = "completed";
    filterBtn.innerText = "✔️";
  } else if (currentFilter === "completed") {
    currentFilter = "uncompleted";
    filterBtn.innerText = "❌";
  } else if (currentFilter === "uncompleted") {
    currentFilter = "starred";
    filterBtn.innerText = "⭐";
  } else {
    currentFilter = "all";
    filterBtn.innerText = "전체";
  }

  updateListDisplay();
}

function sortTodos() {
  // Toggle sort direction
  sortDirection = sortDirection === "desc" ? "asc" : "desc";
  sortBtn.innerText = sortDirection === "desc" ? "⬇" : "⬆";

  todos.sort((a, b) => {
    return sortDirection === "desc" ? b.id - a.id : a.id - b.id;
  });

  updateListDisplay();
}

function updateListDisplay() {
  list.innerHTML = "";

  todos
    .filter((item) => {
      if (currentFilter === "completed") return item.complete;
      if (currentFilter === "uncompleted") return !item.complete;
      if (currentFilter === "starred") return item.starred;
      return true; // all
    })
    .forEach((item) => {
      const { itemElement } = createTodoElement(item);
      list.append(itemElement);
    });
}

function createTodoElement(item) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("todo-item");

  if (item.complete) {
    itemElement.classList.add("complete");
  }
  // 추가
  if (item.starred) {
    itemElement.classList.add("starred");
  }

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.classList.add("todo-check");
  checkboxElement.checked = item.complete;

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = item.text;
  inputElement.setAttribute("disabled", "");
  inputElement.classList.add("todo-text");

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("actions");

  // 추가
  const starBtnElement = document.createElement("button");
  starBtnElement.classList.add("star-btn");
  starBtnElement.innerText = item.starred ? "★" : "☆";

  const editBtnElement = document.createElement("button");
  editBtnElement.classList.add("edit-btn", "action-btn");
  editBtnElement.innerText = "수정";

  const removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("remove-btn", "action-btn");
  removeBtnElement.innerText = "삭제";

  starBtnElement.addEventListener("click", () => {
    item.starred = !item.starred;
    starBtnElement.innerText = item.starred ? "★" : "☆";
    saveToLocalStorage();
    updateListDisplay();
  });

  checkboxElement.addEventListener("change", () => {
    item.complete = checkboxElement.checked;
    saveToLocalStorage();
    updateListDisplay();
  });

  inputElement.addEventListener("blur", () => {
    inputElement.setAttribute("disabled", "");
    saveToLocalStorage();
  });

  inputElement.addEventListener("input", () => {
    item.text = inputElement.value;
    saveToLocalStorage();
  });

  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      inputElement.setAttribute("disabled", "");
      saveToLocalStorage();
    }
  });

  editBtnElement.addEventListener("click", () => {
    inputElement.removeAttribute("disabled");
    inputElement.focus();
  });

  removeBtnElement.addEventListener("click", () => {
    todos = todos.filter((t) => t.id !== item.id);
    saveToLocalStorage();
    updateListDisplay();
  });

  actionsElement.append(editBtnElement);
  actionsElement.append(removeBtnElement);

  itemElement.append(checkboxElement);
  itemElement.append(starBtnElement);
  itemElement.append(inputElement);
  itemElement.append(actionsElement);

  return { itemElement };
}

function saveToLocalStorage() {
  window.localStorage.setItem("my_todos", JSON.stringify(todos));
}

function loadFromLocalStorage() {
  const data = window.localStorage.getItem("my_todos");

  if (data) {
    todos = JSON.parse(data);
    updateListDisplay();
  }
}
