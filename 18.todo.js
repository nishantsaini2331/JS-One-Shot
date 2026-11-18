function getElementById(id) {
  return document.getElementById(id);
}

const todoForm = getElementById("todo-form");
const todoTitle = getElementById("todo-title");
const errorMsg = getElementById("error-msg");
const todoList = getElementById("todo-list");
const addTodoBtn = getElementById("add-todo-btn");

let editId = null;

addTodoBtn.textContent = "Add todo";

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todoTitle.focus();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = todoTitle.value.trim();

  if (!title) {
    errorMsg.textContent = "Title required";
    return;
  }

  errorMsg.textContent = "";

  if (editId) {
    // update
    todos = todos.map((todo) => {
      if (todo.id === Number(editId)) {
        return { ...todo, title };
      }
      return todo;
    });
  } else {
    todos.push({ title, id: todos.length + 1 });
  }

  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodos();
  todoTitle.value = "";
  addTodoBtn.textContent = "Add todo";
  editId = null;
});

todoTitle.addEventListener("input", (e) => {
  errorMsg.textContent = "";
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(({ title, id }) => {
    const li = document.createElement("li");
    li.dataset.id = id;

    // const btn = document.createElement("button")
    // btn.textContent = "Delete"
    // const updateBtn = document.createElement("button")
    // updateBtn.textContent = "update"

    // li.textContent = title;
    // li.append(btn ,updateBtn)

    // btn.addEventListener("click" , (e) => {
    //     e.stopPropagation()
    //     todos = todos.filter(todo => todo.id !== id)
    //     renderTodos()
    // })

    li.innerHTML = `
     ${title}
     <button data-type="delete">delete</button>
     <button data-type="update">update</button>
    `;

    todoList.append(li);
  });
}

todoList.addEventListener("click", (e) => {
  e.stopPropagation();

  const btn = e.target;
  const id = btn.closest("li")?.dataset.id;

  if (btn.dataset.type === "delete") {
    todos = todos.filter((todo) => todo.id !== Number(id));
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
  }

  if (btn.dataset.type === "update") {
    let todo = todos.find((todo) => todo.id === Number(id));
    todoTitle.value = todo.title;
    editId = todo.id;
    addTodoBtn.textContent = "Update todo";
  }
});

renderTodos();

// localstorage

// localStorage.setItem(
//   "todos",
//   JSON.stringify([
//     { title: "record lecture", id: 1 },
//     { title: "take live class", id: 2 },
//     { title: "walking", id: 3 },
//   ]),
// );

// // let color = localStorage.getItem("color");
// // localStorage.removeItem("color")
// let todos2 = JSON.parse(localStorage.getItem("todos"));
// console.log(todos2);
// // localStorage.clear()
