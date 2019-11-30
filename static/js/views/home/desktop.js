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
// var happyARBtn;
// var waterARBtn;
// var foodARbtn;
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
    happyLabel = document.getElementById("label__happy");
    waterLabel = document.getElementById("label__water");
    foodLabel = document.getElementById("label__food");
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
    yesBtn = document.getElementById("yesBtn");
    noBtn = document.getElementById("button__no");
    exitBtn = document.getElementById("exit");
    // happyARBtn = document.getElementById("addRemove__happy");
    // waterARBtn = document.getElementById("addRemove__water");
    // foodARBtn = document.getElementById("addRemove__food");

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


    happyLabel.style.fontSize = (happyBtn.clientWidth * 0.09);
    waterLabel.style.fontSize = (waterBtn.clientWidth * 0.09);
    foodLabel.style.fontSize = (foodBtn.clientWidth * 0.09);

    happyLabel.style.paddingTop = ((happyBtn.clientHeight * 0.75 - happyLabel.clientHeight) / 2);
    waterLabel.style.paddingTop = ((waterBtn.clientHeight - (waterBtn.clientHeight * 0.1)- waterLabel.clientHeight) / 2 + "%");
    foodLabel.style.paddingTop = (foodBtn.clientHeight * 0.15 + "px");
    
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

    console.log(document.getElementsByTagName("BODY")[0].clientWidth + ", " + document.getElementsByTagName("BODY")[0].clientHeight);


    //add listeners to buttons
    profileBtn.addEventListener("click", loadProfileWindow, false);
    yesBtn.addEventListener("click", completeGoal, false);
    // happyARBtn.addEventListener("click", addHappyGoal, false);
    // waterARBtn.addEventListener("click", addWaterGoal, false);
    // foodARBtn.addEventListener("click", addFoodGoal, false);
    document.getElementsByTagName("BODY")[0].onresize = function() {adjustSize()};

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

    happyLabel.style.fontSize = (happyBtn.clientWidth * 0.09);
    waterLabel.style.fontSize = (waterBtn.clientWidth * 0.09);
    foodLabel.style.fontSize = (foodBtn.clientWidth * 0.09);

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

// function addHappyGoal() {
//     if (happyARBtn.src.includes("plus.png")){
//         happyARBtn.src = "../static/images/views/home/minus.png";
//         happyGoal.style.backgroundColor = "#FFC100";
//         happyGoal.style.color = "#FFFFFF";
//     }
//     else {
//         happyARBtn.src = "../static/images/views/home/plus.png";
//         happyGoal.value = "";
//         happyGoal.style.backgroundColor = "#FFFFFF";
//         happyGoal.style.color = "#000000";
//     }
// }

// function addWaterGoal() {
//     if (waterARBtn.src.includes("plus.png")){
//         waterARBtn.src = "../static/images/views/home/minus.png";
//         waterGoal.style.backgroundColor = "#02AFEF";
//         waterGoal.style.color = "#FFFFFF";
//     }
//     else {
//         waterARBtn.src = "../static/images/views/home/plus.png";
//         waterGoal.value = "";
//         waterGoal.style.backgroundColor = "#FFFFFF";
//         waterGoal.style.color = "#000000";
//     }
// }

// function addFoodGoal() {
//     if (foodARBtn.src.includes("plus.png")){
//         foodARBtn.src = "../static/images/views/home/minus.png";
//         foodGoal.style.backgroundColor = "#93CF4E";
//         foodGoal.style.color = "#FFFFFF";
//     }
//     else {
//         foodARBtn.src = "../static/images/views/home/plus.png";
//         foodGoal.value = "";
//         foodGoal.style.backgroundColor = "#FFFFFF";
//         foodGoal.style.color = "#000000";
//     }
// }

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

function initialGoalDecrease(waterTime, foodTime, happyTime){
    initialize();
    let currTimeTime = new Date().getTime();
    var max = barContainer.clientWidth;
    var temp;
    var width;
    if (!$('#bar__happy').hasClass('w3-disabled')){
        width = happyBar.clientWidth;
        temp = currTimeTime - happyTime;
        temp = Math.abs(parseInt(temp / (1000*3600*24)));
        console.log("days since last happy: " + temp);
        if(temp>10){
            width = 0;
        } else {
            width -= (max/10)*temp
            console.log('width: ' + width);
            width = (width/max)*100;
        }
        var percent = width+'%';
        console.log('percent: ' + percent + ", max: " + max);
        happyBar.style.width=percent;
    }
    if (!$('#bar__water').hasClass('w3-disabled')){
        width = waterBar.clientWidth;
        temp = currTimeTime - waterTime;
        temp = Math.abs(parseInt(temp / (1000*3600*24)));
        console.log("days since last water: " + temp);
        if(temp>10){
            width = 0;
        } else {
            width -= (max/10)*temp
            console.log('width: ' + width);
            width = (width/max)*100;
        }
        var percent = width+'%';
        console.log('percent: ' + percent + ", max: " + max);
        waterBar.style.width=percent;
    }
    if (!$('#bar__food').hasClass('w3-disabled')){
        width = foodBar.clientWidth;
        temp = currTimeTime - foodTime;
        temp = Math.abs(parseInt(temp / (1000*3600*24)));
        console.log("days since last food: " + temp);
        if(temp>10){
            width = 0;
        } else {
            width -= (max/10)*temp
            console.log('width: ' + width);
            width = (width/max)*100;
        }
        var percent = width+'%';
        console.log('percent: ' + percent + ", max: " + max);
        foodBar.style.width=percent;
    }  
}

function initializeOsmoe(){
    let max = barContainer.clientWidth;
    let waterPercent = Math.round((waterBar.clientWidth/max)*100);
    let foodPercent = Math.round((foodBar.clientWidth/max)*100);
    let happyPercent = Math.round((happyBar.clientWidth/max)*100);

    if(waterPercent<70 || foodPercent<70 || happyPercent<70){
        window.defaultOsmoe = "madOsmoe.gif";
    }
    if(waterPercent<5||foodPercent<5||happyPercent<5||(waterPercent+foodPercent+happyPercent)/3<50){
        window.defaultOsmoe = "Sad_withShadowX10.gif";
    }
}

function completeGoal() {
    // var max = barContainer.clientWidth;
    // var temp;
    // if (overlayTitle.innerHTML == "Increase Happiness:" && happyBar.style.width != '100%'){
    //     temp = happyBar.clientWidth;
    //     temp += (max/10);
    //     temp = Math.floor(temp/max)*100;
    //     var percent = temp + '%';
    //     happyBar.style.width = percent;
    // }

    // if (overlayTitle.innerHTML == "Give Osmoe Water:" && waterBar.style.width != '100%'){
    //     temp = waterBar.clientWidth;
    //     temp += (max/10);
    //     temp = Math.floor(temp/max)*100;
    //     var percent = temp + '%';
    //     waterBar.style.width = percent;
    // }

    // if (overlayTitle.innerHTML == "Feed Osmoe:" && foodBar.style.width != '100%'){
    //     temp = foodBar.clientWidth;
    //     temp += (max/10);
    //     temp = Math.floor(temp/max)*100;
    //     var percent = temp + '%';
    //     foodBar.style.width = percent;
    // }
    overlay.style.display = "none";
    overlayShadow.style.display = "none";
}


window.addEventListener("load", initialize, false);