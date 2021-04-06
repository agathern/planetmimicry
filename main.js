
// for my animation, i am using scroll to let it play while scrolling. 
//"fired when the document view or an element has been scrolled." (link from demo)
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty( 
      "--scroll", // this is connected to CSS. scrolling the whole length of the page is the length of the animation.
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight) 
    );
  },
);

