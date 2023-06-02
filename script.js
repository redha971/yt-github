document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");
  
    function showNextPhoto() {
      const currentPhoto = document.querySelector(".photo.active");
      const nextPhoto = currentPhoto.nextElementSibling || photos[0];
  
      currentPhoto.classList.remove("active");
      nextPhoto.classList.add("active");
    }
  
    setInterval(showNextPhoto, 5000); // Change de photo toutes les 5 secondes (5000 millisecondes)
  });
  