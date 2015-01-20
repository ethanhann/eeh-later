(function (angular) {
    'use strict';
    function angularLater($log, $window) {
        if (angular.isUndefined($window.later)) {
            $log.error('later.js is not available. Did you forget to include it?');
        }
        else {
            return $window.later;
        }
    }
    angular.module('eehLater', []).service('later', ['$log', '$window', angularLater]);
})(angular);
