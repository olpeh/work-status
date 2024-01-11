<?php

/**
 * WORK-report
 *
 * @author      Olavi Haapala, Johannes Gangsö
 * @copyright   2024 BCC-Suomi ry
 *
 * @wordpress-plugin
 * Plugin Name: WORK-report
 * Description: View WORK-status
 * Version:     1.0.0
 * Author:      ojhaapala,jgangso
 * Author URI:  https://www.bccsuomi.fi/
 * Text Domain: work-report
 */

require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$updateChecker = PucFactory::buildUpdateChecker(
	'https://github.com/olpeh/work-status',
	__FILE__,
	'work-status'
);

$updateChecker->setBranch('release');

add_shortcode( 'work_report', function () {

	ob_start();
	?>

	<link rel="stylesheet" href="<?php echo plugins_url( __DIR__ . '/index.css'); ?>" />
	<script type="module" src="<?php echo plugins_url( __DIR__ . '/index.js'); ?>"></script>

	<div id="work-root"></div>

	<?php
	return ob_get_clean();

});