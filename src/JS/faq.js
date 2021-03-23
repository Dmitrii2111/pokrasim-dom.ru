// FAQ 

list.onclick = function(event){
   event.preventDefault()
   if (event.target.tagName === 'DIV') {
     let hidenElement = event.target.nextElementSibling;
     let arrow = event.target.childNodes[1]
     hidenElement.hidden = !hidenElement.hidden
     if(hidenElement.hidden == true) {
        arrow.style.transform = 'rotate(360deg)'
        event.target.style="font-weight: 400" 
     } else {
        arrow.style.transform = 'rotate(180deg)'
        event.target.style="font-weight: 700"
     }
   } else if
       (event.target.tagName === 'IMG') {
          let hidenElement = event.target.parentNode.nextElementSibling
          let text = event.target.parentNode
          hidenElement.hidden = !hidenElement.hidden
          
          if(hidenElement.hidden == true) {
            text.style="font-weight: 400" 
            event.target.style.transform = 'rotate(360deg)'
            
         } else {
            text.style="font-weight: 700"
            event.target.style.transform = 'rotate(180deg)'
            
         }
  
   } else return
   
 }