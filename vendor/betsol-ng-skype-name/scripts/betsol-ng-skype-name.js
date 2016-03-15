/**
 * betsol-ng-skype-name - Skype name validation for Angular.js
 * @version v1.0.0
 * @link https://github.com/betsol/ng-skype-name
 * @license MIT
 *
 * @author Slava Fomin II <s.fomin@betsol.ru>
 */
(function (angular) {

  'use strict';

  var SKYPE_NAME_PATTERN = /^[a-z][a-z0-9\.,\-_]{5,31}$/i;
  var VALIDATOR_NAME = 'skypeName';

  angular.module('betsol.skypeName', [])

    .provider('skypeName', function () {

      var service = {};

      var provider = {
        $get: function () {
          return service;
        }
      };

      service.validate = function (value) {
        return SKYPE_NAME_PATTERN.test(value);
      };

      return provider;

    })

    .directive('bsSkypeName', ['skypeName', function (skypeName) {
      return {
        restrict: 'AC',
        require: 'ngModel',
        link: function link ($scope, $element, attrs, modelCtrl) {

          // Validating the skype name input.
          if ('undefined' !== typeof modelCtrl.$validators) {
            // Using newer `$validators` API.
            modelCtrl.$validators[VALIDATOR_NAME] = function (modelValue, viewValue) {
              var value = (modelValue || viewValue);
              return ('' === value ? true : skypeName.validate(value));
            };
          } else {
            // Using legacy validation approach.
            var validateValue = function (value) {
              if (!value) {
                return value;
              }
              var isValid = skypeName.validate(value);
              modelCtrl.$setValidity(VALIDATOR_NAME, isValid);
              return value;
            };
            modelCtrl.$parsers.push(validateValue);
            modelCtrl.$formatters.push(validateValue);
          }

        }
      };
    }])

  ;

})(angular);
