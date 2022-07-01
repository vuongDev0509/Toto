<?php 
// create ajax load page single team, artists
function custom_ajax_scripts() {
	global $wp_query;

	// In most cases it is already included on the page and this line can be removed
	wp_enqueue_script('jquery');

	// register our main script but do not enqueue it yet
	wp_register_script( 'custom_ajax', get_stylesheet_directory_uri() . '/resources/assets/js/custom-ajax.js', array('jquery') );
	wp_localize_script( 'custom_ajax', 'custom_ajax_params', array(
		'ajaxurl' => site_url() .'/wp-admin/admin-ajax.php',
	) );
 	wp_enqueue_script( 'custom_ajax' );
}
add_action( 'wp_enqueue_scripts', 'custom_ajax_scripts' );


add_action( 'wp_ajax_getSingle', 'load_single_page_ajax');
add_action( 'wp_ajax_nopriv_getSingle', 'load_single_page_ajax' );
function load_single_page_ajax(){
    ob_start();
    $id = $_POST['id_post'];
    $postType = $_POST['post_type'];
    $data_sroll = $_POST['data_sroll'];
    $args = array(
        'post_type' => $postType,
        'post_status' => 'publish',
        'post__in' => array($id)
    );
    $query = new WP_Query( $args );
    if($query->have_posts()):
        while($query->have_posts()):$query->the_post();
        $thumbnail_team = get_the_post_thumbnail_url($id);
        ?>
            <div class="bt-container">
                <div class="bt-content">
                    <h2 class="bt-title"> <?php the_title(); ?> </h2>
                    <div class="bt-meta">
                        <div class="bt-thumbnail">
                            <img src="<?php echo $thumbnail_team; ?>" alt="avatar"/>
                        </div>
                        <div class="bt-excerpt"> <?php the_content(); ?> </div>
                    </div>
                </div>
            </div>
        <?php
        endwhile; ?>
        <div class="bt-comeback" data-scroll="<?php echo $data_sroll; ?>">
            <img src="https://toto.upfoundation.lu/wp-content/uploads/2020/11/Fichier-1.svg" alt="icon" class="icon-comeback-inner" />
        </div>
        <?php
    endif;
    wp_reset_query();
    $result = ob_get_clean();
    wp_send_json_success($result);
    die();
};



// Hook up the AJAX actions
add_action( 'wp_ajax_nopriv_gf_button_get_form', 'gf_button_ajax_get_form' );
add_action( 'wp_ajax_gf_button_get_form', 'gf_button_ajax_get_form' );

function gf_button_ajax_get_form(){
	$form_id = isset( $_GET['form_id'] ) ? absint( $_GET['form_id'] ) : 0;
	// Render an AJAX-enabled form.
	// https://www.gravityhelp.com/documentation/article/embedding-a-form/#function-call
	gravity_form( $form_id,true, false, false, false, true );
	die();
}
