
const box = document.querySelector("#controls");
const targetBox = document.querySelector("#boxes");
const input = box.querySelector('[type="number"]');
const create = box.querySelector("[data-create]");
const destroy = box.querySelector("[data-destroy]");

targetBox.style.display = "flex";
targetBox.style.marginTop = "50px";
targetBox.style.alignItems = "center";

let targetValue = null;

input.addEventListener("input", (event) => {
  targetValue = event.currentTarget.value;
});
create.addEventListener("click", () => {
  console.log(createBoxes(targetValue));
});

function createBoxes(targetValue) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < targetValue; i += 1) {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    const color = getRandomHexColor();
    const newBox = document.createElement("div");
    newBox.style.width = `${width}px`;
    width += 10;
    newBox.style.height = `${height}px`;
    height += 10;
    newBox.style.backgroundColor = `${color}`;
    newBox.style.outline = "3px solid black";
    newBox.style.marginRight = "10px";
    newBox.textContent = `${color}`;
    newBox.style.display = "flex";
    newBox.style.justifyContent = "center";
    newBox.style.alignItems = "center";
    newBox.style.fontSize = "8px";
    targetBox.append(newBox);
    destroy.addEventListener("click", () => {
      newBox.remove();
    });
  }
}
