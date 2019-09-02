function triggerVisibility() {
  var manElem = document.getElementById("select-man");
  var womanElem = document.getElementById("select-woman");
  var planeElem = document.getElementById("transparentPlane");

  if (manElem.checked) {
    planeElem.style.opacity = 0.6;
    planeElem.classList.add("page-container__aside-gradient--full");
  } else if (womanElem.checked) {
    planeElem.style.opacity = 0;
  } else {
    planeElem.style.opacity = 0;
  }
}
