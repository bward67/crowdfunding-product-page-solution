const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileLinks = document.querySelector(".nav-bar-mobile .nav-links");
const main = document.querySelector("main");
const mainOverlay = document.querySelector(".main-overlay");
const body = document.querySelector("body");
const section1Overlay = document.querySelector(".main-overlay-section1");
const section2Overlay = document.querySelector(".main-overlay-section2");
const section3Overlay = document.querySelector(".main-overlay-section3");
const backThisProjectOverlay = document.querySelector(".back-this-project");
const backThisProjectBtn = document.getElementById("back-this-project-btn");
const xBtn = document.querySelector(".x");
const pledgeNoReward = document.getElementById("pledge-no-reward");
const thanksOverlay = document.querySelector(".thanks-overlay");
const gotItBtn = document.getElementById("got-it-btn");
//const selectedDot = document.querySelector(".selected-dot");
const circles = [...document.querySelectorAll(".circle")];
//console.log(circles);
const circleDots = [...document.querySelectorAll(".circle-active")];
//console.log(circleDots);
const bambooLeftMain = document.querySelector("#bamboo-left-main");
const blackLeftMain = document.querySelector("#black-left-main");
const mahoganyLeftMain = document.querySelector("#mahogany-left-main");
const bambooMain = document.querySelector("[data-bamboo-main]");
const blackMain = document.querySelector("[data-black-main]");
const mahoganyMain = document.querySelector("[data-mahogany-main]");

const bambooLeftOverlay = document.querySelector("#bamboo-left-overlay");
const blackLeftOverlay = document.querySelector("#black-left-overlay");
const mahoganyLeftOverlay = document.querySelector("#mahogany-left-overlay");

const bambooLeftMobileOverlay = document.querySelector(
  "[data-bamboo-mobile-overlay]"
);

const blackLeftMobileOverlay = document.querySelector(
  "#black-left-mobile-overlay"
);
const mahoganyLeftMobileOverlay = document.querySelector(
  "[data-mahogany-mobile-overlay]"
);

const bambooOverlay = document.querySelector("[data-bamboo-overlay]");
const blackOverlay = document.querySelector("[data-black-overlay]");
const mahoganyOverlay = document.querySelector("[data-mahogany-overlay]");
const insetNoReward = document.querySelector(".inset-no-reward");
const bambooCircle = document.getElementById("bamboo-circle");
const blackCircle = document.getElementById("black-circle");
const mahoganyCircle = document.getElementById("mahogany-circle");
const noRewardCircle = document.getElementById("no-reward-circle");
const insetBamboo = document.querySelector(".inset-bamboo");
const selectRewardBtnNoReward = document.querySelector(
  ".select-reward-btn-no-reward"
);
const selectRewardBtnBamboo = document.querySelector(
  ".select-reward-btn-bamboo"
);
const selectRewardBtnBlack = document.querySelector(".select-reward-btn-black");
const selectRewardBtnMahogany = document.querySelector(
  ".select-reward-btn-mahogany"
);

const insetBlack = document.querySelector(".inset-black");
const insetMahogany = document.querySelector(".inset-mahogany");
const totalMoney = document.querySelector("[data-total-money]");
const totalBackers = document.querySelector("[data-total-backers]");
const bambooSelectedDot = document.querySelector(".circle-active-bamboo");
const blackSelectedDot = document.querySelector(".circle-active-black");
const noRewardSelectedDot = document.querySelector(".circle-active-no-reward");
const mahoganySelectedDot = document.querySelector(".circle-active-mahogany");
const mahogany = document.querySelector(".mahogany");
const black = document.querySelector(".black");
const bamboo = document.querySelector(".bamboo");
const bambooTitle = document.querySelector(".bamboo-title");
const blackTitle = document.querySelector(".black-title");
const mahoganyTitle = document.querySelector(".mahogany-title");

const insetStyles = document.querySelectorAll(".inset-styles");
const mainInsetStyles = [
  ...document.querySelectorAll(".main-overlay-section3 .inset-styles"),
];
//console.log(mainInsetStyles);
const daysLeft = document.getElementById("days-left");
const scrollToThanksOverlay = document.getElementById(
  "scroll-to-thanks-overlay"
);
const scrollToNoReward = document.getElementById("scroll-to-no-reward");
const scrollToBamboo = document.getElementById("scroll-to-bamboo");
const scrollToBlack = document.getElementById("scroll-to-black");
const scrollToMahogany = document.getElementById("scroll-to-mahogany");
const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmark-text");
const bookmarkImg = document.querySelector(".bookmark img");
//console.log(bookmarkImg);
const bookmarkIcon = document.querySelector(".bookmark-icon");
const whiteBookmark = document.querySelector(".white-bookmark");
//console.log(whiteBookmark);
const sliderContainer = document.querySelector(
  ".slider-container .slider-back"
);
const sliderFront = document.querySelector(".slider-front");
const insets = [...document.querySelectorAll(".inset")];
//console.log(insets);
const selectRewardBtns = [...document.querySelectorAll(".select-reward")];
//console.log(selectRewardBtns);

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

