// jQuery(document).ready(function($) {

//   //  carousel sync video
//   var tplvd = jQuery('.page-template-template-video');
//   var videos = jQuery('body #bt-sync1 video');
//   var isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');
//   var isTeam = jQuery('#bt-sync1 .bt-items-page .bt-title.bt-team');
//   var isSectionTeam = jQuery('.bt-section-grid-team');
//   var btsync1 = $("#bt-sync1");
//   var btsync2 = $("#bt-sync2");

//   var slidesPerPage = 11; //globaly define number of elements per page
//   var syncedSecondary = true;
//   var thumbnailItemClass = '.owl-item';
//   var totalbtsync2 = btsync1.find('.bt-item-vd').length;
//   var videobtsync2Current = 1;

//   var slides = btsync1.owlCarousel({
//     // video:true,
//     startPosition: 11,
//     items:1,
//     loop:false,
//     margin:0,
//     autoplay:false,
//     autoplayTimeout:6000,
//     autoplayHoverPause:false,
//     nav: false,
//     dots: true
//   }).on('changed.owl.carousel', syncPosition);

//   function syncPosition(el) {

//       $owl_slider = $(this).data('owl.carousel');
//       var loop = $owl_slider.options.loop;
//       if(loop){
//           var count = el.item.count-1;
//           var current = Math.round(el.item.index - (el.item.count/2) - .5);
//           if(current < 0) {
//               current = count;
//           }
//           if(current > count) {
//               current = 0;
//           }
//       }else{
//           var current = el.item.index;
//       }
//       var owl_thumbnail = btsync2.data('owl.carousel');
//       var itemClass = "." + owl_thumbnail.options.itemClass;
//       var thumbnailCurrentItem = btsync2
//       .find(itemClass)
//       .removeClass("current")
//       .eq(current);

//       thumbnailCurrentItem.addClass('current');
//       if (!thumbnailCurrentItem.hasClass('active')) {
//           var duration = 300;
//           btsync2.trigger('to.owl.carousel',[current, duration, true]);
//           videobtsync2Current = current;
//       }

//       var cVideo = document.querySelector(".page-template-template-video #bt-sync1 .owl-item.active .video-js");
//       if (cVideo.paused){
//           jQuery("#bt-sync1 .owl-item .bt-item-vd .bt-meta>.bt-icon-play .icon-play-vd").removeClass('paused');
//           isBtnPlay.removeClass('play');
//       }


//   }

//   var thumbs = btsync2.owlCarousel({
//       startPosition: 11,
//       items:11,
//       loop:false,
//       margin:10,
//       autoplay:false,
//       nav: false,
//       dots: false,
//       mouseDrag:false,
//       touchDrag: false,
//       // checkVisible:false,
//       responsive:{
//           0:{
//               items:2,
//               nav:true
//           },
//           640:{
//               items:3,
//               nav:true
//           },
//           768:{
//               items:4,
//               nav:true
//           },
//           992:{
//              items:5,
//              nav:true
//           },
//           1280:{
//               items: 7,
//               nav:true,
//               margin: 10,
//           },
//           1440:{
//               items:11,
//               nav:false,
//               margin:0
//           },
//           1800:{
//               margin:10
//           }
//       },
//       onInitialized: function (e) {
//           var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
//           thumbnailCurrentItem.addClass('current');
//       },
//   })
//   .on('click', thumbnailItemClass, function(e) {
//       e.preventDefault();
//       var duration = 300;
//       var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
//       btsync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
//       videobtsync2Current = itemIndex+1;
//   }).on("changed.owl.carousel", function (el) {
//       var number = el.item.index;
//       $owl_slider = btsync1.data('owl.carousel');
//       $owl_slider.to(number, 100, true);
//       videobtsync2Current = number+1;
//   });


//   btsync2.on('changed.owl.carousel', function(eventt) {


//       setTimeout( () => {
//           let positionOwlCurrent4 =  jQuery('.bt-carousel-tpldv#bt-sync2 .owl-item.current').offset();

//           jQuery(".bt-icon-spacing>img").css({
//               "left": positionOwlCurrent4.left
//           }).fadeIn(500)
//       }, 1000 )

//       let isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');

//       isBtnPlay.removeClass('play');

//   });

//   btsync1.on('changed.owl.carousel', function(event) {
//       let positionOwlCurrent2 =  jQuery('.bt-carousel-tpldv#bt-sync2 .owl-item.current').offset();
//       let isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');

