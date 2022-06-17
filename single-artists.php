<?php
/**
 * The template for displaying single artists
 *	Author: Vo Van Vuong
 * Create Date: 27/10/2010
 */
 get_header();
 $id_artists = get_the_ID();
 $thumbnail_artists = get_the_post_thumbnail_url($id_artists);
 $artistsFields= get_fields();
 ?>
 <main id="main" class="site-main">
     <section class="bt-section bt-section-content-artists">
         <div class="bt-container">
             <div class="bt-content-artists">
                 <h2 class="bt-title"> <?php the_title(); ?> </h2>
                 <div class="bt-meta">
                     <div class="bt-thumbnail">
                         <img src="<?php echo $thumbnail_artists; ?>" alt="avatar"/>
                     </div>
                     <div class="bt-excerpt"> <?php the_content(); ?> </div>
                 </div>

                 <div class="bt-social-artists" style="display: none;">
                     <span>Follow Us: </span>
                     <ul class="bt-social">
                         <?php if($artistsFields['facebook_artists']){ ?>
                             <li class="bt-facebook">
                                 <a href="<?php echo $artistsFields['facebook_artists']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/facebook.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                         <?php if($artistsFields['twitter_artists']){ ?>
                             <li class="bt-twitter">
                                 <a href="<?php echo $artistsFields['twitter_artists']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/twitter.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                         <?php if($artistsFields['google_artists']){ ?>
                             <li class="bt-google">
                                 <a href="<?php echo $artistsFields['google_artists']; ?>">
                                     <?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/images/google-plus.svg' ); ?>
                                 </a>
                             </li>
                         <?php } ?>
                         <?php if($artistsFields['instagram_artists']){ ?>
                             <li class="bt-instagram">
                                 <a href="<?php echo $artistsFields['instagram_artists']; ?>">
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
