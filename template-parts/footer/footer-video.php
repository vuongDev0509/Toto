<?php
/**
 * The template for displaying content footer video
 *	Author: Vo Van Vuong
 * Create Date: 29/10/2010
 */
$tpl_vd = get_fields();
?>
<section class="bt-section bt-section-content-footer">
    <div class="bt-container-full">
        <div class="bt-carousel-child">
            <?php if($tpl_vd['icon_spacing']){ ?>
                <div class="bt-icon-spacing">
                    <img src="<?php echo $tpl_vd['icon_spacing']; ?>" alt="icon" />
                </div>
            <?php } ?>
            <div id="bt-childrens-video" class="bt-carousel-tpldv owl-carousel owl-theme">
                <?php $video_steps = $tpl_vd['video_step'];
                $i = 0;
                if($video_steps):
                foreach( $video_steps as $items ):
                    $i ++;
                    $index = $i - 1;
                    if( $i == 1){ ?>
                        <div class="bt-item-vd item" data-index="<?php echo $index; ?>">
                            <?php if($tpl_vd['icon_smiley_tplvd']){ ?>
                                <div class="bt-smiley">
                                    <img src="<?php echo $tpl_vd['icon_smiley_tplvd']; ?>" alt="icon-smiley" data-section="bt-section-smiley" />
                                </div>
                            <?php } ?>
                        </div>
                    <?php }else { ?>
                        <div class="bt-item-vd item" data-index="<?php echo $index; ?>">
                            <span class="bt-numerical-order">
                                <?php  $numericalOrder = $i - 2;
                                    echo $numericalOrder;
                                ?>
                            </span>
                            <h3 class="bt-title">
                                <?php echo $items['name_step_video']; ?>
                            </h3>
                        </div>
                    <?php } ?>
                <?php endforeach;
                    endif;
                 ?>
            </div>
            <div id="steps-second-videos" class="bt-carousel-tpldv owl-carousel owl-theme">
                <?php $video_steps_2 = $tpl_vd['items_second_videos'];
                if($video_steps_2):
                      foreach( $video_steps_2 as $i => $items ):
                          $index = $i + 1;
                          ?><div class="bt-item-vd item" data-index="<?php echo $index; ?>"><?php
                          if($items['step_layout'] == 'img'){
                            ?>
                            <div class="bt-smiley">
                                <img src="<?php echo $items['image_layout']; ?>" alt=""/>
                            </div>
                            <?php
                          }else{
                            ?>
                            <span class="bt-numerical-order">
                                <?php  echo $items['num_step'] ?>
                            </span>
                            <h3 class="bt-title">
                                <?php echo $items['name']; ?>
                            </h3>
                            <?php
                          }
                          ?>  </div> <?php
                      endforeach;
                endif;
                 ?>
            </div>

            <?php get_template_part('template-parts/template-video/footer/item','timelines'); ?>

        </div>
    </div>
</section>
