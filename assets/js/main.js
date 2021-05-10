window.addEventListener("scroll", function(){
    var menubar = document.querySelector(".mainmenu-area");
    menubar.classList.toggle("sticky", window.scrollY > 0);
})


 var typed = new Typed('.animate', {
    strings: [
    	"Military member",
    	"Student",
        "Startup founder"
    ],

    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
