// Your code goes here

//LINKS
const links = 
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = "rgb(210,180,140)";

        event.stopPropagation();
    })

    el.addEventListener('mouseleave', () => {
        el.style.color = "#212529";
        
        event.stopPropagation();
    })
})

//MAIN HEADER
const mainHeader =
document.querySelector('h1');

mainHeader.addEventListener('mouseover',(event) => {
    event.target.style.transform = 'translateX(7.5em) skew(-20deg)';
    event.target.style.transition = 'transform 3.5s';

    setTimeout(() => {
        event.target.style.transform = 'translateX(0em)';
        event.target.style.transition = 'transform 5s';
        event.stopPropagation();
    }, 4700);
}, false);

//SCROLL IMAGE ANIM
//IMAGE ZOOM
const zoom = (event) => {
    event.preventDefault(event);

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    images.style.transform = `scale(${scale})`; 
    
    event.stopPropagation();
}

let scale = 1;
const images = document.querySelector('img');

images.onwheel = zoom;

//DOUBLE CLICK RESET
images.addEventListener('dblclick', () => {
    images.style.transform = 'scale(1)';
    scale = 1;

    event.stopPropagation();
})

//Mid Section Image Effect
const middleImg = 
document.querySelectorAll('.midImg').forEach((img) => {
    img.addEventListener('click', (event) => {
        event.target.style.width = '95%';
        event.target.style.boxShadow = '6px 6px 6px 6px rgba(0,0,0,0.75)';
        event.target.style.transition = 'all 0.1s'
    

    setTimeout(() => {
        event.target.style.width = '100%';
        event.target.style.boxShadow = 'inherit'
    }, 200);
    }, false)
});

//press key
const keyPress = 
    document.addEventListener('keydown', function () {
        document.querySelectorAll('.btn').forEach (item => {
            item.style.transform = "scale(1.5)";
            item.style.color = "green";
            item.style.backgroundColor = "red";
        })    
    })

//mouseup
const footerStyle = document.querySelector('.footer')
footerStyle.addEventListener('mouseup', (event) => {
    footerStyle.style.color = "red";
    footerStyle.style.backgroundColor = "blue";
})

//mousedown
const content = document.querySelectorAll('.text-content');
content.forEach(thing => {
    thing.addEventListener('mousedown', () => {
        thing.style.backgroundColor = 'purple';
        event.stopPropagation();
    })
})

//Load images
const img = document.getElementsByTagName('img');
let arr = Array.from(img);
arr.forEach(image => {
    image.addEventListener('load', () => {
        image.style.visibility = 'show';
    })
})

