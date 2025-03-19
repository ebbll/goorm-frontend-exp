const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: "EXP 미션 완수하기",
    complete: false,
  };

  //   todos = [...todos, item];
  todos = unshift(item);

  const { itemElement, inputElement, editBtnElement, removeBtnElement } =
    createTodoElement(item);

  list.prepend(itemElement);

  inputElement.removeAttribute("disabled");
  inputElement.focus();
}

function createTodoElement(item) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("item");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";

  if (item.complete) {
    itemElement.classList.add("complete");
  }

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = item.text;
  inputElement.setAttribute("disabled", "");

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("actions");

  const editBtnElement = document.createElement("button");
  editBtnElement.classList.add("material-icons");
  editBtnElement.innerText = "Edit";

  const removeBtnElement = document.createElement("button");
  removeBtnElement.classList.add("material-icons", "remove-btn");
  removeBtnElement.innerText = "remove_circles";

  actionsElement.append(editBtnElement);
  actionsElement.append(removeBtnElement);

  itemElement.append(checkboxElement);
  itemElement.append(inputElement);
  itemElement.append(actionsElement);

  return { itemElement, inputElement, editBtnElement, removeBtnElement };
}
