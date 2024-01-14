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
 * Version: 0.5.7
 * Author:      ojhaapala,jgangso
 * Author URI:  https://www.bccsuomi.fi/
 * Text Domain: work-report
 */

require 'plugin-update-checker/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$updateChecker = PucFactory::buildUpdateChecker( 'https://github.com/olpeh/work-status', __FILE__, 'work-status' );

$updateChecker->getVcsApi()->enableReleaseAssets();

add_shortcode( 'work_report', function () {

	ob_start();
	?>

    <link rel="stylesheet" href="<?php echo plugins_url( 'style.css', __FILE__ ); ?>"/>
    <script type="module" src="<?php echo plugins_url( 'index.js', __FILE__ ); ?>"></script>

    <div id="work-root"></div>

	<?php
	return ob_get_clean();

} );

/**
 * Provide endpoint for fetching WORK data
 */
add_action( 'wp_ajax_fetch_work_reports', function () {

	$reports = [];

	if ( have_rows( 'reports', 'option' ) ) {
		while ( have_rows( 'reports', 'option' ) ) {
			the_row();

			$data = convert_work_report_data( get_sub_field( 'data' ), get_sub_field( 'title' ) );

			$reports[] = $data;
		}
	}

	echo json_encode( $reports, JSON_PRETTY_PRINT );

	wp_die();

} );


/**
 * @param string $data Tab separated values copied from reporting Excel
 * @param string $title Name of the report
 *
 * @return array
 */
function convert_work_report_data( string $data, string $title ): array {

	// Split the input into lines
	$lines = explode( "\n", $data );

	// Parse the header line to get the keys
	$headers = explode( "\t", array_shift( $lines ) );
	$arr     = [
		"Title"                => $title,
		"DateFrom"            => "",
		"DateTo"              => "",
		"MyShareTargetOnDate" => 0,
		"MyShareNextTreshold" => 0,
		"SamvirkGoalPerMonth" => 0,
		"Teams"               => []
	];

	foreach ( $lines as $line ) {
		$rowData                    = explode( "\t", $line );
		$teamData                   = array_combine( $headers, $rowData );
		$arr["DateFrom"]            = date( "Y-m-d", strtotime( $teamData["DateFrom"] ) );
		$arr["DateTo"]              = date( "Y-m-d", strtotime( $teamData["DateTo"] ) );
		$arr["MyShareTargetOnDate"] = intval( $teamData["MyShareTargetOnDate"] );
		$arr["MyShareNextTreshold"] = intval( $teamData["MyShareNextTreshold"] );
		$arr["SamvirkGoalPerMonth"] = intval( $teamData["SamvirkGoalPerMonth"] );

		$team           = [
			"Name"          => $teamData["TeamName"],
			"MemberCount"   => intval( $teamData["MemberCount"] ),
			"BUKStatus"     => [
				"MemberCount"  => intval( $teamData["BUKMemberCount"] ),
				"OnTrackCount" => intval( $teamData["BUKOnTrackCount"] )
			],
			"SamvirkStatus" => [
				"MemberCount"        => intval( $teamData["SamvirkMemberCount"] ),
				"ContributionAmount" => intval( $teamData["SamvirkContributionAmount"] )
			],
			"AHStatus"      => [
				"ContributionAmount" => intval( $teamData["AHContributionAmount"] )
			]
		];
		$arr["Teams"][] = $team;
	}

	return $arr;

}