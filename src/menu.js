import "./styles.css";
import spicyBologneseImg from "./images/spicy_bolagnese.jpeg";
import lasagnaImg from "./images/lasagna.jpeg";

export default function loadMenuPage(){
    var content = document.getElementById("content");

    const first_item_container = createElementWithClass("div", "item_container", content);

    const first_image = createElementWithClass("img", "food_image", first_item_container);
    first_image.src = spicyBologneseImg;

    const first_txt_container = createElementWithClass("div", "text_container", first_item_container);
    const first_title_container = createElementWithClass("div", "title_container", first_txt_container);

    const first_title = createElementWithClass("h1", "title", first_title_container);
    first_title.textContent = "Spicy Bolognese";

    const first_descr_container = createElementWithClass("div", "description_container", first_txt_container);
    const first_descr = createElementWithClass("h2", "description", first_descr_container);
    first_descr.textContent = "A bold twist on the classic Italian favorite. Slow-simmered ground beef and pork in a rich tomato sauce, infused with garlic, chili flakes, and aromatic herbs. Served over al dente pasta and finished with a touch of parmesan and fresh basil for the perfect kick."
    
    const second_item_container = createElementWithClass("div", "item_container", content);

    const second_txt_container = createElementWithClass("div", "text_container", second_item_container);
    const second_title_container = createElementWithClass("div", "title_container", second_txt_container);

    const second_title = createElementWithClass("h1", "title", second_title_container);
    second_title.textContent = "Lasagna";

    const second_descr_container = createElementWithClass("div", "description_container", second_txt_container);
    const second_descr = createElementWithClass("h2", "description", second_descr_container);
    second_descr.textContent = "Layers of tender pasta sheets, savory ground beef, and creamy béchamel, all smothered in a rich, slow-cooked tomato sauce. Baked to perfection with melted mozzarella and parmesan for a comforting, hearty dish that's full of flavor in every bite."

    const second_image = createElementWithClass("img", "food_image", second_item_container);
    second_image.src = lasagnaImg;
}

function createElementWithClass(tag, className, parent) {
  const el = document.createElement(tag);
  el.className = className;
  parent.appendChild(el);
  return el;
}