let animationTime = {
    'OSIdleX11.gif': 600,
    'Poke_Idle_OsmoeSam.gif': 900,
    'Sad_withShadowX10.gif': 1050,
    'Poke_Madx10.gif': 1100,
    'madOsmoe.gif': 780, 
}
let osmoeInterval;
window.defaultOsmoe = "OSIdleX11.gif" //change this for crying osmoe
let currOsmoeImage = "";
let osmoePending = [];
let idleImage = 'OSIdleX11.gif';
function osmoePoke(){
    if(window.defaultOsmoe=="OSIdleX11.gif"){
        osmoePending.push('Poke_Idle_OsmoeSam.gif');
    }
    if(window.defaultOsmoe=="madOsmoe.gif"){
        osmoePending.push('Poke_Madx10.gif');
    }
}
function setOsmoe(image){
    try{
        clearInterval(osmoeInterval);
    } catch(e){
        console.log(e);
    }
    currOsmoeImage = image;
    osmoeInterval = setInterval(()=>{
        requestAnimationFrame(()=>{document.getElementById("osmoe").src = '/static/penguin/osmoe/animated/'+currOsmoeImage});
        if((osmoePending.length==0 && currOsmoeImage!=window.defaultOsmoe) || osmoePending.length>0){
            if(osmoePending.length>0){
                setOsmoe(osmoePending.shift());
            } else {
                setOsmoe(window.defaultOsmoe);
            }
        }
    }, animationTime[currOsmoeImage]);
}
setOsmoe(window.defaultOsmoe);