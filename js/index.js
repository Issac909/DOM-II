// Your code goes here

//LINKS
const links = 
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = "rgb(210,180,140)";
    })

    el.addEventListener('mouseleave', () => {
        el.style.color = "#212529";
    })
})

//MAIN HEADER
const mainHeader =
document.querySelector('h1');

mainHeader.addEventListener('mouseover',(event) => {
    // event.target.style.transform = 'skew(-20deg)';
    event.target.style.transform = 'translateX(7.5em)', 'skew(-20deg)'
    event.target.style.transition = 'transform 3.5s';

    setTimeout(() => {
        event.target.style.transform = 'translateX(0em)';
        event.target.style.transition = 'transform 5s'
    }, 4700);
}, false);

// SCROLL ANIM
const shadowAnim = document.querySelectorAll('img');
        
shadowAnim.addEventListener('scroll' , () => {
        image.style.boxShadow = '4px 4px 5px 0px rgba(0, 0, 0, 0.75);'
        image.style.transition = 'all .5s;'       
    })


//IMAGE ZOOM
const zoom = (event) => {
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    images.style.transform = `scale(${scale})`;   
}

let scale = 1;
const images = document.querySelector('img');

images.onwheel = zoom;

images.addEventListener('dblclick', () => {
    images.style.transform = 'scale(1)';
})
