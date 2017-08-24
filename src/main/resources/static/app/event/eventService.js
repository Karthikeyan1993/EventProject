(function() {
    'use strict';

    function eventService($http) {

        return {
            getAgenda: getAgenda
        };

        function getAgenda() {
            return $http.get('http://localhost:8080/api/events')
                .then(getAgendaSuccess)
                .catch(getAgendaFailure);

            function getAgendaSuccess(response) {
                return response.data;
            };

            function getAgendaFailure(response) {
                console.log(response.statusText);
            };

        }

    };
    angular.module('mainApp')
        .factory('eventService', eventService);
    eventService.$inject = ['$http'];
})();