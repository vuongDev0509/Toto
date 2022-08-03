jQuery(function ($) {
	"use strict";

  const VideoTemplate = ($itemParents, $itemChildrens) =>{
    const $tplVideo      = $('.page-template-template-video');
    const $mainSite      = $tplVideo.find('.site-main');
    const $logo          = $tplVideo.find('.bt-logo-site')

    const $ctaPlay       = $itemParents.find('.bt-meta .bt-icon-play');
    const $itemsMobile   = $itemParents.find('.bt-item-page-mobile');
    const $navDesktop    = $itemParents.find('.bt-items-page .bt-title');
    let $allVideo        = $itemParents.find('video');

    const $iconSmiley    = $itemChildrens.find('.bt-smiley > img');

    const $navMobile     = $itemsMobile.find('.bt-menu-mobile .item');
    const $ctaToggleNav  = $itemsMobile.find('.bt-btn-toggle');

    const $ssVideo       = $mainSite.find('.bt-section-tpl-vd');

    const $genrenalBt    = $('#ss-genrenal-button');

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

    // redirect to inner smiley
    $iconSmiley.click(function(e){
      e.preventDefault()
      e.stopPropagation()
      let $dataSs = $(this).data('section')
      $mainSite.addClass('scroll')
      __redirectStepVd($dataSs)
    })

    $genrenalBt.find('.__genrenal-button > span').click(function(){
      let $dataPage = $(this).data('page');
      $mainSite.removeClass("scroll")
      __redirectStepVd($dataPage)
    });

    $itemParents.find('.__navs-videos .__navs-videos-step').click(function(){
      let $dataPage = $(this).data('page');
      $mainSite.removeClass("scroll")
      __redirectStepVd($dataPage)
    });

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

      __stopAllVideo()

      $mainSite.find('.bt-section').addClass('hidden')
      $mainSite.find('.bt-section').removeClass('active')
      if($data == 'bt-section-smiley'){
        $mainSite.find(`.${$data}.bt-section`).addClass('active')
        $mainSite.find(`.${$data}.bt-section`).removeClass('hidden')
      }else{
        $mainSite.find(`#${$data}.bt-section`).addClass('active')
        $mainSite.find(`#${$data}.bt-section`).removeClass('hidden')
      }
    }

    function __backHomepage(){
      __showHomePage()
      $mainSite.removeClass('scroll');
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
      let $Videos = $mainSite.find('video');
      $.each( $Videos, function (index, value ) {
          value.pause();
      } )
    }

    function __startVdTemplate($data){
        let $id = $data.attr('id')

        __renderVdTemplate()
        __showAllVideo()
        __stopAllVideo()

        setTimeout( () => {

          $(".bt-icon-spacing>img").css({
            "left": '10px'
          }).fadeIn(500);

          let $vdActive = document.querySelector(`#${$id} .owl-item.active .video-js`);
          $(`#${$id} .owl-item.active`).find('.bt-icon-play').removeClass('play');
          $(`#${$id} .owl-item.active`).find('.icon-play-vd').removeClass('paused');

          if($vdActive){
            $vdActive.play();
          }
        }, 500 )
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
          if(vdActive){
            if (vdActive.paused){
              $ctaPlay.removeClass('play');
              $ctaPlay.find('.icon-play-vd').removeClass('paused');
            }
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
            $ctaPlay.removeClass('play');
            $ctaPlay.find('.icon-play-vd').removeClass('paused');

        }).on("changed.owl.carousel", function (el) {
            var number = el.item.index;
            var $owl_slider = $itemParents.data('owl.carousel');
            $owl_slider.to(number, 100, true);
            $ctaPlay.removeClass('play');
            $ctaPlay.find('.icon-play-vd').removeClass('paused');
        });

        __childrenOnchange($itemChildrens)
        __parentOnchange($itemParents, $itemChildrens)

      }
    }
  }

  const MenuMobile = () =>{
    $(document).on( 'click', '.toggole-menu-mobile', function(e){
      e.preventDefault()
      e.stopPropagation()
      const $mainSite = $('.site-main')
      let $Videos     = $mainSite.find('video')
      $.each( $Videos, function (index, value ) {
          value.pause();
      } )
      $(this).parents('.bt-item-page-mobile').find('.bt-menu-mobile').slideToggle("swing")
      $(this).parents('.bt-item-page-mobile').find('.bt-btn-toggle').toggleClass('active')
      $(this).parents('.bt-carousel-tpldv').find('.owl-item .bt-item-vd .bt-meta').toggleClass('active')
      $(this).parents('.bt-carousel-tpldv').find('.owl-item.active .icon-play-vd').addClass('paused')
    });
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
    const $ctaShow       = $tplVideo.find('#ss-timeline .heading.be_timelines_toto_bus');
    const $itemParents   = $tplVideo.find('#bt-parents-video');
    const $itemChildrens = $tplVideo.find('#bt-childrens-video');
    const $mainSite      = $tplVideo.find('.site-main');
    const $totoBus       = $mainSite.find('.bt-section-tpl-vd');
    const $footer        = $tplVideo.find('.site-footer');

    if ($itemParents.length <= 0 || $itemChildrens.length <= 0) return

    $ctaShow.click(function(e){
      e.preventDefault();
      e.stopPropagation();
      __showTotoBusVideo();
      VideoTemplate($itemParents, $itemChildrens)
    });

    function __showTotoBusVideo(){
      let data = 'be_timelines_item_0';
      const $parentSpacing = $('.page-template-template-video .site-footer .bt-icon-spacing > img');
      if($parentSpacing.hasClass(`${data}`)){
        $parentSpacing.removeClass('show')
        $parentSpacing.addClass('hide')
        $(`.bt-icon-spacing > img.${data}`).addClass('show')
      }else{
				$parentSpacing.removeClass('show')
        $parentSpacing.removeClass('hide')
        $('.page-template-template-video .site-footer .bt-icon-spacing > img.spacing-timlines').addClass('hide')
        $(`.bt-icon-spacing > img.spacing-default`).addClass('show')
      }

      $totoBus.siblings().removeClass('active')
      $totoBus.siblings().addClass('hidden')

      $totoBus.removeClass('hidden')
      $totoBus.addClass('active')

      $footer.addClass('active')
      $footer.find('.bt-carousel-tpldv').hide();

      $totoBus.find('.bt-carousel-tpldv').hide();
      $totoBus.find('.bt-carousel-tpldv').addClass('test')

      $itemChildrens.show();
      $itemParents.show();
    }
  }

  const HanldeHeader = () =>{
    const $tplVideo    = $('.page-template-template-video');
    const $header      = $tplVideo.find('.bt-section-header-tpldv');
    const $ssTimelines = $tplVideo.find('#ss-timeline');

    let $itemMenu      = $header.find('.bt_list_item_header_video .heading');
    let $itemHeader    = $header.find('.be_header_items_template')
    const $ctaComeback = $itemHeader.find('.bt-back')

    __loadSsTimelines()
    __showItemHeader()
    __handleMenuBar()

    // comeback header main when click button on item header template
    $ctaComeback.click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).parents('.be_header_items_template').removeClass('active')
    })

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
    const $secondVideo        = $('#toto-second-videos')
    const $secondVideoStep    = $('#steps-second-videos')
    const $imgSpacing         = $footer.find('.bt-icon-spacing img');
    let $setting_second_video = tv_settings.second_video;
    __showSecondVideo()

    // hidden scond video
    $secondVideo.find('.icon-comeback').on('click',function(){
      $(this).parents('.bt-comeback').addClass('hidden');
      let icon_spacing = $setting_second_video.icon_spacing;
      $.each( $secondVideo.find('video') , function (index, value ) {
          value.pause();
      } );
      $imgSpacing.attr('src',icon_spacing);
      $imgSpacing.css('left','16px');
      __showTimelinesTotoBus();
    });

    function __showTimelinesTotoBus(){
      let parentsTimelines  = $('.site-main .bt-section-tpl-vd');

      parentsTimelines.siblings().removeClass('active');
      parentsTimelines.siblings().addClass('hidden');
      parentsTimelines.addClass('active');
      parentsTimelines.removeClass('hidden');

      $footer.addClass('active');
      $footer.find('.bt-carousel-tpldv').hide();
      $footer.find('#bt-childrens-video').show();

      parentsTimelines.find('.bt-carousel-tpldv').hide();
      parentsTimelines.find('#bt-parents-video').show();

    }

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

        });
    }
  }

  const TimelinesTemplate = () =>{
    const $tplVideo      = $('.page-template-template-video');
    const $ssTimelines   = $tplVideo.find('#ss-timeline');
    const $mainSite      = $tplVideo.find('.site-main');
    const $itemTimelines = $ssTimelines.find('.bt_list_item_header_video .heading')
    const $footer        = $tplVideo.find('.site-footer');
    const $isNavigation  = $('.be_timelines_navigation');
    const $ctaNavi       = $isNavigation.find('.be_timelines_navigation__item span');
    const $itemMaps      = $ssTimelines.find('.bt_image_maps .item-location');
    const $ctaComeback   = $('.be_timelines_navigation__item .bt-back')

    $ctaNavi.on('click',function(e){
      e.preventDefault()
      e.stopPropagation()
      let $dataTimlines = $(this).data('timeline')

      if ($dataTimlines == 'be_timelines_item_0'){
				let data = 'be_timelines_item_0'
				const $parentSpacing = $('.page-template-template-video .site-footer .bt-icon-spacing > img');
				$parentSpacing.removeClass('show')
				$parentSpacing.addClass('hide')
				$(`.bt-icon-spacing > img.${data}`).addClass('show')
        __showTimelinesTotoBus()
      }else{
        if ($dataTimlines.length <= 0) return;
        __checkTimlines($dataTimlines);
      }
    });

    $itemTimelines.click(function(e){
      e.preventDefault();
      e.stopPropagation();
      let $dataTimeline = $(this).data('timelines');
      if ($dataTimeline.length <= 0 || $dataTimeline=='be_timelines_item_0') return;
			const $parentSpacing = $('.page-template-template-video .site-footer .bt-icon-spacing > img');
			if($parentSpacing.hasClass(`${$dataTimeline}`)){
				$parentSpacing.removeClass('show')
				$parentSpacing.addClass('hide')
				$(`.bt-icon-spacing > img.${$dataTimeline}`).addClass('show')
			}else{
				$parentSpacing.removeClass('hide')
				$parentSpacing.removeClass('show')
				$('.page-template-template-video .site-footer .bt-icon-spacing > img.spacing-timlines').addClass('hide')
				$(`.bt-icon-spacing > img.spacing-default`).addClass('show')
			}
        let $idParents     = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${$dataTimeline}`).attr('id');
        let $idChildrens   = $(`.site-footer .bt-carousel-tpldv.${$dataTimeline}`).attr('id');
        let $itemParents   = $(`#${$idParents}`)
        let $itemChildrens = $(`#${$idChildrens}`)
        VideoTemplate($itemParents, $itemChildrens)
        __activeCarousel()
        $itemParents.show()
        $itemChildrens.show()

    });

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
      let $idParents   = '';
      let $idChildrens = '';
      let dataPosition = $(this).data('position');
      let dataCarousel = $(this).data('carousel');
      var duration = 300;
      if(dataCarousel){
        let $itemParents  = $(`.bt-section-tpl-vd .bt-carousel-tpldv.${dataCarousel}`).attr('id');
        let $itemChildrens = $(`.site-footer .bt-carousel-tpldv.${dataCarousel}`).attr('id');
        $idParents = $(`#${$itemParents}`)
        $idChildrens = $(`#${$itemChildrens}`)
      }else{
        $idParents   = $('#bt-parents-video');
        $idChildrens = $('#bt-childrens-video');
      }

      __activeCarousel()
      VideoTemplate($idParents, $idChildrens)
      $idChildrens.show()
      $idParents.show()
      setTimeout( () => {
        $idParents.trigger('to.owl.carousel',[dataPosition, duration, true]);
        $idParents.find('.owl-item.active .bt-icon-play').removeClass('paused');
        $idParents.find('.owl-item.active .icon-play-vd').removeClass('paused')
      }, 1200 )
    });


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
      const $parentSpacing = $('.page-template-template-video .site-footer .bt-icon-spacing > img');
      if($parentSpacing.hasClass(`${data}`)){
        $parentSpacing.removeClass('show')
        $parentSpacing.addClass('hide')
        $(`.bt-icon-spacing > img.${data}`).addClass('show')
      }else{
        $parentSpacing.removeClass('hide')
				$parentSpacing.removeClass('show')
        $('.page-template-template-video .site-footer .bt-icon-spacing > img.spacing-timlines').addClass('hide')
        $(`.bt-icon-spacing > img.spacing-default`).addClass('show')
      }

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
    MenuMobile()
    TotoBusVideo()
    SecondVideo()
    TimelinesTemplate()
    RunCarouselInner()
	
    $(document).on( 'click', '.icon-play-vd', function(e){
      e.preventDefault();
      e.stopPropagation();
      const $idCarousel = $(this).parents('.bt-carousel-tpldv').attr('id');
      let $vdActive = document.querySelector(`#${$idCarousel} .owl-item.active .video-js`);
          if($vdActive){
            if ($vdActive.paused){
                $(this).removeClass('paused');
                $(this).parents('.bt-icon-play').removeClass('play');
                $vdActive.play();
            }else{
                $(this).addClass('paused');
                $(this).addClass('.bt-icon-play').addClass('play');
                $vdActive.pause();
            }
          }
    });
  });
});
