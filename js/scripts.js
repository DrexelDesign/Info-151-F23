Fancybox.bind();

// const container = document.getElementById("myCarousel");
const container = document.querySelector("#myCarousel");

const options = { infinite: true };

new Carousel(container, options);




/* --------------------
    Navigation 
 -------------------- */  

var mainNav = document.querySelector("#main-nav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button");

var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");


// this can only be true or false known as a boolean
var canYouSeeMainNav = false;

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        signInUpButtons.classList.add("showSignIn");
        canYouSeeMainNav = true;

        // hide burger bars
        burgerBars.classList.add("hide-burger-bars");

        // show burger x
        burgerX.classList.remove("hide-burger-x");

    }else{
        console.log("hide menu");
        // this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");

        signInUpButtons.classList.remove("showSignIn");

        // show burger bars
        burgerBars.classList.remove("hide-burger-bars");

        // hide burger x
        burgerX.classList.add("hide-burger-x");

        canYouSeeMainNav = false;
    }
    
}

// add a event listener to the button
burgerBtn.addEventListener("click", showNav);



/* --------------------
    Sign In 
 -------------------- */  
 var signInBtn = document.querySelector("#sign-in-btn");
 var signInContainer = document.querySelector("#sign-in-container");
 var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");


 function showSignInModal() {
    // console.log("show modal now");
    signInContainer.classList.add("show-signIn-container");
    // hide the navigation on close
    mainNav.classList.remove("showMainNav");
    // hide the signup/in buttons
    signInUpButtons.classList.remove("showSignIn");
 }

 function hideSignInModal(){
    signInContainer.classList.remove("show-signIn-container");
    
 }

 signInBtn.addEventListener("click", showSignInModal);
 closeSignUpModalBtn.addEventListener("click", hideSignInModal);

//  signInContainer.addEventListener("click", hideSignInModal);
 