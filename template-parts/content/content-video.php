<?php
/**
 * The template for displaying content template video
 *	Author: Vo Van Vuong
 * Create Date: 20/10/2020
 */

$tpl_vd      = get_fields();
$video_steps = $tpl_vd['video_step'];
$timelines   = $tpl_vd['list_items_page_2_tplvd'];

?>
<div>
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
                    <div class="bt-items-page">
                        <?php if($items['photos_step_vd']){ ?>
                            <h2 class="bt-photos-step bt-title"> Photos </h2>
                        <?php } ?>
                        <?php if($items['dessins_step_vd']){ ?>
                            <h2 class="bt-dessins-step bt-title"> Dessins </h2>
                        <?php } ?>

                        <?php foreach( $item_steps as $steps ): ?>
                            <?php $slugItem = sanitize_title($steps['name_item_step_video']); ?>
                            <h2 class="bt-step bt-title bt-<?php echo $slugItem; ?>" data-page="bt-<?php echo $slugItem; ?>">
                                <?php if($steps['link_item_step_video']){ ?>
                                        <a href="<?php echo $steps['link_item_step_video'] ?>"> <?php echo $steps['name_item_step_video'] ?> </a>
                                <?php }else { ?>
                                        <?php echo $steps['name_item_step_video'] ?>
                                <?php } ?>
                            </h2>
                        <?php endforeach; ?>

                    </div>
                    <div class="bt-item-page-mobile">
                        <div class="bt-btn-toggle">
                            <span class="toggole-menu-mobile"> </span>
                        </div>
                        <ul class="bt-menu-mobile menu-step" style="display:none;">
                            <?php if($items['photos_step_vd']){ ?>
                                <li class="bt-photos-step item"> Photos </li>
                            <?php } ?>
                            <?php if($items['dessins_step_vd']){ ?>
                                <li class="bt-dessins-step item"> Dessins </li>
                            <?php } ?>
                            <?php foreach( $item_steps as $steps ): ?>
                                <?php $slugItem = sanitize_title($steps['name_item_step_video']); ?>
                                <li class="step item bt-<?php echo $slugItem; ?>" data-page="bt-<?php echo $slugItem; ?>">
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

            <div class="be_timelines_navigation">
              <div class="be_timelines_navigation__item be_timelines_prev">
                <div class="bt-back">

                </div>
              </div>
              <?php foreach ($timelines as $key => $timeline): ?>
                <?php if ($key == 1): ?>
                  <div class="be_timelines_navigation__item be_timelines_next " >
                    <span data-timeline="be_timelines_item_1"><?php echo $timeline['heading'] ?></span>
                  </div>
                <?php endif; ?>
              <?php endforeach; ?>
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

            <img src="https://job.beplusprojects.com/toto/wp-content/uploads/2022/03/icon-next.png" alt="icon-next" class="icon-switch-next be-icon-next">

        </div>
        <?php $i++; ?>
    <?php endforeach;?>
</div>
</div>

<?php get_template_part('template-parts/content/content','second-video'); ?>
<?php get_template_part('template-parts/template-video/timelines/item','timelines'); ?>
