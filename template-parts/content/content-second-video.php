<?php
//Get Data
$tpl_vd = get_fields();
$video_steps = $tpl_vd['items_second_videos'];

?>
<div id="toto-second-videos" class="bt-carousel-tpldv owl-carousel owl-theme">
  <?php
    foreach( $video_steps as $items ): ?>
        <div class="bt-item-vd item kkkáđâsđâsđa">
          <div class="bt-image-sub-vd items">
              <?php if($tpl_vd['setting_data_second_video']['icon_right_image']){ ?>
                  <img src="<?php echo $tpl_vd['setting_data_second_video']['icon_right_image']; ?>" alt="image-sub" />
              <?php } ?>
          </div>
            <div class="bt-meta items">
                <div class="bt-icon-play">
                    <div class="icon-play-vd"> </div>
                </div>

                <div class="bt-comeback">
                    <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
                </div>

                <?php if($items['menu']){
                    $item_menus = $items['menu']; ?>
                    <div class="bt-items-page">
                        <?php foreach( $item_menus as $menu ): ?>
                            <?php
                              $slugItem = sanitize_title($menu['item']);
                              $type_menu = sanitize_title($menu['type']);
                            ?>
                            <h2 class="bt-step bt-title" data-page="bt-<?php echo $slugItem; ?>">
                                <?php if($type_menu == 'url'){ ?>
                                        <a href="<?php echo $menu['url'] ?>"> <?php echo $menu['item'] ?> </a>
                                <?php }else { ?>
                                        <?php echo $menu['item'] ?>
                                <?php } ?>
                            </h2>
                        <?php endforeach; ?>
                    </div>
                <?php } ?>
                <div class="bt-item-page-mobile">
                    <div class="bt-btn-toggle">
                        <span class="toggole-menu-mobile"> </span>
                    </div>
                    <ul class="bt-menu-mobile menu-step" style="display:none;">
                        <?php foreach( $item_menus as $menu ): ?>
                            <?php
                              $slugItem = sanitize_title($menu['item']);
                              $type_menu = sanitize_title($menu['type']);
                            ?>
                            <li class="step item bt-<?php echo $slugItem; ?>" data-page="bt-<?php echo $slugItem; ?>">
                                <?php if($type_menu == 'url'){ ?>
                                        <a href="<?php echo $menu['url'] ?>"> <?php echo $menu['item'] ?> </a>
                                <?php }else { ?>
                                        <?php echo $menu['item'] ?>
                                <?php } ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
            <video  class="items  video-js" src="<?php echo $items['link'] ?>" playsinline>
                <source src="<?php echo $items['link'] ?>" type="video/mp4">
            </video>

        </div>
    <?php endforeach;?>
</div>
