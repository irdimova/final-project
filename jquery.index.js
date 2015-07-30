(function($) {  
  
   // find the position of the first image  
   var firstImage = $('#slider-content .slider-img:first').index();  
   // find the position of the last image  
   var lastImage = $('#slider-content .slider-img:last').index();  
  
   // set current, next and previous image  
   var currentImage = firstImage  
   var nextImage = firstImage + 1  
   var prevImage = lastImage  
  
   var sliderImages = $('#slider-content .slider-img');  
   var sliderContent = $('#slider-content');  
  
   // find the image width    
   var sliderImageWidth = parseFloat(sliderImages.eq(0).css('width'));  
  
   // when clicking the next button find out the next image position (nextImage)  
   // if currentImage == lastImage - your next image (nextImage) will grab the position of the firstImage  
   // otherwise nextImage = currentImage + 1  
  
   // calculate how much sliderContent will slide   
   // use animate function to slide  
   // set nextImage to be current image   
   $('#button-next').click(function() {  
       nextImage = currentImage == lastImage ? firstImage : currentImage + 1;  
       sliderContent.animate({ "left": -nextImage * sliderImageWidth });  
       currentImage = nextImage;  
       e.preventDefault();    
   });  
   $('#button-prev').click(function() {  
       prevImage = currentImage == firstImage ? lastImage : currentImage - 1;  
       sliderContent.animate({ "left": -prevImage * sliderImageWidth });  
       currentImage = prevImage;  
       e.preventDefault();    
   });  
})(jQuery);  

//function for button go back
  function goBack() {
           window.history.back();
       }