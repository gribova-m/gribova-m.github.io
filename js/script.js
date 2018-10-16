
$(document).ready(function(){

  // Menu button
  var link = $('.main-link');
  var link_active = $('.main-link_active');
  var main_nav = $('.main-nav-link');
  var nav_link = $('.main-nav-link a');

  link.click(function(){
    link.toggleClass('main-link_active');
    main_nav.toggleClass('main-nav-link_active');
  });
  nav_link.click(function(){
    link.toggleClass('main-link_active');
    main_nav.toggleClass('main-nav-link_active');
  });

  // Menu button when scrolling
  $(window).on('load scroll',function(){
    if ($(this).scrollTop() > 300) {
      $('.main-link').css({'opacity':'1'});
    }
    else  {$('.main-link').css({'opacity':'0'});}
  });

  // Modal
  var link = $('.portfolio-modal');
  link.on('click', function(event) {
    var work = $(this).attr('data-work');
    $('.modal-content').load(work + '.html');
  });

  // Animation
  new WOW().init();
});