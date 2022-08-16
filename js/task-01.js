const menuItemsByClassName = document.querySelectorAll(".item");
console.log("Number of categories:", menuItemsByClassName.length);

const menuItemsByList = document.querySelectorAll(".item");

const menuItemsByItem = (filtredElements) => {
  for (const item of filtredElements) {
    console.log("Category:", item.firstElementChild.textContent);
    console.log(
      "Elements:",
      item.firstElementChild.nextElementSibling.children.length
    );
  }
  
};

console.log(menuItemsByItem(menuItemsByList));