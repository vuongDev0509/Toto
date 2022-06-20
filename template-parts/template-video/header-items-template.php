<?php
$template = $value['template'];
$menus    = $template['menu'];
$list_item = $tpl_vd['list_items_header_tplvd'] ;
// echo "<pre>";
// echo print_r($menus);
// echo "</pre>";
?>
<div id="header_items_template-<?php echo $key ?>" class="be_header_items_template header-template-<?php echo $key ?>">
  <div class="bt-content-full">
    <button type="button" name="button" class="bt-back"></button>
    <div class="header_items_template_container">
      <div class="__content_left" style="background-image: url('https://job.beplusprojects.com/toto/wp-content/uploads/2022/02/bg-section3-toto-2.png')">
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
          <?php if (!empty($template['title'])): ?>
            <h3 class="heading"> <?php echo $template['title'] ?>  </h3>
          <?php endif; ?>

          <?php if (!empty($template['image'])): ?>
          <div class="image">
            <img src="<?php echo $template['image'] ?>" alt="image">
          </div>
          <?php endif; ?>

          <?php if (!empty($template['description'])): ?>
            <p class="description"><?php echo $template['description'] ?></p>
          <?php endif; ?>

          <!-- list menu -->
          <!-- <?php if (!empty($menus)): ?>
            <div class="bt_list_item">
              <button type="button" name="button" class="toggle-menu-bar close"></button>
              <?php foreach ($menus as $key => $menu): ?>
                <?php
                $background = $menu['background'] ? $menu['background'] : "#539291" ;
                $color = $menu['color'] ? $menu['color'] : "#fff" ;
                ?>

                <?php if (!empty($menu['name'])): ?>
                  <h3 class="heading" style="background-color:<?php echo $background ?>; color:<?php echo $color ?>">
                    <?php if (!empty($menu['link'])): ?>
                      <a href="<?php echo $menu['link'] ?>"> <?php echo $menu['name'] ?> </a>
                    <?php else: ?>
                      <?php echo $menu['name'] ?>
                    <?php endif; ?>
                  </h3>
                <?php endif; ?>

              <?php endforeach; ?>
            </div>
          <?php endif; ?> -->
          <?php if (!empty($list_item)): ?>
            <div class="bt_list_item_header_video close">
              <button type="button" name="button" class="toggle-menu-bar toggle-menu-bar-custom"></button>
              <?php foreach ($list_item as $key => $value):
                $background = $value['background_color'] ? $value['background_color'] : "#539291" ;
                $color = $value['color'] ? $value['color'] : "#fff" ;
              ?>
                <?php if (!empty($value['heading'])): ?>
                  <h3 class="heading" data-template="header-template-<?php echo $key ?>" style="background-color:<?php echo $background ?>; color:<?php echo $color ?>">
                    <?php echo $value['heading'] ?>
                  </h3>
                <?php endif; ?>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>

        </div>
      </div>
    </div>
  </div>
</div>
