<?php
/* Template Name: Blog Page */
get_header(); ?>

<main class="container">
    <section class="blog-posts">
        <h3>Latest Posts</h3>
        <div class="post-list">
            <?php
            // Query the last 3 posts
            $latest_posts = new WP_Query([
                'posts_per_page' => 3
            ]);

            if ($latest_posts->have_posts()):
                while ($latest_posts->have_posts()):
                    $latest_posts->the_post(); ?>
                    <article class="post">
                        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="meta"><?php the_time('F j, Y'); ?> by <?php the_author(); ?></div>
                        <div class="excerpt"><?php the_excerpt(); ?></div>
                    </article>
                <?php endwhile;
                wp_reset_postdata();
            else: ?>
                <p>No posts found.</p>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>