//       isBtnPlay.removeClass('play');
//       jQuery(".bt-icon-spacing>img").css({
//           "left": positionOwlCurrent2.left
//       }).fadeIn(500);

//       $.each( videos, function () {
//           const v = $( this )

//           setTimeout( () => {
//               const isActive = v.parents( '.owl-item.active' ).length
//               var owl = jQuery('.owl-carousel');

//               if( isActive ) {
//                   // Play


//                   this.play()
//                   this.onended = function() {
//                       owl.trigger('next.owl.carousel');
//                   };
//               } else {
//                   // Stop
//                   this.pause()
//               }
//           }, 1000 )

//       } );

//     btsync1.on('resized.owl.carousel', function(event) {
//         $.each( videos, function () {
//             const v = $( this )

//             setTimeout( () => {
//                 const isActive = v.parents( '.owl-item.active' ).length
//                 var owl = jQuery('.owl-carousel');

//                 if( isActive ) {
//                     this.pause()
//                     jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').addClass('paused');
//                     isBtnPlay.addClass('play');
//                 }
//             }, 1200 )

//         } );
//     });





//   });


//   // menu mobile step
//   const isBtnMobile = jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle > .toggole-menu-mobile');
//   const isMenuMobile = jQuery('.page-template-template-video .bt-item-page-mobile .bt-menu-mobile');
//   isBtnMobile.click(function(em){
//       em.preventDefault();
//       jQuery('#bt-sync1.bt-carousel-tpldv .owl-item .bt-item-vd .bt-meta').toggleClass('active');
//       jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').toggleClass('active');
//       isMenuMobile.toggleClass('active');
//       isMenuMobile.slideToggle("swing");
//   });

//   // start icon play video
//   jQuery('.page-template-template-video #toto-second-videos .bt-meta .bt-icon-play > .icon-play-vd').click(function(ev){

//       var myVideo = document.querySelector(".page-template-template-video #toto-second-videos .owl-item.active .video-js");
//       //var myVideo = $(this).closest('.bt-item-vd').find('video');

//       if (myVideo.paused){
//           jQuery(this).removeClass('paused');
//           isBtnPlay.removeClass('play');
//           myVideo.play();
//       }
//       else{
//           jQuery(this).addClass('paused');
//           isBtnPlay.addClass('play');
//           myVideo.pause();
//       }
//   });

//   jQuery('.page-template-template-video #bt-sync1 .bt-meta .bt-icon-play > .icon-play-vd').click(function(ev){

//       var myVideo = document.querySelector(".page-template-template-video #bt-sync1 .owl-item.active .video-js");
//       //var myVideo = $(this).closest('.bt-item-vd').find('video');

//       if (myVideo.paused){
//           jQuery(this).removeClass('paused');
//           isBtnPlay.removeClass('play');
//           myVideo.play();
//       }
//       else{
//           jQuery(this).addClass('paused');
//           isBtnPlay.addClass('play');
//           myVideo.pause();
//       }
//   });

//   let isCircleHd = jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').width();
//   jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').height(isCircleHd);
//   jQuery(window).on('resize', function () {
//       let isCircleHd = jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').width();
//       jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').height(isCircleHd);
//   });
//   jQuery(window).on('load resize', function () {

//       // set width, height for video
//       let isRotateScreen = jQuery('.page-template-template-video .rotateScreen');
//       let isVideo = jQuery('.bt-carousel-tpldv .video-js');
//       let widthWindow= window.innerWidth;
//       let heightWindow = window.innerHeight;


//       if(widthWindow > heightWindow){
//           let widthVideo = widthWindow * 1.3;
//           isVideo.width(widthVideo);
//           // isRotateScreen.removeClass('active');
//           let heightVideo = widthVideo / 1.78;
//           isVideo.height(heightVideo);
//       }else {

//           if(widthWindow > 767){

//               let widthVideo = widthWindow * 2.5;
//               isVideo.width(widthVideo);

//               let heightVideo = widthVideo / 1.78;
//               isVideo.height(heightVideo);
//           }else {

//               let widthVideo = widthWindow * 3;
//               isVideo.width(widthVideo);

//               let heightVideo = widthVideo / 1.78;
//               isVideo.height(heightVideo);
//           }
//       }

//   });

//   // stop all videos ver dektop
//   var isStopAllVd = jQuery('#bt-sync1 .bt-items-page .bt-title');
//   isStopAllVd.click(function(ett){
//       jQuery('#bt-sync1 .owl-item.active .bt-icon-play > .icon-play-vd').addClass('paused')
//       isBtnPlay.addClass('play');
//       $.each( videos, function (index, value ) {
//           value.pause();
//       } )
//   });

