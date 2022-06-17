jQuery(document).ready(function(jQuery) {
    var isYearOld = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:first-child>.ginput_container>ul.gfield_radio>li");
    var isEmoji = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:last-child");
    var isItemEmoji = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:last-child>.ginput_container>.gfield_radio>li input[type=radio]");
    var isParentYears = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:first-child>.ginput_container");
    var isItemYearold = jQuery(".bt-section-smiley .bt-gform form#gform_1 .gform_body>.gform_fields>li:first-child>.ginput_container>ul.gfield_radio>li input[type=radio]");
    var totalStep = isItemEmoji.length - 1;
    var isSliderEmoji = jQuery("form#gform_1 #bt-emoji-slider");

    // create draggable
    isEmoji.append(`<div class='bt-draggable'>  <input type='range' value='0' min='0' max='${totalStep}'   step='1' data-rangeslider> <output></output> </div>`);

    // start add class grativy form
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

    // add circle in draggable rangeslider
    var isRangeslider = jQuery(".bt-draggable  .rangeslider");
    setTimeout( () => {
        if( jQuery(".bt-draggable").children().hasClass("rangeslider")){
            let isContent = '<div class="bt-items">';
            var i;
            for(i=0; i<=totalStep; i++){
                isContent +='<div class="item-circle"></div>'
            }
            isContent+='</div>';
            isRangeslider.append(isContent)
        }
    }, 1000 )
});
