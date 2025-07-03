<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="description" content="Still Stayer's official website. Explore our music, shows, merch, and more.">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title><?php wp_title('|', true, 'right');
  bloginfo('name'); ?></title>
  <?php wp_head(); ?>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet">
  <!-- <link href="<?php echo get_template_directory_uri(); ?>/style.min.css" rel="stylesheet" /> -->

  <link rel="apple-touch-icon" sizes="180x180"
    href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32"
    href="<?php echo get_template_directory_uri(); ?>/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16"
    href="<?php echo get_template_directory_uri(); ?>/img/favicon-16x16.png">
  <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/site.webmanifest">

</head>

<body <?php body_class(); ?>>
  <nav id="nav_main">
    <div id="navbar">
      <a href="/" id="nav_logo">
        <img src="<?php echo get_template_directory_uri(); ?>/img/LOTUS FINAL blue.png" alt="Still Stayer Logo" />
      </a>
      <button id="nav_toggle" class="btn" onclick="handleNavClick()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <ul id="nav_list">
      <li>
        <a href="/about/">About</a>
      </li>
      <li>
        <a href="/listen/">Listen</a>
      </li>
      <li>
        <a href="/shows/">Shows</a>
      </li>
      <li>
        <a href="/merch/">Merch</a>
      </li>
      <li>
        <a href="/gallery/">Gallery</a>
      </li>
      <li>
        <a href="/blog/">Blog</a>
      </li>
      <li>
        <a href="/contact/">Contact</a>
      </li>
    </ul>
  </nav>