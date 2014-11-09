(function() {
  'use strict';

  angular
    .module('massiveOctoArcher')
    .factory('nwgui', nwgui);

  function nwgui(){
    var service = require('nw.gui');
    return service;
  }
})();
