// menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// button up

const upButton = document.querySelector('button.up');
upButton.onclick = function (e) {
  e.preventDefault();

  document.querySelector('header').scrollIntoView({
    behavior: 'smooth'
  });
}

// ------ MODAL -------
//  image resize

const SIZE = {
  390: '390w',
  800: '800h',
  980: '980w',
  1200: '1200h',
}

// modal

const modal = document.querySelector("div.modal")
const modalContent = document.querySelector("div.modal-content")
const modalLoader = document.querySelector("div.modal-loader")
const modalImage = modalContent.querySelector("img")
const modalButton = modalContent.querySelector("button")

modalButton.onclick = function() {
  closeModal();
};

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
} ;

function closeModal() {
  modalImage.src = "";
  modal.style.display = "none";
  modalLoader.style.display = "block";
  modalContent.style.display = "none";
} 

// images in modal

document.querySelectorAll("button.art").forEach(button => {
  button.onclick = function (e) {
    e.preventDefault();
    const img = button.querySelector('img');
    modalImage.src = getSrc(img.dataset.name, img.dataset.id);
    modal.style.display = "flex";
    modalImage.onload = function (e, em) {
        
      modalLoader.style.display = "none";
      modalContent.style.display = "block";
    }
  }
});

// ------ SLIDER ----
// slider
  
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
  

function getSrc(dataName, dataId) {
  const ua = navigator.userAgent;
  
  const srcEnd = `/${dataId}/${dataName}`

  if( /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) 
    || /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      
      const srcStart = `./images/${SIZE[980]}`
      return srcStart + srcEnd
  } else if (window.screen.availHeight > 1250) {
    const srcStart = `./images/${SIZE[1200]}`
    return srcStart + srcEnd
  } else {
    const srcStart = `./images/${SIZE[800]}`
    return srcStart + srcEnd
  }
}