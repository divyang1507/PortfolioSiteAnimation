window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('navbar').style.display = 'flex';
        document.getElementById('main').style.display = 'block';
    }, 500); // 1-second delay
});


function toggleMenu() {
  const navLinks = document.querySelector('.navmenu');
  navLinks.classList.toggle('show');

  // const navtime = gsap.timeline()
  //  navtime.from(".show", {
  //    opacity:0,
  //    backgroundColor: "red",
  //    color: "#ffffff",
  //    duration: 0.5,
  //    y:-100
  //  }).from("link",{
  //    y:-50,
  //    opacity:0,
  //    delay:0.5,
  //    color: "#ffffff",
  //  })
}

//------------------------------------

const text = SplitType.create('.splittype', { types: 'words' })
const loadtext = SplitType.create('.spinner', { types: 'words' })

gsap.from(".spinner > div", {
    duration: 0.1,
    y: 100,
    ease: "power1.out",
    stagger: 0.2,
    // delay: 0.5,
  })

//------------------------------------


gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
  scroller: "[data-scroll-container]",
  // scroller: "body",
  markers: false,
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

scroll.on("scroll", (instance) => {
  ScrollTrigger.update();
  document.documentElement.setAttribute("data-scrolling", instance.direction);
});

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

//------------------------------------

// function circlefollower() {
//   window.addEventListener("mousemove", function (details) {
//     // console.log(details.clientX, details.clientY)
//     document.querySelector(
//       "#circle"
//     ).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
//   });
// }
// circlefollower();




//let mm = gsap.matchMedia();
// mm.add("(min-width: 768px)", () => {

//------------------------------------


//for background changing of navbar 
// gsap.to(".nav, .link, .logo > a", {
gsap.to("nav", {
  backgroundColor: '#000000',
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
})

let aboutText = document.querySelector(".aboutText");
let animation = gsap.to(".aboutText",{
  // backgroundColor: '#000000',
  backgroundImage: "linear-gradient(to right top, black, #333333)",
  duration: 0.2,
 rotateY: -10,
 rotateX: -5,
})
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (!isTouchDevice) {
  console.log('Desktop')
aboutText.addEventListener("mouseenter", () => animation.play());
aboutText.addEventListener("mouseleave", () => animation.reverse());
}else{ 
  console.log('mobile')
aboutText.addEventListener("touchstart", () => animation.play());
aboutText.addEventListener("touchend", () => animation.reverse());
aboutText.addEventListener("touchcancel", () => animation.reverse());
}

const tl = gsap.timeline();
const tl2 = gsap.timeline();
tl.from(".logo, .navmenu, .logo>a, .link", {
  duration: 0.5,
  color: 'black',
  y: -100,
  ease: "power1.out",
  stagger: 0.2,
});

tl2
  .from(".textcontainer h1 div", {
    duration: 0.5,
    y: 100,
    ease: "power1.out",
    stagger: 0.1,
    delay: 0.5,
    scrub: 2,
  })
  .from(".textcontainer h2 div", {
    duration: 0.1,
    y: 100,
    ease: "power1.out",
    stagger: 0.2,
    // delay: 0.5,
  })
  .from(".textcontainer p", {
    duration: 0.2,
    y: 500,
    ease: "power1.out",
    stagger: 0.1,
    // delay: 0.5,
  });

// tl2.play();

// ScrollTrigger.create({
//   // animation: tl2,
//   trigger: ".textcontainer",
//   start: "top 40",
//   end: "bottom bottom",
//   scrub: true,
//   delay: 2,
//   onEnter: () => tl2.reverse(),
//   onLeaveBack: () => tl2.play(),
//   // markers: true,
// });
document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelectorAll('.valueblock')

  block.forEach(valueblock => {
    const text = valueblock.querySelector('.valueHeading p');
    const arrow = valueblock.querySelector('.fa-arrow-right');
    const timeline = gsap.timeline({ paused: true })
    timeline.from(text, {
      y: -25,
      display: 'none',
      opacity: 0
    }, "a").from(arrow, {
      rotateZ: "45"
    }, "a").to(valueblock, {
      paddingBottom: "3rem",
      // height: "fit-content",
    }, "a")

    valueblock.addEventListener("mouseenter", () => {
      timeline.play()
    });
    valueblock.addEventListener("mouseleave", () => {
      console.log('hi123')
      timeline.reverse()
    })
  })
})


