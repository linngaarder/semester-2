import { getLogo } from "./ui/renderLogo.js";
import { productDetailUrl } from "./settings/apiUrls.js";
import displayMessage from "./components/displayMessage.js";

getLogo();


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const detailUrl = productDetailUrl + "products/" + id + "?populate=*";

(async function () {
    try {
        const response = await fetch(detailUrl);
        const data = await response.json();

        const details = data.data.attributes;
        const productId = data.data.id;

        document.title = details.title;

        const container = document.querySelector(".detail-container");

        container.innerHTML = `
        <div class="row">
            <div class="col">
                            <img src="${details.image.data[0].attributes.url}" class="details-img">
            </div>
            <div class="col">
                <h3>${details.title}</h3><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                <p>${details.description}</p>
                <p>$${details.price}</p>
                <div class="btn btn-primary cart-btn">Add to cart</div>
            </div>
        </div>`;

    } catch (error) {
        displayMessage("error", error, ".message-container");
    }
})()