function toggleSlideMenu(){
    if($('.auth__mobile-header-hamburger').html()=="menu"){
        $('.auth').css("transform","translate(50%,0)");
        $('.auth__mobile-header-hamburger').html('close');
    }
    else{
        $('.auth').css("transform","translate(0,0)");
        $('.auth__mobile-header-hamburger').html('menu');
    }
}