const h1 = document.getElementById('About-me') //grabs the h1 above
const letters = h1.innerText.split('') //our split function
let html = "" //

letters.forEach( letter => { //this puts each letter into its own span class
  let classes = ''
  if (letter !== ' '){
    classes = 'js-letter'
  }

  html = html + `<span class = '${classes}'>${letter}</span>`

})

h1.innerHTML = html
const jsLetters = document.querySelectorAll(".js-letter")

jsLetters.forEach(node => {
  node.addEventListener("mouseover", function (event){ //normal function is used here to use the 'this' keyword in order to refer to the node
    this.classList.add("active")
    console.log("working");
  })
   node.addEventListener("mouseout", function (event){
     this.classList.remove("active")

   })

}) //node refers to each letter class created above


const paragraphs = document.querySelector('.About-me-wrapper');
const image = document.querySelector('.Self-portrait-container');
const projectWrapper = document.querySelector('.projects-wrapper');
const contactMeContainer = document.querySelector('.Contact-me-container')

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        console.log(entries);
    /*when class is in view, css style will be added */
    if(entry.intersectionRatio > 0){
        entry.target.style.animation = `animation 2s forwards ease-out`;
    } else {      /*the dataset target will intake the dataset delay in the left class */
        entry.target.style.animation = 'none';
    }
 })
  
})

observer.observe(paragraphs)
observer.observe(image)
observer.observe(contactMeContainer)


/* Scroll to a different sectin of the page by clicking on the nav buttons */


/* let aboutMeSection = document.querySelector('.About-me-container');
let projectSection = document.querySelector('.projects-container');
let contactSection = document.querySelector('.Contact-me-container');

let aboutMeButtonNAV = document.querySelector('.About-me-button');
let projectButtonNAV = document.querySelector('.projects-button');
let projectsButtonNAV = document.querySelector('.contact-button');

let aboutMeButtonHAM = document.getElementById('aboutMeButton_HAM');
let projectButtonHAM = document.getElementById('projectsButton_HAM');
let contactMeButtonHAM = document.getElementById('contactMeButton_HAM');


function AboutMeScroll () {

  let aboutMeButtonHAM = document.getElementById('aboutMeButton_HAM');
  let aboutMeButtonNAV = document.querySelector('.About-me-button');

    aboutMeButtonNAV.addEventListener('click', function(){
    
}
 */


