gsap.from(".who-batman", {
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".cinema-batman",
        markers: {colorStart: "white", colorEnd: "white"}
    }
});