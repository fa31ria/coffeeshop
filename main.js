$(document).ready(function(){
    $ ('.slider-container').owlCarousel({
       
        loop:true,
        margin:10,
        dots:true,
        
        
        items:1,
        autoplay:true,
        responsive:{
            400:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
       
        
    
        });
    

});