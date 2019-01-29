// Your code goes here
const eventArr = [
    'mouseover',
    'keydown',
    'wheel',
    'contextmenu',
    'load',
    'mousemove',
    'focus',
    'blur',
    'select',
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
navItems[0].addEventListener('click', item => item.target.textContent = "HomeAlone");

const navBar = queSel('.nav');
navBar.addEventListener('click', i => {
    i.target.style = 'background-color: lightgrey';
    // i.stopPropagation();
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


footerThing.insertAdjacentHTML('beforebegin', '<input type="text" id="name1" name="name" placeholder="Enter your name...">');
const inputField = queSel('#name1');
//select
inputField.addEventListener('select', text => {
    text.target.style = 'color: red';
});

// focus
inputField.addEventListener('focus', () => {
    const foo = queSel('.footer');
    foo.style = 'background-color: #17A2B8; color: white';
})

//blur
inputField.addEventListener('blur', text => {
    text.target.style = 'color: black';
})
