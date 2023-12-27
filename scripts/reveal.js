function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var warning = document.querySelectorAll(".warning");
    var animate = document.querySelectorAll(".animate");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      
      else {
        reveals[i].classList.remove("active");
        }
    }

    for (var i = 0; i < animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = animate[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        animate[i].classList.add("active");
      } 
      
      else {
        animate[i].classList.remove("active");
        }
    }

    for (var i = 0; i < warning.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = warning[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          warning[i].classList.add("active");
        } 
        
        else {
          warning[i].classList.remove("active");
          }
      }
}
  
window.addEventListener("scroll", reveal);