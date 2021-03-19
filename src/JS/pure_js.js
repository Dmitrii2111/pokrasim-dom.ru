
// FAQ 
list.onclick = function(event){
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

