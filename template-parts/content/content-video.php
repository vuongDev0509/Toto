<?php
/**
 * The template for displaying content template video
 *	Author: Vo Van Vuong
 * Create Date: 20/10/2020
 */

$tpl_vd = get_fields();
$video_steps = $tpl_vd['video_step'];
?>
<div id="bt-sync1" class="bt-carousel-tpldv owl-carousel owl-theme">
    <?php
    $i = 0;
    foreach( $video_steps as $items ): ?>
        <div class="bt-item-vd item">
            <div class="bt-image-sub-vd items">
                <?php if($items['sub_title_step_video']){ ?>
                    <h4 class="bt-sub-title"> <?php echo $items['sub_title_step_video']; ?> </h4>
                <?php } ?>
                <?php if($items['description_step_video']){ ?>
                    <p class="bt-description-vd"> <?php echo $items['description_step_video']; ?> </p>
                <?php } ?>
                <?php if($items['image_sub_item_step_vd']){ ?>
                    <img src="<?php echo $items['image_sub_item_step_vd']; ?>" alt="image-sub" />
                <?php } ?>
            </div>

            <div class="bt-meta items">
                <div class="bt-icon-play">
                    <div class="icon-play-vd"> </div>
                </div>
                <?php if($items['item_step_video']){
                    $item_steps = $items['item_step_video']; ?>
                    <div class="bt-items-page __navs-videos">
                        <?php if($items['photos_step_vd']){ ?>
                            <h2 class="bt-photos-step bt-title __step-inner" data-page="gallery"> Photos </h2>
                        <?php } ?>
                        <?php if($items['dessins_step_vd']){ ?>
                            <h2 class="bt-dessins-step bt-title __step-inner" data-page="dessins"> Dessins </h2>
                        <?php } ?>

                        <?php foreach( $item_steps as $steps ): ?>
                            <?php $slugItem = sanitize_title($steps['name_item_step_video']); ?>
                            <h2 class="bt-step bt-title __navs-videos-step bt-<?php echo $slugItem; ?>" data-page="<?php echo $slugItem; ?>">
                                <?php if($steps['link_item_step_video']){ ?>
                                        <a href="<?php echo $steps['link_item_step_video'] ?>"> <?php echo $steps['name_item_step_video'] ?> </a>
                                <?php }else { ?>
                                        <?php echo $steps['name_item_step_video'] ?>
                                <?php } ?>
                            </h2>
                        <?php endforeach; ?>

                    </div>
                    <div class="bt-item-page-mobile __navs-videos">
                        <div class="bt-btn-toggle">
                            <span class="toggole-menu-mobile"> </span>
                        </div>
                        <ul class="bt-menu-mobile menu-step" style="display:none;">
                            <?php if($items['photos_step_vd']){ ?>
                                <li class="bt-photos-step item __step-inner" data-page="gallery"> Photos </li>
                            <?php } ?>
                            <?php if($items['dessins_step_vd']){ ?>
                                <li class="bt-dessins-step item __step-inner" data-page="dessins"> Dessins </li>
                            <?php } ?>
                            <?php foreach( $item_steps as $steps ): ?>
                                <?php $slugItem = sanitize_title($steps['name_item_step_video']); ?>
                                <li class="step item __navs-videos-step bt-<?php echo $slugItem; ?>" data-page="<?php echo $slugItem; ?>">
                                    <?php if($steps['link_item_step_video']){ ?>
                                            <a href="<?php echo $steps['link_item_step_video'] ?>"> <?php echo $steps['name_item_step_video'] ?> </a>
                                    <?php }else { ?>
                                            <?php echo $steps['name_item_step_video'] ?>
                                    <?php } ?>
                                </li>
                            <?php endforeach; ?>

                        </ul>
                    </div>
                <?php } ?>
            </div>
            <video  class="items  video-js" src="<?php echo $items['link_video_step'] ?>" playsinline>
                <source src="<?php echo $items['link_video_step'] ?>" type="video/mp4">
            </video>
            <?php if($items['photos_step_vd']){
                $gallerys = $items['photos_step_vd']; ?>
                <div class="bt-gallery-step-vd items bt-item-details">
                    <?php echo do_shortcode('[elementor-template id="'.$gallerys.'"]'); ?>
                    <div class="bt-comeback">
                        <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
                    </div>
                </div>
            <?php } ?>
            <?php if($items['dessins_step_vd']){
                $dessins = $items['dessins_step_vd']; ?>
                <div class="bt-dessins-step-vd items bt-item-details">
                    <?php echo do_shortcode('[elementor-template id="'.$dessins.'"]'); ?>
                    <div class="bt-comeback">
                        <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
                    </div>
                </div>
            <?php } ?>
        </div>
        <?php $i++; ?>
    <?php endforeach;?>
</div>
