(function () {
  'use strict';
  // word search variables
  // Games controller
  angular
      .module('games')
      .controller('GamesController', GamesController);

  GamesController.$inject = ['$scope', '$state', '$window', 'Authentication', 'gameResolve'];

  function GamesController ($scope, $state, $window, Authentication, game) {
    var vm = this;
    vm.authentication = Authentication;
    vm.game = game;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    if (vm.game.type === undefined){
      vm.game.hasletters = false;
    } else {
      // based on vm.game.type set the game type dropdown
    }


    // Remove existing Game
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.game.$remove($state.go('games.list'));
      }
    }

    // Save Game
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.gameForm');
        return false;
      }

      if (vm.game._id) {
        vm.game.$update(successCallback, errorCallback);
      } else {
        vm.game.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('games.view', {
          gameId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }

    $scope.dropDownChange = function(event){

    };

    $scope.getNumber = function(num) {
      return new Array(num);
    };
  }
  //console.log("loading");
}());
