var happyBar;
var waterBar;
var foodBar;

var happyGoal;
var waterGoal;
var foodGoal;

var statusLabel;
var message;
var h3

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
var exitBtn;

var overlayShadow;
var overlay;
var overlayTitle;
var overlayQuest;

var profileHeight;
var profileWidth;
var statContainerHeight;
var statContainerWidth;

var osmoe;
var backgroundImage;
var osmoeWindow;

var screenWidth;

function initialize () {
    //load goal text fields & container
    happyGoal = document.getElementById("goal__happy");
    waterGoal = document.getElementById("goal__water");
    foodGoal = document.getElementById("goal__food");
    
    //load labels
    statusLabel = document.getElementById("label__status");
    message = document.getElementById("message");
    h3 = document.getElementsByTagName('h3');

    //load arrow images
    happyArrow = document.getElementById("arrow__happy");
    waterArrow = document.getElementById("arrow__water");
    foodArrow = document.getElementById("arrow__food");

    //load status bars
    happyBar = document.getElementById("bar__happy");
    waterBar = document.getElementById("bar__water");
    foodBar = document.getElementById("bar__food");

    //load containers
    goalContainer = document.getElementById("goal__container");
    barContainer = document.getElementById("container__bar");
    statContainer = document.getElementById("container__stat");
    osmoeContainer = document.getElementById("container__osmoe");

    //load osmoe container
    osmoeForeground = document.getElementById("osmoe__foreground");
    osmoe = document.getElementById("osmoe");
    backgroundImage = document.getElementById("backgroundImage");
    osmoeWindow = document.getElementById("window");

    //load all buttons
    profileBtn = document.getElementById("button__profile");
    happyBtn= document.getElementById("button__happy");
    waterBtn = document.getElementById("button__water");
    foodBtn = document.getElementById("button__food");
    yesBtn = document.getElementById("button__yes");
    noBtn = document.getElementById("button__no");
    exitBtn = document.getElementById("exit");

    //load overlay elements
    overlayShadow = document.getElementById("overlay__shadow");
    overlay = document.getElementById("overlay");
    overlayTitle = document.getElementById("overlay__title");
    overlayQuest = document.getElementById("overlay__question");
    answerContainer = document.getElementById("container__answer");


    //scaling elements to fit screen properly

    //adjust profile button to always be a circle
    profileWidth = screen.width / 12;
    profileWidth += "px";
    profileHeight = profileWidth;
    profileWidth = "width: " + profileWidth;
    profileWidth += ";height: " + profileHeight;
    profileBtn.setAttribute("style", profileWidth);

    //Adjust statcontainer to never be too wide or tall
    statContainerWidth = statContainer.offsetWidth;
    statContainerHeight = statContainerWidth * 0.6;
    statContainerWidth += "px";
    statContainerHeight += "px";
    statContainerWidth = "width: " + statContainerWidth + ";height: " + statContainerHeight;
    statContainer.setAttribute("style", statContainerWidth);

    happyBtn.style.fontSize = (happyBtn.clientWidth * 0.09);
    waterBtn.style.fontSize = (waterBtn.clientWidth * 0.09);
    foodBtn.style.fontSize = (foodBtn.clientWidth * 0.09);
    
    happyArrow.style.width = (screen.width * 0.043);
    waterArrow.style.width = (screen.width * 0.043);
    foodArrow.style.width = (screen.width * 0.043);

    statusLabel.style.fontSize = statContainer.offsetWidth * 0.05;
    statContainer.height = statContainer.offsetWidth * 0.4;

    happyBtn.style.height = happyBtn.clientWidth * 0.4;
    waterBtn.style.height = waterBtn.clientWidth * 0.4;
    foodBtn.style.height = foodBtn.clientWidth * 0.4;

    happyBtn.style.width = waterBtn.style.width = foodBtn.style.width = "70%";

    
    message.style.fontSize = screen.width / 35;

    for (var i = 0; i < h3.length; i++) {
        h3[i].style.fontSize = statContainer.offsetWidth * 0.037;
    }

    osmoeForeground.scrollLeft = backgroundImage.clientWidth / 3;
    osmoe.style.marginLeft = ((backgroundImage.clientWidth - osmoe.clientWidth) / 3.4);
    osmoe.style.height = osmoe.clientWidth;
    backgroundImage.style.marginBottom = "-70%";

    //add listeners to buttons
    profileBtn.addEventListener("click", loadProfileWindow, false);
    happyBtn.addEventListener("click", loadHappyWindow, false);
    waterBtn.addEventListener("click", loadWaterWindow, false);
    foodBtn.addEventListener("click", loadFoodWindow, false);
    yesBtn.addEventListener("click", completeGoal, false);
    noBtn.addEventListener("click", closeWindow, false);
    exitBtn.addEventListener("click", closeWindow, false);
    document.getElementsByTagName("BODY")[0].onresize = function() {adjustSize()};

    happyGoal.addEventListener("blur", addHappyGoal, false);
    happyGoal.addEventListener("focus", editHappyGoal, false);

    waterGoal.addEventListener("blur", addWaterGoal, false);
    waterGoal.addEventListener("focus", editWaterGoal, false);

    foodGoal.addEventListener("blur", addFoodGoal, false);
    foodGoal.addEventListener("focus", editFoodGoal, false);

}