let countDownDate = new Date("July 1, 2024 24:00:00").getTime();

let bookmarked = false;

let bambooCounter = parseInt(localStorage.getItem("bamboo")); //|| 101;
//console.log(bambooCounter); //we get 101 in blue so its good
let blackCounter = parseInt(localStorage.getItem("black")); // || 64;
let mahoganyCounter = parseInt(localStorage.getItem("mahogany")); // || 5;
let backersCounter = parseInt(localStorage.getItem("backers-counter")); // || 5007;
let moneyCounter = parseInt(localStorage.getItem("money-counter")); // || 89914;

//to set once we get numbers from Local Storage
bambooMain.innerHTML = bambooCounter;
bambooLeftOverlay.innerHTML = bambooCounter;
bambooLeftMobileOverlay.innerHTML = bambooCounter;

blackMain.innerHTML = blackCounter;
blackLeftOverlay.innerHTML = blackCounter;
blackLeftMobileOverlay.innerHTML = blackCounter;

mahoganyMain.innerHTML = mahoganyCounter;
mahoganyLeftOverlay.innerHTML = mahoganyCounter;
mahoganyLeftMobileOverlay.innerHTML = mahoganyCounter;

totalMoney.innerHTML = `$${numberWithCommas(moneyCounter)}`;
totalBackers.innerHTML = numberWithCommas(backersCounter);

//FUNCTIONS

const displayOverlays = () => {
  body.style.background = "#bbb9b9";
  section1Overlay.style.background = "#bbb9b9";
  section1Overlay.style.border = "#bbb9b9";
  section2Overlay.style.background = "#bbb9b9";
  section2Overlay.style.border = "#bbb9b9";
  section3Overlay.style.background = "#bbb9b9";
  section3Overlay.style.border = "#bbb9b9";
  bookmark.classList.add("active");

  sliderContainer.classList.add("active");
  mainInsetStyles.forEach((item) => {
    console.log(item);
    item.classList.add("active");
  });
};

const removeOverlays = () => {
  body.style.background = "#fff";
  section1Overlay.style.background = "#fff";
  section1Overlay.style.border = "#fff";
  section2Overlay.style.background = "#fff";
  section2Overlay.style.border = "#fff";
  section3Overlay.style.background = "#fff";
  section3Overlay.style.border = "#fff";
  bookmark.classList.remove("active");
  sliderContainer.classList.remove("active");
  mainInsetStyles.forEach((item) => {
    item.classList.remove("active");
  });
};

//moneyCounter = 50000;
//console.log(moneyCounter);
//console.log((moneyCounter / 100000) * 100);
sliderFront.style.width = `${(moneyCounter / 100000) * 100}%`;

const getDaysLeft = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  daysLeft.innerHTML = days;

  if (distance < 0) {
    clearInterval(getDaysLeft);
    daysLeft.innerHTML = "EXPIRED";
  }
}, 1000);

const outOfStock = () => {
  if (bambooCounter <= 0) {
    selectRewardBtnBamboo.style.backgroundColor = "grey";
    selectRewardBtnBamboo.innerHTML = "Out of Stock";
    bamboo.style.opacity = ".5";
    insetBamboo.style.opacity = ".5";
    bambooCircle.style.display = "none";
    bambooTitle.style.marginLeft = "4rem";
  }

  if (blackCounter <= 0) {
    selectRewardBtnBlack.style.backgroundColor = "grey";
    selectRewardBtnBlack.innerHTML = "Out of Stock";
    black.style.opacity = ".5";
    insetBlack.style.opacity = ".5";
    blackCircle.style.display = "none";
    blackTitle.style.marginLeft = "4rem";
  }

  if (mahoganyCounter <= 0) {
    selectRewardBtnMahogany.style.backgroundColor = "grey";
    selectRewardBtnMahogany.innerHTML = "Out of Stock";
    mahogany.style.opacity = ".5";
    insetMahogany.style.opacity = ".5";
    mahoganyCircle.style.display = "none";
    mahoganyTitle.style.marginLeft = "4rem";
  }
};

