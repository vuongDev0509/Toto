<?php
$tpl_vd    = get_fields();
$page2     = $tpl_vd['list_items_page_2_tplvd'];
$countItem = count($page2);

?>

<?php foreach ($page2 as $key => $value):
  $timelines        = $value['items_timelines'];
  $settingTimelines = $value['setting_data_timelines'];

  $steps            = $value['setting_data_timelines']['steps'];
  $background       = $steps['background'] ? $steps['background'] : "#cd681e" ;
  $color            = $steps['color'] ? $steps['color'] : "#fff" ;

  if ($key < $countItem) {
    $keyNext       = $key + 1;
    $nextItem      = $page2[$keyNext];
    $timelinesNext = "be_timelines_item_$keyNext";
  }

  if ($key > 0) {
    $keyPrev       = $key - 1;
    $prevItem      = $page2[$keyPrev];
    $timelinesPrev = "be_timelines_item_$keyPrev";
  }

   if ($value['show_or_hidden_timelines']): ?>
    <div id="toto-main-carousel-timelines-<?php echo $key ?>" class="be-carousel-timelines-main bt-carousel-tpldv be_timelines_item_<?php echo $key ?> owl-carousel owl-theme">

      <?php foreach ($timelines as $key => $timeline): ?>


        <div class="bt-item-vd item">
          <div class="bt-image-sub-vd aaaa items">
            <?php if($settingTimelines['icon_right_image']){ ?>
              <img src="<?php echo $settingTimelines['icon_right_image']; ?>" alt="image-sub" />
            <?php } ?>
          </div>

          <div class="bt-meta items">
            <div class="bt-icon-play">
              <div class="icon-play-vd"> </div>
            </div>

            <?php if($timeline['menu']){
              $item_menus = $timeline['menu']; ?>
              <div class="bt-items-page __navs-videos">
                <?php foreach( $item_menus as $menu ):
                  $slugItem  = sanitize_title($menu['item']);
                  $type_menu = sanitize_title($menu['type']); 
                  $idItem    = $menu['content'] ? $menu['content'] : " ";
                  ?>
                  <h2 class="bt-step bt-title __navs-videos-step bt-<?php echo $slugItem; ?>" data-page="ss-<?php echo $idItem ?>" style="background-color:<?php echo $background ?>; color:<?php echo $color ?>">
                    <?php if($type_menu == 'url'){ ?>
                      <a href="<?php echo $menu['url'] ?>"> <?php echo $menu['item'] ?> </a>
                    <?php }else { ?>
                      <?php echo $menu['item'] ?>
                    <?php } ?>
                  </h2>
                <?php endforeach; ?>
              </div>
            <?php } ?>

            <div class="bt-item-page-mobile __navs-videos">
              <div class="bt-btn-toggle">
                <span class="toggole-menu-mobile"> </span>
              </div>
              <ul class="bt-menu-mobile menu-step" style="display:none;">
                <?php foreach( $item_menus as $menu ):
                  $slugItem = sanitize_title($menu['item']);
                  $type_menu = sanitize_title($menu['type']); ?>
                  <li class="step item __navs-videos-step bt-<?php echo $slugItem; ?>" data-page="bt-<?php echo $slugItem; ?>">
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

          <div class="be_timelines_navigation">
            <div class="be_timelines_navigation__item be_timelines_next" >
              <?php if ($nextItem['heading']): ?>
                <span data-timeline="<?php echo $timelinesNext; ?>"> <?php echo $nextItem['heading'] ?> </span>
              <?php endif; ?>
            </div>
            <div class="be_timelines_navigation__item be_timelines_prev">
              <?php if ($prevItem['heading']): ?>
                  <span  data-timeline="<?php echo $timelinesPrev ?>"> <?php echo $prevItem['heading'] ?> </span>
              <?php endif; ?>
            </div>
          </div>

          <video  class="items  video-js" src="<?php echo $timeline['link'] ?>" playsinline>
            <source src="<?php echo $timeline['link'] ?>" type="video/mp4">
          </video>
        </div>
      <?php endforeach; ?>

    </div>
  <?php endif; ?>
<?php endforeach; ?>
