<?php
/**
 * The template for displaying archive artists
 *	Author: Vo Van Vuong
 * Create Date: 27/10/2020
 */
 get_header(); ?>
<main id="main" class="site-main">
    <section class="bt-section bt-section-grid-artists">
        <div class="bt-container">

            <div class="bt-section-reload-ajax">
                <div class="bt-btn-reload-form"> Reloads </div>
            </div>

            <div class="bt-content-grid-artists" style="display:none;">
                <?php
                $args = array(
                    'post_type' => 'artists',
                    'post_status' => 'publish',
                    'posts_per_page' => -1,
                );
                $loop = new WP_Query( $args );
                $i = 0;
                while ( $loop->have_posts() ) : $loop->the_post();
                    $id_artists = get_the_ID();
                    $thumbnail_artists = get_the_post_thumbnail_url($id_artists);
                    $artistsFields= get_fields();
                    $i ++;
                    ?>

                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <!-- <div class="bt-meta">
                        </div> -->
                        <div class="bt-numerical-order">
                            <span> <?php echo $i; ?> </span>
                        </div>
                        <a href="<?php the_permalink(); ?>">
                            <div class="bt-thumbnail bt-background-thumbnails" style="background-image: url(<?php echo $thumbnail_artists; ?>)"> </div>
                        </a>
                        <div class="bt-content-artists">
                            <h2 class="bt-title">
                                <a href="<?php the_permalink(); ?>"> <?php the_title(); ?> </a>
                            </h2>
                            <?php if($artistsFields['postions_artists']){ ?>
                                <p class="bt-positions"> <?php echo $artistsFields['postions_artists']; ?> </p>
                            <?php } ?>
                        </div>
                    </article>
                <?php
                endwhile;
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </section>
</main>
<?php  get_footer();  ?>
