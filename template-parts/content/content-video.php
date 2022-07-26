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

<div id="bt-parents-video" class="bt-carousel-tpldv owl-carousel owl-theme">
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
                        <?php foreach( $item_steps as $steps ): ?>
                            <?php 
                                $slugItem = sanitize_title($steps['name_item_step_video']); 
                                $idItem   = $steps['content'] ? $steps['content'] : " ";
                             ?>
                            <h2 class="bt-step bt-title __navs-videos-step bt-<?php echo $slugItem; ?>" data-page="ss-<?php echo $idItem; ?>">
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
                            <?php foreach( $item_steps as $steps ): ?>
                                <?php 
                                    $slugItem = sanitize_title($steps['name_item_step_video']);
                                    $idItem   = $steps['content'] ? $steps['content'] : " ";
                                ?>
                                <li class="step item __navs-videos-step bt-<?php echo $slugItem; ?>" data-page="ss-<?php echo $idItem; ?>">
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
                    <span class="cta-next" data-timeline="be_timelines_item_1"> </span>
                    <span class="__text"> <?php echo $timeline['heading'] ?> </span>
                  </div>
                <?php endif; ?>
              <?php endforeach; ?>
            </div>
            
            <?php if($items['type_video'] == 'MP4'){ ?>
                <video class="items video-js" src="<?php echo $items['link_video_step'] ?>" playsinline>
                    <source src="<?php echo $items['link_video_step'] ?>" type="video/mp4">
                </video>
            <?php }else{ ?>
                <div class="be-vimeo-vd" data-vimeo-responsive="true" data-vimeo-controls="false" data-vimeo-id="<?php echo $items['video_vimeo'] ?>" id="be-vimeo-vd"></div>
            <?php } ?>

            <img src="https://job.beplusprojects.com/toto/wp-content/uploads/2022/03/icon-next.png" alt="icon-next" class="icon-switch-next be-icon-next">

        </div>
        <?php $i++; ?>
    <?php endforeach;?>
</div>


<?php get_template_part('template-parts/content/content','second-video'); ?>
<?php get_template_part('template-parts/template-video/timelines/item','timelines'); ?>
