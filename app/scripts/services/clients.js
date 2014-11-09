/*
La factory clients es en realidad una db NeDB simple y sencilla.
*/

(function() {
  'use strict';

  var Datastore = require('nedb');
  var path = require('path');

  angular
    .module('massiveOctoArcher')
    .factory('clients', clientsNeDB);

  function clientsNeDB(nwgui) {
    var params = {
      filename: path.join(nwgui.App.dataPath, 'clients.db'),
      autoload: true
    };
    var db = new Datastore(params);
    return db;
  }
})();
