(function () {
	'use strict';



	angular
		.module('massiveOctoArcher', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {

			$stateProvider

				.state('clients', {
					url: '/clients',
					templateUrl: 'partials/clients.html',
					controller: 'ClientsController as ClientsController'
				})

				.state('tasks', {
					url: '/tasks',
					templateUrl: 'partials/tasks.html'
				})
		});

})();
