<?php
$tpl_vd = get_fields();
?>
<?php if($tpl_vd['photos_step_vd']){ ?>
    <h2 class="bt-title">Photos</h2>
<?php } ?>
<div class="bt-icon-play">
    <div class="icon-play-vd"> </div>
</div>
<?php if($items['item_step_video']){
    $item_steps = $items['item_step_video']; ?>
    <div class="bt-items-page">
        <?php foreach( $item_steps as $steps ): ?>
            <?php $slugItem = sanitize_title($steps['name_item_step_video']); ?>
            <h2 class="bt-title bt-<?php echo $slugItem; ?>" data-page="bt-<?php echo $slugItem; ?>">
                <a href="<?php echo $steps['link_item_step_video'] ?>"> <?php echo $steps['name_item_step_video'] ?> </a>
            </h2>
        <?php endforeach; ?>
    </div>
    <div class="bt-item-page-mobile">
        <div class="bt-btn-toggle">
            <span class="toggole-menu-mobile"> </span>
        </div>
        <ul class="bt-menu-mobile menu-step" style="display:none;">
            <?php foreach( $item_steps as $steps ): ?>
                <?php $slugItem = sanitize_title($steps['name_item_step_video']); ?>
                <li class="item bt-<?php echo $slugItem; ?>" data-page="bt-<?php echo $slugItem; ?>">
                    <a href="<?php echo $steps['link_item_step_video'] ?>"> <?php echo $steps['name_item_step_video'] ?> </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
<?php } ?>
