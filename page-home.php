<?php get_header(); ?>
<main>
  <header id="hero_main">
    <div id="hero_bg">
      <div class="film-noise">
        <div class="grain"></div>
        <div class="scratches"></div>
        <div class="dust"></div>
        <div class="flicker"></div>
      </div>
      <div class="light-sources">
        <div class="light-beam light-beam-1"></div>
        <div class="light-beam light-beam-2"></div>
        <div class="light-beam light-beam-3"></div>

        <div class="spotlight spotlight-1"></div>
        <div class="spotlight spotlight-2"></div>

        <div class="lens-flare lens-flare-1"></div>
        <div class="lens-flare lens-flare-2"></div>

        <!-- this was too much -->
        <!-- <div class="god-rays"></div> -->
        <div class="ambient-glow"></div>
      </div>
      <div class="vignette"></div>
    </div>
    <div class="header-float">
      <a href="/">
        <img id="logo_main" src="<?php echo get_template_directory_uri(); ?>/img/still-stayer-logo-no-outline.png"
          alt="<?php bloginfo(show: 'name'); ?>" />
      </a>
      <hr />
      <br />
      <nav id="nav_hero">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/listen">Listen</a>
          </li>
          <li>
            <a href="/shows">Shows</a>
          </li>
          <li>
            <a href="/merch">Merch</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- <section id="section_bandcamp_embed" class="content">
    <div class="content-float">

    </div>
  </section> -->
</main>
<?php get_footer(); ?>