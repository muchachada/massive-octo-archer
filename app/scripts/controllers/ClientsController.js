(function(){
  'use strict';

  angular
    .module('massiveOctoArcher')
    .controller('ClientsController', ClientsController);

  function ClientsController($scope, clients){
    var vm = this;

    clients.find({}, function(err, docs){
      $scope.$apply(function(){vm.clientes = docs});
    })
  }

})();
