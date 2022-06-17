jQuery(function ($) {
	"use strict";


  const VideoTemplate = () =>{
    const $tplVideo      = $('.page-template-template-video');
    const $itemParents   = $tplVideo.find('#bt-sync1');
    const $itemChildrens = $tplVideo.find('#bt-sync2');
    const $mainSite      = $tplVideo.find('.site-main');
    const $logo          = $tplVideo.find('.bt-logo-site')  

    const $stepParents   = $itemParents.find('.owl-item');
    const $ctaPlay       = $itemParents.find('.bt-meta .bt-icon-play');
    const $itemsMobile   = $itemParents.find('.bt-item-page-mobile');
    const $navDesktop    = $itemParents.find('.bt-items-page .bt-title');
    let $allVideo        = $itemParents.find('video');

    const $ctaNavMobile  = $itemsMobile.find('.toggole-menu-mobile');
    const $toggleNav     = $itemsMobile.find('.bt-btn-toggle');
    const $navMobile     = $itemsMobile.find('.bt-menu-mobile .item');
    const $ctaToggleNav  = $itemsMobile.find('.bt-btn-toggle');
     
    const $stepPhoto     = $stepParents.find('.bt-gallery-step-vd');
    const $stepDessins    = $stepParents.find('.bt-dessins-step-vd');

    const $ssVideo       = $mainSite.find('.bt-section-tpl-vd');
    
    __startVdTemplate();

    $logo.click(function(e){
      e.preventDefault();
      __backHomepage();
    })

    function __backHomepage(){

      let $notSsVd = $mainSite.find('.bt-section').not( $mainSite.find('.bt-section-tpl-vd'))

      $mainSite.removeClass('scroll');
      $itemsMobile.find('.bt-menu-mobile').removeClass('active')
                                          .slideUp("swing")
      $mainSite.find('.bt-section').removeClass('active')
                                   .addClass('hidden') 
      $mainSite.find('.bt-section-tpl-vd').removeClass('hidden')
                                          .addClass('active') 
      $itemParents.trigger("to.owl.carousel", [0, 500, true]);                                    

    }

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

    // event for icon play video when click
    $ctaPlay.find('.icon-play-vd').click(function(){
      let $videoActive = document.querySelector(".owl-item.active .video-js");

      if ($videoActive.paused){
        $(this).removeClass('paused');
        $ctaPlay.removeClass('play');
        $videoActive.play();
      }
      else{
        $(this).addClass('paused');
        $ctaPlay.addClass('play');
        $videoActive.pause();
      }
    });

    
    // show all video when click step for children carousel
    function __showAllVideo(){
      
      $itemChildrens.find('.owl-item').each(function(index){
        $(this).click(function(){
          $mainSite.removeClass('active')
          $toggleNav.removeClass('active')
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
      $.each( $allVideo, function (index, value ) {
          value.pause();
      } )
    }

    function __startVdTemplate(){
      const $iconStart = $tplVideo.find('.bt-header-tpl-vd .icon-play');
      $iconStart.click(function(e){
        __renderVdTemplate()
        __showAllVideo()        

        let $vdActive = document.querySelector(".owl-item.active .video-js");
        let $owl      = $('.owl-carousel');

        $tplVideo.addClass('active');
 
        if ($vdActive.paused){
          $vdActive.play();
          $vdActive.onended = function() {
            $owl.trigger('next.owl.carousel');
          };
          $ctaPlay.removeClass('play');
          $ctaPlay.find('.icon-play-vd').removeClass('paused');
        }
        else{
          $vdActive.pause();
          $ctaPlay.addClass('play');
          $ctaPlay.find('.icon-play-vd').addClass('paused');
        }
      });

    }

    function __renderVdTemplate(){
      
      if ($itemParents.length <= 0 || $itemChildrens.length <= 0) return;

      __runCarousel($itemParents, $itemChildrens);
     
      function __childrenOnchange($data) {
        
        $data.on('changed.owl.carousel', function(e) {
          setTimeout( () => {

            let $itemCurrent = $data.find('.owl-item.current');
            jQuery(".bt-icon-spacing>img").css({
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
  
          jQuery(".bt-icon-spacing>img").css({
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
        }).on('changed.owl.carousel', parentPosition);
  
        function parentPosition(el) {
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
    const $metaHd = $('.bt-section-header-tpldv .bt-meta-hd');
    let $widthMeta = $metaHd.width();
    $metaHd.height($widthMeta);
  }

  // render set width and height for video
  const RenderVideo = () =>{
    
    let isVideo = $('.bt-carousel-tpldv .video-js');
    let widthWindow= window.innerWidth;
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

  $(window).on('resize', function () {
    RenderMetaHeader()
    RenderVideo()
  });

  $(window).on('load', function () {

  });

  $(document).ready(function () {
    VideoTemplate()
    RenderMetaHeader()
    RenderVideo()
    RunCarouselInner()
  });
});
