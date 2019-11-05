function animate_display(style_class, type){
    var item = $(style_class);
    if(type=="show"){
        item.addClass('auth__modals-isVisible');
        setTimeout(function(){
            item.addClass('auth__modals-isOpen');
        }, 20);
    }
    if(type=="hide"){
        item.removeClass('auth__modals-isOpen');
        item.one('transitionend', function(e){
            item.removeClass('auth__modals-isVisible');
        });
    }
}
