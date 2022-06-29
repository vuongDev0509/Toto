<?php
$tpl_vd             = get_fields();
$timelines_toto_bus = $tpl_vd['video_step'];
$image_map          = $tpl_vd['image_maps_page_2'];
$locations          = $tpl_vd['list_item_maps'];
$list_item          = $tpl_vd['list_items_page_2_tplvd'];

?>
<section id="page_2" class="bt-section page_2">
  <div class="bt-container-full">
    <div class="page_2_content">

      <?php if (!empty($image_map['url'])): ?>
        <div class="bt_maps">
          <div class="bt_image_maps">
            <img src="<?php echo $image_map['url'] ?>" alt="image-maps">


            <?php if (!empty($timelines_toto_bus)): ?>
              <?php foreach ($timelines_toto_bus as $key => $value): ?>
                <?php $maps =  $value['list_item_maps'] ?>
                <?php if (!empty($maps['title'])): ?>
                  <?php $color = isset($maps['color']) ? $maps['color'] : '#e06a0a'; ?>

                  <div class="item-location item-location-<?php echo $key ?>" data-position="<?php echo $key ?>">
                    <span class="dot" <?php echo ($color) ? 'style="background-color:'.$color.'"' : ''; ?>></span>
                    <div class="entry" <?php echo ($color) ? 'style="background-color:'.$color.'"' : ''; ?>>
                      <?php echo $maps['title'] ?>
                    </div>
                  </div>

                  <div class="custom item-location item-location-11" data-position="11">
                    <span class="dot" style="background-color:#e1a26f"></span>
                    <div class="entry" style="background-color:#e1a26f">
                    Am eisleck                    </div>
                  </div>

                  <div class="custom item-location item-location-12" data-position="12">
                    <span class="dot" style="background-color:#e1a26f"></span>
                    <div class="entry" style="background-color:#e1a26f">
                    Revient                  </div>
                  </div>

                <?php endif; ?>
              <?php endforeach; ?>
            <?php endif; ?>

          </div>
        </div>
      <?php endif; ?>

      <!-- show menu template -->
      <?php if (!empty($list_item)): ?>
        <div class="bt_list_item_header_video">
          <?php foreach ($list_item as $key => $value):
            $background      = $value['background_color'] ? $value['background_color'] : "#539291" ;
            $color           = $value['color'] ? $value['color'] : "#fff" ;
            $activeTimelines = $value['show_or_hidden_timelines']  ? "be_timelines_item_$key" : "";
            $dataTotoBus     = $key == 0 ? "bt-sync1" : "";
            $activeTotoBus   = $key == 0 ? "be_timelines_toto_bus" : "";
            $countItem       = count($list_item);
            $class_click_custom = '';

            if($key == 0) {
              $class_click_custom = 'step0_page2';
            }
            if($key == 1) {
              $class_click_custom = 'step1_page2';
            }
            if($key == 2) {
              $class_click_custom = 'step2_page2';
            }
            if($key == 3) {
              $class_click_custom = 'step3_page2';
            }
            ?>

            <?php if (!empty($value['heading'])): ?>
              <h3 data-index="<?php echo $key?>" class="heading <?php echo $activeTotoBus.' '.$class_click_custom ?>" style="background-color:<?php echo $background ?>; color:<?php echo $color ?>"  data-toto-bus="<?php echo $dataTotoBus ?>" data-timelines="<?php echo $activeTimelines ?>">
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
</section>
