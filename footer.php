<?php
/**
 * The template for displaying the footer
 */

?>
	<footer id="colophon" class="site-footer">
		
		<?php if(is_page_template('template-video.php')){
			get_template_part( 'template-parts/footer/footer', 'video' );
		} ?>
	</footer><!-- #colophon -->
</div><!-- #page -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vimeo-player/2.13.0/player.min.js" integrity="sha512-gChplnQw7jkk2Axylkdz4PMZCJd5wolmvv3sUZH4m/JrPs1ac5Db7Tms+l1JmZBto6DX8cpE74KTMwS1aOc4bg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<?php wp_footer(); ?>
</body>
</html>
