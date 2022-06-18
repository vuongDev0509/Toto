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
<section class="bt-section bt-section-header-tpldv">
    <?php if($tpl_vd['background_header_template_video']){ ?>
        <div class="bt-header-tpl-vd">
            <div class="bt-thumbnails bt-background-thumbnails" style="background-image: url(<?php echo $tpl_vd['background_header_template_video']; ?>)"> </div>
            <div class="bt-meta-hd">

                <?php if($tpl_vd['logo_site_tpl_vd']){ ?>
                    <img src="<?php echo $tpl_vd['logo_site_tpl_vd']; ?>" class="bt-logo-site" alt="logo-site">
                <?php } ?>
                <?php if($tpl_vd['icon_play_site_tpl_vd']){ ?>
                    <img src="<?php echo $tpl_vd['icon_play_site_tpl_vd']; ?>" class="icon-play">
                <?php } ?>
            </div>
        </div>
    <?php } ?>
</section>
<main id="main" class="site-main">
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
    </section>
    <section class="bt-section bt-section-grid-team bt-team">
        <?php get_template_part('template-parts/content/content', 'team' ); ?>
    </section>
    <section class="bt-section bt-section-grid-artists bt-artistes bt-section-artistes">
        <?php get_template_part('template-parts/content/content', 'artists' ); ?>
    </section>
    <section class="bt-section bt-section-contact bt-contact">
        <?php get_template_part('template-parts/content/content', 'contact' ); ?>
    </section>
    <section class="bt-section bt-section-about bt-about">
        <?php get_template_part('template-parts/content/content', 'about' ); ?>
    </section>
    <section class="bt-section bt-section-smiley">
        <?php get_template_part('template-parts/content/content', 'smiley' ); ?>
    </section>
    <section class="bt-section bt-section-single-postype"></section>
</main>
<?php
get_footer();
