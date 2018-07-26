// window.addEventListener(
//   "load",
//   function pageScroll() {
//     window.scrollBy(0, 1);

//     scrolldelay = setTimeout(pageScroll, 25);
//   },
//   false
// );
let atTheBottom = false;

window.addEventListener(
  "load",
  function pageScroll() {
    if (document.documentElement.scrollTop === 2590) {
      atTheBottom = true;
    } else if (this.document.documentElement.scrollTop === 0) {
      atTheBottom = false;
    }
    if (!atTheBottom) {
      window.scrollBy(0, 1);

      scrolldelay = setTimeout(pageScroll, 10);
    } else {
      window.scrollBy(0, -1);
      scrolldelay = setTimeout(pageScroll, 10);
    }
  },
  false
);
