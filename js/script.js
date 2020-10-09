'use strict' ;

$(function() {

  
  $('.maintop').hide().fadeIn(4000);

  $('.form_btn').click(function() {
    $('#contact').hide().fadeIn(2000);
  });

  $('#contact_btn').click(function() {
    $('#contact').hide().fadeIn(3000);
  });



  $('.skils_box').hover(
    function() {
      $(this).find('.hover_item').addClass('text_active');
    },
    function() {
      $(this).find('.hover_item').removeClass('text_active');
    }
  );

    $('.works').hide().fadeIn(6000);



  $('#site1_show').click(function(){
    $('#site1_modal').fadeIn('slow');
  });
  
  $('#site2_show').click(function(){
    $('#site2_modal').fadeIn('slow');
  });
  $('#site3_show').click(function(){
    $('#site3_modal').fadeIn('slow');
  });
  $('#site4_show').click(function(){
    $('#site4_modal').fadeIn('slow');
  });
  $('#site5_show').click(function(){
    $('#site5_modal').fadeIn('slow');
  });
  $('#site6_show').click(function(){
    $('#site6_modal').fadeIn('slow');
  });
  

  $('.close-modal').click(function() {
    $('#site1_modal').fadeOut();
    $('#site2_modal').fadeOut();
    $('#site3_modal').fadeOut();
    $('#site4_modal').fadeOut();
    $('#site5_modal').fadeOut();
    $('#site6_modal').fadeOut();
  });

});

