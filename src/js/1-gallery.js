import {images} from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup=images.map(({original, preview,description})=>{
    
    return `<li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img
			class="gallery-image"
			src="${preview}"
			alt="${description}"
			/>
	</a>
</li>

`
})

gallery.insertAdjacentHTML("beforeend",markup.join(""));

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt', 
    captionSelector:'img',
    captionPosition:'outside', 
	CaptionDelay: '250ms',
	overlayOpacity: '0.8',
	styles: '../css/styles.css',
});
 