<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php wp_title(); ?></title>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <nav id="nav_main">
    <div class="nav-bar">
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
          <a href="/blog/" class="nav-link">
            Blog
          </a>
        </li>
        <li>
          <a href="/contact/" class="nav-link">
            Contact
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
      </ul>
    </div>
  </nav>