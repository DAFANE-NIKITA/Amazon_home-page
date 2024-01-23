
let body = document.body;
let modeBtn = document.querySelector("#mode");
let Mode = "light";

modeBtn.addEventListener("click", () => {
    if (Mode === "light") {
        Mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        Mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(Mode)
})