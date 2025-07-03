<?php get_header(); ?>

<main class="blog-list">
  <section id="excerpts" class="content">

    <div class="content-float">
      <h2 id="heading_latest_posts">Latest Posts</h2>
      <?php if (have_posts()):
        while (have_posts()):
          the_post(); ?>
          <a class="excerpt-permalink" href="<?php the_permalink(); ?>">
            <article class="blog-post-excerpt">
              <h2><?php the_title(); ?></h2>
              <hr />
              <span class="excerpt">
                <?php the_excerpt(); ?>
              </span>
            </article>
          </a>
        <?php endwhile; else: ?>
        <p>No posts found.</p>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>