//EVENT LISTENERS

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mobileLinks.classList.toggle("active");

  if (mobileMenuBtn.classList.contains("active")) {
    hamburgerIcon.src = "./images/icon-close-menu.svg";
    displayOverlays();

    //section1Overlay.classList.add("overlay");
  } else {
    hamburgerIcon.src = "./images/icon-hamburger.svg";
    removeOverlays();
  }
});

xBtn.addEventListener("click", () => {
  backThisProjectOverlay.classList.remove("active");
  mainOverlay.style.display = "block";
  body.style.background = "#fff";
  location.reload();
});

selectRewardBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.innerHTML.includes("Select Reward")) {
      backThisProjectOverlay.classList.add("active");
      mainOverlay.style.display = "none";
      body.style.background = "#bbb9b9";
      backThisProjectFunction();
      //this scroll is only working on the mobile size
      backThisProjectOverlay.scrollIntoView({ behavior: "smooth" });

      //this is not working
      /*
      if (btn.classList.contains("bamboo")) {
        scrollToBamboo.scrollIntoView({ behavior: "smooth" });
        //bambooTitle.style.backgroundColor = "red"; this works
      }
      if (btn.classList.contains("black")) {
        scrollToBlack.scrollIntoView({ behavior: "smooth" });
      }

      if (btn.classList.contains("mahogany")) {
        scrollToMahogany.scrollIntoView({ behavior: "smooth" });
      }*/
    } else {
      return; //if the button reads out of stock - return - do nothing
    }
  });
});

backThisProjectBtn.addEventListener("click", () => {
  backThisProjectOverlay.classList.add("active");

  mainOverlay.style.visibility = "hidden";
  body.style.background = "#bbb9b9";

  backThisProjectFunction();
});

