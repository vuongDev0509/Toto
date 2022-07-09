<?php 




 /**
  * Enqueues scripts and styles.
 */

function toto_enqueue_scripts_styles() {

    wp_enqueue_style( 'toto-main', get_stylesheet_directory_uri() . '/resources/assets/css/toto-main.css', TOTO_WP_TOOLKIT_VER );
    wp_enqueue_style( 'toto-owl-carousel', get_stylesheet_directory_uri() . '/resources/assets/lib/owl-carousel/css/owl.carousel.css' , TOTO_WP_TOOLKIT_VER );
    wp_enqueue_style( 'toto-owl-carousel-min', get_stylesheet_directory_uri() . '/resources/assets/lib/owl-carousel/css/owl.carousel.min.css' , TOTO_WP_TOOLKIT_VER );
    wp_enqueue_style( 'toto-fonts-nunito', get_stylesheet_directory_uri() . '/resources/assets/fonts/Nunito/stylesheet.css', TOTO_WP_TOOLKIT_VER );


    // lib owl carousel
    wp_enqueue_script( 'toto-owl-carousel', get_stylesheet_directory_uri() . '/resources/assets/lib/owl-carousel/js/owl.carousel.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);
 	  wp_enqueue_script( 'toto-owl-carousel-min', get_stylesheet_directory_uri() . '/resources/assets/lib/owl-carousel/js/owl.carousel.min.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);
   
    // lib rangeslider
    wp_enqueue_script( 'toto-rangeslider', get_stylesheet_directory_uri() . '/resources/assets/lib/rangeslider/js/rangeslider.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);
    wp_enqueue_script( 'toto-rangeslider-min', get_stylesheet_directory_uri() . '/resources/assets/lib/rangeslider/js/rangeslider.min.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);

    wp_enqueue_script( 'toto-custom-ajax', get_stylesheet_directory_uri() . '/resources/assets/js/custom-ajax.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);
    wp_enqueue_script( 'toto-template-video', get_stylesheet_directory_uri() . '/resources/assets/js/template-video.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);
    wp_enqueue_script( 'toto-morphing-emoji', get_stylesheet_directory_uri() . '/resources/assets/js/morphing-emoji.js',array( 'jquery' ),  TOTO_WP_TOOLKIT_VER, true);

    // create ajax load page single team, artists
    wp_register_script( 'custom_ajax', get_stylesheet_directory_uri() . '/resources/assets/js/custom-ajax.js', array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);
    wp_localize_script( 'custom_ajax', 'custom_ajax_params', array(
      'ajaxurl' => site_url() .'/wp-admin/admin-ajax.php',
    ) );
    wp_enqueue_script( 'custom_ajax' );

    
    if(is_page_template('template-video.php')){

      wp_enqueue_script( 'toto-functions', get_stylesheet_directory_uri() . '/resources/assets/js/functions.js',array( 'jquery' ), TOTO_WP_TOOLKIT_VER, true);

      $settings = array(
        'second_video' => get_field('setting_data_second_video')
      );

      wp_localize_script('toto-functions', 'tv_settings', $settings);

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

    if ( ! WP_DEBUG ) {
        return true;
    }
    $scss_path = get_stylesheet_directory() . '/resources/assets/css/';
    $scss      = new Compiler();
    $scss->setImportPaths( $scss_path );
    $scss->setFormatter( 'ScssPhp\ScssPhp\Formatter\Compressed' );
    $toto_scss_content = file_get_contents( $scss_path . 'toto-main.scss' );
    file_put_contents( $scss_path . 'toto-main.css', $scss->compile( $toto_scss_content));
}
add_action( 'init', 'toto_scss_to_css_compile' );




?>