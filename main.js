var indexValue = 0;
function slideShow() {
  setTimeout(slideShow, 800);
  var x;
  const img = document.querySelectorAll("#slideshow");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue - 1].style.display = "block";
}
slideShow();
