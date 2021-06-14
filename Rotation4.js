let project4 = document.querySelector('.project-four');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
 
        if (entry.intersectionRatio > 0 && w >=1000) {
            entry.target.style.animation = `project-4-ani 1.5s ease-in-out`
        } else {
            entry.target.style.animation = "none";
        }
    })
})

observer.observe(project4); 