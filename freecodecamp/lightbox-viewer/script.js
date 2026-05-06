const gallery = document.querySelector(".gallery");
const box = document.querySelector(".lightbox");
const img = document.getElementById("lightbox-image");

gallery.addEventListener("click", (e) => {
    const image = e.target.closest(".gallery-item");
    if (!image) return;

    const fullSrc = image.src.replace("-thumbnail", "");
    img.src = fullSrc;
    box.style.display = "flex";
});


const btnClose = document.getElementById("close-btn");
btnClose.addEventListener("click", () =>{
    box.style.display = "none";
});

box.addEventListener("click", (e) => {
    if (e.target === box) {
        box.style.display = "none";
    }
});