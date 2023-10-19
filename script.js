const loginSelectionEl = document.querySelector("#loginSelection");
const loginFormEl = document.querySelector("#loginForm");
const loginEmpID = document.querySelector("#loginEmpID");
const loginEmpPwd = document.querySelector("#loginEmpPwd");

const signUpSelectionEl = document.querySelector("#signUpSelection");
const signUpFormEl = document.querySelector("#signUpForm");

const blurEffectEls = document.querySelectorAll(".blurEffect");

const darkToggleContainer = document.querySelector('#darkToggleContainer');
const darkToggle = document.querySelector('#darkToggle');




const errorBox = document.querySelector("#errorBox");
const errorX = document.querySelector("#errorX");
const errorMsg = document.querySelector("#errorMsg");

loginSelectionEl.addEventListener("click", () => {
  loginFormEl.classList.remove("hide");
  signUpFormEl.classList.add("hide");
  loginSelectionEl.style.borderColor = "#7B68B6";
  loginSelectionEl.style.color = "#5E42B6";
  signUpSelectionEl.style.borderColor = "rgb(209, 213,219)";
  signUpSelectionEl.style.color = "#7B68B6";
});

signUpSelectionEl.addEventListener("click", () => {
  signUpFormEl.classList.remove("hide");
  loginFormEl.classList.add("hide");
  signUpSelectionEl.style.borderColor = "#7B68B6";
  signUpSelectionEl.style.color = "#5E42B6";
  loginSelectionEl.style.borderColor = "rgb(209,213,219)";
  loginSelectionEl.style.color = "#7B68B6";
});

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (loginEmpID.value === "" || loginEmpPwd.value === "") {
    errorBox.classList.add("activeErrMsg");
    errorBox.classList.remove('deactiveErrMsg');
    errorMsg.innerText = "Please Fill all the fields";
    blurEffectEls.forEach(blurEffectEl=>{
      blurEffectEl.classList.add('blurBackground');
    })
  } else if (loginEmpID.value === "admin" && loginEmpPwd.value === "admin") {
    
    location.href = "employeeDashboard.html";

  } else {
    errorBox.classList.add("activeErrMsg");
    errorBox.classList.remove("deactiveErrMsg");
  
    errorMsg.innerText =
      "Your Credentials are invalid please check and try again!";
      blurEffectEls.forEach(blurEffectEl=>{
        blurEffectEl.classList.add('blurBackground');
      })

  }
});
errorX.addEventListener("click", () => {
  errorBox.classList.add("deactiveErrMsg");
  errorBox.classList.remove("activeErrMsg");
  blurEffectEls.forEach(blurEffectEl=>{
    blurEffectEl.classList.remove('blurBackground');
  })
});

// Dark Mode

darkToggle.addEventListener('click',()=>{
  
  darkToggleContainer.classList.toggle('darkMode');
  darkToggle.classList.toggle('darkModeBtn');
  document.body.classList.toggle('bodyDarkMode');
})
  
