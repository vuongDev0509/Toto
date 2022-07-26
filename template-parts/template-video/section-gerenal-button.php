<?php 
$tpl_vd = get_fields();
$genrenal_button = $tpl_vd['general_button'];
$button_name     = $genrenal_button['name'];
$button_link     = $genrenal_button['url'];
$button_content  = $genrenal_button['content'];
$button_type     = $genrenal_button['type'];

if (!empty($button_name) && (!empty($button_link) or !empty($button_content))) { ?>

<section id="ss-genrenal-button" class="bt-section"> 
    <div class="bt-container-full"> 
        <div class="ss-genrenal-button__content">
            <div class="__genrenal-button"> 
                <?php if($button_link == 'url'){ ?>
                    <a class="__button" href="<?php echo $button_link ?>"> <?php echo $button_name ?> </a>
                <?php }else{ 
                    if(!empty($button_content)){
                        $idContent = $button_content->ID; ?>
                        <span class="__button" data-page='ss-<?php echo $idContent ?>'> <?php echo $button_name ?> </span>
                    <?php }
                 } ?>
            </div>
        </div>
    </div>
</section>

<?php } ?>
