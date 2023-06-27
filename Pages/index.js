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
});

const cardPattinson = document.getElementById("Pattinson");
const contentPattinson = document.getElementById("content-pattinson");
cardPattinson.addEventListener('mouseover', () => {
    gsap.to(contentPattinson, {duration:2, visibility: 'visible', opacity: 1});
});
cardPattinson.addEventListener('mouseout', () => {
    gsap.to(contentPattinson, {duration:2, visibility: 'hidden', opacity: 0});
});

const cardChristian = document.getElementById("Christian");
const contentChristian = document.getElementById("content-christian");
cardChristian.addEventListener('mouseover', () => {
    gsap.to(contentChristian, {duration:2, visibility: 'visible', opacity: 1});
});
cardChristian.addEventListener('mouseout', () => {
    gsap.to(contentChristian, {duration:2, visibility: 'hidden', opacity: 0});
});

const cardBen = document.getElementById("Ben");
const contentBen = document.getElementById("content-ben");
cardBen.addEventListener('mouseover', () => {
    gsap.to(contentBen, {duration:2, visibility: 'visible', opacity: 1});
});
cardBen.addEventListener('mouseout', () => {
    gsap.to(contentBen, {duration:2, visibility: 'hidden', opacity: 0});
});
