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
 * Version: 0.2.3
 * Author:      ojhaapala,jgangso
 * Author URI:  https://www.bccsuomi.fi/
 * Text Domain: work-report
 */

require 'plugin-update-checker/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$updateChecker = PucFactory::buildUpdateChecker( 'https://github.com/olpeh/work-status', __FILE__, 'work-status' );

$updateChecker->setBranch( 'release' );

add_shortcode( 'work_report', function () {

	ob_start();
	?>

    <link rel="stylesheet" href="<?php echo plugins_url( __DIR__ . '/index.css' ); ?>"/>
    <script type="module" src="<?php echo plugins_url( __DIR__ . '/index.js' ); ?>"></script>

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
		while ( have_rows( 'repeater_field_name', 'option' ) ) {
			the_row();

            $data = convert_work_report_data( get_sub_field( 'data' ) );

			$reports[ sanitize_title( get_sub_field( 'name' ) ) ] = $data;
		}
	}

} );


/**
 * @param string $data Tab separated values copied from reporting Excel
 *
 * @return string
 */
function convert_work_report_data( $data ): string {

    // Split the input into lines
    $lines = explode("\n", $data);

    // Parse the header line to get the keys
    $headers = explode("\t", array_shift($lines));
    $jsonObject = [
        "DateFrom" => "",
        "DateTo" => "",
        "MyShareTargetOnDate" => 0,
        "MyShareNextTreshold" => 0,
        "SamvirkGoalPerMonth" => 0,
        "Teams" => []
    ];

    foreach ($lines as $line) {
        $rowData = explode("\t", $line);
        $teamData = array_combine($headers, $rowData);
        $jsonObject["DateFrom"] = date("Y-m-d", strtotime($teamData["DateFrom"]));
        $jsonObject["DateTo"] = date("Y-m-d", strtotime($teamData["DateTo"]));
        $jsonObject["MyShareTargetOnDate"] = intval($teamData["MyShareTargetOnDate"]);
        $jsonObject["MyShareNextTreshold"] = intval($teamData["MyShareNextTreshold"]);
        $jsonObject["SamvirkGoalPerMonth"] = intval($teamData["SamvirkGoalPerMonth"]);

        $team = [
            "Name" => $teamData["TeamName"],
            "MemberCount" => intval($teamData["MemberCount"]),
            "BUKStatus" => [
                "MemberCount" => intval($teamData["BUKMemberCount"]),
                "OnTrackCount" => intval($teamData["BUKOnTrackCount"])
            ],
            "SamvirkStatus" => [
                "MemberCount" => intval($teamData["SamvirkMemberCount"]),
                "ContributionAmount" => intval($teamData["SamvirkContributionAmount"])
            ],
            "AHStatus" => [
                "ContributionAmount" => intval($teamData["AHContributionAmount"])
            ]
        ];
        $jsonObject["Teams"][] = $team;
    }

    return json_encode($jsonObject, JSON_PRETTY_PRINT);

}