//   // stop all videos ver mobile
//   var isStopAllVdMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile .item');
//   isStopAllVdMobile.click(function(ett){
//       jQuery('#bt-sync1 .owl-item.active .bt-icon-play > .icon-play-vd').addClass('paused')
//       isBtnPlay.addClass('play');
//       $.each( videos, function (index, value ) {
//           value.pause();
//       } )
//   });

//   // stop all videos ver mobile
//   var isStopAllVdMobile = jQuery('#toto-second-videos .bt-item-page-mobile .bt-menu-mobile .item');
//   isStopAllVdMobile.click(function(ett){
//       jQuery('#toto-second-videos .owl-item.active .bt-icon-play > .icon-play-vd').addClass('paused')
//       isBtnPlay.addClass('play');
//       $.each( '#toto-second-videos video', function (index, value ) {
//           value.pause();
//       } )
//   });

//   // show all videos
//   var isStepVd = jQuery('#bt-sync2 .owl-stage-outer .owl-item');
//   var isSectionVd = jQuery('.page-template-template-video .bt-section-tpl-vd');
//   var isSsPhoto = jQuery("#bt-sync1.bt-carousel-tpldv .owl-item .bt-item-vd .bt-gallery-step-vd");
//   var isSsDessins = jQuery("#bt-sync1.bt-carousel-tpldv .owl-item .bt-item-vd .bt-dessins-step-vd");
//   isStepVd.each(function(index){
//       jQuery(this).click(function(){
//           jQuery(".page-template-template-video .site-main").removeClass("scroll");
//           jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').removeClass('active');
//           isMenuMobile.removeClass('active');
//           isMenuMobile.slideUp("swing");
//           isSectionVd.removeClass('hidden');
//           isSectionScroll.removeClass("active");
//           isSsPhoto.removeClass("active");
//           isSsDessins.removeClass("active");
//       });
//   });

//   var isDessins = jQuery('#bt-sync1 .bt-items-page .bt-dessins-step');
//   isDessins.click(function(ed){
//       isSsDessins.addClass('active');
//   });


//   // redirect item page photo
//   var isPhoto = jQuery('#bt-sync1 .bt-items-page .bt-photos-step');
//   isPhoto.click(function(ett){
//       isSsPhoto.addClass('active');
//   });


//   var isPhotoMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.bt-photos-step')
//   isPhotoMobile.click(function(ett){
//       isSsPhoto.addClass('active');
//   });

//   var isSsDessinMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.bt-dessins-step')
//   isSsDessinMobile.click(function(ett){
//       isSsDessins.addClass('active');
//   });

//   // redirect page smiley
//   var isSsSmiley = jQuery('.bt-section.bt-section-smiley');
//   var  isSectionScroll = jQuery('.site-main  .bt-section');

//   var isIconSmiley = jQuery('.page-template-template-video .site-footer .bt-carousel-child #bt-sync2 .owl-item:first-child .bt-smiley > img');
//   isIconSmiley.click(function(as){
//       as.preventDefault();
//       as.stopPropagation();
//       isSectionScroll.removeClass('active');
//       isSectionScroll.addClass('hidden');
//       isSsSmiley.removeClass('hidden');
//       jQuery(".page-template-template-video .site-main").addClass("scroll");
//       isSsSmiley.addClass('active');
//       $.each( videos, function (index, value ) {
//           value.pause();
//       } )

//   });
//   // redirect item page not photo (dekstop)

//   var isItemPage = jQuery('.bt-carousel-tpldv .bt-items-page .bt-step');
//   isItemPage.click(function(ett){
//       var dataPage = jQuery(this).data('page');

//       if($('section.'+dataPage).length){
//         jQuery(".page-template-template-video .site-main").removeClass("scroll");
//         isSectionScroll.each(function(){
//             if(jQuery(this).hasClass(dataPage)){
//                 jQuery(this).removeClass("hidden");
//                 jQuery(this).addClass("active");
//             }else {
//                 jQuery(this).removeClass("active");
//                 jQuery(this).addClass("hidden");
//             }
//         });
//       }
//   });



//   // redirect item page (mobile)
//   var isItemPageMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.step');
//   isItemPageMobile.click(function(ett){
//       var dataPage = jQuery(this).data('page');
//       jQuery(".page-template-template-video .site-main").removeClass("scroll");
//       isSectionScroll.each(function(){
//           if(jQuery(this).hasClass(dataPage)){
//               jQuery(this).removeClass("hidden");
//               jQuery(this).addClass("active");
//           }else {
//               jQuery(this).removeClass("active");
//               jQuery(this).addClass("hidden");
//           }
//       });
//   });



