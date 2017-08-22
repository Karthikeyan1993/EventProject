(function () {
    'use strict';

    function eventService() {
        var eventService = {};
        eventService.getAgenda = function () {
            var agenda = [];
            agenda = [
                {
                    "date": "21",
                    "month": "Aug-2017",
                    "isActive": true,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                },
                {
                    "date": "22",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06:00 pm",
                            "description": "Welcome Note",
                            "instructor": "Karthikeyan"
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Contract Testing",
                            "instructor": "By: Sathish Thangavel and Shruti"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Exploring the Deep Web and Dark Net",
                            "instructor": "By: Sreedev Padmakumar"
                        }
                    ]
                },
                {
                    "date": "23",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                },
                {
                    "date": "24",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                }, {
                    "date": "25",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                }, {
                    "date": "26",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                }, {
                    "date": "27",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                }, {
                    "date": "28",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                },
                {
                    "date": "29",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                },
                {
                    "date": "30",
                    "month": "Aug-2017",
                    "isActive": false,
                    "agenda": [
                        {
                            "time": "06.00 PM",
                            "description": "Welcome Note",
                            "instructor": ""
                        },
                        {
                            "time": "06:05 pm",
                            "description": "Introduction to BlockChain",
                            "instructor": "By: Vidhyalakshmi Narayanaswamy"
                        },
                        {
                            "time": "06:30 pm",
                            "description": "Building state of art image classifiers using Deep Learning",
                            "instructor": "By: Vishnu Subramanian"
                        },
                        {
                            "time": "07:15 pm",
                            "description": "Break",
                            "instructor": ""
                        },
                        {
                            "time": "07:25 pm",
                            "description": "Y U NO webscale ? a.k.a A gentle introduction about how Openresty (Nginx/LuaJIT).",
                            "instructor": "By: Shyam Sundar"
                        }
                    ]
                }
            ];
            return agenda;
        };
        return eventService;
    };
    angular.module('mainApp')
        .factory('eventService', eventService);
})();