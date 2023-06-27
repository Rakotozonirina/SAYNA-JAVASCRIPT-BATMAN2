gsap.to(".contenu-text > p", {
    scrollTrigger: ".hero",
    yoyo: true,
    keyframes: [{ duration:2, x:50, opacity: 0}, {duration:2, x:0, opacity:1}],
    delay: 1
});
gsap.to(".who-batman", {
    scrollTrigger: ".cinema-batman",
    yoyo: true,
    keyframes: [{ duration:2, x:50, opacity: 0}, {duration:2, x:0, opacity:1}],
    delay: 4
});
gsap.to(".who-nemesis", {
    scrollTrigger: ".nemesis",
    yoyo: true,
    keyframes: [{ duration:2, x:50, opacity: 0}, {duration:2, x:0, opacity:1}],
    delay: 8
});
gsap.to(".who-allies", {
    scrollTrigger: ".allies",
    yoyo: true,
    keyframes: [{ duration:2, x:50, opacity: 0}, {duration:2, x:0, opacity:1}],
    delay: 12
});
gsap.to(".who-justice-league", {
    scrollTrigger: ".justice-league",
    yoyo: true,
    keyframes: [{ duration:2, x:50, opacity: 0}, {duration:2, x:0, opacity:1}],
    delay: 16
})