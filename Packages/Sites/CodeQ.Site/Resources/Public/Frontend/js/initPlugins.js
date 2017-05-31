(function() {
	'use strict';

	function initPlugins () {
		console.log('Init some plugins');
	}
	initPlugins();
	document.addEventListener('Neos.PageLoaded', function(event) {
		initPlugins();
	}, false);
}());
