<?php
// Enqueue styles and scripts
function zack_enqueue_scripts() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'zack_enqueue_scripts');