$(document).ready(function(){
  var slideCount = $('.slide--img').length;
  var containerWidth = 100 * slideCount + '%';
  var gutters = 30 * (slideCount+2) + 'px';


  $('.slides').css({width:containerWidth});
  $('.slide--img').each(function() {
     $(this).css({width: 100/slideCount + '%'});
  });

  var currentSlide = 1;
  var locked = false;
  $('.slide-right').click(function(){
    if(!locked){
      locked = true;
      currentSlide++;
      if(currentSlide > slideCount) {
        currentSlide = 1;
      }

      $('.captions .active').animate({opacity:0}, 200, function(){
        $('.captions .active').hide();
        $('[data-caption="'+currentSlide+'"]').show().animate({opacity: 1},200).addClass('active');
      })
      

      var newLeftMargin = (currentSlide - 1) * -100 + '%';
      
      $('.slides').animate({marginLeft:newLeftMargin}, 400, function(){
        console.log('done');
        locked = false;
      });
    }
    
  });

  $('.slide-left').click(function(){
     if(!locked){
      locked = true;
      currentSlide--;
      if(currentSlide < 1) {
        currentSlide = slideCount;
      }

      var newLeftMargin = (currentSlide - 1) * -100 + '%';
      
      $('.slides').animate({marginLeft:newLeftMargin}, 400, function(){
        console.log('done');
        locked = false;
      });
    }
  });

});