<?php
  $tpl_vd = get_fields();
  $page2 = $tpl_vd['list_items_page_2_tplvd'];
?>

<?php foreach ($page2 as $key => $value):
  $timelines        = $value['items_timelines'];
  $settingTimelines = $value['setting_data_timelines'];

   if ($value['show_or_hidden_timelines']): ?>
    <div id="toto-steps-carousel-timelines-<?php echo $key ?>" class="be-carousel-timelines-steps bt-carousel-tpldv be_timelines_item_<?php echo $key ?> owl-carousel owl-theme">

      <?php foreach( $timelines as $i => $items ):
        $index = $i + 1;?>
          <div class="bt-item-vd item" data-index="<?php echo $index; ?>"><?php
            if($items['step_layout'] == 'img'){ ?>
              <div class="bt-smiley">
                <img src="<?php echo $items['image_layout']; ?>" alt=""/>
              </div>
            <?php }else{ ?>
              <span class="bt-numerical-order">
                <?php  echo $items['num_step'] ?>
              </span>

              <h3 class="bt-title">
                <?php echo $items['name']; ?>
              </h3>
            <?php } ?>
        </div>
      <?php endforeach; ?>

    </div>
    <?php endif; ?>

<?php endforeach; ?>
