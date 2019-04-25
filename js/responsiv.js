$(function (){
    isNavBarMenuHidden = true;
    $('body > header .icons_links .menu_icon').click(function (){
        if(isNavBarMenuHidden){
          $('.nav_bar').fadeIn("slow");
          isNavBarMenuHidden = false;
      }
      else{
          $('.nav_bar').fadeOut("slow");
          isNavBarMenuHidden = true;
      }
   });
});