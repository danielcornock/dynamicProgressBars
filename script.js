const scrollReveal = function(){
    const progressBars = document.querySelectorAll('.progress-bar');
    console.log(progressBars);
    // progressBars.forEach(section => section.classList.add('hidden'));

    const isInViewport = (elem) => {
        return elem.top <= window.innerHeight;
    }

    window.addEventListener("scroll", () =>{
        progressBars.forEach(bar => {
            if (isInViewport(bar.getBoundingClientRect())){
                bar.classList.add('progress-bar--active');
            }
        })
    })
}();