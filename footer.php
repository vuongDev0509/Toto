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
<?php wp_footer(); ?>
</body>
</html>