function adjustSize() {

    //adjust profile button to always be a circle
    profileWidth = screen.width / 12;
    profileWidth += "px";
    profileHeight = profileWidth;
    profileWidth = "width: " + profileWidth;
    profileWidth += ";height: " + profileHeight;
    profileBtn.setAttribute("style", profileWidth);

    statContainer.style.width = "35%";
    statContainerWidth = statContainer.offsetWidth;
    statContainerHeight = statContainerWidth * 0.6;
    statContainerWidth += "px";

    statContainerHeight += "px";
    statContainerWidth = "width: " + statContainerWidth + ";height: " + statContainerHeight;
    statContainer.setAttribute("style", statContainerWidth);

    happyBtn.style.fontSize = (happyBtn.clientWidth * 0.09);
    waterBtn.style.fontSize = (waterBtn.clientWidth * 0.09);
    foodBtn.style.fontSize = (foodBtn.clientWidth * 0.09);

    happyArrow.style.width = (screen.width * 0.043);
    waterArrow.style.width = (screen.width * 0.043);
    foodArrow.style.width = (screen.width * 0.043);

    statusLabel.style.fontSize = statContainer.offsetWidth * 0.05;
    statContainer.height = statContainer.offsetWidth * 0.4;

    happyBtn.style.height = happyBtn.clientWidth * 0.4;
    waterBtn.style.height = waterBtn.clientWidth * 0.4;
    foodBtn.style.height = foodBtn.clientWidth * 0.4;

    happyBtn.style.width = waterBtn.style.width = foodBtn.style.width = "70%";

    message.style.fontSize = screen.width / 35;

    for (var i = 0; i < h3.length; i++) {
        h3[i].style.fontSize = statContainer.offsetWidth * 0.037;
    }

    osmoeForeground.scrollLeft = backgroundImage.clientWidth / 3;
    osmoe.style.marginLeft = ((backgroundImage.clientWidth - osmoe.clientWidth) / 3.4);
    osmoe.style.height = osmoe.clientWidth;
    backgroundImage.style.marginBottom = "-70%";

    
    
    
}

function addHappyGoal() {
    if(happyGoal.value.length > 0){
        happyGoal.style.backgroundColor = "#FFC001";
        happyGoal.style.color = "#FFFFFF";
    }

}

function editHappyGoal() {
    happyGoal.style.backgroundColor = "#FFFFFF";
    happyGoal.style.color = "#000000";
}

function addWaterGoal() {
    if(waterGoal.value.length > 0){
        waterGoal.style.backgroundColor = "#02AFEF";
        waterGoal.style.color = "#FFFFFF";
    }

}

function editWaterGoal() {
    waterGoal.style.backgroundColor = "#FFFFFF";
    waterGoal.style.color = "#000000";
}

function addFoodGoal() {
    if(foodGoal.value.length > 0){
        foodGoal.style.backgroundColor = "#93CF4E";
        foodGoal.style.color = "#FFFFFF";
    }
}

function editFoodGoal() {
    foodGoal.style.backgroundColor = "#FFFFFF";
    foodGoal.style.color = "#000000";
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
    overlayTitle.style.marginTop = "3%";
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
    overlayTitle.style.marginTop = "8%";
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