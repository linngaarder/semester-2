import { bannerUrl } from "../settings/apiUrls.js";


export async function fetchBanner() {

    const bannerContainer = document.querySelector(".hero-banner");

    const response = await fetch(bannerUrl);
    const data = await response.json();


    bannerContainer.innerHTML += `

    <img src="${data.data.attributes.image.data.attributes.url}">
    `
} 