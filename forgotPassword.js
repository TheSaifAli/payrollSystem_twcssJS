const formEl=document.querySelector('form');
const fEmpId=document.querySelector('#fEmpId');
const fPassword=document.querySelector('#fPassword');

let user = JSON.parse(localStorage.getItem('RegisteredUser'));

console.log(user.username);
formEl.addEventListener('submit',(e)=>{
e.preventDefault();
    if(fEmpId.value ===user.empId)
    {
        fPassword.textContent =`Your Password is: ${user.password}`;
    }
})