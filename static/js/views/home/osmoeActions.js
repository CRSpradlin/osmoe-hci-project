let animationTime = {
    'OSIdleX11.gif': 600,
    'Poke_Idle_OsmoeSam.gif': 900,
    'Sad_withShadowX10.gif': 1050, 
}
let osmoeInterval;
let defaultOsmoe = "OSIdleX11.gif" //change this for crying osmoe
let currOsmoeImage = "";
let osmoePending = [];
let idleImage = 'OSIdleX11.gif';
function setOsmoe(image){
    try{
        clearInterval(osmoeInterval);
    } catch(e){
        console.log(e);
    }
    currOsmoeImage = image;
    osmoeInterval = setInterval(()=>{
        requestAnimationFrame(()=>{document.getElementById("osmoe").src = '/static/penguin/osmoe/animated/'+currOsmoeImage});
        if((osmoePending.length==0 && currOsmoeImage!=defaultOsmoe) || osmoePending.length>0){
            if(osmoePending.length>0){
                setOsmoe(osmoePending.shift());
            } else {
                setOsmoe(defaultOsmoe);
            }
        }
    }, animationTime[currOsmoeImage]);
}
setOsmoe(defaultOsmoe);