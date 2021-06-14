let projectTwo = document.querySelector('.project-two');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        console.log("Working");

        if (entry.intersectionRatio > 0 && w >=1000) {
            entry.target.style.animation = `project-2-ani 1.5s ease-in-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
})

observer.observe(projectTwo); 