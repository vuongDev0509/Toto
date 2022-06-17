<?php
/**
 * The template for displaying single team
 *	Author: Vo Van Vuong
 * Create Date: 27/10/2010
 */
 get_header();
 $id_team = get_the_ID();
 $thumbnail_team = get_the_post_thumbnail_url($id_team);
 $teamFields= get_fields();
 ?>
 <main id="main" class="site-main">
     <?php get_template_part('template-parts/content/content', 'video'); ?>
     <section class="bt-section bt-section-content-team">
         <div class="bt-container">
             <div class="bt-content-team">
                 <h2 class="bt-title"> <?php the_title(); ?> </h2>
                 <div class="bt-meta">
                     <div class="bt-thumbnail">
                         <img src="<?php echo $thumbnail_team; ?>" alt="avatar"/>
                     </div>
                     <div class="bt-excerpt"> <?php the_content(); ?> </div>
                 </div>

                 <div class="bt-social-team" style="display: none;">
                     <span>Follow Us: </span>
                     <ul class="bt-social">
                         <?php if($teamFields['facebook_team']){ ?>
                             <li class="bt-facebook">
                                 <a href="<?php echo $teamFields['facebook_team']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/facebook.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                         <?php if($teamFields['twitter_team']){ ?>
                             <li class="bt-twitter">
                                 <a href="<?php echo $teamFields['twitter_team']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/twitter.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                         <?php if($teamFields['google_team']){ ?>
                             <li class="bt-google">
                                 <a href="<?php echo $teamFields['google_team']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/google-plus.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                         <?php if($teamFields['instagram_team']){ ?>
                             <li class="bt-instagram">
                                 <a href="<?php echo $teamFields['instagram_team']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/instagram-symbol.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                     </ul>
                 </div>

             </div>
         </div>
     </section>
 </main>
 <?php  get_footer();  ?>
