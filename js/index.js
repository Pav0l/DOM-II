// Your code goes here
const eventArr = [
    'mouseover',
    'keydown',
    'wheel',
    'contextmenu',
    'load',
    'mousemove',
   // 'resize',
    'scroll',
    // 'select',
    'dblclick',
];

const queSel = selector => document.querySelector(selector);

// .preventDefault()
const navItems = document.querySelectorAll('a');
navItems.forEach(anchorTag => anchorTag.addEventListener('click', items => items.preventDefault()));


// keydown
const allItems = queSel('*');
allItems.addEventListener('keydown', () => {
    const body = queSel('body')
    body.classList.toggle('fun-time');
});

// mouseover
const bunFus = queSel('.logo-heading');
bunFus.addEventListener('mouseover', item => {
    const { target } = item;
    target.textContent = 'Bun Fus'
});

// wheel
allItems.addEventListener('wheel', () => {
    const item = queSel('.intro')
    item.classList.add('darken-me');
});

// contextmenu
const imgStop = document.querySelectorAll('img');
imgStop.forEach(img => img.addEventListener('contextmenu', item => {
    alert('Stop trying to download this image!');
    item.preventDefault();
}));

// load
allItems.addEventListener('load', console.log('The site has loaded. Hooray!'));

//mousemove
const footerThing = queSel('.footer p');
footerThing.textContent = 2018;
footerThing.addEventListener('mousemove', i => {
    i.target.textContent++;
})



// dblclick 
const aaa = queSel('div h2');
aaa.addEventListener('dblclick', i => {    
    i.target.textContent = 'Y U DBL CLICK ME?';
    i.target.style = 'color: red';
});

//resize - Why is this triggered on reload?
const firstImg = queSel('header img')
firstImg.addEventListener('resize', console.log('HEY! HEY! HEY! STOP RESIZING ME'))

console.log(aaa);