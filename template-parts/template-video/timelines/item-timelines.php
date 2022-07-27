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
        <?php $backgroundTimeline = $timeline['background']; ?>
        <div class="bt-item-vd item">
          <?php if($backgroundTimeline == 'Image'){ 
            $image  = $timeline['image'] ? $timeline['image'] : " " ; ?>
            <div class="item-image" style="background-image: url('<?php echo $image ?>')"> </div>
          <?php } ?>
          

          <div class="bt-image-sub-vd items">
            <?php if($settingTimelines['icon_right_image']){ ?>
              <img src="<?php echo $settingTimelines['icon_right_image']; ?>" alt="image-sub" />
            <?php } ?>
          </div>
            
          <div class="bt-meta items">
            <?php if($backgroundTimeline == 'Video'){ ?>
              <div class="bt-icon-play">
                <div class="icon-play-vd"> </div>
              </div>
            <?php } ?>

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
                <span class="cta-next" data-timeline="<?php echo $timelinesNext ?>"> </span>
                <span class="__text"> <?php echo $nextItem['heading'] ?> </span>
              <?php endif; ?>
            </div>
            <div class="be_timelines_navigation__item be_timelines_prev">
              <?php if ($prevItem['heading']): ?>
                  <span class="cta-prev" data-timeline="<?php echo $timelinesPrev ?>"> </span>
                  <span class="__text"> <?php echo $prevItem['heading'] ?> </span>
              <?php endif; ?>
            </div>
          </div>
    
          <?php if($backgroundTimeline == 'Video'){ ?>
            
            <?php if(!empty($timeline['link'])){ ?>
              <video  class="items video-js" src="<?php echo $timeline['link'] ?>" playsinline>
                <source src="<?php echo $timeline['link'] ?>" type="video/mp4">
             </video>
            <?php } ?>

          <?php }elseif($backgroundTimeline == 'Vimeo'){ ?>

            <?php if(!empty($timeline['vimeo'])){ ?>
                    <div class="be-vimeo-vd" data-vimeo-responsive="true" data-vimeo-controls="false" data-vimeo-id="<?php echo $timeline['vimeo'] ?>" id="be-vimeo-<?php echo $timeline['vimeo'] ?>"></div>
            <?php } ?>

          <?php } ?> 
        </div>
      <?php endforeach; ?>

    </div>
  <?php endif; ?>
<?php endforeach; ?>
