<?php

namespace BCCSuomi\WorkStatus;

add_shortcode( 'work_report', function () {

	ob_start();
	?>

	<link rel="stylesheet" href="<?php echo plugins_url( 'style.css', Plugin::Instance()->get_main_file() ); ?>?v=<?php echo esc_attr(Plugin::Instance()->get_plugin_version() ); ?>"/>
	<script type="module" src="<?php echo plugins_url( 'index.js', Plugin::Instance()->get_main_file() ); ?>?v=<?php echo esc_attr(Plugin::Instance()->get_plugin_version() ); ?>"></script>

	<div id="work-root" data-source-url="<?php echo esc_url( admin_url('admin-ajax.php?action=fetch_work_reports' ) ); ?>"></div>

	<?php
	return ob_get_clean();

} );
