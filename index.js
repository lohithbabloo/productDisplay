const imageLinks = document.querySelector(".selectionimages");

const displayImage = document.querySelectorAll(".maindisplay > div");

displayImage.forEach((item, id) => {
  if (id !== 0) {
    item.style.opacity = 0;
  }
});

imageLinks.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedImage = e.target.parentNode.getAttribute("href");
  displayImage.forEach((item, id) => {
    const displayImageId = "#" + item.getAttribute("id");
    if (displayImageId === selectedImage) {
      item.style.opacity = 1;
    } else {
      item.style.opacity = 0;
    }
  });
});
