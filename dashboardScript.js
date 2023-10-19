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


computeSalary.addEventListener('click',()=>{
    if(ratePerHour.value=="" || hourPerDay.value=="" || workingDays.value=="" )
    {
        alert('Please Enter Valid Values!!!!');
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
