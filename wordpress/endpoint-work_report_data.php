<?php

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
	$headers = explode( "\t", trim(array_shift( $lines ) ) );
	$arr     = [
		"Title"                => $title,
		"ReportDate"            => "",
		"DateFrom"            => "",
		"DateTo"              => "",
		"Days"                => "",
		"MyShareTargetOnDate" => 0,
		"MyShareNextThreshold" => 0,
		"SamvirkGoalPerMonth" => 0,
		"Teams"               => []
	];

	foreach ( $lines as $line ) {
		$rowData                    = explode( "\t", trim($line ) );
		$teamData                   = array_combine( $headers, $rowData );
		$arr["ReportDate"]            = date( "Y-m-d", strtotime( $teamData["ReportDate"] ) );
		$arr["DateFrom"]            = date( "Y-m-d", strtotime( $teamData["DateFrom"] ) );
		$arr["DateTo"]              = date( "Y-m-d", strtotime( $teamData["DateTo"] ) );
		$arr["Days"]                = intval( $teamData["ReportDays"] );
		$arr["MyShareTargetOnDate"] = intval( $teamData["MyShareTargetOnDate"] );
		$arr["MyShareNextThreshold"] = intval( $teamData["MyShareNextThreshold"] );
		$arr["SamvirkGoalPerMonth"] = intval( $teamData["SamvirkGoalPerMonth"] );
		$arr["SamvirkGoalPerSprint"] = intval( $teamData["SamvirkGoalPerSprint"] );

		$team           = [
			"Name"          => $teamData["TeamName"],
			"MemberCount"   => intval( $teamData["MemberCount"] ),
			"BUKStatus"     => [
				"MemberCount"  => intval( $teamData["BUKMemberCount"] ),
				"OnTrackCount" => intval( $teamData["BUKOnTrackCount"] ),
				"OnTrackOnDateCount" => intval( $teamData["BUKOnTrackOnDateCount"] )
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