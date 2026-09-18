$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){ // BURASI: .scroll yerine .scrollY olmalı
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Scroll animasyonunun daha pürüzsüz olması için 'smooth' eklenebilir
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active"); // BURASI: toogle değil toggle olmalı
        $('.menu-btn i').toggleClass("active"); // BURASI: toogle değil toggle olmalı
    });

    // typing animation script (Aynı kalabilir)
    var typed = new Typed(".typing", {
        strings: ["FullStack Developer","Designer","Freelancer","Game Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["FullStack Developer","Designer","Freelancer","Game Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});