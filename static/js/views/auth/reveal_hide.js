function reveal(id_prefix){
    document.getElementById(id_prefix+"Modal").style.display = "block";
    setTimeout(function(){animate_display(".auth__modals-"+id_prefix+"Modal-content","show");}, 30);
}
function hide(id_prefix){
    animate_display(".auth__modals-"+id_prefix+"Modal-content","hide");
    $('.auth__modals-'+id_prefix+'Modal-content').one('transitionend',function(){document.getElementById(id_prefix+"Modal").style.display = "none";});
}