//   // carousel page inner (team, artists)
//   jQuery('.bt-carousel-page-inner').owlCarousel({
//       loop:false,
//       margin:30,
//       nav:true,
//       autoplay:false,
//       dots: false,
//       responsive:{
//           0:{
//               items:1,
//               dots: true,
//               nav:false,
//           },
//           640:{
//               items: 2,
//               dots: true,
//               nav:false,
//           },
//           992:{
//               items: 3,
//           },
//           1200:{
//               items:4
//           }
//       }
//   });

//   // click logo comback home page
//   var isLogo = jQuery('.page-template-template-video .bt-logo .bt-logo-site');
//   // isLogo.click(function(el){
//   //     el.preventDefault();
//   //
//   //     jQuery(".page-template-template-video .site-main").removeClass("scroll");
//   //     isMenuMobile.slideUp("swing");
//   //     jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').removeClass('active');
//   //     isMenuMobile.removeClass('active');
//   //     isSectionScroll.removeClass('active');
//   //     isSectionScroll.addClass('hidden');
//   //     jQuery('.site-main > .bt-section-tpl-vd').removeClass('hidden');
//   //     jQuery('.site-main > .bt-section-tpl-vd').addClass('active');
//   //     isSsDessins.removeClass('active');
//   //     isSsPhoto.removeClass('active');
//   //     // btsync1.show();
//   //     // console.log("hihi");
//   //     // btsync1.trigger("to.owl.carousel", [0, 500, true]);
//   //     // setTimeout( () => {
//   //     //     $.each( videos, function (index, value ) {
//   //     //         isBtnPlay.addClass('play');
//   //     //         value.pause();
//   //     //         jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').addClass('paused');
//   //     //     } )
//   //     // }, 1000 )
//   // });

//   // comback section
//   var isComeBack = jQuery(".page-template-template-video .bt-comeback .icon-comeback");
//   const comeBack = function( cb ) {

//       let isPageDetails = jQuery(".page-template-template-video #bt-sync1 .owl-item.active .bt-item-details")
//       isSectionScroll.removeClass("active");
//       isSectionScroll.addClass("hidden");
//       isSectionVd.removeClass("hidden");
//       isPageDetails.removeClass("active");
//       isPageDetails.addClass("hidden");
//       jQuery(this).addClass("hidden");

//   }

//   jQuery( 'body' ).on( 'click', '.bt-comeback .icon-comeback', comeBack )


//   //Load Template Second Videos
//   const secondVideo = $('#toto-second-videos').owlCarousel({
//     // video:true,
//     startPosition: 0,
//     items:1,
//     loop:false,
//     margin:0,
//     autoplay:false,
//     autoplayTimeout:6000,
//     autoplayHoverPause:false,
//     nav: false,
//     dots: true
//   }).on('changed.owl.carousel', callbackSecondVideo);

//   function callbackSecondVideo (el){
//     $owl_slider_2 = $(this).data('owl.carousel');
//     var current = el.item.index;
//     var duration = 300;
//     var owl_thumbnail = stepsSecondVideo.data('owl.carousel');
//     var itemClass = "." + owl_thumbnail.options.itemClass;

//     //Set position icon
//     var thumbnailCurrentItem = stepsSecondVideo
//     .find(itemClass)
//     .removeClass("current")
//     .eq(current);
//     thumbnailCurrentItem.addClass('current');
//     stepsSecondVideo.trigger('to.owl.carousel',[current, duration, true]);

//     var cVideo = document.querySelector(".page-template-template-video #toto-second-videos .owl-item.active .video-js");
//     if (cVideo.paused){
//         jQuery("#toto-second-videos .owl-item .bt-item-vd .bt-meta>.bt-icon-play .icon-play-vd").removeClass('paused');
//         isBtnPlay.removeClass('play');
//     }

//     changePositionIcon();
//   }

