jQuery(document).ready(function($) {

    //  carousel sync video
    var tplvd = jQuery('.page-template-template-video');
    var videos = jQuery('body #bt-sync1 video');
    var isBtnPlay = jQuery('.page-template-template-video .bt-meta .bt-icon-play');
    var isTeam = jQuery('#bt-sync1 .bt-items-page .bt-title.bt-team');
    var isSectionTeam = jQuery('.bt-section-grid-team');
    var btsync1 = $("#bt-sync1");
    var btsync2 = $("#bt-sync2");

    var slidesPerPage = 11; //globaly define number of elements per page
    var syncedSecondary = true;
    var thumbnailItemClass = '.owl-item';



    // event icon play video
    jQuery('.page-template-template-video .bt-header-tpl-vd .icon-play').click(function(e){
        tplvd.addClass('active');
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

    });
    // menu mobile step
    const isBtnMobile = jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle > .toggole-menu-mobile');
    const isMenuMobile = jQuery('.page-template-template-video .bt-item-page-mobile .bt-menu-mobile');
    isBtnMobile.click(function(em){
        em.preventDefault();
        jQuery('#bt-sync1.bt-carousel-tpldv .owl-item .bt-item-vd .bt-meta').toggleClass('active');
        jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').toggleClass('active');
        isMenuMobile.toggleClass('active');
        isMenuMobile.slideToggle("swing");
    });

    // start icon play video
    jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').click(function(ev){

        var myVideo = document.querySelector(".page-template-template-video .owl-item.active .video-js");
        if (myVideo.paused){
            jQuery(this).removeClass('paused');
            isBtnPlay.removeClass('play');
            myVideo.play();

        }
        else{
            jQuery(this).addClass('paused');
            isBtnPlay.addClass('play');
            myVideo.pause();
        }
    });

    let isCircleHd = jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').width();
    jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').height(isCircleHd);
    jQuery(window).on('resize', function () {
        let isCircleHd = jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').width();
        jQuery('.bt-section.bt-section-header-tpldv .bt-header-tpl-vd .bt-meta-hd').height(isCircleHd);
    });
    jQuery(window).on('load resize', function () {

        // set width, height for video
        let isRotateScreen = jQuery('.page-template-template-video .rotateScreen');
        let isVideo = jQuery('#bt-sync1.bt-carousel-tpldv .video-js');
        let widthWindow= window.innerWidth;
        let heightWindow = window.innerHeight;


        if(widthWindow > heightWindow){
            console.log("th1");
            let widthVideo = widthWindow * 1.3;
            isVideo.width(widthVideo);
            // isRotateScreen.removeClass('active');
            let heightVideo = widthVideo / 1.78;
            isVideo.height(heightVideo);
        }else {

            if(widthWindow > 767){
                console.log("th2");
                let widthVideo = widthWindow * 2.5;
                isVideo.width(widthVideo);
                // isRotateScreen.removeClass('active');
                let heightVideo = widthVideo / 1.78;
                isVideo.height(heightVideo);
            }else {
                console.log("th3");
                let widthVideo = widthWindow * 3;
                isVideo.width(widthVideo);
                // isRotateScreen.removeClass('active');
                let heightVideo = widthVideo / 1.78;
                isVideo.height(heightVideo);
            }
        }

        // if(widthWindow >= 1360){
        //     if(widthWindow > heightWindow){
        //
        //         let widthVideo = widthWindow * 1.3;
        //         isVideo.width(widthVideo);
        //         // isRotateScreen.removeClass('active');
        //         let heightVideo = widthVideo / 1.78;
        //         isVideo.height(heightVideo);
        //
        //     }else {
        //         //
        //         // isRotateScreen.addClass('active');
        //         let widthVideo = widthWindow * 3;
        //         isVideo.width(widthVideo);
        //
        //         let heightVideo = widthVideo / 1.78;
        //         isVideo.height(heightVideo);
        //     }
        // }else {
        //     if(widthWindow >= 861){
        //         if(widthWindow > heightWindow){
        //             // isRotateScreen.removeClass('active');
        //             let widthVideoMobile = 2026;
        //             isVideo.width(widthVideoMobile);
        //             let heightVideo = 1140;
        //             isVideo.height(heightVideo);
        //         }else {
        //             // isRotateScreen.addClass('active');
        //             let heightVideo = widthWindow * 2;
        //             isVideo.height(heightVideo);
        //         }
        //     }else{
        //         if(widthWindow > heightWindow){
        //
        //             let widthVideo = widthWindow * 1.7;
        //             isVideo.width(widthVideo);
        //             // isRotateScreen.removeClass('active');
        //             let heightVideo = widthVideo / 1.78;
        //             isVideo.height(heightVideo);
        //         }else {
        //
        //             // isRotateScreen.addClass('active');
        //             let heightVideo = widthWindow * 2;
        //             isVideo.height(heightVideo);
        //         }
        //     }
        // }



    });

    // stop all videos ver dektop
    var isStopAllVd = jQuery('#bt-sync1 .bt-items-page .bt-title');
    isStopAllVd.click(function(ett){
        jQuery('#bt-sync1 .owl-item.active .bt-icon-play > .icon-play-vd').addClass('paused')
        isBtnPlay.addClass('play');
        $.each( videos, function (index, value ) {
            value.pause();
        } )
    });

    // stop all videos ver mobile
    var isStopAllVdMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile .item');
    isStopAllVdMobile.click(function(ett){
        jQuery('#bt-sync1 .owl-item.active .bt-icon-play > .icon-play-vd').addClass('paused')
        isBtnPlay.addClass('play');
        $.each( videos, function (index, value ) {
            value.pause();
        } )
    });

    // show all videos
    var isStepVd = jQuery('#bt-sync2 .owl-stage-outer .owl-item');
    var isSectionVd = jQuery('.page-template-template-video .bt-section-tpl-vd');
    var isSsPhoto = jQuery("#bt-sync1.bt-carousel-tpldv .owl-item .bt-item-vd .bt-gallery-step-vd");
    var isSsDessins = jQuery("#bt-sync1.bt-carousel-tpldv .owl-item .bt-item-vd .bt-dessins-step-vd");
    isStepVd.each(function(index){
        jQuery(this).click(function(){
            jQuery(".page-template-template-video .site-main").removeClass("scroll");
            jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').removeClass('active');
            isMenuMobile.removeClass('active');
            isMenuMobile.slideUp("swing");
            isSectionVd.removeClass('hidden');
            isSectionScroll.removeClass("active");
            isSsPhoto.removeClass("active");
            isSsDessins.removeClass("active");
        });
    });

    var isDessins = jQuery('#bt-sync1 .bt-items-page .bt-dessins-step');
    isDessins.click(function(ed){
        isSsDessins.addClass('active');
    });


    // redirect item page photo
    var isPhoto = jQuery('#bt-sync1 .bt-items-page .bt-photos-step');
    isPhoto.click(function(ett){
        isSsPhoto.addClass('active');
    });


    var isPhotoMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.bt-photos-step')
    isPhotoMobile.click(function(ett){
        isSsPhoto.addClass('active');
    });

    var isSsDessinMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.bt-dessins-step')
    isSsDessinMobile.click(function(ett){
        isSsDessins.addClass('active');
    });

    // redirect page smiley
    var isSsSmiley = jQuery('.bt-section.bt-section-smiley');
    var  isSectionScroll = jQuery('.site-main  .bt-section');

    var isIconSmiley = jQuery('.page-template-template-video .site-footer .bt-carousel-child #bt-sync2 .owl-item:first-child .bt-smiley > img');
    isIconSmiley.click(function(as){
        as.preventDefault();
        as.stopPropagation();
        isSectionScroll.removeClass('active');
        isSectionScroll.addClass('hidden');
        isSsSmiley.removeClass('hidden');
        jQuery(".page-template-template-video .site-main").addClass("scroll");
        isSsSmiley.addClass('active');
        $.each( videos, function (index, value ) {
            value.pause();
        } )

    });
    // redirect item page not photo (dekstop)

    var isItemPage = jQuery('#bt-sync1 .bt-items-page .bt-step');
    isItemPage.click(function(ett){
        var dataPage = jQuery(this).data('page');
        jQuery(".page-template-template-video .site-main").removeClass("scroll");
        isSectionScroll.each(function(){
            if(jQuery(this).hasClass(dataPage)){
                jQuery(this).removeClass("hidden");
                jQuery(this).addClass("active");
            }else {
                jQuery(this).removeClass("active");
                jQuery(this).addClass("hidden");
            }
        });
    });



    // redirect item page (mobile)
    var isItemPageMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.step');
    isItemPageMobile.click(function(ett){
        var dataPage = jQuery(this).data('page');
        jQuery(".page-template-template-video .site-main").removeClass("scroll");
        isSectionScroll.each(function(){
            if(jQuery(this).hasClass(dataPage)){
                jQuery(this).removeClass("hidden");
                jQuery(this).addClass("active");
            }else {
                jQuery(this).removeClass("active");
                jQuery(this).addClass("hidden");
            }
        });
    });



    // carousel page inner (team, artists)
    jQuery('.bt-carousel-page-inner').owlCarousel({
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

    // click logo comback home page
    var isLogo = jQuery('.page-template-template-video .bt-logo .bt-logo-site');
    isLogo.click(function(el){
        el.preventDefault();
        jQuery(".page-template-template-video .site-main").removeClass("scroll");
        isMenuMobile.slideUp("swing");
        jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').removeClass('active');
        isMenuMobile.removeClass('active');
        isSectionScroll.removeClass('active');
        isSectionScroll.addClass('hidden');
        jQuery('.site-main > .bt-section-tpl-vd').removeClass('hidden');
        jQuery('.site-main > .bt-section-tpl-vd').addClass('active');
        isSsDessins.removeClass('active');
        isSsPhoto.removeClass('active');
        btsync1.trigger("to.owl.carousel", [0, 500, true]);
        setTimeout( () => {
            $.each( videos, function (index, value ) {
                isBtnPlay.addClass('play');
                value.pause();
                jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').addClass('paused');
            } )
        }, 1000 )
    });

    // comback section
    var isComeBack = jQuery(".page-template-template-video .bt-comeback .icon-comeback");
    const comeBack = function( cb ) {

        let isPageDetails = jQuery(".page-template-template-video #bt-sync1 .owl-item.active .bt-item-details")
        isSectionScroll.removeClass("active");
        isSectionScroll.addClass("hidden");
        isSectionVd.removeClass("hidden");
        isPageDetails.removeClass("active");
        isPageDetails.addClass("hidden");
        jQuery(this).addClass("hidden");

    }

    jQuery( 'body' ).on( 'click', '.bt-comeback .icon-comeback', comeBack )

});
