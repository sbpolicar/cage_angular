console.log('app.js loaded');


var memoryGameApp = angular.module('memoryGameApp', ['ui.bootstrap']);


memoryGameApp.factory('game', function() {
  var tileNames = ['Crazy-Cage', 'Cagein60secs', 'Reverand-Cage', 'Cruisin-Cage', 'Boozin-Cage', 'Miley-Cage',
    'Sane-Cage', 'Business-Cage'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});


//usages:
//- in the repeater as: <mg-card tile="tile"></mg-card>
//- card currently being matched as: <mg-card tile="game.firstPick"></mg-card>

memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',
    // instead of inlining the template string here, one could use templateUrl: 'mg-card.html'
    // and then either create a mg-card.html file with the content or add
    // <script type="text/ng-template" id="mg-card.html">.. template here.. </script> element to
    // index.html
    template: '<div class="container">' +
                '<div class="card" ng-class="{flipped: tile.flipped}">' +
                  '<img class="front" ng-src="img/back.png">' +
                  '<img class="back" ng-src="img/{{tile.title}}.gif">' +
                '</div>' +
              '</div>',
    scope: {
      tile: '='
    }
  }
});

memoryGameApp.run([function(){
  // console.log('portfolio angular init');
}]);
