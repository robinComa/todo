angular.module('taskApp.filters.dateDelta', []).filter('dateDelta', ['$rootScope', function($rootScope) {
    return function (date) {
        var dateStr = '';
        var MINUTES = 1000*60;
        var HOUR = MINUTES*60;
        var DAY = HOUR*24;
        var MONTH = DAY * 30;
        var YEAR = DAY * 365;
        var delta = (new Date()).getTime() - parseInt(date);
        if(delta > YEAR){
            dateStr = Math.floor(new Date(delta) / YEAR) + " y";
        }else if(delta > MONTH){
            dateStr = Math.floor(new Date(delta) / MONTH) + " m";
        }else if(delta > DAY){
            dateStr = Math.floor(new Date(delta) / DAY) + " d";
        }else if(delta > HOUR){
            dateStr = Math.floor(new Date(delta) / HOUR) + " h";
        }else if(delta > MINUTES){
            dateStr = Math.floor(new Date(delta) / MINUTES) + " m";
        }else{
            dateStr = "now";
        }
        return dateStr;
    };
}]);