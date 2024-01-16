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
 * Version: 0.5.18
 * Author:      ojhaapala,jgangso
 * Author URI:  https://www.bccsuomi.fi/
 * Text Domain: work-report
 */


use BCCSuomi\WorkStatus\Plugin;

require_once __DIR__ . '/wordpress/plugin.php';

$work_status = Plugin::Instance( __FILE__ );