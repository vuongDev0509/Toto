<?php
/**
 * The template for displaying icon comeback
 *	Author: Vo Van Vuong
 * Create Date: 17/11/2020
 */
$iconFields= get_fields();
if($iconFields['icon_comeback_tplvd']){ ?>
    <img src="<?php echo $iconFields['icon_comeback_tplvd']; ?>" alt="icon" class="icon-comeback bt-icon-comeback" />
<?php
}
?>
