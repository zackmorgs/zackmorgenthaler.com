<?php
/**
 * Template for displaying single blog posts
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php
        while (have_posts()):
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="post-header content">

                    <div class="post-info content-float">
                        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                        <?php echo get_the_date(); ?> by <?php the_author(); ?>
                        <br/>
                        <br/>
                        <a onclick="scrollToPost()" class="btn">
                            <img src="<?php echo get_template_directory_uri(); ?>/svg/chevron_down.svg" alt="Email Icon"
                                class="icon" />
                        </a>
                    </div>
                </header>

                <div class="post-content">
                    <?php
                    the_content();
                    wp_link_pages();
                    ?>
                </div>

                <footer class="entry-footer">
                    <?php
                    $categories = get_the_category();
                    if ($categories) {
                        echo '<span class="cat-links">Categories: ';
                        the_category(', ');
                        echo '</span>';
                    }
                    ?>
                </footer>
            </article>

            <section class="comments">
                <?php
                // If comments are open or there's at least one comment, load up the comment template.
                if (comments_open() || get_comments_number()):
                    comments_template();
                endif;
        endwhile;
        ?>
        </section>
    </main>
</div>

<?php
// get_sidebar();
get_footer();

?>