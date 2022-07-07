<?php 

/**
* create postype in toto
*/
function bt_create_posttype() {
    $supports = array(
        'title',
        'editor',
        'author',
        'thumbnail',
        'excerpt',
        'comments',
        'revisions',
    );
    $labels = array(
        'name'          => _x('Team ', 'toto'),
        'singular_name' => _x('team', 'toto'),
        'all_items'     => __('All Team'),
        'search_items'  => __('Search Team'),
        'not_found'     => __('No news found.'),
    );
    $args = array(
        'menu_icon'    => 'dashicons-groups',
        'supports'     => $supports,
        'labels'       => $labels,
        'public'       => true,
        'query_var'    => true,
        'rewrite'      => array('slug' => 'team'),
        'has_archive'  => true,
        'hierarchical' => false,
    );
    register_post_type('Team', $args);
 
    $labels2 = array(
        'name'          => _x('Artists ', 'toto'),
        'singular_name' => _x('artists', 'toto'),
        'all_items'     => __('All Artists'),
        'search_items'  => __('Search Artists'),
        'not_found'     => __('No news found.'),
    );
    $args2 = array(
        'menu_icon'    => 'dashicons-businessperson',
        'supports'     => $supports,
        'labels'       => $labels2,
        'public'       => true,
        'query_var'    => true,
        'rewrite'      => array('slug' => 'artists'),
        'has_archive'  => true,
        'hierarchical' => false,
    );
    register_post_type('Artists', $args2);
 }
 add_action('init', 'bt_create_posttype');

?>