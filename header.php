<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<script src="https://code.jquery.com/jquery-3.1.0.js"
	    integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
	    crossorigin="anonymous"></script>
    <script src="https://vjs.zencdn.net/5-unsafe/video.js"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php $tpl_vd = get_fields(); ?>
<?php if(is_page_template('template-video.php')){ ?>
	
	<div class="rotateScreen">
		<img class="icon-tablet" src="<?php echo get_template_directory_uri(); ?>/resources/assets/images/icon-rotate.png)" alt="icon-rotateScreen"/>
	</div>
	<div class="bt-loading">
		<?php if($tpl_vd['icon_loading_tplvd']){ ?>
			<img src="<?php echo $tpl_vd['icon_loading_tplvd']; ?>" alt="icon-loading">
		<?php } ?>
	</div>
	<div class="bt-header-main">
		<div class="bt-container">
			<a class="bt-logo" href="/toto">
				<?php
				$tpl_vd = get_fields();
				if($tpl_vd['logo_site_tpl_vd']){ ?>
					<img src="<?php echo $tpl_vd['logo_site_tpl_vd']; ?>" class="bt-logo-site bt-icon-comeback" alt="logo-site">
				<?php } ?>
			</a>
		</div>
	</div>
<?php } ?>
<div id="page" class="site">
