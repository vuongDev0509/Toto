<?php
/**
 * Created by Vo Van Vuong.
 * Date: 19/10/2020
 * Project Name: Toto
 */


 /**
  * Enqueues scripts and styles.
 */

 function toto_enqueue_scripts_styles() {
    wp_enqueue_style( 'toto-main', get_stylesheet_directory_uri() . '/assets/css/toto-main.css', array() );
    wp_enqueue_style( 'toto-owl-carousel', get_stylesheet_directory_uri() . '/assets/css/Owl-Carousel/owl.carousel.css', array() );
    wp_enqueue_style( 'toto-owl-carousel-min', get_stylesheet_directory_uri() . '/assets/css/Owl-Carousel/owl.carousel.min.css', array() );
    wp_enqueue_style( 'toto-fonts-nunito', get_stylesheet_directory_uri() . '/assets/fonts/Nunito/stylesheet.css', array() );


    wp_enqueue_script( 'toto-functions', get_stylesheet_directory_uri() . '/assets/js/functions.js',array( 'jquery' ), '1.0.2', true);
    wp_enqueue_script( 'toto-custom-theme', get_stylesheet_directory_uri() . '/assets/js/custom-themes.js',array( 'jquery' ), '1.0.1', true);
    wp_enqueue_script( 'toto-custom-ajax', get_stylesheet_directory_uri() . '/assets/js/custom-ajax.js',array( 'jquery' ), '1.0.1', true);
    wp_enqueue_script( 'toto-template-video', get_stylesheet_directory_uri() . '/assets/js/template-video.js',array( 'jquery' ), '1.0.1', true);
 	  wp_enqueue_script( 'toto-owl-carousel', get_stylesheet_directory_uri() . '/assets/js/Owl-Carousel/owl.carousel.js',array( 'jquery' ), '1.0', true);
 	  wp_enqueue_script( 'toto-owl-carousel-min', get_stylesheet_directory_uri() . '/assets/js/Owl-Carousel/owl.carousel.min.js',array( 'jquery' ), '1.0', true);
    wp_enqueue_script( 'toto-morphing-emoji', get_stylesheet_directory_uri() . '/assets/js/morphing-emoji.js',array( 'jquery' ), '1.0', true);
    wp_enqueue_script( 'toto-rangeslider', get_stylesheet_directory_uri() . '/assets/js/rangeslider/rangeslider.js',array( 'jquery' ), '1.0', true);
    wp_enqueue_script( 'toto-rangeslider-min', get_stylesheet_directory_uri() . '/assets/js/rangeslider/rangeslider.min.js',array( 'jquery' ), '1.0', true);

    if(is_page_template('template-video.php')){
      $settings = array(
        'second_video' => get_field('setting_data_second_video')
      );

      wp_localize_script('toto-custom-theme', 'tv_settings', $settings);

      $meta_vd = array(
        'icon_spacing' => get_field('icon_spacing')
      );

      wp_localize_script('toto-template-video', 'icon_spacing_setting', $meta_vd);

    }


 }
 add_action( 'wp_enqueue_scripts', 'toto_enqueue_scripts_styles', 30 );


 /**
 * Scss compiler.
 */
require_once get_stylesheet_directory() ."/vendor/autoload.php";
use ScssPhp\ScssPhp\Compiler;
function toto_scss_to_css_compile() {

	// if ( ! WP_DEBUG ) {
	// 	return true;
	// }
    $scss_path = get_stylesheet_directory() . '/assets/css/';
    $scss      = new Compiler();
    $scss->setImportPaths( $scss_path );
    $scss->setFormatter( 'ScssPhp\ScssPhp\Formatter\Compressed' );
    $toto_scss_content = file_get_contents( $scss_path . 'toto-main.scss' );
    file_put_contents( $scss_path . 'toto-main.css', $scss->compile( $toto_scss_content));
}
add_action( 'init', 'toto_scss_to_css_compile' );
