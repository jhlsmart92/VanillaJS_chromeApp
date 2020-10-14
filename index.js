const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {

    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);

    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    window.addEventListener("click", handleClick);
}

init();