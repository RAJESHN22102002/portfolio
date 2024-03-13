function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



let currentImageIndex = 0;
const images = [
  "./assets/2ndpage.jpg",
  "./assets/3rdpage.jpg",
  "./assets/4thpage.png"
];

function changeImage() {
  const imageElements = document.querySelectorAll('.section__pic-container .Raj-img');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElements.forEach((img) => {
    img.src = images[currentImageIndex];
  });
}

setInterval(changeImage, 4000);
