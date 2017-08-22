(function () {
    'use strict';

    function eventController($interval, eventService) {
        var vm = this;
        vm.times = {};
        vm.Agenda = [];
        vm.item = [];
        vm.Agenda = eventService.getAgenda();
        var promise;

        vm.start = function () {
            vm.stop();
            promise = $interval(updateClock, 1000);
        };

        vm.stop = function () {
            $interval.cancel(promise);
        };

        updateClock();
        vm.start();

        initialLod(vm.Agenda);

        function initialLod(Agenda) {
            vm.item = Agenda[0].agenda;
        }

        function updateClock() {
            var eventDate = parseISOLocal("2017-08-21T18:00:00");
            var dt = getRemainingTime(eventDate);
            vm.times = {
                days: ('0' + dt.days).slice(-2),
                hours: ('0' + dt.hours).slice(-2),
                minutes: ('0' + dt.minutes).slice(-2),
                seconds: ('0' + dt.seconds).slice(-2)
            };


            if (dt.total <= 0) {
                vm.stop();
            }
        }

        function parseISOLocal(s) {
            var b = s.split(/\D/);
            return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
        }


        function getRemainingTime(eventDate) {

            var dt = Date.parse(eventDate) - Date.parse(new Date().toString());
            var seconds = Math.floor((dt / 1000) % 60);
            var minutes = Math.floor((dt / 1000 / 60) % 60);
            var hours = Math.floor((dt / (1000 * 60 * 60)) % 24);
            var days = Math.floor(dt / (1000 * 60 * 60 * 24));
            var rDate = {
                'total': dt,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
            return rDate;
        }
    }

    angular.module('mainApp')
        .controller('eventController', eventController);
    eventController.$inject = ['$interval', 'eventService'];
})();