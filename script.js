const loginSelectionEl = document.querySelector("#loginSelection");
const loginFormEl = document.querySelector("#loginForm");
const loginEmpID = document.querySelector("#loginEmpID");
const loginEmpPwd = document.querySelector("#loginEmpPwd");

const signUpSelectionEl = document.querySelector("#signUpSelection");
const signUpFormEl = document.querySelector("#signUpForm");
const singUpInputs = signUpFormEl.querySelectorAll('input')

const blurEffectEls = document.querySelectorAll(".blurEffect");
const linkEls = document.querySelectorAll("a");

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

// Login Form
let user =JSON.parse(localStorage.getItem('RegisteredUser'));

console.log(user)
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (loginEmpID.value === "" || loginEmpPwd.value === "") {
    errorBox.classList.add("activeErrMsg");
    errorBox.classList.remove('deactiveErrMsg');
    errorMsg.innerText = "Please Fill all the fields";
    blurEffectEls.forEach(blurEffectEl=>{
      blurEffectEl.classList.add('blurBackground');
    })
  } else if (loginEmpID.value === user.empId && loginEmpPwd.value === user.password) {
    
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

// sign up form 

signUpFormEl.addEventListener('submit',(e)=>{
  e.preventDefault();
  singUpInputs.forEach(input=>{
    if(input.value==="")
    {
      errorBox.classList.add("activeErrMsg");
    errorBox.classList.remove('deactiveErrMsg');
    errorMsg.innerText = "Please Fill all the fields";
    blurEffectEls.forEach(blurEffectEl=>{
      blurEffectEl.classList.add('blurBackground');
    })
    }
    else{
      let username = singUpInputs[0].value
      let dob=singUpInputs[1].value
      let mobile= singUpInputs[2].value
      let email=singUpInputs[3].value
      let empId= singUpInputs[4].value
      let password=singUpInputs[5].value
      let user = {
        username:username,
        dob:dob,
        mobile:mobile,
        email:email,
        empId:empId,
        password:password,
      }
        localStorage.setItem('RegisteredUser',JSON.stringify(user))
    }
  })
  
  for(let i=0;i<6;i++)
{
  singUpInputs[i].value=''
}

  
  
 
})

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
  document.querySelector('#mainContainer').classList.toggle('bodyDarkMode');
  linkEls.forEach(link=>{
    link.classList.toggle('linkStyle')
  })
})
  

