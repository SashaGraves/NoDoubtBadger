document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const upButton = document.querySelector('button.up');
upButton.onclick = function (e) {
  e.preventDefault();

  document.querySelector('header').scrollIntoView({
    behavior: 'smooth'
  });
}

  const modal = document.querySelector("div.modal")
  const modalImage = modal.querySelector("img")
  const modalButton = modal.querySelector("button")

  modalButton.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modalImage.src = "";
      modal.style.display = "none";
    }
  } 

  document.querySelectorAll("button.art").forEach(button => {
    button.onclick = function (e) {
      e.preventDefault();
      const img = button.querySelector('img');
      const src = img.dataset.src;
      
      modalImage.src = src;
      modal.style.display = "block";
    }
  });

  
  const slider = document.querySelector("#slider")
  const foregroundImg = document.querySelector(".foreground-img")
  const sliderButton = document.querySelector(".slider-button")

  slider.addEventListener("input", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    foregroundImg.style.width = `${sliderPos}%`
    // Update the position of the slider button
    sliderButton.style.left = `calc(${sliderPos}% - 19px)`
  });
  