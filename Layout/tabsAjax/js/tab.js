$(function () {

var textId = '#intro__text';

// Change text color
$('#buttonBlack').click( function() { $('#intro__text').css('color','#2B2A2C'); });
$('#buttonRed').click( function() { $('#intro__text').css('color','#dc1818'); } );

// Change buttom
$(document).ready(function() {
  $('#buttonRed').click(function() {
    $('#buttonRed').hide();
    $('#buttonBlack').show();
  });
  $('#buttonBlack').click(function() {
    $('#buttonBlack').hide();
    $('#buttonRed').show();
  });
});
