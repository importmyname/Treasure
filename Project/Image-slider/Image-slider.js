 const item = document.querySelectorAll('img') ;
 const itemCount = item.length;
 const nextItem = document.querySelector('.next') ;
 const previousItem = document.querySelector('.previous')
 let count = 0 ;
 
 function showNextItem() {
     item[count].classList.remove('active') ;
     
     if (count < itemCount - 1) {
         count++ ;
     } else {
         count = 0 ;
     }

     item[count].classList.add('active') ;

 }
 function showPreviousItem() {
     item[count].classList.remove('active') ;

     if (count <  0 ) {
         count-- ;
     } else {
         count = itemCount - 1 ;
     }

     item[count].classList.add('active') ;

 }

 nextItem.addEventListener('click', showNextItem) ;
 nextItem.addEventListener('click', showpreviousItem ) ;


