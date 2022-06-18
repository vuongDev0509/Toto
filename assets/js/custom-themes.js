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

    // var isDessins = jQuery('#bt-sync1 .bt-items-page .bt-dessins-step');
    // isDessins.click(function(ed){
    //     isSsDessins.addClass('active');
    // });


    // // redirect item page photo
    // var isPhoto = jQuery('#bt-sync1 .bt-items-page .bt-photos-step');
    // isPhoto.click(function(ett){
    //     isSsPhoto.addClass('active');
    // });


    // var isPhotoMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.bt-photos-step')
    // isPhotoMobile.click(function(ett){
    //     isSsPhoto.addClass('active');
    // });

    // var isSsDessinMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.bt-dessins-step')
    // isSsDessinMobile.click(function(ett){
    //     isSsDessins.addClass('active');
    // });

    // redirect page smiley
    var isSsSmiley = jQuery('.bt-section.bt-section-smiley');
    var  isSectionScroll = jQuery('.site-main  .bt-section');

    // var isIconSmiley = jQuery('.page-template-template-video .site-footer .bt-carousel-child #bt-sync2 .owl-item:first-child .bt-smiley > img');
    // isIconSmiley.click(function(as){
    //     as.preventDefault();
    //     as.stopPropagation();
    //     isSectionScroll.removeClass('active');
    //     isSectionScroll.addClass('hidden');
    //     isSsSmiley.removeClass('hidden');
    //     jQuery(".page-template-template-video .site-main").addClass("scroll");
    //     isSsSmiley.addClass('active');
    //     $.each( videos, function (index, value ) {
    //         value.pause();
    //     } )

    // });
    // redirect item page not photo (dekstop)

    // var isItemPage = jQuery('#bt-sync1 .bt-items-page .bt-step');
    // isItemPage.click(function(ett){
    //     var dataPage = jQuery(this).data('page');
    //     jQuery(".page-template-template-video .site-main").removeClass("scroll");
    //     isSectionScroll.each(function(){
    //         if(jQuery(this).hasClass(dataPage)){
    //             jQuery(this).removeClass("hidden");
    //             jQuery(this).addClass("active");
    //         }else {
    //             jQuery(this).removeClass("active");
    //             jQuery(this).addClass("hidden");
    //         }
    //     });
    // });



    // // redirect item page (mobile)
    // var isItemPageMobile = jQuery('#bt-sync1 .bt-item-page-mobile .bt-menu-mobile > li.step');
    // isItemPageMobile.click(function(ett){
    //     var dataPage = jQuery(this).data('page');
    //     jQuery(".page-template-template-video .site-main").removeClass("scroll");
    //     isSectionScroll.each(function(){
    //         if(jQuery(this).hasClass(dataPage)){
    //             jQuery(this).removeClass("hidden");
    //             jQuery(this).addClass("active");
    //         }else {
    //             jQuery(this).removeClass("active");
    //             jQuery(this).addClass("hidden");
    //         }
    //     });
    // });





    // click logo comback home page
    var isLogo = jQuery('.page-template-template-video .bt-logo .bt-logo-site');
    // isLogo.click(function(el){
    //     el.preventDefault();
    //     jQuery(".page-template-template-video .site-main").removeClass("scroll");
    //     isMenuMobile.slideUp("swing");
    //     jQuery('.page-template-template-video .bt-item-page-mobile .bt-btn-toggle').removeClass('active');
    //     isMenuMobile.removeClass('active');
    //     isSectionScroll.removeClass('active');
    //     isSectionScroll.addClass('hidden');
    //     jQuery('.site-main > .bt-section-tpl-vd').removeClass('hidden');
    //     jQuery('.site-main > .bt-section-tpl-vd').addClass('active');
    //     isSsDessins.removeClass('active');
    //     isSsPhoto.removeClass('active');
    //     btsync1.trigger("to.owl.carousel", [0, 500, true]);
    //     setTimeout( () => {
    //         $.each( videos, function (index, value ) {
    //             isBtnPlay.addClass('play');
    //             value.pause();
    //             jQuery('.page-template-template-video .bt-meta .bt-icon-play > .icon-play-vd').addClass('paused');
    //         } )
    //     }, 1000 )
    // });

    // comback section
    // var isComeBack = jQuery(".page-template-template-video .bt-comeback .icon-comeback");
    // const comeBack = function( cb ) {

    //     let isPageDetails = jQuery(".page-template-template-video #bt-sync1 .owl-item.active .bt-item-details")
    //     isSectionScroll.removeClass("active");
    //     isSectionScroll.addClass("hidden");
    //     isSectionVd.removeClass("hidden");
    //     isPageDetails.removeClass("active");
    //     isPageDetails.addClass("hidden");
    //     jQuery(this).addClass("hidden");

    // }

    // jQuery( 'body' ).on( 'click', '.bt-comeback .icon-comeback', comeBack )

});
