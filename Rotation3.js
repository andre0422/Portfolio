let projectThree = document.querySelector('.project-three');

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && w >=1000) {
            entry.target.style.animation = `project-3-ani 1.5s ease-in-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })
})

observer.observe(projectThree);