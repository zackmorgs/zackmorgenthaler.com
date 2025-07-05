<?php get_header(); ?>
<div class="header">
    <img id="portfolio_img" class="hero-img" src="/wp-content/themes/zackmorgenthaler.com/assets/img/playing_guitar.jpg"
        alt="Zack Morgenthaler playing guitar." />
</div>
<section id="content_portfolio">
    <article class="content">
        <?php
        if (have_posts()):
            while (have_posts()):
                the_post();
                the_content(); // This is the important line!
            endwhile;
        endif;
        ?>
    </article>
</section>
</main>
<?php get_footer(); ?>