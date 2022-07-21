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
    modal.style.display = "none";
  }
} 

document.querySelectorAll("button.art").forEach(button => {
  button.onclick = function (e) {
    e.preventDefault();
    const img = button.querySelector('img');
    const src = img.src;
    const index = src.indexOf('.png');
    const fullSrc = src.slice(0, index) + '_full.png';
    
    modalImage.src = fullSrc;
    modal.style.display = "block";
  }
});

