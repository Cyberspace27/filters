 var App = angular.module('App', []);

 App.controller("Ctrl", function($scope, $filter){

 	//Esta variables es para guardar la fecha actual en el formato deseado
    //$scope.diaActual = $filter('date')(new Date(), 'yyyy-MM-dd, h:mma ');
    $scope.diaActual = $filter('date')(new Date(), 'yyyy-MM-dd');
    //Esta variables es para guardar la fecha con la q se va a comparar la fecha actual en el formato que viene desde mongodb
    //$scope.diaAnt = '"2015-11-01T18:19:18.490Z"';
    $scope.diaAnt = '"2015-12-02T18:19:18.490Z"';

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
        //replace(/([^\"]*)(\d*)([^\w]*)/, replacer);

            var salida = [];
            angular.forEach(input, function(pais) {
              var diaAnt =  pais.diaAnt.replace(/^\"(.*)\"/,"$1");

              var diaTickete = $filter('date')(new Date(diaAnt), 'yyyy-MM-dd');
              console.log("diaTickete :",diaTickete);
              console.log("diaActual :",pais.date);
              
             if (pais.date === diaTickete ) {   

                salida.push(pais)
              }
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