//   //Load Template Steps Second Video
//   const stepsSecondVideo = $('#steps-second-videos').owlCarousel({
//       startPosition: 11,
//       items:11,
//       loop:false,
//       margin:10,
//       autoplay:false,
//       nav: false,
//       dots: false,
//       mouseDrag:false,
//       touchDrag: false,
//       // checkVisible:false,
//       responsive:{
//           0:{
//               items:2,
//               nav:true
//           },
//           640:{
//               items:3,
//               nav:true
//           },
//           768:{
//               items:4,
//               nav:true
//           },
//           992:{
//              items:5,
//              nav:true
//           },
//           1280:{
//               items: 7,
//               nav:true,
//               margin: 10,
//           },
//           1440:{
//               items:11,
//               nav:false,
//               margin:0
//           },
//           1800:{
//               margin:10
//           }
//       },
//       onInitialized: function (e) {
//           var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
//           thumbnailCurrentItem.addClass('current');
//       },
//   })
//   .on('click', thumbnailItemClass, function(e) {
//       e.preventDefault();
//       var duration = 300;
//       var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
//       secondVideo.trigger('to.owl.carousel',[itemIndex, duration, true]);
//       changePositionIcon();
//       updateTemplate();
//   }).on("changed.owl.carousel", function (el) {
//       var number = el.item.index;
//       $owl_slider_2 = secondVideo.data('owl.carousel');
//       $owl_slider_2.to(number, 100, true);
//       changePositionIcon();
//       updateTemplate();
//   });

//   function updateTemplate(){
//     if($('#page_2').hasClass('hidden') && $('#page_3').hasClass('hidden')){
//       jQuery(".page-template-template-video .site-main").removeClass("scroll");
//       jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').removeClass('active');
//       isMenuMobile.removeClass('active');
//       isMenuMobile.slideUp("swing");
//       isSectionVd.removeClass('hidden');
//       isSectionScroll.removeClass("active");
//       isSsPhoto.removeClass("active");
//       isSsDessins.removeClass("active");
//     }
//   }

//   function changePositionIcon(){
//     setTimeout( () => {
//         let positionOwlCurrent4 =  jQuery('.bt-carousel-tpldv#steps-second-videos .owl-item.current').offset();
//         jQuery(".bt-icon-spacing>img").css({
//             "left": positionOwlCurrent4.left
//         }).fadeIn(500);
//         templ_video2.find('.owl-item.active .bt-icon-play > .icon-play-vd').removeClass('paused');
//         isBtnPlay.removeClass('play');
//         playVideo();
//     }, 200 );
//   }

//   // timelines ==================================================================





//   //Event show step second Video
//   const setting_second_video = tv_settings.second_video;
//   var templ_steps2 = $('#steps-second-videos');
//   var templ_video2 = $('#toto-second-videos');

//   //tplvd.find('.bt-icon-spacing').on('click',function(){
//   $('.bt-carousel-tpldv .icon-switch-next').on('click',function(){
//       //if(videobtsync2Current == totalbtsync2){
//         const isFooter = $('.page-template-template-video .site-footer');

//         btsync1.hide();
//         btsync2.hide();
//         isFooter.find('.bt-carousel-tpldv').hide();
//         isFooter.find('#steps-second-videos').show();
//         templ_video2.show();
//         videobtsync2Current = 1;
//         var icon_img = setting_second_video.steps.icon;
//         var img =   $('.bt-section-content-footer .bt-icon-spacing img');
//         var bg_text = setting_second_video.steps.background_point;
//         var color_text = setting_second_video.steps.text_color;

//         //Steps
//         img.attr('src',icon_img);
//         img.css('left','16px');
//         templ_steps2.find('.bt-numerical-order').css('background-color',bg_text);
//         templ_steps2.find('.bt-numerical-order').css('color',color_text);
//         templ_steps2.find('.bt-numerical-order').css('font-weight','bold');
//         templ_steps2.find('.bt-title').css('color',color_text);
//         templ_steps2.find('.bt-title').css('font-weight','bold');

//         //Video
//         templ_video2.find('.bt-step').css('background-color',setting_second_video.menu.background_color);
//         templ_video2.find('.bt-step').css('color',setting_second_video.menu.text_color);

//         // secondVideo

//         $('.bt-section.bt-section-tpl-vd #toto-second-videos .bt-comeback').removeClass('hidden')

//         //Play video
//         playVideo();
//       //}
//   });

//   function playVideo(){

//     // var cc = $('#bt-sync1');

//     $.each( $('#bt-sync1').find('video') , function (index, value ) {
//         value.pause();
//     } );

//     $.each( templ_video2.find('video') , function (index, value ) {
//         value.pause();
//     } );
//     $.each( templ_video2.find('.owl-item.active video') , function (index, value ) {
//         value.play();
//     } );
//   }



//   //Toggle menu
//   $('.toggle-menu-bar').on('click',function(){
//     var templ_menu = $(this).parent();
//     templ_menu.toggleClass('close');
//     $(this).toggleClass('close');
//   });

// });
