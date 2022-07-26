<?php
/**
 * The template for displaying Template  Video
 *	Author: Vo Van Vuong
 * Create Date: 16/10/2020
 */
/* Template Name: Template Video*/
get_header();
$tpl_vd = get_fields();
?>
<?php get_template_part( 'template-parts/template-video/template-header', 'video' ); ?>
<main id="main" class="site-main">
  <?php get_template_part( 'template-parts/template-video/section', 'timeline' ); ?>
  <?php get_template_part( 'template-parts/template-video/page', '3' ); ?>

    <section class="bt-section bt-section-tpl-vd">
        <div class="bt-container-full">
            <?php if($tpl_vd['video_step']){ ?>
                <div class="bt-body-tpl-vd">
                    <div class="bt-container-body-tpl-vd">
                        <?php get_template_part( 'template-parts/content/content', 'video' ); ?>
                    </div>
                </div>
            <?php } ?>
        </div>

        <?php get_template_part('template-parts/template-video/section-gerenal', 'button'); ?>
    </section>

    <section class="bt-section bt-section-smiley">
        <?php get_template_part('template-parts/content/content', 'smiley' ); ?>
    </section>

    <?php get_template_part('template-parts/template-video/section', 'steps'); ?>
    
</main>
<?php
get_footer();
