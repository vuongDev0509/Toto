<?php
if ( ! defined( 'TOTO_WP_VER' ) ) {
	define( 'TOTO_WP_VER', WP_DEBUG ? rand() : '0.5.0' );
}

require get_template_directory() . '/resources/function/acf-options.php';
require get_template_directory() . '/resources/function/post-types.php';
require get_template_directory() . '/resources/function/ajax.php';
require get_template_directory() . '/resources/function/function.php';
