import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46816597-00495df87fc70f19aecba95fd';
const loader = document.querySelector('.loader');

function fetchImages(query, renderFn) {
    
    const searchParams = new URLSearchParams({
        key: API_KEY;
        q: query;
        image_type: photo;
        orientation: horizontal;
        safesearch: true;
    });
    const url = 'https://pixabay.com/api/?${searchParams}';

    loader.style.display = 'block';

    // _______________
}