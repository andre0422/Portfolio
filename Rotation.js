let projectOne = document.querySelector('.project-one');
let w = window.innerWidth;
let h = window.innerHeight;

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0 && w >=1000) {
            entry.target.style.animation = `project-1-ani 1.5s ease-in-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
})

observer.observe(projectOne);