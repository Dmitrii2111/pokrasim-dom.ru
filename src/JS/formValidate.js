let formValue = {}
let btn = document.querySelector('#submit')
let email = document.querySelector('#email')


btn.addEventListener('click', validateForm)

 function validateForm() {
   let arr = [...document.getElementsByTagName('input')]
   console.log(arr)
   arr.forEach(element => {
      if(element.id != 'submit') {
         formValue[element.id] = element.value
         if((!element.value)) {
            let errrorInput = document.querySelector(`#${element.id}`) 
            errrorInput.classList.add('error')
            let visibility = 'visible'
            showMessage(errrorInput, visibility)
          } 
          else if ((element.value) && (element.id != 'email')){
             let correctInput = document.querySelector(`#${element.id}`)
             correctInput.classList.remove('error')
             let visibility = 'hidden'
             showMessage(correctInput, visibility)
          } else if ((element.value) && (element.id === 'email')){
             validateEmail(email)
          } else return
      }
   });
}

function validateEmail(email) {
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   if (reg.test(email.value) === false) {
      let errrorInput = document.querySelector(`#${email.id}`) 
      errrorInput.classList.add('error')
   } else {
      let correctInput = document.querySelector(`#${email.id}`)
      correctInput.classList.remove('error')
      let visibility = 'hidden'
      showMessage(correctInput, visibility)
   }
}

function showMessage(input, visibility){
   input.nextElementSibling.style = `visibility: ${visibility};`
}
