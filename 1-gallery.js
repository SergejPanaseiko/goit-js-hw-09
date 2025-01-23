import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as c}from"./assets/vendor-CgTBfC_f.js";const s=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],r=document.querySelector("head"),n=document.createElement("style");n.textContent=`
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px 24px;
    list-style: none;
    padding: 10px 0;
    width: 1150px;
    background-color: aqua;
    margin: 0 auto;
}
.gallery img {
    max-width: 360px;
    height: auto;
    border-radius: 5px;
    transition: transform 0.3s ease;
}
.gallery img:hover {
    transform: scale(1.1);
}
`;r.appendChild(n);const p=document.body,i=document.createElement("ul");i.classList.add("gallery");p.insertBefore(i,p.firstChild);for(const a of s){const o=document.createElement("li"),e=document.createElement("a"),t=document.createElement("img");o.classList.add("gallery-item"),e.classList.add("gallery-link"),t.classList.add("gallery-link"),e.setAttribute("href",`${a.original}`),t.classList.add("gallery-image"),t.src=`${a.preview}`,t.alt=`${a.description}`,i.appendChild(o),o.appendChild(e),e.appendChild(t)}document.addEventListener("DOMContentLoaded",()=>{new c(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=1-gallery.js.map
