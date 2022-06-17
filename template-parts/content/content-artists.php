<?php
/**
 * The template for displaying archive artists
 *	Author: Vo Van Vuong
 * Create Date: 28/10/2020
 */
?>
<div class="bt-container">
<div class="bt-content-grid-artists">
    <?php
    $args = array(
        'post_type' => 'artists',
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );
    $loop = new WP_Query( $args );
    $i = 0; ?>
    <div class="bt-carousel-page-inner owl-carousel owl-theme" data-posttype="artists" data-scroll="bt-artistes">
        <?php
        while ( $loop->have_posts() ) : $loop->the_post();
            $id_artists = get_the_ID();
            $thumbnail_artists = get_the_post_thumbnail_url($id_artists);
            $artistsFields= get_fields();
            $i ++;
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <?php if($artistsFields['postions_artists']){ ?>
                    <p class="bt-positions"> <?php echo $artistsFields['postions_artists']; ?> </p>
                <?php } ?>
                 <div class="bt-meta bt-btn-ajax" data-id="<?php echo $id_artists ?>">
                     <div class="bt-thumbnail bt-background-thumbnails" style="background-image: url(<?php echo $thumbnail_artists; ?>)"> </div>
                     <div class="bt-content-artists">
                         <h2 class="bt-title"> <?php the_title(); ?>  </h2>
                     </div>
                 </div>
            </article>
        <?php
        endwhile;
        wp_reset_postdata();
        ?>
    </div>

</div>
</div>
<div class="bt-comeback">
    <?php get_template_part('template-parts/content/content', 'comeback' ); ?>
</div>
