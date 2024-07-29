
function toggleMenu() {
  const navLinks = document.querySelector('.navmenu');
  navLinks.classList.toggle('show');
  gsap.to("show", {
    backgroundColor: "#000000",
    color: "#ffffff",
    duration: 0.5,
  });
}

const text = SplitType.create('.splittype', { types: 'words' })

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
// function circlefollower() {
//   window.addEventListener("mousemove", function (details) {
//     // console.log(details.clientX, details.clientY)
//     document.querySelector(
//       "#circle"
//     ).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
//   });
// }
// circlefollower();
// let mm = gsap.matchMedia();
// mm.add("(min-width: 768px)", () => {
gsap.to("nav", {
  backgroundColor: "#000000",
  color: "#ffffff",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("a", {
  color: "#ffffff",
  duration: 0.2,
  scrollTrigger: {
    trigger: "a",
    start: "top -10%",
    end: "top -10",
    scrub: 1,
  },
});
// })
const tl = gsap.timeline();
const tl2 = gsap.timeline();
tl.from(".logo, .navmenu", {
  duration: 0.5,
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
      y: -50,
      display: 'none',
      opacity: 0
    }, "a").from(arrow,{
      rotateZ: "45"
    }, "a").to(valueblock,{
      paddingBottom: "3rem",
      // height: "fit-content",
    }, "a")

    valueblock.addEventListener("mouseenter", () => {      timeline.play()
    });
    valueblock.addEventListener("mouseleave", () => {
      console.log('hi123')
      timeline.reverse()
    })
  })
})


