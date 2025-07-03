<?php
function zackmorgenthaler_enqueue_styles(): void {
    wp_enqueue_style('main-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'zackmorgenthaler_enqueue_styles');
