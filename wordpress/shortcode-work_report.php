<?php

namespace BCCSuomi\WorkStatus;

add_shortcode( 'work_report', function () {

	ob_start();
	?>

	<link rel="stylesheet" href="<?php echo plugins_url( 'style.css', Plugin::Instance()->get_main_file() ); ?>"/>
	<script type="module" src="<?php echo plugins_url( 'index.js', Plugin::Instance()->get_main_file() ); ?>"></script>

	<div id="work-root"></div>

	<?php
	return ob_get_clean();

} );
