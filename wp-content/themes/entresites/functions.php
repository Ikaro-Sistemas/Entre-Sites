<?php
/**
 * Entre Sites Theme Functions and Definitions
 *
 * @package EntreSites
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue scripts and styles.
 */
function entresites_enqueue_scripts() {
	// Register and Enqueue main stylesheet.
	wp_enqueue_style( 'entresites-style', get_stylesheet_uri(), array(), '1.0.0' );

	// Register and Enqueue main javascript.
	wp_enqueue_script( 'entresites-app-js', get_template_directory_uri() . '/app.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'entresites_enqueue_scripts' );

/**
 * Add theme features and WooCommerce support.
 */
function entresites_setup() {
	// Enable support for Title Tag
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails
	add_theme_support( 'post-thumbnails' );

	// Enable WooCommerce support
	add_theme_support( 'woocommerce' );
	
	// Add custom image sizes if needed
	add_image_size( 'entresites-product-thumb', 300, 300, true );
}
add_action( 'after_setup_theme', 'entresites_setup' );
