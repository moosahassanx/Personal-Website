// scroll down button
const scroll = new SmoothScroll('.page-content a[href*=""]', {
    speed: 800
});

document.getElementById("scroll-down").onmousedown = function(event) {
    if (event.which == 3) {
        alert("right clicked!");
    }
}