import { logoUrl } from "../settings/apiUrls.js";


export async function getLogo() {

    const logoContainer = document.querySelector(".logo");

    const response = await fetch(logoUrl);
    const data = await response.json();

    logoContainer.innerHTML += `
    <img src="${data.data.attributes.logo.data.attributes.url}">
    `
} 
