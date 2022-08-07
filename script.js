document.querySelector("#input").addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    const input = document.querySelector("#input");
    addItem(input.value);
  }
    
});

document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = (input) => {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const Icon1 = document.createElement("i");
  const Icon2 = document.createElement("i");
  const text = document.createElement("p");

  item.className = "item";
  text.textContent = input;

  icon1.className = "fas fa-check-square";
  icon1.style.color = "lightgray";
  icon1.addEventListener("click", () => {
    icon1.style.color = "limegreen";
  })
  div.appendChild(checkIcon);

  icon2.className = "fas fa-trash";
  icon2.style.color = "darkgray";
  icon2.addEventListener("click", () => {
    item.remove();
  })
  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}
