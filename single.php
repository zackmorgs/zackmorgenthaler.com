<?php get_header(); ?>

<div class="container">
    <main id="main" class="content">
        <?php
        while (have_posts()):
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="post-header">

                    <div class="post-info content-float">
                        <?php the_title(before: '<h1 class="entry-title">', after: '</h1>'); ?>
                        <span id="post_date"><?php echo get_the_date(); ?></span> by <span id="post_author"><?php the_author(); ?></span>
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
                        the_category(separator: ', ');
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

<?php get_footer(); ?>