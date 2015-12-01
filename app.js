 var App = angular.module('App', []);

 App.controller("Ctrl", function($scope, $filter){

 	$scope.diaActual = $filter('date')(new Date(), 'yyyy-MM-dd, h:mma ');
    $scope.diaAnt = '"2015-11-01T18:19:18.490Z"';
 	$scope.paises = [
        {nombre: 'Francia', continente : 'Europa' , date: $scope.diaActual, diaAnt: $scope.diaAnt },
        {nombre: 'China', continente : 'Asia' , date: $scope.diaActual, diaAnt: $scope.diaAnt },
        {nombre: 'Canada', continente : 'America' , date: $scope.diaActual, diaAnt: $scope.diaAnt },
        {nombre: 'Marruecos', continente: 'Africa' , date: $scope.diaActual, diaAnt: $scope.diaAnt },
        {nombre: 'Suecia', continente: 'Europa' , date: $scope.diaActual, diaAnt: $scope.diaAnt },
        {nombre: 'Francia', continente: 'Europa' , date: $scope.diaActual, diaAnt: $scope.diaAnt },
        {nombre: 'Chile', continente: 'America', date: $scope.diaActual, diaAnt: $scope.diaAnt }
    ];

 });



 App.filter("filtroDate", function($filter) 
  {
       return function(input)
     {
            var salida = [];
            angular.forEach(input, function(pais) {
              //pais.diaAnt =  //var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
               //if (pais.date === pais.diaAnt ) {   

                salida.push(pais)
                //}
            })
            return salida;
        }
    });

 App.filter("filtroPais", function() {
        return function(input) {
            var salida = [];
            angular.forEach(input, function(pais) {
               //pais.diaAnt = 
              //if (pais.date === pais.diaAnt) {   

                salida.push(pais)
                //}
            })
            return salida;
        }
    });