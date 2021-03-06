jQuery(function ($) {
	"use strict";

  const VideoTemplate = ($itemParents, $itemChildrens) =>{
    const $tplVideo      = $('.page-template-template-video');
    const $mainSite      = $tplVideo.find('.site-main');
    const $logo          = $tplVideo.find('.bt-logo-site')  

    const $stepParents   = $itemParents.find('.owl-item');
    const $ctaPlay       = $itemParents.find('.bt-meta .bt-icon-play');
    const $itemsMobile   = $itemParents.find('.bt-item-page-mobile');
    const $navDesktop    = $itemParents.find('.bt-items-page .bt-title');
    let $allVideo        = $itemParents.find('video');

    const $iconSmiley    = $itemChildrens.find('.bt-smiley > img');

    const $ctaNavMobile  = $itemsMobile.find('.toggole-menu-mobile');
    const $navMobile     = $itemsMobile.find('.bt-menu-mobile .item');
    const $ctaToggleNav  = $itemsMobile.find('.bt-btn-toggle');
     
    const $stepPhoto     = $stepParents.find('.bt-gallery-step-vd');
    const $stepDessins   = $stepParents.find('.bt-dessins-step-vd');

    const $ssVideo       = $mainSite.find('.bt-section-tpl-vd');
   
    __startVdTemplate($itemParents);

    $logo.click(function(e){
      e.preventDefault();
      __backHomepage();
    })

    $navDesktop.click(function(v){
      __stopAllVideo();
    });

    $navMobile.click(function(v){
      __stopAllVideo();
    });

    $ctaNavMobile.click(function(e){
      e.preventDefault();
      MenuMobile($itemParents);
    })

    // redirect to inner smiley
    $iconSmiley.click(function(e){
      e.preventDefault()
      e.stopPropagation()
      let $dataSs = $(this).data('section')
      $mainSite.addClass('scroll')
      __redirectStepVd($dataSs)                            
    })

    $itemParents.find('.__navs-videos .__navs-videos-step').click(function(){
      let $dataPage = $(this).data('page');
      $mainSite.removeClass("scroll")
      __redirectStepVd($dataPage)
    });

    // redirect to inner page
    $itemParents.find('.__navs-videos .__step-inner').click(function(){
      let $dataPage = $(this).data('page');
      $(this).parents('.bt-item-vd').find(`.bt-${$dataPage}-step-vd`).addClass('active');
    })

    // event for icon play video when click
    function __handleIconPlay($data){
        
        $ctaPlay.find('.icon-play-vd').click(function(){
            let $vdActive = document.querySelector(`#${$data} .owl-item.active .video-js`);

            if ($vdActive.paused){
                $(this).removeClass('paused');
                $ctaPlay.removeClass('play');
                $vdActive.play();
            }else{
                $(this).addClass('paused');
                $ctaPlay.addClass('play');
                $vdActive.pause();
            }
        });
    }

    $( 'body' ).on( 'click', '.bt-comeback .icon-comeback', __comebackSection)

    function __comebackSection(){  
      __showHomePage()                           
      $(this).parents('.bt-item-details').removeClass('active')                        
    }

    function __showHomePage(){
      $mainSite.find('.bt-section').removeClass('active')
                                    .addClass('hidden')
      $mainSite.find('.bt-section-tpl-vd').removeClass('hidden')
                                          .addClass('active') 
    }

    function __redirectStepVd($data){
     
      $mainSite.find('.bt-section').addClass('hidden')
                                  .removeClass('active')
      $mainSite.find(`.bt-section.${$data}`).addClass('active')
                                  .removeClass('hidden')                       
    }

    function __backHomepage(){
      __showHomePage()
      $mainSite.removeClass('scroll');
      $stepDessins.removeClass('active')
      $stepPhoto.removeClass('active')                                      
      $itemParents.trigger("to.owl.carousel", [0, 500, true])
      $itemsMobile.find('.bt-menu-mobile').removeClass('active')
                                          .slideUp("swing")
      setTimeout( () => {
        __stopAllVideo()
      }, 1000 )

    }

    // show all video when click step for children carousel
    function __showAllVideo(){
      
      $itemChildrens.find('.owl-item').each(function(index){
        $(this).click(function(){
          $mainSite.removeClass('active')
          $ctaToggleNav.removeClass('active')
          $stepPhoto.removeClass('active')
          $stepDessins.removeClass('active')
          $ctaToggleNav.removeClass('active')

          $mainSite.find('.bt-section').removeClass('active')
          $ssVideo.removeClass('hidden')

          $itemsMobile.find('.bt-menu-mobile').removeClass('active')
                                              .slideUp("swing")
        })
      });
    }

    function __stopAllVideo(){
      $ctaPlay.addClass('play');
      $ctaPlay.find('.icon-play-vd').addClass('paused');
      let $Videos        = $mainSite.find('video');
      $.each( $Videos, function (index, value ) {
          value.pause();
      } )
    }

    function __startVdTemplate($data){
        __renderVdTemplate()
        __stopAllVideo()
        __showAllVideo()  

        let $id = $data.attr('id')
        let $vdActive = document.querySelector(`#${$id} .owl-item.active .video-js`);
       
        $(`#${$id} .owl-item.active`).find('.bt-icon-play').removeClass('play');
        $(`#${$id} .owl-item.active`).find('.icon-play-vd').removeClass('paused');
        if($vdActive){
            $vdActive.play();
        }
        
        __handleIconPlay($id)
    }

    function __renderVdTemplate(){
      
      if ($itemParents.length <= 0 || $itemChildrens.length <= 0) return;

      __runCarousel($itemParents, $itemChildrens);
     
      function __childrenOnchange($data) {
        
        $data.on('changed.owl.carousel', function(e) {
          setTimeout( () => {

            let $itemCurrent = $data.find('.owl-item.current');
            $(".bt-icon-spacing>img").css({
              "left": $itemCurrent.left
            }).fadeIn(500)

          }, 1000 )
          $ctaPlay.removeClass('play');
        });
  
      }
  
      function __parentOnchange($itemParents, $itemChildrens){
        $itemParents.on('changed.owl.carousel', function(event) {
          
          let $itemCurrent = $itemChildrens.find('.owl-item.current').offset();
          $ctaPlay.removeClass('play');
  
          $(".bt-icon-spacing>img").css({
            "left": $itemCurrent.left
          }).fadeIn(500);
  
          $.each( $allVideo, function () {
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
  
          __parentOnResized($itemParents);
        });
      }
  
      // event resized for carousel when the window gets resized.
      function __parentOnResized($data){
        $data.on('resized.owl.carousel', function(event) {
          $.each( $allVideo, function () {
            const v = $( this )
            setTimeout( () => {
              const isActive = v.parents( '.owl-item.active' ).length
              var owl = $('.owl-carousel');
              if( isActive ) {
                this.pause()
                $ctaPlay.addClass('paused')
                        .addClass('play')
              }
            }, 1200 )
          } );
        });
      }
  
      function __runCarousel($itemParents, $itemChildrens) {
        let $slidesPerPage  = 11;
        let $itemCarousel   = '.owl-item';
        let $totalChildrens = $itemParents.find('.bt-item-vd').length;
        let $vdCurrent      = 1;
  
        let $carouselParent = $itemParents.owlCarousel({
          startPosition: $slidesPerPage,
          items:1,
          loop:false,
          margin:0,
          autoplay:false,
          autoplayTimeout:6000,
          autoplayHoverPause:false,
          nav: false,
          dots: true
        }).on('changed.owl.carousel', callBackParents);
  
        function callBackParents(el) {
          let $owl_slider = $(this).data('owl.carousel'),
              loop        = $owl_slider.options.loop;
  
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
  
          var owl_thumbnail = $itemChildrens.data('owl.carousel');
          var itemClass = "." + owl_thumbnail.options.itemClass;
          var currentItem = $itemChildrens
          .find(itemClass)
          .removeClass("current")
          .eq(current);
  
          currentItem.addClass('current');
          if (!currentItem.hasClass('active')) {
            var duration = 300;
            $itemChildrens.trigger('to.owl.carousel',[current, duration, true]);
            $vdCurrent = current;
          }
  
          let vdActive = document.querySelector(".owl-item.active .video-js");
          if (vdActive.paused){
            $ctaPlay.removeClass('play');
            $ctaPlay.find('.icon-play-vd').removeClass('paused');        
          }
        }
  
        let $carouselChildren = $itemChildrens.owlCarousel({
            startPosition: $slidesPerPage,
            items:$slidesPerPage,
            loop:false,
            margin:10,
            autoplay:false,
            nav: false,
            dots: false,
            mouseDrag:false,
            touchDrag: false,
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
                var thumbnailCurrentItem =  $(e.target).find($itemCarousel).eq(this._current);
                thumbnailCurrentItem.addClass('current');
            },
        })
        .on('click', $itemCarousel, function(e) {
            e.preventDefault();
            var duration = 300;
            var itemIndex =  $(e.target).parents($itemCarousel).index();
            $itemParents.trigger('to.owl.carousel',[itemIndex, duration, true]);
           
        }).on("changed.owl.carousel", function (el) {
            var number = el.item.index;
            var $owl_slider = $itemParents.data('owl.carousel');
            $owl_slider.to(number, 100, true);
           
        });
  
        __childrenOnchange($itemChildrens)
        __parentOnchange($itemParents, $itemChildrens)
        
      }
    }
  }

  const MenuMobile = ($data) =>{
    const $tplVideo   = $('.page-template-template-video')
    const $isNav      = $tplVideo.find('.bt-item-page-mobile')
    const $menuMobile = $isNav.find('.bt-menu-mobile');
    const $toggleMenu = $isNav.find('.bt-btn-toggle');
    let $metaMenu     = $data.find('.owl-item .bt-item-vd .bt-meta');

    $metaMenu.toggleClass('active');
    $toggleMenu.toggleClass('active');
    $menuMobile.toggleClass('active')
               .slideToggle("swing")

  }

  const RenderMetaHeader = () =>{
    const $metaHd  = $('.bt-section-header-tpldv .bt-meta-hd');
    let $widthMeta = $metaHd.width();
    $metaHd.height($widthMeta);
  }

  // render set width and height for video
  const RenderVideo = () =>{
    
    let isVideo      = $('.bt-carousel-tpldv .video-js');
    let widthWindow  = window.innerWidth;
    let heightWindow = window.innerHeight;

    if(widthWindow > heightWindow){
        let widthVideo = widthWindow * 1.3;
        isVideo.width(widthVideo);
        let heightVideo = widthVideo / 1.78;
        isVideo.height(heightVideo);
    }else {

        if(widthWindow > 767){
            let widthVideo = widthWindow * 2.5;
            isVideo.width(widthVideo);
            let heightVideo = widthVideo / 1.78;
            isVideo.height(heightVideo);
        }else {
            let widthVideo = widthWindow * 3;
            isVideo.width(widthVideo);
            let heightVideo = widthVideo / 1.78;
            isVideo.height(heightVideo);
        }
    }
  }

  // carousel page inner (team, artists)
  const RunCarouselInner = () =>{
    $('.bt-carousel-page-inner').owlCarousel({
      loop:false,
      margin:30,
      nav:true,
      autoplay:false,
      dots: false,
      responsive:{
          0:{
              items:1,
              dots: true,
              nav:false,
          },
          640:{
              items: 2,
              dots: true,
              nav:false,
          },
          992:{
              items: 3,
          },
          1200:{
              items:4
          }
      }
    });
  }

  const TotoBusVideo = () =>{

    const $tplVideo      = $('.page-template-template-video')
    const $ctaShow       = $tplVideo.find('#page_2 .heading.be_timelines_toto_bus');
    const $itemParents   = $tplVideo.find('#bt-parents-video');
    const $itemChildrens = $tplVideo.find('#bt-childrens-video');
    const $mainSite      = $tplVideo.find('.site-main');
    const $totoBus       = $mainSite.find('.bt-section-tpl-vd');
    const $footer        = $tplVideo.find('.site-footer');
  

    $ctaShow.click(function(){
        VideoTemplate($itemParents, $itemChildrens)
        __showTotoBusVideo();
    });

    function __showTotoBusVideo(){
        $totoBus.siblings().removeClass('active')
                .siblings().addClass('hidden')
        
        $totoBus.removeClass('hidden')
                .addClass('active')

        $footer.addClass('active')
        $footer.find('.bt-carousel-tpldv').hide();
        $totoBus.find('.bt-carousel-tpldv').hide();
        $itemChildrens.show();
        $itemParents.show();
    }
  }

  const HanldeHeader = () =>{
    const $tplVideo    = $('.page-template-template-video');
    const $header      = $tplVideo.find('.bt-section-header-tpldv');
    const $ssTimelines = $tplVideo.find('#page_2');

    let $itemMenu      = $header.find('.bt_list_item_header_video .heading');
    let $itemHeader    = $header.find('.be_header_items_template')

    __loadSsTimelines()
    __showItemHeader()
    __handleMenuBar()
   
    function __loadSsTimelines(){
        $header.find('.bt-meta-hd').click(function(){
            $tplVideo.addClass('active')
            $ssTimelines.addClass('active')
            $tplVideo.find('.bt-logo-site').addClass('next-step-3')
        })
    }

    function __showItemHeader(){
        $itemMenu.click(function(){
            let dataTemplate = $(this).data('template');
            $itemHeader.removeClass('active');
            $(`.bt-section-header-tpldv .be_header_items_template.${dataTemplate}`).addClass('active');
        });
    }

    function __handleMenuBar(){
        $('.toggle-menu-bar').on('click',function(){
            var templ_menu = $(this).parent();
            templ_menu.toggleClass('close');
            $(this).toggleClass('close');
        });
    }

  }

  const SecondVideo = () =>{
    const $tplVideo           = $('.page-template-template-video');
    const $footer             = $tplVideo.find('.site-footer');
    let $secondVideo          = $('#toto-second-videos')
    let $secondVideoStep      = $('#steps-second-videos')
    let $setting_second_video = tv_settings.second_video;
    __showSecondVideo()

    //Event show step second Video 
    function __showSecondVideo(){
        $('.bt-carousel-tpldv .icon-switch-next').on('click',function(){
            VideoTemplate($secondVideo, $secondVideoStep)

            $tplVideo.find('.bt-carousel-tpldv').hide();
            $secondVideo.show();
            $secondVideoStep.show();

            var icon_img = $setting_second_video.steps.icon;
            var img =   $('.bt-section-content-footer .bt-icon-spacing img');
            var bg_text = $setting_second_video.steps.background_point;
            var color_text = $setting_second_video.steps.text_color;
  
            //Steps
            img.attr('src',icon_img);
            img.css('left','16px');
            $secondVideoStep.find('.bt-numerical-order').css('background-color',bg_text);
            $secondVideoStep.find('.bt-numerical-order').css('color',color_text);
            $secondVideoStep.find('.bt-numerical-order').css('font-weight','bold');
            $secondVideoStep.find('.bt-title').css('color',color_text);
            $secondVideoStep.find('.bt-title').css('font-weight','bold');
  
            //Video
            $secondVideo.find('.bt-step').css('background-color',$setting_second_video.menu.background_color);
            $secondVideo.find('.bt-step').css('color',$setting_second_video.menu.text_color);
  
            // secondVideo
  
            $secondVideo.find('.bt-comeback').removeClass('hidden')

            $.each( $('#bt-sync1').find('video') , function (index, value ) {
                value.pause();
            } );
      
            $.each( $secondVideo.find('video') , function (index, value ) {
                value.pause();
            } );
        });
    }
  }

  const TimelinesTemplate = () =>{
    const $tplVideo      = $('.page-template-template-video');
    const $ssTimelines   = $tplVideo.find('#page_2');
    const $mainSite      = $tplVideo.find('.site-main');
    const $itemTimelines = $ssTimelines.find('.bt_list_item_header_video .heading')
    const $footer        = $tplVideo.find('.site-footer');
    const $isNavigation  = $('.be_timelines_navigation');
    const $ctaNavi       = $isNavigation.find('.be_timelines_navigation__item span');
    const $itemMaps      = $ssTimelines.find('.bt_image_maps .item-location');
    const $ctaComeback   = $('.be_timelines_navigation__item .bt-back')
    const $ctaTotoBus    = $isNavigation.find('.bt-back')

    __showTimelinesCarousel()
    __timelinesNavigation()

    $ctaComeback.click(function(){
      $mainSite.find('.bt-section').removeClass('active');
      $mainSite.find('.bt-section').addClass('hidden');
      $footer.removeClass('active')

      $ssTimelines.addClass('active')
      $ssTimelines.removeClass('hidden')

      let $Videos = $mainSite.find('video');
      $.each( $Videos, function (index, value ) {
          value.pause();
      } )
    })

    $itemMaps.click(function(){
      let $idParents   = $('#bt-parents-video');
      let $idChildrens = $('#bt-childrens-video');
      let dataPosition = $(this).data('position');
      var duration = 300;

      __activeCarousel()  
      VideoTemplate($idParents, $idChildrens)
      $idChildrens.show()
      $idParents.show()
      setTimeout( () => {
        $idParents.trigger('to.owl.carousel',[dataPosition, duration, true]);
    }, 1200 )
    });

    function __timelinesNavigation(){
      $ctaNavi.on('click',function(e){
        e.preventDefault()
        e.stopPropagation()
        let $dataTimlines = $(this).data('timeline');
  
        if ($dataTimlines == 'be_timelines_item_0') {
          __showTimelinesTotoBus()
        }else{
          if ($dataTimlines.length <= 0) return;
          __checkTimlines($dataTimlines);
        }
      });
    }

    function __activeCarousel(){
      $mainSite.find('.bt-section').removeClass('active');
      $mainSite.find('.bt-section').addClass('hidden');
      $mainSite.find('.bt-section-tpl-vd').removeClass('hidden');
      $mainSite.find('.bt-section-tpl-vd').addClass('active');
      $mainSite.find('.bt-section-tpl-vd .bt-carousel-tpldv').hide();
      
      $footer.addClass('active');
      $footer.find('.bt-carousel-tpldv').hide();
    }

    function __checkTimlines(data){
      __activeCarousel()
      $footer.find(`.bt-carousel-tpldv.${data}`).show();  
      $mainSite.find(`.bt-section-tpl-vd .bt-carousel-tpldv.${data}`).show();

      //load carousel
      let $idParents  = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${data}`).attr('id');
      let $idChildrens = $(`.site-footer .bt-carousel-tpldv.${data}`).attr('id');  
      VideoTemplate($(`#${$idParents}`), $(`#${$idChildrens}`))

    }

    function __showTimelinesTotoBus(){
      const $itemParents = $('#bt-parents-video')
      const $itemChildrens = $('#bt-childrens-video')
      __activeCarousel()
      $itemChildrens.show();
      $itemParents.show();
      VideoTemplate($itemParents, $itemChildrens)
    }

    function __showTimelinesCarousel(){
      $itemTimelines.click(function(){
        let $dataTimeline = $(this).data('timelines');

        if ($dataTimeline != "" && $dataTimeline != undefined) {
         
          let $idParents     = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${$dataTimeline}`).attr('id');
          let $idChildrens   = $(`.site-footer .bt-carousel-tpldv.${$dataTimeline}`).attr('id');
          let $itemParents   = $(`#${$idParents}`)
          let $itemChildrens = $(`#${$idChildrens}`)
          VideoTemplate($itemParents, $itemChildrens)
          __activeCarousel()
          $itemParents.show()
          $itemChildrens.show()
        }
      });
    }
  }

  $(window).on('resize', function () {
    RenderMetaHeader()
    RenderVideo()
  });

  $(window).on('load', function () {

  });

  $(document).ready(function () {
    HanldeHeader()
    RenderMetaHeader()
    RenderVideo()
    RunCarouselInner()
    TotoBusVideo()
    SecondVideo()
    TimelinesTemplate()
  });
});
