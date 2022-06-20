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
  <?php get_template_part( 'template-parts/template-video/page', '2' ); ?>
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
    </section>
    <section class="bt-section bt-section-grid-team bt-team">
        <?php get_template_part('template-parts/content/content', 'team' ); ?>
    </section>
    <section class="bt-section bt-section-grid-artists bt-artistes">
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

    <?php

    $video_steps_2 = $tpl_vd['items_second_videos'];
    $list_ids = array(245);
    foreach ($video_steps_2 as $key => $items) {
      ?>
       <?php if($items['menu']){
             $item_menus = $items['menu']; ?>
             <?php foreach( $item_menus as $menu ): ?>
                 <?php
                   $slugItem = sanitize_title($menu['item']);
                   $type_menu = sanitize_title($menu['type']);
                   if($type_menu == 'content' && !in_array($menu['content'],$list_ids)){
                     $list_ids[] = $menu['content'];
                     ?>
                     <section class="bt-section bt-section-<?php echo $slugItem; ?> bt-<?php echo $slugItem; ?>">
                       <?php echo do_shortcode('[elementor-template id="'.$menu['content'].'"]'); ?>
                       <div class="bt-comeback">
                           <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
                       </div>
                     </section>
                     <?php
                   }
                 ?>
             <?php endforeach; ?>
       <?php } ?>
      <?php
    }
     ?>

</main>
<?php
get_footer();
