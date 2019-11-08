var happyBar;
var waterBar;
var foodBar;

var happyGoal;
var waterGoal;
var foodGoal;

var statusLabel;
var happyLabel;
var waterLabel;
var foodLabel;

var happyArrow;
var waterArrow;
var foodArrow;

var barContainer;
var answerContainer;
var goalContainer;
var statContainer;
var osmoeContainer;

var profileBtn;
var happyBtn;
var waterBtn;
var foodBtn;
var yesBtn;
var noBtn;
var happyARBtn;
var waterARBtn;
var foodARbtn;
var exitBtn;

var overlayShadow;
var overlay;
var overlayTitle;
var overlayQuest;

var profileHeight;
var profileWidth;

var osmoe;

function initialize () {
    //load goal text fields & container
    happyGoal = document.getElementById("goal__happy");
    waterGoal = document.getElementById("goal__water");
    foodGoal = document.getElementById("goal__food");
    

    happyLabel = document.getElementById("label__happy");
    waterLabel = document.getElementById("label__water");
    foodLabel = document.getElementById("label__food");

    happyArrow = document.getElementById("arrow__happy");
    waterArrow = document.getElementById("arrow__water");
    foodArrow = document.getElementById("arrow__food");

    statusLabel = document.getElementById("label__status");
    
    //load status bars
    happyBar = document.getElementById("bar__happy");
    waterBar = document.getElementById("bar__water");
    foodBar = document.getElementById("bar__food");

    goalContainer = document.getElementById("goal__container");
    barContainer = document.getElementById("barContainer");
    statContainer = document.getElementById("statContainer");
    osmoeContainer = document.getElementById("osmoeContainer");

    osmoeForeground = document.getElementById("osmoeForeground");

    //load all buttons
    profileBtn = document.getElementById("button__profile");
    happyBtn= document.getElementById("button__happy");
    waterBtn = document.getElementById("button__water");
    foodBtn = document.getElementById("button__food");
    yesBtn = document.getElementById("button__yes");
    noBtn = document.getElementById("button__no");
    exitBtn = document.getElementById("exit");
    happyARBtn = document.getElementById("addRemove__happy");
    waterARBtn = document.getElementById("addRemove__water");
    foodARBtn = document.getElementById("addRemove__food");

    //load overlay elements
    overlayShadow = document.getElementById("overlayShadow");
    overlay = document.getElementById("overlay");
    overlayTitle = document.getElementById("overlayTitle");
    overlayQuest = document.getElementById("overlayQuest");
    answerContainer = document.getElementById("answerContainer");

    profileWidth = screen.width / 12;
    profileWidth += "px";
    profileHeight = profileWidth;
    
    profileWidth = "width: " + profileWidth;
    profileWidth += ";height: " + profileHeight;

    profileBtn.setAttribute("style", profileWidth);
    var statContainerHeight;
    var statContainerWidth = statContainer.offsetWidth;
    statContainerHeight = statContainerWidth * 0.6;
    statContainerWidth += "px";
    statContainerHeight += "px";
    statContainerWidth = "width: " + statContainerWidth + ";height: " + statContainerHeight;

    statContainer.setAttribute("style", statContainerWidth);

    osmoeForeground.style.marginLeft = (osmoeContainer.offsetWidth - 320) / 2;
    osmoeForeground.style.marginTop = (osmoeContainer.offsetHeight - 320) / 1.3;

    happyLabel.style.fontSize = (screen.width * 0.013);
    happyArrow.style.width = (screen.width * 0.043);

    waterLabel.style.fontSize = (screen.width * 0.013);
    waterArrow.style.width = (screen.width * 0.043);

    foodLabel.style.fontSize = (screen.width * 0.013);
    foodArrow.style.width = (screen.width * 0.043);

    statusLabel.style.fontSize = statContainer.offsetWidth * 0.05;

    statContainer.height = statContainer.offsetWidth * 0.4;

    var title = document.getElementById("message");
    title.style.fontSize = screen.width / 35;

    var all = document.getElementsByTagName('h3');
    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = statContainer.offsetWidth * 0.037;
    }


    //add listeners to buttons
    profileBtn.addEventListener("click", loadProfileWindow, false);
    happyBtn.addEventListener("click", loadHappyWindow, false);
    waterBtn.addEventListener("click", loadWaterWindow, false);
    foodBtn.addEventListener("click", loadFoodWindow, false);
    yesBtn.addEventListener("click", completeGoal, false);
    noBtn.addEventListener("click", closeWindow, false);
    exitBtn.addEventListener("click", closeWindow, false);
    happyARBtn.addEventListener("click", addHappyGoal, false);
    waterARBtn.addEventListener("click", addWaterGoal, false);
    foodARBtn.addEventListener("click", addFoodGoal, false);

}

