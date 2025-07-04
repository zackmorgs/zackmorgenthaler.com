<?php get_header(); ?>

<div class="container">
  <header id="header_index" class="hero">
    <a href="<?php echo esc_url(url: home_url(path: '/')); ?>">
      <img id="photo_zack" src="<?php echo get_template_directory_uri(); ?>/assets/img/zack_leather.png"
        alt="<?php bloginfo(show: 'name'); ?>" />
      <div class="header-text">
        <h1><?php bloginfo(show: 'name'); ?></h1>
        <p>Programmer, Music Maker, and Artist</p>
        <a href="/about/" class="btn btn-primary w-full">
          About Me
        </a>
      </div>
    </a>
  </header>
  <nav id="social_nav">
    <h3>Github</h3>
    <ul>
      <li> <a class="btn w-full" href="https://github.com/zackmorgs/" target="_blank" rel="noopener noreferrer">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-github.svg" alt="GitHub" class="icon" />
        </a>
      </li>
    </ul>
    <h3>Social</h3>
    <ul class="btn-list">
      <li>
        <a href="https://www.facebook.com/zackmorgs/" class="btn" target="_blank">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-fb.svg" alt="Email" class="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/zackmorgenthaler" target="_blank" class="btn">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-linkedin.svg" alt="Email"
            class="icon" />
        </a>
      </li>
      <li>
        <a href="" class="btn">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-x.svg" alt="Email" class="icon" />
        </a>
      </li>

      <li>
        <a href="https://soundcloud.com/zackmorgenthaler" target="_blank" class="btn">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-soundcloud.svg" alt="Email"
            class="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@ZackMorgenthaler" target="_blank" class="btn">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-youtube.svg" alt="Email" class="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/zackmorgenthaler89aa" target="_blank" class="btn">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/icon-behance.svg" alt="Email" class="icon" />
        </a>
      </li>
    </ul>
  </nav>
</div>
<?php get_footer(); ?>