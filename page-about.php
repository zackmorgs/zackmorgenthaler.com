<?php get_header(); ?>
<div class="header">
    <img id="about_img" src="/wp-content/themes/zackmorgenthaler.com/assets/img/wedding_photo.jpg"
        alt="Zack Morgenthaler wedding photo." />
</div>
<section id="content_about" class="content">
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