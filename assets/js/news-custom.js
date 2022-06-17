jQuery(function ($) {
	"use strict";

  const VideoTemplate = () =>{
    const $tplVideo      = $('.page-template-template-video');
    const $itemParents   = $tplVideo.find('#bt-sync1');
    const $itemChildrens = $tplVideo.find('#bt-sync2');
    const $ctaPlay       = $itemParents.find('.bt-meta .bt-icon-play');
    let $allVideo        = $itemParents.find('video');

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

    function __parentOnchange($data){
      $data.on('changed.owl.carousel', function(event) {
        let positionOwlCurrent2 =  jQuery('.bt-carousel-tpldv#bt-sync2 .owl-item.current').offset();
        let isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');
        isBtnPlay.removeClass('play');
        jQuery(".bt-icon-spacing>img").css({
          "left": positionOwlCurrent2.left
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

        $data.on('resized.owl.carousel', function(event) {
          $.each( $allVideo, function () {
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

        let vdActive = document.querySelectorAll(".owl-item.active .video-js")
        if (vdActive.paused){
          $ctaPlay.removeClass('play')
                  .removeClass('paused')
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
          $owl_slider = $itemParents.data('owl.carousel');
          $owl_slider.to(number, 100, true);
      });

        __childrenOnchange($itemChildrens)
        __parentOnchange($itemParents)

    }
  }

  $(window).on('resize', function () {

  });

  $(window).on('load', function () {

  });

  $(document).ready(function () {
    VideoTemplate()
  });
});
