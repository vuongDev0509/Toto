<?php 

add_filter( 'acf/settings/save_json', 'toto_acf_json_save_point' );
function toto_acf_json_save_point( $path ) {
	// update path
	$path = get_stylesheet_directory() . '/resources/function/acf-options';

	// return
	return $path;
}

add_filter( 'acf/settings/load_json', 'toto_acf_json_load_point' );
function toto_acf_json_load_point( $paths ) {
	// remove original path (optional)
	unset( $paths[0] );
	// append path
	$paths[] = get_stylesheet_directory() . '/resources/function/acf-options';

	// return
	return $paths;
}