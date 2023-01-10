import { categoryUrl } from "../settings/apiUrls.js";

export async function fetchCategories() {

    const categoryContainer = document.querySelector(".category-container");

    const response = await fetch(categoryUrl);
    const data = await response.json();

    categoryContainer.innerHTML = "";

    const categories = data.data;

    for (let i = 0; i < categories.length; i++) {
        let category = categories[i].attributes;

        categoryContainer.innerHTML += `
        <div class="col-lg">
        <a href="products.html"><img src="${category.image.data[0].attributes.url}" class="category-img">
        <h3>${category.title}</h3></a>
        </div>
        `;
    }
}