var typed = new Typed(".auto-input", {
    strings: ["Trust book recomendations from real people , not robots &#129302;"],
    typeSpeed:115,
    showCursor:false,
    })

    scrollButton = document.getElementById("scrollBtn");

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }
    
    function triggerFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
    }