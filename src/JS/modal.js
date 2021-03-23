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