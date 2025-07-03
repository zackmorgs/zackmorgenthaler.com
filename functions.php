<?php
function stillstayer_enqueue_styles() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'stillstayer_enqueue_styles');

