import { homeImgUrl } from "../settings/apiUrls.js";

export async function fetchHomeImg() {

    const homeContainer = document.querySelector(".home-img");
    const homeContainer2 = document.querySelector(".home-img-2");
    const homeContainer3 = document.querySelector(".home-img-3");

    const response = await fetch(homeImgUrl);
    const data = await response.json();

    homeContainer.innerHTML += `

    <img src="${data.data[3].attributes.image.data[0].attributes.url}" class="img-fluid">
    `

    homeContainer2.innerHTML += `
    
    <img src="${data.data[4].attributes.image.data[0].attributes.url}" class="img-fluid">
    
    `
    homeContainer3.innerHTML += `
    <div class="col">
        <img src="${data.data[0].attributes.image.data[0].attributes.url}" class="img-fluid">
    </div>
    <div class="col">
        <img src="${data.data[5].attributes.image.data[0].attributes.url}" class="img-fluid">
    </div>
    <div class="col">
        <img src="${data.data[6].attributes.image.data[0].attributes.url}" class="img-fluid">
    </div>

    `

}