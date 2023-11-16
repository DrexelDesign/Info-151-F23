var mainNav = document.querySelector("#main-nav");
var signInContainer = document.querySelector("#signIn-container");
var burgerBtn = document.querySelector("#burger-container button")

// this can only be true or false known as a boolean
var canYouSeeMainNav = false;

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        signInContainer.classList.add("showSignIn");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        // this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");

        signInContainer.classList.remove("showSignIn");

        canYouSeeMainNav = false;
    }
    
}

// add a event listener to the button
burgerBtn.addEventListener("click", showNav);
