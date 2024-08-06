gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('.navmenu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: this.getAttribute('data-target'),
        offsetY: 100,
      }
    }
    );
  });
});


let isMenuVisible = false;
function toggleMenu() {

  console.log(isMenuVisible)
  const navMenu = document.querySelector('.navmenu');
  const links = document.querySelectorAll('.link');
  let narrownav = gsap.matchMedia();
  narrownav.add("(max-width: 800px)", () => {
    const navtl = gsap.timeline(); // Create a new GSAP timeline
    if (isMenuVisible) {
      // Hide the menu
      gsap.timeline().to(links, {
        x: -100,
        opacity: 0,
        delay: 0.2,
        color: "#ffffff",
        stagger: 0.3

      }).to(navMenu, {
        // display: "none", // Hide menu
        opacity: 0, // Fade out
        duration: 0.3,
        y: -100,
        onComplete: () => navMenu.style.display = 'none'
      })
    } else {
      // Show the menu
      navMenu.style.display = 'flex'
      gsap.timeline().to(navMenu, {
        // display: "flex", // Show menu
        opacity: 1, // Fade in
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 0.3,
        y: 0
      }).to(links, {
        x: 0,
        opacity: 1,
        delay: 0.2,
        color: "#ffffff",
        stagger: 0.3
      });
    }
  })

  isMenuVisible = !isMenuVisible; // Toggle the visibility state
}
document.getElementById('navbutton').addEventListener('click', toggleMenu);
//------------------------------------

const text = SplitType.create('.splittype', { types: 'words' })


gsap.to("nav", {
  backgroundColor: '#000000',
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    start: "top -10%",
    end: "top -11%",
    scrub: true,
    // markers: true
  },
})




const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// let aboutText = document.querySelector(".aboutText");
// let animation = gsap.to(".aboutText", {
//   // backgroundColor: '#000000',
//   backgroundImage: "linear-gradient(to right top, black, #333333)",
//   duration: 0.2,
//   rotateY: -10,
//   rotateX: -5,
// })
// if (!isTouchDevice) {
//   console.log('Desktop')
//   aboutText.addEventListener("mouseenter", () => animation.play());
//   aboutText.addEventListener("mouseleave", () => animation.reverse());
// } else {
//   console.log('mobile')
//   aboutText.addEventListener("touchstart", () => animation.play());
//   aboutText.addEventListener("touchend", () => animation.reverse());
//   aboutText.addEventListener("touchcancel", () => animation.reverse());
// }

// ------------------------------------
let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
  const tl = gsap.timeline();
  tl.from(".logo, .navmenu, .logo>a, .link", {
    duration: 0.5,
    color: 'black',
    y: -100,
    ease: "power1.out",
    stagger: 0.2,
    delay: 1
  });
})





const tl2 = gsap.timeline();
tl2
  .from(".textcontainer h1 div", {
    duration: 0.5,
    y: 100,
    ease: "power1.out",
    stagger: 0.1,
    delay: 0.5,
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


const tl3 = gsap.timeline();
tl3  .from(".aboutTitle", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".aboutTitle",
      scroller: "body",
      top: "top 40%",
      end: "top 30%",
      scrub: true,
      stagger: 0.2,
      // markers: true
    }
  })
  .from(".aboutText", {
    x: -800,
    duration: 1,
    scrollTrigger: {
      trigger: ".aboutText",
      scroller: "body",
      top: "top 60%",
      end: "top 70%",
      scrub: true,
      // markers: true
    },
  })
  .from(".valueContainer, .valueblock", {
    x: 800,
    duration: 1,
    scrollTrigger: {
      trigger: ".valueContainer",
      scroller: "body",
      top: "top 60%",
      end: "top 70%",
      scrub: true,
      stagger: 0.2,
      // markers: true
    }
  })
  .from(".contactTitle", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contactTitle",
      scroller: "body",
      top: "top 40%",
      end: "top 30%",
      scrub: true,
      stagger: 0.2,
      // markers: true
    }
  })
  .from(".contactText", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contactTitle",
      scroller: "body",
      top: "top 40%",
      end: "top 30%",
      scrub: true,
      stagger: 0.2,
      // markers: true
    }
  })
  .from(".contactleft", {
    x: -800,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contactleft",
      scroller: "body",
      top: "top 60%",
      end: "top 70%",
      scrub: true,
      // markers: true
    }
  })
  .from(".contactright", {
    x: 800,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contactleft",
      scroller: "body",
      top: "top 60%",
      end: "top 70%",
      scrub: true,
      // markers: true
    }
  })



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
      paddingBottom: "3.5rem",
    }, "a")
    if (!isTouchDevice) {
      valueblock.addEventListener("mouseenter", () => {
        timeline.play()
      });
      valueblock.addEventListener("mouseleave", () => {
        console.log('hi123')
        timeline.reverse()
      })
    } else {
      valueblock.addEventListener("touchstart", () => timeline.play());
      valueblock.addEventListener("touchend", () => timeline.reverse());
      valueblock.addEventListener("touchcancel", () => timeline.reverse());
    }
  })
})










//------------------------------------





// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

// scroll.on("scroll", (instance) => {
//   ScrollTrigger.update();
//   document.documentElement.setAttribute("data-scrolling", instance.direction);
// });

// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//   scrollTop(value) {
//     return arguments.length
//       ? scroll.scrollTo(value, 0, 0)
//       : scroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector("[data-scroll-container]").style.transform
//     ? "transform"
//     : "fixed",
// });
// ScrollTrigger.addEventListener("refresh", () => scroll.update());
// ScrollTrigger.refresh();

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