<?php
if ( ! defined( 'TOTO_WP_TOOLKIT_VER' ) ) {
	define( 'TOTO_WP_TOOLKIT_VER', WP_DEBUG ? rand() : '0.5.0' );
}


require get_template_directory() . '/resources/function/assets.php';
require get_template_directory() . '/resources/function/acf-options.php';
require get_template_directory() . '/resources/function/post-types.php';
require get_template_directory() . '/resources/function/function.php';