import "./styles.css";

export default function loadHomePage(){
    var content = document.getElementById("content");
    var welcome_container = document.createElement("div");
    welcome_container.className = "title_container";

    content.appendChild(welcome_container)

    var welcome_message = document.createElement("h1");
    welcome_message.className = "title";
    welcome_message.textContent = "Welcome!"
    welcome_container.appendChild(welcome_message);
}