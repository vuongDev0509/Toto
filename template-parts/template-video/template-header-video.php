<?php
$tpl_vd = get_fields();
$list_item = $tpl_vd['list_items_header_tplvd'] ;
?>
<section id="page_1" class="bt-section bt-section-header-tpldv">
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

      <?php if (!empty($list_item)): ?>
        <div class="bt_list_item_header_video">
          <!-- <button type="button" name="button" class="toggle-menu-bar close"></button> -->
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


    <?php if (!empty($list_item)):
       foreach ($list_item as $key => $value):
         include("header-items-template.php");
       endforeach;
    endif; ?>

  <?php } ?>
</section>
