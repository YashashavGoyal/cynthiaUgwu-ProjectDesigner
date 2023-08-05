const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// el means element top level element i.e. main in our website

function firstPageAnime() {
    let tl = gsap.timeline();

    tl.from('nav', {
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to('.boundingElem', {
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from('#heroFooter', {
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}

function circleMouseFollower() {
    window.addEventListener("mousemove", function(details) {
        // console.log(details);  
        // console.log(details.clientX, details.clientY);  
        this.document.querySelector(`#mouseCircle`).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnime();