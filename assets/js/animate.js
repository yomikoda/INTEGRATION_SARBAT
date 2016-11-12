$(function(){
   
    
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
    
    
    
    $(document).ready(function(){
        $('header h1').css({'opacity':'1','left':'50%'});
        $('header h2').css({'opacity':'1','left':'50%'});     
        $('#mousescroll').css('opacity','1');
    });
    
    
    
     $(window).scroll(function(){
         valeurDuScroll=$(window).scrollTop();
              
     
    if(valeurDuScroll>50){
    
       
            
    }
     
         
     });
    
    
    
    
});