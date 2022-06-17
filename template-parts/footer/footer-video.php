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
            <div id="bt-sync2" class="bt-carousel-tpldv owl-carousel owl-theme">
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
                                    <img src="<?php echo $tpl_vd['icon_smiley_tplvd']; ?>" alt="icon-smiley"/>
                                </div>
                            <?php } ?>
                        </div>
                    <?php }else { ?>
                        <div class="bt-item-vd item" data-index="<?php echo $index; ?>">
                            <span class="bt-numerical-order">
                                <?php  $numericalOrder = $i - 1;
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
        </div>
    </div>
</section>
