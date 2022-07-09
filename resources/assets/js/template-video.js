;( function( w, $ ) {
    'use strict';


  function show_name_project_toto() {
    $('body').on('click','.next-step-project-1',function(e){
      e.preventDefault();
      $('.step1_page2').trigger('click');
      $(this).hide();
    })
  }
  function back_map_all_step1 () {
    $('body').on('click','.bt-section.bt-section-tpl-vd.active .bt-item-vd .bt-image-sub-vd img',function(e){
      e.preventDefault();
      $('#main section').addClass('hidden');
      $('#ss-timeline').removeClass('hidden');
      $('#ss-timeline').addClass('active');
      $('.site-footer').removeClass('active');
    })
  }

  jQuery(window).on('load resize', function () {
    show_name_project_toto();
    back_map_all_step1();
  });

  $( document ).ready(function() {
    back_map_all_step1();
    show_name_project_toto();
  });

} )( window, jQuery );
