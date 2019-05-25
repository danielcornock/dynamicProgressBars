const scrollReveal = function(){
    const progressBars = document.querySelectorAll('.progress-bar');

    const isInViewport = (elem) => {
        return elem.getBoundingClientRect().top <= window.innerHeight;
    }

    window.addEventListener("scroll", () =>{
        progressBars.forEach(bar => {
            if (isInViewport(bar)){
                bar.classList.add('progress-bar--active');
            }
        })
    })
}();