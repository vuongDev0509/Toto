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
      $('#page_2').removeClass('hidden');
      $('#page_2').addClass('active');
      $('.site-footer').removeClass('active');
    })
  }



  function showTimelinesTotoBus(){
    let parentsTimelines  = $('.site-main .bt-section-tpl-vd');
    const footerCarousel  = $('.page-template-template-video .site-footer');

    parentsTimelines.siblings().removeClass('active');
    parentsTimelines.siblings().addClass('hidden');
    parentsTimelines.addClass('active');
    parentsTimelines.removeClass('hidden');

    footerCarousel.addClass('active');
    footerCarousel.find('.bt-carousel-tpldv').hide();
    footerCarousel.find('#bt-childrens-video').show();

    parentsTimelines.find('.bt-carousel-tpldv').hide();
    parentsTimelines.find('#bt-parents-video').show();

  }

  function switchTotoBus(){
    const secondVideo = $('#toto-second-videos');
    const img         = $('.bt-section-content-footer .bt-icon-spacing img');

    secondVideo.find('.icon-comeback').on('click',function(){
      $(this).parents('.bt-comeback').addClass('hidden');
      let icon_spacing = icon_spacing_setting.icon_spacing;
      $.each( secondVideo.find('video') , function (index, value ) {
          value.pause();
      } );
      img.attr('src',icon_spacing);
      img.css('left','16px');
      showTimelinesTotoBus();
    });
  }

  jQuery(window).on('load resize', function () {
    show_name_project_toto();
    back_map_all_step1();
  });

  $( document ).ready(function() {
    back_map_all_step1();
    switchTotoBus();
    show_name_project_toto();
  });

} )( window, jQuery );
