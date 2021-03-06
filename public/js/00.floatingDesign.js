// ---------------- Test the Position ----------------
const getElementViewPosition0 = (element) => {
  let explorer = window.navigator.userAgent;
  let explorerName;

  if (!explorer.includes("Chrome") && explorer.includes("Safari")) {
    explorerName = "Safari";
  } else if (explorer.includes("Chrome")) {
    explorerName = "Chrome";
  } else if (explorer.includes("Firefox")) {
    explorerName = "Firefox";
  } else if (explorer.includes("ie")) {
    explorerName = "ie";
  }

  console.log(explorerName);

  let current = element.offsetParent;
  let actualTop = element.offsetTop;
  let actualLeft = element.offsetLeft;
  let elementScrollTop = 0;
  let elementScrollLeft = 0;

  while (current !== null) {
    actualTop += current.offsetTop + current.clientTop;
    actualLeft += current.offsetLeft + current.clientLeft;
    current = current.offsetParent;
  }

  if (document.compatMode === "BackCompat") {
    elementScrollTop = document.body.scrollTop;
    elementScrollLeft = document.body.scrollLeft;
  } else if (explorerName === "Safari") {
    elementScrollTop = document.body.scrollTop;
    elementScrollLeft = document.body.scrollLeft;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
    elementScrollLeft = document.documentElement.scrollLeft;
  }

  return { x: actualLeft - elementScrollLeft, y: actualTop - elementScrollTop };
};

// --------------------- Gallery Floating ------------------
const columnL = document.getElementsByClassName("column-one")[0];
const columnR = document.getElementsByClassName("column-two")[0];
const galleryLocal = document.getElementById("gallery");

window.addEventListener(
  "scroll",
  function (e) {
    let galleryTop = getElementViewPosition0(galleryLocal).y;
    let currentSize = document.documentElement.clientWidth;
    if (currentSize >= 992) {
      if (galleryTop < -100) {
        columnL.style.marginTop = "0";
        columnR.style.marginTop = "0";
      } else {
        columnL.style.marginTop = "50px";
        columnR.style.marginTop = "50px";
      }
    }
  },
  { passive: true }
);

// --------------- What We Do Floating -----------------
const whatwedoColumnOne = document.getElementsByClassName("first-column")[0];
const whatwedoColumnTwo = document.getElementsByClassName("second-column")[0];
const whatwedoLocal5 = document.getElementById("what-we-do");

window.addEventListener(
  "scroll",
  function (e) {
    let whatwedoLocalTop = getElementViewPosition0(whatwedoLocal5).y;
    let currentSize = document.documentElement.clientWidth;
    if (currentSize >= 992) {
      if (whatwedoLocalTop < -960) {
        whatwedoColumnOne.style.marginTop = "0";
        whatwedoColumnTwo.style.marginTop = "0";
      } else {
        whatwedoColumnOne.style.marginTop = "50px";
        whatwedoColumnTwo.style.marginTop = "50px";
      }
    }
  },
  { passive: true }
);

// --------------- Image Wall Floating ---------------------
const columnLeft = document.getElementsByClassName("container-up")[0];
const columnRight = document.getElementsByClassName("container-up")[1];
const imageWallLocal2 = document.getElementById("image-wall");

window.addEventListener(
  "scroll",
  function (e) {
    let imageWallTop = getElementViewPosition0(imageWallLocal2).y;
    let currentSize = document.documentElement.clientWidth;
    if (currentSize >= 992) {
      if (imageWallTop < -1810) {
        columnLeft.style.marginTop = "0";
        columnRight.style.marginTop = "0";
      } else {
        columnLeft.style.marginTop = "50px";
        columnRight.style.marginTop = "50px";
      }
    }
  },
  { passive: true }
);
