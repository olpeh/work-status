<?php

namespace BCCSuomi\WorkStatus;
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

/**
 * Plugin
 *
 */
final class Plugin
{

	private string $main_file;

    /**
     * Call this method to get singleton
     *
     * @return Plugin
     */
    public static function Instance( string $main_file = '' ): ?Plugin {
        static $inst = null;
        if ($inst === null) {
            $inst = new Plugin( $main_file );
        }
        return $inst;
    }

    /**
     * Private constructor so nobody else can instantiate it
     *
     */
    private function __construct( string $main_file )
    {
		$this->main_file = $main_file;
		$this->load_dependencies();
    }

	public function get_main_file(): string {
		return $this->main_file;
	}

	private function load_dependencies() {
		require_once __DIR__ . '/shortcode-work_report.php';
		require_once __DIR__ . '/endpoint-work_report_data.php';
		require_once __DIR__ . '/plugin-update-checker/plugin-update-checker.php';

		$updateChecker = PucFactory::buildUpdateChecker( 'https://github.com/olpeh/work-status', __FILE__, 'work-status' );
		$updateChecker->getVcsApi()->enableReleaseAssets();
	}
}


