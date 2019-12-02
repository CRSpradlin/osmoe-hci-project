function toggleSlideMenu(){
    if($('.auth__mobile-header-hamburger').html()=="menu"){
        requestAnimationFrame(()=>{
            $('.auth').css("transform","translate(20rem,0)");
            $('.auth').css('height', '100%');
            $('.auth').css('overflow', 'hidden');
            $('.auth__mobile-aside').css('display', 'block');
            $('.auth').one('transitionend', () => {
                $('.auth__mobile-aside').css('z-index', 1);
            });
            $('.auth__mobile-header-hamburger').html('close');
        });
    }
    else{
        requestAnimationFrame(()=>{
            $('.auth__mobile-aside').css('z-index', -1);
            $('.auth').css('height', 'cover');
            $('.auth').css('overflow', 'unset');
            $('.auth').css("transform","translate(0,0)");
            $('.auth').one('transitionend', () => {
                $('.auth__mobile-aside').css('display', 'none');
            });
            $('.auth__mobile-header-hamburger').html('menu');
        });
    }
}