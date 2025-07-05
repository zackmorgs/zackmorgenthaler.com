<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon-16x16.png">
  <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/site.webmanifest">
</head>

<body <?php body_class(); ?>>
  <nav id="nav_main">
    <div class="nav-bar">
      <a id="logo" href="/">
        <h1>ZM</h1>
      </a>

      <button id="nav_toggle" aria-label="Toggle navigation" aria-expanded="false">
        Menu
      </button>
    </div>
    <div id="nav_links">
      <ul class="nav-list">
        <li>
          <a href="/about/" class="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/portfolio/" class="nav-link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/music/" class="nav-link">
            Music
          </a>
        </li>
        <li>
          <a href="/blog/" class="nav-link">
            Blog
          </a>
        </li>
        <li>
          <a href="/contact/" class="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>