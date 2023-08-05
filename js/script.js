const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// el means element top level element i.e. main in our website

function circleMouseFollower() {
    window.addEventListener("mousemove", function(details) {
        // console.log(details);  
        // console.log(details.clientX, details.clientY);  
        this.document.querySelector(`#mouseCircle`).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    })
}

circleMouseFollower();