<?php
/**
 * The template for displaying page about
 *	Author: Vo Van Vuong
 * Create Date: 10/11/2020
 */

$tpl_vd = get_fields();
?>
<div class="bt-container">
    <div class="bt-gform">
        <?php echo do_shortcode('[elementor-template id="364"]'); ?>
    </div>

</div>
<div class="bt-comeback">
    <div class="bt-btn-reload-ajax">
        <?php if($tpl_vd['icon_comeback_tplvd']){ ?>
            <img src="<?php echo $tpl_vd['icon_comeback_tplvd']; ?>" alt="icon-comeBack" />
        <?php } ?>
    </div>
    <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
</div>
