(function () {
    'use strict';

    function eventController($interval, eventService, ScrollService) {
        var vm = this;
        vm.times = {};
        vm.Agenda = [];
        vm.editon;
        vm.eDate;
        vm.friendlyDate;
        vm.item = [];
        vm.isActive = true;
        var promise;

        activate();

        function activate() {
            return getAgenda().then(function () {
                if (vm.Agenda.length > 0) {
                    sortAgenda();
                    updateClock();
                    vm.start();
                } else {
                    console.log("Data not found")
                }
            });
        }

        function getAgenda() {
            return eventService.getAgenda()
                .then(function (data) {
                    vm.Agenda = data;
                    return vm.Agenda;
                });
        }

        function sortAgenda() {
            var ARow;
            var array = vm.Agenda;
            array.sort(function (a, b) {
                return new Date(b.eFullDte) - new Date(a.eFullDte);
            });


            for (var i = 0; i < array.length; i++) {
                if (array.length > 1) {
                    var dt = Date.parse(array[i].eFullDte) - Date.parse(new Date().toString());
                    if (dt <= 0) {
                        ARow = i - 1;
                        break;
                    } else {
                        ARow = i;
                    }
                } else {
                    ARow = 0;
                    break;
                }
            }
            vm.eDate = array[ARow].eFullDte;
            vm.editon = array.length;
            var mydate = new Date(vm.eDate);
            vm.friendlyDate = monthNames[mydate.getMonth()] + " " + array[ARow].eDate + "," + mydate.getFullYear();
            vm.item = array[ARow].agenda;
            vm.Agenda = "";
            vm.Agenda = array.slice(ARow, array.length);
        }

        vm.itemClick = function (index) {

            console.log(JSON.stringify(vm.Agenda[index]));
            vm.eDate = vm.Agenda[index].eFullDte;
            vm.item = vm.Agenda[index].agenda;
            vm.start();
            vm.editon = index;
            var mydate = new Date(vm.eDate);
            vm.friendlyDate = monthNames[mydate.getMonth()] + " " + vm.Agenda[index].eDate + "," + mydate.getFullYear();
            ScrollService.scrollToTop();
        };

        vm.start = function () {
            vm.stop();
            promise = $interval(updateClock, 1000);
        };

        vm.stop = function () {
            $interval.cancel(promise);
        };

        function updateClock() {
            var eventDate = parseISOLocal(vm.eDate.toString());
            var dt = getRemainingTime(eventDate);
            if (dt.total > 0) {
                vm.times = {
                    days: ('0' + dt.days).slice(-2),
                    hours: ('0' + dt.hours).slice(-2),
                    minutes: ('0' + dt.minutes).slice(-2),
                    seconds: ('0' + dt.seconds).slice(-2)
                };
                if (dt.total <= 0) {
                    vm.stop();
                }
            } else {
                vm.stop();
                vm.isActive = false;
                vm.times = {
                    days: ('--'),
                    hours: ('--'),
                    minutes: ('--'),
                    seconds: ('--')
                };           
            }
        }

        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

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
    eventController.$inject = ['$interval', 'eventService', 'ScrollService'];
})();