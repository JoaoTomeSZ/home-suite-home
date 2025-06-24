window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if(window.scrollY > 150){
                header.classList.add("scrolled")
        } else{
                header.classList.remove("scrolled")
        }
})

const elements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);