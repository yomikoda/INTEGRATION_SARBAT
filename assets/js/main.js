$(function(){
   
    /** BURGER CLICK Handling - Nav/logo/burger changes **/
    $('#burger').on('click', function(){
         if($('#burger').hasClass('clickedburger')){
             $('#burger').removeClass('clickedburger');
             $('#burger').css('border','2px solid black');
             $('#burgernav').css('top','-160px');
             $('#whitelogo').fadeOut(400, function(){
                $('#whitelogo').attr('src','../assets/img/logo.png');
             })
             .fadeIn(400); 
         }else{
             $('#burger').addClass('clickedburger');
             $('#burger').css('border','2px solid white'); 
             $('#burgernav').css('top','0px');
             $('#whitelogo').fadeOut(400, function(){
                $('#whitelogo').attr('src','../assets/img/logo_white.png');
             })
             .fadeIn(400);      
         }
    });
    
   /**BURGER & NAV STATES AT SCROLL **/
    
     $(window).scroll(function(){
         valeurDuScroll=$(window).scrollTop();
              
     if(valeurDuScroll<90){
         $('#burger').css({'position':'absolute','right':'0','top:':'0','background-color':'rgba(0,0,0,0)'});
         $('#burgernav>ul').css({'position':'absolute','left':'250px'});
     }
    if(valeurDuScroll>90){
        $('#burger').css({'position':'fixed','right':'10%','top:':'10%'});
        $('#burgernav').css({'position':'fixed','top:':'-160px'});
        $('#burgernav>ul').css({'position':'absolute','left':'150px'});
            
    }
    if(valeurDuScroll<980){
        $('#burger').css({'border':'2px solid black','background-color':'rgba(0,0,0,0)'});
        $('.line').css('background-color','black'); 
         if($('#burger').hasClass('clickedburger')){
            $('#burger').css({'border':'2px solid white','background-color':'black'});
            $('.line').css('background-color','white'); 
         }
        else{
            $('#burger').css('background-color','rgba(0,0,0,0)'); 
        }
     }
          
         
     if(valeurDuScroll>980){
        $('#burger').css({'border':'2px solid white','background-color':'black'});
        $('.line').css('background-color','white'); 
     }
     
     if(valeurDuScroll>2200){
        $('#burger').css({'border':'2px solid black','background-color':'white'});
        $('.line').css('background-color','black'); 
     }
    if(valeurDuScroll>3000){
        $('#burger').css({'border':'2px solid white','background-color':'black'});
        $('.line').css('background-color','white'); 
     }
    if(valeurDuScroll>6850){
        $('#burger').css({'position':'fixed','right':'-100px'});
     }     
         
         
     });
    
      /** SMOOTH SCROLL  NAV **/
    
     $('#burgernav>ul>li:first-child>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('header').offset().top-80},1000);
        return false;
    });
    $('#burgernav>ul>li:nth-child(2)>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#services').offset().top-80},1500);
        return false;
    });
    $('#burgernav>ul>li:nth-child(3)>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#work').offset().top-80},2000);
        return false;
    });
    $('#burgernav>ul>li:nth-child(4)>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#clients').offset().top-80},2500);
        return false;
    });
    $('#burgernav>ul>li:nth-child(5)>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#pricing').offset().top-80},3000);
        return false;
    });
    $('#burgernav>ul>li:nth-child(6)>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#skills').offset().top-80},3500);
        return false;
    });
    $('#burgernav>ul>li:nth-child(7)>a').on('click',function(){
        $('html,body').stop().animate({scrollTop:$('#posts').offset().top-80},4000);
        return false;
    });
    
    /** ANIMATION OF ELEMENTS OF THE PAGE **/
    
    $(document).ready(function(){
        $('header h1').css({'opacity':'1','left':'50%'});
        $('header h2').css({'opacity':'1','left':'50%'});     
        $('#mousescroll').css('opacity','1');
    });
    
    /** CLICKS ON SOCIAL MEDIA **/
    
    $('#social>ul>li:first-child').on('click', function(){
     window.open("http://www.facebook.com");
    });
    $('#social>ul>li:nth-child(2)').on('click', function(){
     window.open("http://www.twitter.com");
    });
    $('#social>ul>li:nth-child(3)').on('click', function(){
     window.open("http://www.google.fr");
    });
    $('#social>ul>li:nth-child(4)').on('click', function(){
     window.open("https://www.behance.net/");
    });
    
    
    
});