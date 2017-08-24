(function () {
    'use strict';

    function ScrollService($location, $anchorScroll) {
        this.scrollToTop = function () {
            $anchorScroll("agenda");
        };
    };


    angular.module('mainApp')
        .service('ScrollService', ScrollService);
    ScrollService.$inject = ['$location', '$anchorScroll'];
})();