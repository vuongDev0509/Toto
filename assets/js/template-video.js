;( function( w, $ ) {
    'use strict';

  function loadWidthMaps(){
    const isMaps = $('.page_2 .bt_image_maps');
    const isImageMaps =  $('.page_2 .bt_image_maps img');
    let widthImage = isImageMaps.width();
    isMaps.css("width", widthImage);
  }

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

  function loadPage3(){

    const isPage2 = $('.page-template-template-video #page_2');
    const isPage3 = $('.page-template-template-video #page_3');
    const isLogo = $('.page-template-template-video .bt-header-main .bt-logo');

    jQuery(document).on( 'click', '.bt-logo-site.next-step-3', function(){
      isLogo.addClass('hidden');
      isPage3.removeClass('hidden');
      isPage2.addClass('hidden');
      isPage3.addClass('active');
    });

  }

  function playTemplateVideo(){
    let isIconPlay = $('.page-template-template-video #page_3 .icon-play');
    let isTplvd    = $('.page-template-template-video');
    let isBtnPlay  = $('.page-template-template-video .bt-icon-play');
    let isPage3    = $('.page-template-template-video #page_3');
    const isLogo   = $('.bt-header-main .bt-logo');
    const isFooter = $('.page-template-template-video .site-footer');

    isIconPlay.click(function(){

      isTplvd.addClass('active');
      isPage3.removeClass('active');
      isPage3.addClass('hidden');
      isFooter.addClass('active');
      isLogo.removeClass('hidden');
      isLogo.addClass('step-video');
      $('.page-template-template-video .bt-header-main .bt-logo-site').removeClass('next-step-3');

      var myVideo = document.querySelector(".page-template-template-video.active .owl-item.active .video-js");
      var owl = jQuery('.owl-carousel');

      if (myVideo.paused){
          myVideo.play();
          myVideo.onended = function() {
              owl.trigger('next.owl.carousel');
          };
          jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').removeClass('paused');
          isBtnPlay.removeClass('play');
      }
      else{
          myVideo.pause();
          jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').addClass('paused');
          isBtnPlay.addClass('play');
      }
    })
  }


  function loadTimelines(){
    let isBtnPlay         = $('.bt-icon-play');
    let btnStopVdMobile   = $('.be-carousel-timelines-main .bt-item-page-mobile .bt-menu-mobile .item');
    const btnShowtimeline = $('.page_2 .bt_list_item_header_video .heading');
    const listTtimeline   = $('.bt-section-tpl-vd .bt-carousel-tpldv');
    const allSection      = $('.page-template-template-video .site-main .bt-section');
    const footerCarousel  = $('.page-template-template-video .site-footer')

    // show timeline carousel
    btnShowtimeline.click(function(){

      let dataTimeline = $(this).data('timelines');


      if (dataTimeline != "" && dataTimeline != undefined) {

        allSection.removeClass('active');
        allSection.addClass('hidden');
        footerCarousel.addClass('active');
        $('.page-template-template-video .bt-section-tpl-vd').removeClass('hidden');
        $('.page-template-template-video .bt-section-tpl-vd').addClass('active');
        footerCarousel.find('.bt-carousel-tpldv').hide();
        footerCarousel.find(`.bt-carousel-tpldv.${dataTimeline}`).show();
        listTtimeline.hide();
        $(`.bt-section-tpl-vd .bt-carousel-tpldv.${dataTimeline}`).show();

        // load carousel
        let idParents  = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${dataTimeline}`).attr('id');
        let idChildrens = $(`.site-footer .bt-carousel-tpldv.${dataTimeline}`).attr('id');

        // call funtion load carousel timelines
        loadTempalteTimelines(idParents, idChildrens)

        // call funtion first video play when load timelines

        $('.be_timelines_item_3 .active.current').trigger('click')
        $('.be_timelines_item_1 .active.current').trigger('click')
        setTimeout( () => {
          playVideo(idParents);
        }, 1000 )

      }

    });

    // start icon play video in timelines
    // isBtnPlay.click(function(ev){
    //     let idTimelines = $(this).parents('.be-carousel-timelines-main').attr('id');
    //     let myVideo     = document.querySelector(`#${idTimelines}.be-carousel-timelines-main .owl-item.active .video-js`);

    //     if (myVideo.paused){
    //         $(this).children('.icon-play-vd').removeClass('paused');
    //         $(this).removeClass('play');
    //         myVideo.play();
    //     }
    //     else{
    //       $(this).children('.icon-play-vd').addClass('paused');
    //       $(this).addClass('play');
    //       myVideo.pause();
    //     }
    // });

    // // stop all videos ver mobile
    // btnStopVdMobile.click(function(ett){
    //     jQuery('.be-carousel-timelines-main .owl-item.active .bt-icon-play > .icon-play-vd').addClass('paused')
    //     isBtnPlay.addClass('play');
    //     $.each( '.be-carousel-timelines-main video', function (index, value ) {
    //         value.pause();
    //     } )
    // });

  }

  function timelinesNavigation() {
      let isTimelines = $('.be-carousel-timelines-main');
      let tplVideo    = $('.page-template-template-video');

      let isBtnPlay         = $('.bt-icon-play');
      let btnStopVdMobile   = isTimelines.find('.bt-item-page-mobile .bt-menu-mobile .item');
      const btnShowtimeline = $('.page_2 .bt_list_item_header_video .heading');
      const listTtimeline   = $('.bt-section-tpl-vd .bt-carousel-tpldv');
      const allSection      = tplVideo.find('.site-main .bt-section');
      const footerCarousel  = tplVideo.find('.site-footer');

      let isNavigation = $('.be_timelines_navigation');
      let ctaNavi      = isNavigation.find('.be_timelines_navigation__item span');
      const ctaTotoBus = isNavigation.find('.bt-back');

      ctaTotoBus.click(function(){
        __renderPage2()
      })

      if (isNavigation.length <= 0) return;

      ctaNavi.click(function(){
        let dataTimlines = $(this).data('timeline');

        if (dataTimlines == 'be_timelines_item_0') {
          showTimelinesTotoBus();
          let data = "bt-sync1";
          playVideo(data);
        }else {
          if (dataTimlines.length <= 0) return;
          __checkTimlines(dataTimlines);
        }
      });

      function __renderPage2(){
        const isTotoBus = tplVideo.find('#page_2');
        allSection.removeClass('active');
        allSection.addClass('hidden');

        isTotoBus.removeClass('hidden');
        isTotoBus.addClass('active');
        footerCarousel.addClass('vvv')
        footerCarousel.removeClass('active');
        footerCarousel.find('.bt-section').removeClass('bt-section-content-footer')
      }

      function __checkTimlines(data) {

        $.each( allSection.find('video') , function (index, value ) {
            value.pause();
        } );
        allSection.removeClass('active');
        allSection.addClass('hidden');
        footerCarousel.addClass('active');
        $('.page-template-template-video .bt-section-tpl-vd').removeClass('hidden');
        $('.page-template-template-video .bt-section-tpl-vd').addClass('active');
        footerCarousel.find('.bt-carousel-tpldv').hide();
        footerCarousel.find(`.bt-carousel-tpldv.${data}`).show();
        listTtimeline.hide();
        $(`.bt-section-tpl-vd .bt-carousel-tpldv.${data}`).show();

        //load carousel
        let idParents  = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${data}`).attr('id');
        let idChildrens = $(`.site-footer .bt-carousel-tpldv.${data}`).attr('id');

        // call funtion load carousel timelines
        loadTempalteTimelines(idParents, idChildrens)

        let ssActive = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${data}`);
        $.each( ssActive.find('.owl-item.active video') , function (index, value ) {
            value.play();
        } );
      }
  }

  // load carousel timelines
  function loadTempalteTimelines(idParents, idChildrens) {

    const isMenuMobile    = $('.page-template-template-video .bt-item-page-mobile .bt-menu-mobile');
    let isBtnPlay         = $('.bt-icon-play');
    let carouselParents   = $(`#${idParents}`);
    let carouselChildrens = $(`#${idChildrens}`);
    let itemOwl           = '.owl-item';
    let __i               = 1;
    let totalItemParents  = carouselParents.find('.bt-item-vd').length;
    var videos            = carouselParents.find('video');
    let dataOwlCarousel;

    var timelinesParents = carouselParents.owlCarousel({
      // video:true,
      startPosition: 11,
      items:1,
      loop:false,
      margin:0,
      autoplay:false,
      autoplayTimeout:6000,
      autoplayHoverPause:false,
      nav: false,
      dots: true
    }).on('changed.owl.carousel', onHandleParents);

    function onHandleParents(el) {

        dataOwlCarousel = $(this).data('owl.carousel');
        var loop = dataOwlCarousel.options.loop;
        if(loop){
            var count = el.item.count-1;
            var current = Math.round(el.item.index - (el.item.count/2) - .5);
            if(current < 0) {
                current = count;
            }
            if(current > count) {
                current = 0;
            }
        }else{
            var current = el.item.index;
        }
        var owl_thumbnail = carouselChildrens.data('owl.carousel');
        var itemClass = "." + owl_thumbnail.options.itemClass;
        var thumbnailCurrentItem = carouselChildrens
        .find(itemClass)
        .removeClass("current")
        .eq(current);

        thumbnailCurrentItem.addClass('current');
        if (!thumbnailCurrentItem.hasClass('active')) {
            var duration = 300;
            carouselChildrens.trigger('to.owl.carousel',[current, duration, true]);
            __i = current;
        }

        var cVideo = document.querySelector(`.page-template-template-video #${idParents} .owl-item.active .video-js`);
        if (cVideo.paused){
            jQuery(`#${idParents} .owl-item .bt-item-vd .bt-meta>.bt-icon-play .icon-play-vd`).removeClass('paused');
            isBtnPlay.removeClass('play');
        }

    }

    var timelinesChilrens = carouselChildrens.owlCarousel({
        startPosition: 11,
        items:11,
        loop:false,
        margin:10,
        autoplay:false,
        nav: false,
        dots: false,
        mouseDrag:false,
        touchDrag: false,
        // checkVisible:false,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            640:{
                items:3,
                nav:true
            },
            768:{
                items:4,
                nav:true
            },
            992:{
               items:5,
               nav:true
            },
            1280:{
                items: 7,
                nav:true,
                margin: 10,
            },
            1440:{
                items:11,
                nav:false,
                margin:0
            },
            1800:{
                margin:10
            }
        },
        onInitialized: function (e) {
            var thumbnailCurrentItem =  $(e.target).find(itemOwl).eq(this._current);
            thumbnailCurrentItem.addClass('current');
        },
    })
    .on('click', itemOwl, function(e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex =  $(e.target).parents(itemOwl).index();
        carouselParents.trigger('to.owl.carousel',[itemIndex, duration, true]);
        __i = itemIndex+1;
    }).on("changed.owl.carousel", function (el) {
        var number = el.item.index;
        dataOwlCarousel = carouselParents.data('owl.carousel');
        dataOwlCarousel.to(number, 100, true);
        __i = number+1;
    });


    carouselChildrens.on('changed.owl.carousel', function(eventt) {


        setTimeout( () => {
            let positionOwlCurrent4 =  jQuery(`#${idChildrens}.bt-carousel-tpldv .owl-item.current`).offset();

            jQuery(".bt-icon-spacing>img").css({
                "left": positionOwlCurrent4.left
            }).fadeIn(500)
        }, 1000 )

        let isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');

        isBtnPlay.removeClass('play');

    });

    carouselParents.on('changed.owl.carousel', function(event) {
        let positionOwlCurrent2 =  jQuery(`.bt-carousel-tpldv#${idChildrens} .owl-item.current`).offset();
        let isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');

        isBtnPlay.removeClass('play');
        jQuery(".bt-icon-spacing>img").css({
            "left": positionOwlCurrent2.left
        }).fadeIn(500);

        $.each( videos, function () {
            const v = $( this )

            setTimeout( () => {
                const isActive = v.parents( '.owl-item.active' ).length
                var owl = jQuery('.owl-carousel');

                if( isActive ) {
                    // Play

                    this.play()
                    this.onended = function() {
                        owl.trigger('next.owl.carousel');
                    };
                } else {
                    // Stop
                    this.pause()
                }
            }, 1000 )

        } );

      carouselParents.on('resized.owl.carousel', function(event) {
          $.each( videos, function () {
              const v = $( this )

              setTimeout( () => {
                  const isActive = v.parents( '.owl-item.active' ).length
                  var owl = jQuery('.owl-carousel');

                  if( isActive ) {
                      this.pause()
                      jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').addClass('paused');
                      isBtnPlay.addClass('play');
                  }
              }, 1200 )

          } );
      });

    });

  }

  function loadTimelinesTotoBus(){
    let btnTotoBus = $('#page_2 .heading.be_timelines_toto_bus');

    // btnTotoBus.click(function(){
    //   //showTimelinesTotoBus();
    //   let data = "bt-sync1";
    //   playVideo(data);
    // });
  }

  function mapsToTimelines(){
    let itemMaps = $('.page_2 .bt_image_maps .item-location');
    const isTimelinesTotoBus = $('#bt-sync1');
    itemMaps.click(function(){
      let dataPosition = $(this).data('position');
      var duration = 300;

      showTimelinesTotoBus();
      setTimeout( () => {
          isTimelinesTotoBus.trigger('to.owl.carousel',[dataPosition, duration, true]);
      }, 1200 )


    });
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
    footerCarousel.find('#bt-sync2').show();

    parentsTimelines.find('.bt-carousel-tpldv').hide();
    parentsTimelines.find('#bt-sync1').show();

  }

  // first video play when load timelines
  function playVideo(data){
    let myVideo = document.querySelector(`#${data} .owl-item.active .video-js`);
    $(`#${data} .owl-item.active`).find('.bt-icon-play').removeClass('play');
    $(`#${data} .owl-item.active`).find('.icon-play-vd').removeClass('paused');
    myVideo.play();
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

  function comebackTimelinesMaps(){
    const isLogo       = $('.page-template-template-video .bt-logo .bt-logo-site');
    const mainTemplate = $('.page-template-template-video .site-main');
    const isMenuMobile = $('.page-template-template-video .bt-item-page-mobile .bt-menu-mobile');
    const footerVideo  = $('.page-template-template-video .site-footer')
    const allTimelines = $('.bt-section-tpl-vd .bt-carousel-tpldv');


    isLogo.click(function(){

      $.each( allTimelines.find('video') , function (index, value ) {
          value.pause();
      } );

      //$('#page .site-main #page_2').removeClass('hidden');
      // mainTemplate.removeClass('scroll')
      // mainTemplate.find('.bt-section').addClass('hidden');
      // mainTemplate.find('.bt-section').removeClass('active');
      // mainTemplate.find('#page_2').removeClass('hidden');
      // mainTemplate.find('#page_2').addClass('active');
      isMenuMobile.slideUp("swing");
      isMenuMobile.find('bt-btn-toggle').removeClass('active');
      footerVideo.removeClass('active');
    })
  }


  jQuery(window).on('load resize', function () {
    //loadWidthMaps();
    show_name_project_toto();
    back_map_all_step1();
  });

  $( document ).ready(function() {
    //loadPage3();
    back_map_all_step1();
    playTemplateVideo();
    loadTimelines();
    loadTimelinesTotoBus();
    mapsToTimelines();
    switchTotoBus();
    comebackTimelinesMaps();
    show_name_project_toto();
    timelinesNavigation();
  });



} )( window, jQuery );
