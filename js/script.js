gsap.fromTo(
  ".animate-fade-in",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(1.7)",
    onStart: () => {
      $(".animate-fade-in").css("overflow", "hidden");
    },
    onComplete: () => {
      $(".animate-fade-in").css("overflow", "auto");
    },
  }
);
gsap.from("#hero .animate-fade-in-text", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  stagger: 0.2,
});
gsap.fromTo(
  ".animate-fade-left",
  { x: 100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.4,
    onStart: () => {
      $(".animate-fade-left").css("overflow", "hidden");
    },
    onComplete: () => {
      $(".animate-fade-left").css("overflow", "auto");
    },
  }
);

var tl = gsap.timeline();

tl.from("#header .logo", {
  y: -100,
  duration: 0.4,
  timeline: "true",
});
tl.from("#header .nav1", {
  y: -100,
  duration: 0.4,
  timeline: "true",
});
tl.from("#header .nav2", {
  y: -100,
  duration: 0.4,
  timeline: "true",
});
tl.from("#header .nav3", {
  y: -100,
  duration: 0.4,
  timeline: "true",
});

gsap.from("#features .heading-txt", {
  transform: "translateY(80px)",
  duration: 1,
  scrollTrigger: {
    trigger: "#features .heading-txt",
    scroller: "body",
    start: "top 100%",
  },
});
gsap.from("#product .heading-txt", {
  transform: "translateY(80px)",
  duration: 1,

  scrollTrigger: {
    trigger: "#product .heading-txt",
    scroller: "body",
    start: "top 100%",
    end: "bottom 50%",
  },
});
gsap.from("#newsletter .heading-txt", {
  transform: "translateY(80px)",
  duration: 1,

  scrollTrigger: {
    trigger: "#newsletter .heading-txt",
    scroller: "body",
    start: "top 100%",
    end: "bottom 50%",
  },
});
gsap.from("#features .boxs", {
  transform: "translateY(80px)",
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#features .boxs",
    scroller: "body",
    start: "top 100%",
  },
});
gsap.from("#product .boxs", {
  transform: "translateY(80px)",
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#product .boxs",
    scroller: "body",
    start: "top 100%",

  },
});
gsap.from("#newsletter .boxs", {
  transform: "translateY(80px)",
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#newsletter .boxs",
    scroller: "body",
    start: "top 100%",

  },
});
