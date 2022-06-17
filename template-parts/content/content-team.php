<?php
/**
 * The template for displaying archive team
 *	Author: Vo Van Vuong
 * Create Date: 28/10/2020
 */
?>
<div class="bt-container">
 <div class="bt-content-grid-team">
     <?php
     $args = array(
         'post_type' => 'team',
         'post_status' => 'publish',
         'posts_per_page' => -1,
     );
     $loop = new WP_Query( $args );
     $i = 0; ?>
     <div class="bt-carousel-page-inner owl-carousel owl-theme" data-posttype="team" data-scroll="bt-team">
         <?php
         while ( $loop->have_posts() ) : $loop->the_post();
             $id_team = get_the_ID();
             $thumbnail_team = get_the_post_thumbnail_url($id_team);
             $teamFields= get_fields();
             $i ++;
             ?>
             <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                 <?php if($teamFields['postions_team']){ ?>
                     <p class="bt-positions"> <?php echo $teamFields['postions_team']; ?> </p>
                 <?php } ?>
                 <?php $id = get_the_ID(); ?>
                 <div class="bt-meta bt-btn-ajax" data-id="<?php echo $id ?>">
                     <div class="bt-thumbnail bt-background-thumbnails" style="background-image: url(<?php echo $thumbnail_team; ?>)"> </div>
                     <div class="bt-content-team">
                         <h2 class="bt-title"> <?php the_title(); ?> </h2>
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
