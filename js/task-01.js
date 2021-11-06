const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

for (const item of categoriesEl) {
  const categoriesElTitle = item.querySelector("h2");
  console.log("Category:", categoriesElTitle.textContent);

  const categoriesElQuantity = item.querySelectorAll("li");
  console.log("Elements:", categoriesElQuantity.length);
}
