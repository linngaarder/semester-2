import { getLogo } from "./ui/renderLogo.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./utils/storage.js";
import { loginUrl } from "./settings/apiUrls.js";

getLogo();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    console.log("priceValue", priceValue);

    if (titleValue.length === 0 || priceValue === 0 || isNaN(priceValue) || descriptionValue === 0) {
        displayMessage("warning", "Enter values", ".message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue);
}

async function addProduct(title, price, description) {
    const url = loginUrl + "api/tests";

    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer${token}`
        }
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

    } catch (error) {
        console.log(error)
    }
}