function addHappyGoal() {
    if (happyARBtn.src.includes("plus.png")){
        happyARBtn.src = "../static/images/minus.png";
        happyGoal.style.backgroundColor = "#FFC100";
        happyGoal.style.color = "#FFFFFF";
    }
    else {
        happyARBtn.src = "../static/images/plus.png";
        happyGoal.value = "";
        happyGoal.style.backgroundColor = "#FFFFFF";
        happyGoal.style.color = "#000000";
    }
}

function addWaterGoal() {
    if (waterARBtn.src.includes("plus.png")){
        waterARBtn.src = "../static/images/minus.png";
        waterGoal.style.backgroundColor = "#02AFEF";
        waterGoal.style.color = "#FFFFFF";
    }
    else {
        waterARBtn.src = "../static/images/plus.png";
        waterGoal.value = "";
        waterGoal.style.backgroundColor = "#FFFFFF";
        waterGoal.style.color = "#000000";
    }
}

function addFoodGoal() {
    if (foodARBtn.src.includes("plus.png")){
        foodARBtn.src = "../static/images/minus.png";
        foodGoal.style.backgroundColor = "#93CF4E";
        foodGoal.style.color = "#FFFFFF";
    }
    else {
        foodARBtn.src = "../static/images/plus.png";
        foodGoal.value = "";
        foodGoal.style.backgroundColor = "#FFFFFF";
        foodGoal.style.color = "#000000";
    }
}

function loadProfileWindow() {
    overlayTitle.innerHTML = "Motivational Goals:";
    overlayQuest.innerHTML = "";
    answerContainer.style.display = "none";
    goalContainer.style.display = "block";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    overlay.style.display = "block";
    overlayShadow.style.display = "block";
}

function loadHappyWindow() {
    overlayTitle.innerHTML = "Increase Happiness:";
    overlayQuest.innerHTML = "Have you completed your happiness motivational goal of a b a b a b a b";
    goalContainer.style.display = "none";
    yesBtn.style.display = "block";
    noBtn.style.display = "block";
    overlay.style.display = "block";
    overlayShadow.style.display = "block";
}

function loadWaterWindow() {
    overlayTitle.innerHTML = "Give Osmoe Water:";
    overlayQuest.innerHTML = "Have you completed your water motivational goal of [Goal 2] to give Osmoe Water?";
    goalContainer.style.display = "none";
    yesBtn.style.display = "block";
    noBtn.style.display = "block";
    overlay.style.display = "block";
    overlayShadow.style.display = "block";
}

function loadFoodWindow() {
    overlayTitle.innerHTML = "Feed Osmoe:";
    overlayQuest.innerHTML = "Have you completed your food motivational goal of [Goal 3] to feed Osmoe?";
    goalContainer.style.display = "none";
    yesBtn.style.display = "block";
    noBtn.style.display = "block";
    overlay.style.display = "block";
    overlayShadow.style.display = "block";
}

function closeWindow() {
    overlay.style.display = "none";
    overlayShadow.style.display = "none";
    answerContainer.style.display = "block";
}

function completeGoal() {
    var max = barContainer.clientWidth;
    var temp;
    if (overlayTitle.innerHTML == "Increase Happiness:" && happyBar.style.width != '100%'){
        temp = happyBar.clientWidth;
        temp += (max/10);
        temp = Math.floor(temp/max)*100;
        var percent = temp + '%';
        happyBar.style.width = percent;
    }

    if (overlayTitle.innerHTML == "Give Osmoe Water:" && waterBar.style.width != '100%'){
        temp = waterBar.clientWidth;
        temp += (max/10);
        temp = Math.floor(temp/max)*100;
        var percent = temp + '%';
        waterBar.style.width = percent;
    }

    if (overlayTitle.innerHTML == "Feed Osmoe:" && foodBar.style.width != '100%'){
        temp = foodBar.clientWidth;
        temp += (max/10);
        temp = Math.floor(temp/max)*100;
        var percent = temp + '%';
        foodBar.style.width = percent;
    }
    overlay.style.display = "none";
    overlayShadow.style.display = "none";
}


window.addEventListener("load", initialize, false);