const backThisProjectFunction = () => {
  //START OF CIRCLE CLICK EVENT

  circles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
      const thisInset =
        e.currentTarget.parentElement.parentElement.parentElement;
      console.log(thisInset); //now I get the entire inset for this item

      const insetTitle = e.currentTarget.parentElement.parentElement;
      //console.log(insetTitle);

      const thisEnterPledgeContainer =
        insetTitle.nextElementSibling.nextElementSibling.nextElementSibling
          .content.children[0];
      console.log(thisEnterPledgeContainer);

      const enterPledgeContainers = [
        ...document.querySelectorAll(".enter-pledge-container"),
      ];
      //console.log(enterPledgeContainers); //we only get the one that we have clicked on

      //1st remove any cyan border and cyan dot when we click on a different inset
      insets.forEach((inset) => {
        if (inset !== thisInset) {
          inset.classList.remove("active");
          inset.children[0].children[0].children[0].children[0].classList.remove(
            "selected-dot"
          );
        }

        enterPledgeContainers.forEach((container) => {
          //console.log(container); //only the ones we have clicked the dots on appear
          if (container !== thisEnterPledgeContainer) {
            //this isn't really necessary as the next one removes it anyway
            container.classList.add("hide");
          }
          if (container) {
            container.classList.add("hide"); //toggle doesn't work here it just
            //keeps adding another container
          }
        });
      }); //end of insets.forEach

      //Now add the cyan border and dot for the circle we clicked and scroll to it
      //MAYBE THIS SHOULD BE IN AN INSETS.FOREACH as well??? so that the template
      //doesn't still appear if the user goes back into back this project a second time
      thisInset.classList.toggle("active");
      e.currentTarget.children[0].classList.toggle("selected-dot");

      thisInset.scrollIntoView({ behavior: "smooth" });
      //this is only working for the mobile size

      if (thisInset.classList.contains("no-reward")) {
        const template = document.getElementById("no-reward");
        const content = template.content.cloneNode(true); //DO NOT FORGET TRUE
        thisInset.append(content); //so NOT document.body
        const continueBtn = document.getElementById("continue-btn");
        const input = document.querySelector("[data-input");
      }

      if (thisInset.classList.contains("black")) {
        const template = document.getElementById("black");
        const content = template.content.cloneNode(true); //DO NOT FORGET TRUE
        thisInset.append(content); //so NOT document.body
        const continueBtn = document.getElementById("continue-btn");
        const input = document.querySelector("[data-input");
      }

      if (thisInset.classList.contains("bamboo")) {
        const template = document.getElementById("bamboo");
        const content = template.content.cloneNode(true); //DO NOT FORGET TRUE
        thisInset.append(content); //so NOT document.body
        const continueBtn = document.getElementById("continue-btn");
        const input = document.querySelector("[data-input");
      }

      if (thisInset.classList.contains("mahogany")) {
        const template = document.getElementById("mahogany");
        const content = template.content.cloneNode(true); //DO NOT FORGET TRUE
        thisInset.append(content); //so NOT document.body
        const continueBtn = document.getElementById("continue-btn");
        const input = document.querySelector("[data-input");
      }

      const continueBtns = [...document.querySelectorAll(".continue-btn")];
      console.log(continueBtns); //we just get the one associated with the one we clicked on

      continueBtns.forEach((continueBtn) => {
        continueBtn.addEventListener("click", (e) => {
          const thisContinueBtn = e.currentTarget;
          console.log(thisContinueBtn);

          if (thisContinueBtn.classList.contains("bamboo")) {
            bambooCounter--;
            localStorage.setItem("bamboo", bambooCounter);
            bambooMain.innerHTML = bambooCounter;
            bambooLeftOverlay.innerHTML = bambooCounter;
            bambooLeftMobileOverlay.innerHTML = bambooCounter;
          }
          if (thisContinueBtn.classList.contains("black")) {
            blackCounter--;
            localStorage.setItem("black", blackCounter);
            blackMain.innerHTML = blackCounter;
            blackLeftOverlay.innerHTML = blackCounter;
            blackLeftMobileOverlay.innerHTML = blackCounter;
          }

          if (thisContinueBtn.classList.contains("mahogany")) {
            mahoganyCounter--;
            localStorage.setItem("mahogany", mahoganyCounter);
            mahoganyMain.innerHTML = mahoganyCounter;
            mahoganyLeftOverlay.innerHTML = mahoganyCounter;
            mahoganyLeftMobileOverlay.innerHTML = mahoganyCounter;
          }
          outOfStock();

          displayOverlays();

          const thisInput = e.currentTarget.previousElementSibling.children[1];
          const thisInputValue = Number(thisInput.value);

          //local storage for backers and total money
          backersCounter++;
          localStorage.setItem("backers-counter", backersCounter);
          totalBackers.innerHTML = numberWithCommas(backersCounter);

          moneyCounter = moneyCounter + thisInputValue; //had to do it this way and not by creating
          //another variable
          localStorage.setItem("money-counter", moneyCounter);
          totalMoney.innerHTML = numberWithCommas(`$${moneyCounter}`); //it only worked with moneyCounter
          //in here and not a different variable

          backThisProjectOverlay.classList.remove("active");
          thanksOverlay.classList.add("active");
          circleDots.forEach((circle) => {
            circle.classList.remove("selected-dot");
          });
          enterPledgeContainers.forEach((container) => {
            //console.log(container);
            container.classList.add("hide"); //this is not working
          });

          //to scroll to this item
          scrollToThanksOverlay.scrollIntoView({ behavior: "smooth" });

          gotItBtn.addEventListener("click", () => {
            thanksOverlay.classList.remove("active");
            removeOverlays();

            location.reload();
          });

          thisInput.value = "";
          mainOverlay.style.visibility = "visible";
          displayOverlays();
        });

        //end of continueBtn click
      }); //END OF continueBtns.forEach
    }); //END OF CIRCLE CLICK EVENT
  }); //END OF CIRCLEs.forEach EVENT
};

bookmark.addEventListener("click", () => {
  bookmarked = !bookmarked;
  whiteBookmark.classList.toggle("active");
  bookmarked
    ? (bookmarkText.innerText = "Bookmarked")
    : (bookmarkText.innerText = "Bookmark");
});

//so that the updated numbers are remembered once we refresh
window.addEventListener("DOMContentLoaded", () => {
  outOfStock();
});

//this is just for testing
/*const clearLocalStorage = document.getElementById("clear-local-storage");
clearLocalStorage.addEventListener("click", () => {
  localStorage.clear();
  //location.reload();
});

AND IF YOU DO CLEAR LOCAL STORAGE YOU MUST CHANGE THE ABOVE TO THIS:

let bambooCounter = parseInt(localStorage.getItem("bamboo")) || 101;
//console.log(bambooCounter); //we get 101 in blue so its good
let blackCounter = parseInt(localStorage.getItem("black")) || 64;
let mahoganyCounter = parseInt(localStorage.getItem("mahogany")) || 5;
let backersCounter = parseInt(localStorage.getItem("backers-counter")) || 5007;
let moneyCounter = parseInt(localStorage.getItem("money-counter")) || 89914;
*/
