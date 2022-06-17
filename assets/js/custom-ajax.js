jQuery(document).ready(function(jQuery) {

    var isBtnAjax = jQuery(".page-template-template-video .bt-btn-ajax");
    var ssSinglePage = jQuery(".page-template-template-video .site-main .bt-section-single-postype");
    var isLoading = jQuery(".page-template-template-video .bt-loading");
    var isSectionScroll = jQuery(".site-main .bt-section");

    isBtnAjax.click(function(){
        // let isPostTye = jQuery(".page-template-template-video .bt-section .bt-carousel-page-inner").data("posttype");
        let isPostTye = jQuery(this).parents(".bt-carousel-page-inner").data("posttype");
        let id_post = jQuery(this).data("id");
        let data_sroll = jQuery(this).parents(".bt-carousel-page-inner").data("scroll");


        var isComeBack = jQuery(".page-template-template-video .bt-comeback .icon-comeback");
        isComeBack.removeClass("hidden");

        isSectionScroll.removeClass("active");
        isSectionScroll.addClass("hidden");
        ssSinglePage.removeClass("hidden");
        ssSinglePage.addClass("active");




        jQuery.ajax({
            type : "post",
            dataType : "json",
            url :custom_ajax_params.ajaxurl,
            data : {
                action: "getSingle",
                id_post: id_post,
                post_type: isPostTye,
                data_sroll:data_sroll
            },
            context: this,
            beforeSend: function(){


                isLoading.addClass("active");
                setTimeout( function() {
                    isLoading.removeClass("active");
                }, 1500);

            },
            success: function(response) {
                // Do something when the data has been processed
                if(response.success) {
                    jQuery('.bt-section-single-postype').html(response.data);
                }
                else {
                    alert('An error has occurred');
                }
            },
            error: function( jqXHR, textStatus, errorThrown ){
            // Do something when an error occurs
                console.log( 'The following error occured: ' + textStatus, errorThrown );
            }
        })
        return false;
    });


    jQuery(document).on( 'click', '.bt-comeback .icon-comeback-inner', function(){
        jQuery(this).addClass("hidden");
        let isScroll = jQuery(this).parent().data("scroll");
        jQuery('.site-main .bt-section').addClass("hidden");
        jQuery('.site-main .'+isScroll).removeClass("hidden");
        jQuery('.site-main .'+isScroll).addClass("active");
    } );


    const loadDraggable = function( ld ) {
        let isEmoji = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:last-child");

        let isItemEmoji = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:last-child>.ginput_container>.gfield_radio>li input[type=radio]");
        let totalStep = isItemEmoji.length - 1;
        let isSliderEmoji = jQuery("form#gform_1 #bt-emoji-slider");

        // create draggable
        isEmoji.append(`<div class='bt-draggable'>  <input type='range' value='0' min='0' max='${totalStep}'   step='1' data-rangeslider> <output></output> </div>`);


        let isRangeslider = jQuery(".bt-draggable  .rangeslider");
        setTimeout( () => {
            if( jQuery(".bt-draggable").children().hasClass("rangeslider")){
                console.log("check items");
                let isContent = '<div class="bt-items">';
                var i;
                for(i=0; i<=totalStep; i++){
                    console.log(i);
                    isContent +='<div class="item-circle"></div>'
                }
                isContent+='</div>';
                isRangeslider.append(isContent);
            }
        }, 1200 );


        var isForm = jQuery(".bt-gform form#gform_1");
        var isClassFirst = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:last-child>.ginput_container>.gfield_radio>li:first-child input[type=radio]").val();
        isForm.addClass(isClassFirst);

        // Basic rangeslider initialization
        var $document = $(document);
        var selector = '[data-rangeslider]';
        var $element = $(selector);

        jQuery("input[type='range']").rangeslider({

            // Deactivate the feature detection
            polyfill: false,
            rangeClass: 'rangeslider',
            disabledClass: 'rangeslider--disabled',
            horizontalClass: 'rangeslider--horizontal',
            verticalClass: 'rangeslider--vertical',
            fillClass: 'rangeslider__fill',
            handleClass: 'rangeslider__handle',

            // Callback function
            onInit: function() {

            },

            // Callback function
            onSlide: function(position, value) {
                var isIndex = value;
                var isEmoji  =  isItemEmoji.eq(isIndex);
                isEmoji.prop("checked", true).trigger("change");
                var value = isEmoji.val();

                // add class in smiley
                isSliderEmoji.removeClass();
                isSliderEmoji.addClass(value);

                // add class gravity form
                isForm.removeClass();
                isForm.addClass(value);
            },

            // Callback function
            onSlideEnd: function(position, value) {

            }
        });

    };

    jQuery(document).on( 'click', '.bt-btn-reload-ajax', function(){

        isLoading.addClass("active");
        setTimeout( function() {
            isLoading.removeClass("active");
        }, 1500);
        jQuery('.bt-section.bt-section-smiley .bt-comeback').removeClass("active");
        jQuery('.bt-section.bt-section-smiley .bt-container .bt-gform').removeClass("active");
        var ajax_url  = custom_ajax_params.ajaxurl;
        // console.log(a);
        // var button = jQuery(this);
        jQuery.get(ajax_url+'?action=gf_button_get_form&form_id=1',function(response){
            jQuery('.bt-section.bt-section-smiley .bt-container .bt-gform').html(response).fadeIn();
            // button.remove();

            if(window['gformInitDatepicker']) {gformInitDatepicker();}
            setTimeout( function() {
                loadDraggable();
            }, 1500);

        });

    });

    jQuery(document).on( 'click', '.bt-section-smiley .bt-gform form#gform_1 .gform_footer input[type=submit]', function(){
        jQuery('.bt-section.bt-section-smiley .bt-comeback').addClass("active");
        jQuery('.bt-section.bt-section-smiley .bt-container .bt-gform').addClass("active");
    });

});
