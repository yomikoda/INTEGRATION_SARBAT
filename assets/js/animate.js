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