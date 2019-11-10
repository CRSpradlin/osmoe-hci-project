var upgradeTab;
var upgradeOverlay;
var expandUpgrade;
var statusTab;

var upgradeFlag;
var statusFlag;

function initialize () {
    upgradeTab = document.getElementById("tab__upgrade");
    upgradeOverlay = document.getElementById("overlay__upgrade");
    statusTab = document.getElementById("tab__status");

    expandUpgrade = document.getElementById("expand__upgrade");
    expandStatus = document.getElementById("expand__status");

    upgradeFlag = false;
    statusFlag = false;


    upgradeTab.addEventListener("click", openUpgrade, false);
    statusTab.addEventListener("click", openStatus, false);

}

function openStatus() {
    if(statusFlag == false){
        statusTab.style.height = "30%";

        expandStatus.style.height = "16.66%";
        expandStatus.style.marginTop = "51%";
        expandStatus.src = "../static/images/expandBtn.png";
        statusFlag = true;
    }
    else {
        statusTab.style.height = "5%";

        expandStatus.style.height = "100%";
        expandStatus.style.marginTop = "0";
        expandStatus.src = "../static/images/expandBtnDown.png";
        statusFlag = false; 
    }
    
}

function openUpgrade() {
    if(upgradeFlag == false){
        upgradeTab.style.marginTop = "144.425%";

        upgradeOverlay.style.display = "block";

        expandUpgrade.src = "../static/images/expandBtnDown.png"
        upgradeFlag = true;
    }
    else {
        upgradeTab.style.marginTop = "196.2%";

        upgradeOverlay.style.display = "none";


        expandUpgrade.src = "../static/images/expandBtn.png"
        upgradeFlag = false;
    }
}
    




window.addEventListener("load", initialize, false);