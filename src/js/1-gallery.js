
    import SimpleLightbox from 'simplelightbox';
    import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
},
{
    preview:
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
    'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
},
];
const head = document.querySelector('head');
const style = document.createElement('style');

style.textContent = `
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
`;
head.appendChild(style);

// Создаем элемент <ul>
const body = document.body;
const ul = document.createElement('ul');
ul.classList.add('gallery')
body.insertBefore(ul, body.firstChild);

for (const obj of images) {
    const liItem = document.createElement('li');
    const linkA = document.createElement('a');
    const imgA = document.createElement('img');    
    liItem.classList.add('gallery-item');
    linkA.classList.add('gallery-link');
    imgA.classList.add('gallery-link');
    linkA.setAttribute('href', `${obj.original}`);
    imgA.classList.add('gallery-image');
    imgA.src = `${obj.preview}`;
    imgA.alt = `${obj.description}`;
    ul.appendChild(liItem);
    liItem.appendChild(linkA);
    linkA.appendChild(imgA);
}

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = new SimpleLightbox('.gallery li a', {
      captions: true, // Додаємо підписи до зображень
      captionsData: 'alt', // Отримуємо підписи із атрибута alt
      captionDelay: 250, // Затримка перед з'являнням підпису (мс)
    });

});