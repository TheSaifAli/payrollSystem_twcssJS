const welcomeUser = document.querySelector('#welcomeUser');
const ratePerHour = document.querySelector('#ratePerHour');
const hourPerDay = document.querySelector('#hourPerDay');
const workingDays = document.querySelector('#workingDays');
const monthlyWage = document.querySelector('#monthlyWage');
const philhealth = document.querySelector('#philhealth');
const sss = document.querySelector('#sss');
const grossSalary = document.querySelector('#grossSalary');
const deduction = document.querySelector('#deduction');
const netSalary = document.querySelector('#netSalary');
const computeSalary = document.querySelector('#computeSalary');
const logoutBtnEl = document.querySelector('#logoutBtn');
const confimDBoxEl = document.querySelector('#confimDBox');
const noBtnEl = document.querySelector('#noBtn');
const yesBtnEl = document.querySelector('#yesBtn');
const blurEffectEls = document.querySelectorAll(".blurEffect");

const labelEls = document.querySelectorAll("label");

const errorBox = document.querySelector("#errorBox");
const errorX = document.querySelector("#errorX");
const errorMsg = document.querySelector("#errorMsg");
const darkToggleContainer = document.querySelector('#darkToggleContainer');
const darkToggle = document.querySelector('#darkToggle');

let user = JSON.parse(localStorage.getItem('RegisteredUser'));

welcomeUser.textContent=`Hi ${user.username} !`
computeSalary.addEventListener('click',()=>{
    if(ratePerHour.value=="" || hourPerDay.value=="" || workingDays.value=="" )
    {
        errorBox.classList.add("activeErrMsg");
    errorBox.classList.remove('deactiveErrMsg');
    errorMsg.innerText = "Please Fill all the fields";
    blurEffectEls.forEach(blurEffectEl=>{
        blurEffectEl.classList.add('blurBackground');
      })
    }
    else{
    const salary = ratePerHour.value * hourPerDay.value * workingDays.value;

    const monthlyWageValue = parseInt(salary * 15 / 100);
    monthlyWage.value = monthlyWageValue;

    const philhealthValue = parseInt(salary * 5 / 100);
    philhealth.value = philhealthValue;

    const sssValue = parseInt(salary * 2/100);
    sss.value = sssValue;

    const grossSalaryValue= parseInt(salary);
    grossSalary.value = grossSalaryValue;

    const deductionValue = monthlyWageValue+philhealthValue+sssValue;
    deduction.value = deductionValue;

    netSalary.value= grossSalaryValue - deductionValue;
    }
})
errorX.addEventListener("click", () => {
    errorBox.classList.add("deactiveErrMsg");
    errorBox.classList.remove("activeErrMsg");
    blurEffectEls.forEach(blurEffectEl=>{
      blurEffectEl.classList.remove('blurBackground');
    })
  });
logoutBtnEl.addEventListener('click',()=>{
    blurEffectEls.forEach(blurEffect=>{
        blurEffect.classList.add('blurBackground')
    })
    confimDBoxEl.classList.add('confirmDBox')
    noBtnEl.addEventListener('click',()=>{
        confimDBoxEl.classList.remove('confirmDBox')
        blurEffectEls.forEach(blurEffect=>{
            blurEffect.classList.remove('blurBackground')
        })
    })
    yesBtnEl.addEventListener('click',()=>{
        location.href='index.html'
    })
})

darkToggle.addEventListener('click',()=>{
  
    darkToggleContainer.classList.toggle('darkMode');
    darkToggle.classList.toggle('darkModeBtn');
    document.body.classList.toggle('bodyDarkMode');
    labelEls.forEach(label=>{
        label.classList.toggle('labelStyle');
    })
  })
    