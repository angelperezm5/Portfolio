/* Gestionar el color del navbar si esta clickado o no */
  // Obtengo el elemento con la clase "navbar-toggler"
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Obtengo el elemento con la clase "navbar-click"
  const navbarClick = document.querySelector(".navbar-click");

  let isColorApplied = false;

  // Agregar un evento clic al elemento con la clase "navbar-toggler"
  navbarToggler.addEventListener("click", function() {
    // Si el color ya se ha aplicado, restablecer el color de fondo a su estado original.
    if (isColorApplied) {
      navbarClick.style.backgroundColor = "";
    } else {
      // Si el color no se ha aplicado, cambiar el color de fondo al color deseado.
      navbarClick.style.backgroundColor = "#6E07F3";
    }

    // Cambiar el estado para el próximo clic.
    isColorApplied = !isColorApplied;
  });

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

/* Animar texto banner */
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


/* Año actual */
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;



/* Añadir o quitar clase show según si el elemento se esta visualizando o no (animaciones de entrada de los elementos) */
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




/* Función para el modo oscuro */
document.addEventListener('DOMContentLoaded', function() {
  const botonModoOscuro = document.querySelector('.modooscuro');
  const body = document.querySelector('body');
  const correocontacto = document.querySelector('.correocontacto');
  const iconosmodooscuro1 = document.querySelector('.iconosmodooscuro1');
  const iconosmodooscuro2 = document.querySelector('.iconosmodooscuro2');
  const iconosmodooscuro3 = document.querySelector('.iconosmodooscuro3');
  
  botonModoOscuro.addEventListener('click', function() {
    body.classList.toggle('oscuro');
    correocontacto.classList.toggle('oscuro');
    iconosmodooscuro1.classList.toggle('oscuro');
    iconosmodooscuro2.classList.toggle('oscuro');
    iconosmodooscuro3.classList.toggle('oscuro');
    botonModoOscuro.classList.toggle('modooscuroactivado');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const botonModoOscuro = document.querySelector('.modooscuro');
  const iconoSol = document.querySelector('.icono-sol');
  const iconoLuna = document.querySelector('.icono-luna');

  botonModoOscuro.addEventListener('click', function() {
    if (iconoSol.style.display === 'none') {
      // Desaparecer la luna hacia la izquierda
      iconoLuna.classList.add('desaparecer');
      setTimeout(function() {
        iconoLuna.style.display = 'none';
      }, 500);

      // Mostrar el sol con animación desde la derecha
      iconoSol.style.display = 'inline-block';
      iconoSol.classList.add('desaparecer');
      setTimeout(function() {
        iconoSol.classList.remove('desaparecer');
      }, 100);
    } else {
      // Desaparecer el sol hacia la derecha
      iconoSol.classList.add('desaparecer');
      setTimeout(function() {
        iconoSol.style.display = 'none';
      }, 500);

      // Mostrar la luna con animación desde la izquierda
      iconoLuna.style.display = 'inline-block';
      iconoLuna.classList.add('desaparecer');
      setTimeout(function() {
        iconoLuna.classList.remove('desaparecer');
      }, 100);
    }
  });
});
