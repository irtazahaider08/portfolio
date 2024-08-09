// console.log("Hello");

let nav = document.querySelector(".navbar")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
     
}


let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    
    // Check if the scroll position is greater than or equal to 100 pixels
    if (windscroll >= 100) {
        $('section').each(function(i) {
            // Check if the current section's top position is less than or equal to the scroll position
            if ($(this).position().top <= windscroll) {
                // Remove the 'active' class from all <a> elements inside <li> elements
                $('nav li a.active').removeClass('active');
                // Add the 'active' class to the <a> element corresponding to the current section
                $('nav li').eq(i).find('a').addClass('active');
            }
        });
    } else {
        // Remove the 'active' class from all <a> elements inside <li> elements
        $('nav li a.active').removeClass('active');
        // Add the 'active' class to the <a> element inside the first <li> element
        $('nav li:first-child a').addClass('active');
    }
}).scroll();
