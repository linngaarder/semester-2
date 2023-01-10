import displayMessage from "../components/displayMessage.js";
import { productsUrl } from "../settings/apiUrls.js";
import { getLogo } from "./renderLogo.js";
const container = document.querySelector(".row");


getLogo();


export async function renderProducts() {
    try {
        const response = await fetch(productsUrl);
        const results = await response.json();

        container.innerHTML = "";

        const products = results.data;

        products.forEach(function (product) {
            container.innerHTML += `
        <div class="col-md-6 col-lg-3">
            <div class="card">
            <a class="product" href="/details.html?id=${product.id}"><img src="${product.attributes.image.data[0].attributes.url}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${product.attributes.title}</h5>
            <p>$${product.attributes.price}</p>
            <button class="btn btn-primary">Details</button></a>
            </div>
        </div>
        `
        });

        console.log(products);

    } catch (error) {
        displayMessage("error", error, ".message-container");

    }

}










