<?php
$tpl_vd = get_fields();
?>
<section id="page_3" class="bt-section page_3">
  <div class="bt-content-full">
    <div class="page_3_container">
      <div class="__content_left" style="background-image: url(<?php echo $tpl_vd['bg_after_logo_page3'] ?>)">
        <div class="__content">
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
      </div>

      <div class="__content_right">
        <div class="__content">
          <?php if (!empty($tpl_vd['heading_page_3_tplvd'])): ?>
            <h3 class="heading"> <?php echo $tpl_vd['heading_page_3_tplvd'] ?>  </h3>
          <?php endif; ?>

          <?php $image = $tpl_vd['image_page_3_tplvd'] ?>
          <?php if (!empty($image['url'])): ?>
            <div class="image">
              <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['title'] ?>">
            </div>
          <?php endif; ?>

          <?php if (!empty($tpl_vd['description_page_3_tplvd'])): ?>
            <p class="description"><?php echo $tpl_vd['description_page_3_tplvd'] ?></p>
          <?php endif; ?>

          <?php $list_item = $tpl_vd['list_items_page_3_tplvd'] ?>
          <?php if (!empty($list_item)): ?>
            <div class="bt_list_item">
              <button type="button" name="button" class="toggle-menu-bar close"></button>
              <?php foreach ($list_item as $key => $value): ?>

                <?php
                $background = $value['background_color'] ? $value['background_color'] : "#539291" ;
                $color = $value['color'] ? $value['color'] : "#fff" ;
                ?>

                <?php if (!empty($value['heading'])): ?>
                  <h3 class="heading" style="background-color:<?php echo $background ?>; color:<?php echo $color ?>">
                    <?php if (!empty($value['link'])): ?>
                      <a href="<?php echo $value['link'] ?>"> <?php echo $value['heading'] ?> </a>
                    <?php else: ?>
                      <?php echo $value['heading'] ?>
                    <?php endif; ?>
                  </h3>
                <?php endif; ?>


              <?php endforeach; ?>
            </div>
          <?php endif; ?>

        </div>
      </div>
    </div>
  </div>
</section>
