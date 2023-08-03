const imageLinks = document.querySelector(".selectionimages");

const displayImage = document.querySelectorAll(".maindisplay>div");

displayImage.forEach((item, id) => {
  if (id !== displayImage.length - 1) {
    item.toggleAttribute("hidden", "true");
  }
  0;
});

imageLinks.addEventListener("click", (e) => {
  const selectedImage = e.target.parentNode.getAttribute("href");
  displayImage.forEach((item, id) => {
    item.toggleAttribute("hidden", "true");
    const displayImage = "#" + item.getAttribute("id");
    if (displayImage === selectedImage) {
      item.removeAttribute("hidden", "true");
    }
  });
});
