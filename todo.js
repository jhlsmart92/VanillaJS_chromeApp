const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; //needs to be array

let toDos = []; // want to add todos to array of todos

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); // delete only in HTML
    const cleanToDos = toDos.filter(function (toDo) { // filter saves the item whith passes the check in the array
        return toDo.id !== parseInt(li.id); //parseInt: convert string to number
    }); // to find out removed HTML item in localstorage
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() { // cannot save localstorage javascript data, only string data
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify:  to make toDos string.
}

function paintToDo(text) { // want to make li in the ul tag.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerText = "X"; //❌
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = { // todo object
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // save objects in the array
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //eleminate submitted text
}

// function something(toDo) {
//     console.log(toDo.text);
// }

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // change from string to object
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        }); //foreach: run function for each one of the thing on array
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit); // create todo
}

init();