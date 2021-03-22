

// FAQ 
list.onclick = function(event){
   event.preventDefault()
   if ((event.target.tagName != 'DIV')) {
     return
   }
   let hidenElement = event.target.nextElementSibling;
   console.log(event.target)
   hidenElement.hidden = !hidenElement.hidden
   if(hidenElement.hidden == true) {
      event.target.style="font-weight: 400"
      
   } else {
      event.target.style="font-weight: 700"
   }
 }

// Модальные окна
document.addEventListener('DOMContentLoaded', function() {
   let modalCall = document.querySelectorAll('.__services_card')
   let overlay = document.querySelector('#overlay-modal')
   let closeButtons = document.querySelectorAll('.js-modal-close')
   modalCall.forEach( function(item) {
      item.addEventListener('click', function(e) {
         e.preventDefault()
         let modalId = this.getAttribute('data-modal')
         let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]')
         modalElem.classList.add('active')
         overlay.classList.add('active')
      })
   })
   closeButtons.forEach(function(item) {
      item.addEventListener('click', function(e) {
         this.parentNode.classList.remove('active')
         overlay.classList.remove('active')
      })
   })
})