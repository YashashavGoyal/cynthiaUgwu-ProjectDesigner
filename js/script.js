// Enabiling Smooth Scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// el means element top level element i.e. main in our website


// Adding Animation on Landing Page
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


// Enchancing The movement of Cursor

let timeout;
function circleShapeChanger() {
    // define default scale values
    let xScale = 1;
    let yScale = 1;
    
    // define default prev values
    let xPrev = 0;
    let yPrev = 0;
    window.addEventListener(`mousemove`, function(details){
        this.clearTimeout(timeout);
        let xDiff = details.clientX - xPrev;
        let yDiff = details.clientY - yPrev;

        xScale = gsap.utils.clamp(0.8, 1.2, xDiff);
        yScale = gsap.utils.clamp(0.8, 1.2, yDiff);
        
        xPrev = details.clientX;
        yPrev = details.clientY;

        // console.log(xDiff, yDiff);
        circleMouseFollower(xScale, yScale);
        timeout = setTimeout(() => {
            this.document.querySelector(`#mouseCircle`).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;
        }, 100);
    })
}

// Enabiling Cursor
function circleMouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function(details) {
        // console.log(details);  
        // console.log(details.clientX, details.clientY);  
        this.document.querySelector(`#mouseCircle`).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xScale}, ${yScale})`;
    })
}

circleShapeChanger();
circleMouseFollower();
firstPageAnime();

// Photo Mover
document.querySelectorAll(`.elem`).forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener(`mouseleave`, function (dets) {
      gsap.to(elem.querySelector(`img`), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener(`mousemove`, function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector(`img`), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
});
  

document.querySelectorAll(`.footerItem`).forEach(function(elem) {
    let icon = elem.querySelector(`i`)

    elem.addEventListener(`mousemove`, function(details) {
        icon.classList.remove(`ri-arrow-right-up-line`);
        icon.classList.add(`ri-arrow-right-line`);
    })  
    
    elem.addEventListener(`mouseleave`, function(details) {
        icon.classList.remove(`ri-arrow-right-line`);
        icon.classList.add(`ri-arrow-right-up-line`);
    })
})