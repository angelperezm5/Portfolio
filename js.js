/* Función para el navbar, cuando se hace scroll se le añade una clase para ponerle un color de fondo. */

window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("abajo",window.scrollY>0)    
})


window.addEventListener('DOMContentLoaded', function() {
  /*
  if (window.innerWidth < 512) {
      return; // Sale de la función si el tamaño de la pantalla es inferior a 1050px
  }
*/
  
  var myText = document.getElementById('myText');
  myText.classList.add('typing-animation');
  
  myText.addEventListener('animationend', function() {
      myText.classList.remove('typing-animation');
      setTimeout(function() {
          myText.classList.add('typing-animation');
      }, 2000); // Espera 2 segundos antes de reiniciar la animación
  });
});



/* Función que te sube para arriba cuando haces click en un botón. */

function scrollFunction() {
    const myButton = document.getElementById('my-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = 'block';
    } else {
      myButton.style.display = 'none';
    }
  }
  
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.addEventListener('scroll', scrollFunction);
  

/* Función para animar barra de progreso. */

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(progressBar => {
    const targetWidth = parseFloat(progressBar.style.width);

    let width = 0;
    let id = setInterval(frame, 40);

    function frame() {
      if (width >= targetWidth) {
        clearInterval(id);
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }
  });
}

// Observador de intersección para activar la animación cuando los elementos son visibles
const progressBarsContainer = document.querySelector('.container');
const progressBarsObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars(); // Llamar a la función cuando los elementos sean visibles
      observer.unobserve(entry.target); // Dejar de observar una vez que los elementos son visibles
    }
  });
});

// Agregar cada barra de progreso al observador
const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(progressBar => {
  progressBarsObserver.observe(progressBar);
});






/*pruebas */
window.addEventListener('DOMContentLoaded', function() {
  var myText1 = document.getElementById('myTextmovil1');
  var myText2 = document.getElementById('myTextmovil2');
  var isFirstAnimation = true;

  function startAnimation() {
    if (isFirstAnimation) {
      myText1.classList.add('typing-animation');
    } else {
      myText2.classList.add('typing-animation');
    }
  }

  function resetAnimation() {
    if (isFirstAnimation) {
      myText1.classList.remove('typing-animation');
      setTimeout(function() {
        isFirstAnimation = false;
        startAnimation();
      }, 1000);
    } else {
      myText2.classList.remove('typing-animation');
      setTimeout(function() {
        isFirstAnimation = true;
        startAnimation();
      }, 1000);
    }
  }

  startAnimation();

  myText1.addEventListener('animationend', resetAnimation);
  myText2.addEventListener('animationend', resetAnimation);
});


var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;



/*Pruebas*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));