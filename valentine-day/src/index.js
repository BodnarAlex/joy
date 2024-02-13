import './sass/main.scss';


 let backReturn = document.body.querySelectorAll(".stage__letter-button");
 let buttonYes = document.body.querySelector(".stage_button_yes");

 let btnLetter = document.body.querySelector(".stage__letter");
 let btnCoupon = document.body.querySelector(".stage__coupon");
 let btnStat = document.body.querySelector(".stage__static");

 let startStage = document.body.querySelector(".stage__start");
 let chooseStage = document.body.querySelector(".stage__choose");
 let finishStage = document.body.querySelector(".stage__finish");

 let letterStage = document.body.querySelector(".stage__letter-block");
 let couponStage = document.body.querySelector(".stage__coupon-block");
 let statStage = document.body.querySelector(".stage__stats-block");

 startStage.addEventListener('click', function (event) {
    startStage.style.display = "none";
    chooseStage.style.display = "flex";
});

buttonYes.addEventListener('click', function (event) {
    chooseStage.style.display = "none";
    finishStage.style.display = "grid";
});

btnLetter.addEventListener('click', function (event) {
    finishStage.style.display = "none";
    letterStage.style.display = "block";
});

btnCoupon.addEventListener('click', function (event) {
    finishStage.style.display = "none";
    couponStage.style.display = "block";
});

btnStat.addEventListener('click', function (event) {
    finishStage.style.display = "none";
    statStage.style.display = "block";
});


 backReturn.forEach((item) => {
    item.addEventListener('click', function (event) {
        finishStage.style.display = "grid";
        couponStage.style.display = "none";
        letterStage.style.display = "none";
        statStage.style.display = "none";
    });
});