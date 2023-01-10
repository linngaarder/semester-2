import { productsUrl } from "../settings/apiUrls.js";


export async function fetchFeaturedProducts() {

    const container = document.querySelector(".featured-container");

    const response = await fetch(productsUrl);
    const results = await response.json();

    container.innerHTML = "";

    const products = results.data;

    for (let i = 0; i < products.length; i++) {
        if (!products[i].attributes.featured === true) {
            continue;
        }
        container.innerHTML += `
        <div class="col-lg">
            <a href="/details.html?id=${products[i].id}">
                <div class="featured-product"><img src="${products[i].attributes.image.data[0].attributes.url}" class="featured-img">
                    <h3>${products[i].attributes.title}</h3>
            </a>
        </div>
`
    }


}

