<?php
/**
Template Name: Page - Left Sidebar
 *
 * @package luna
 */

get_header(); ?>

<section id="page-content-container">

	<?php while ( have_posts() ) : the_post(); ?>
    
    	
		<?php if ( has_post_thumbnail( $post->ID ) ): ?>    
    
			<header class="page-entry-header" style="background-image: url('<?php echo wp_get_attachment_url( get_post_thumbnail_id( $post->ID) , 'max-control' ); ?>');">
        
    	<?php else: ?>    
    
    		<header class="page-entry-header">  
    
    	<?php endif; ?> 
        
        
    	<div class="grid grid-pad">
        	<div class="col-1-1">
				<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
            </div>
        </div>
        <div class="entry-overlay"></div>
	</header><!-- .entry-header -->
 
<div class="entry-content-wrapper"> 
	<div class="grid grid-pad page-contain">
    	<div class="col-9-12 push-right">    
            <div id="primary" class="content-area shortcodes">
                <main id="main" class="site-main" role="main">
        
                        <?php get_template_part( 'content', 'page' ); ?>
        
                        <?php
                            // If comments are open or we have at least one comment, load up the comment template
                            if ( comments_open() || get_comments_number() ) :
                                comments_template();
                            endif;
                        ?>
        
                    <?php endwhile; // end of the loop. ?>
        
                </main><!-- #main -->
            </div><!-- #primary -->
		</div>
	<?php get_sidebar(); ?>
	</div>
</div>
</section>
<?php get_footer(); ?>
