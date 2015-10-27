//*PaintApp.JQ

//*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//*step 1
//*------------------------------------------------

$(document).ready(function() {
      // all code goes in here
    $('.box').on('click', function() {
    $(this).addClass('white');
    })
    
//*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//*step 2
//*------------------------------------------------

    $('.box').on('dblclick', function() {
    $(this).removeClass('white');
    })
//*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//*step 3
//*------------------------------------------------

    $('#reset').on('click', function() {
    $('.box').removeClass('white')
  })
//*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//*step 4
//*------------------------------------------------

    var color = 'white'
    
    $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })
  
  

  $('.box').on('click', function() {
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass(color);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(color)
  })
  
  
  
    $('.box').removeClass('red blue green yellow white');
    
    var colors = 'white green red blue yellow'

  $('.box').on('dblclick', function() {
    $(this).removeClass(color);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(color)
  })