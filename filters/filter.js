	 
	 angular.module('tickets').filter("filtroDate", function($filter) 
  {
       return function(input)
     {
        //replace(/([^\"]*)(\d*)([^\w]*)/, replacer);
        	$scope.diaActual = $filter('date')(new Date(), 'yyyy-MM-dd');
            var salida = [];
            angular.forEach(input, function($scope.tickets) {

            var creado = $scope.tickets.creado =  pais.diaAnt.replace(/^\"(.*)\"/,"$1");

            console.log("Creado :",$scope.tickets.creado);

            var diaTickete = $filter('date')(new Date(creado), 'yyyy-MM-dd');

            console.log("diaTickete :", diaTickete);
              
              
             if ($scope.diaActual === diaTickete ) {   

                salida.push($scope.tickets)
              }
            })
            return salida;
        }
    });


	     //Se crear un filtro para mostrar solo los tiquetes del dia actual
    .filter("filtroDate", function($filter) 
  {
       return function(input)
     {
        //replace(/([^\"]*)(\d*)([^\w]*)/, replacer);
        	$scope.diaActual = $filter('date')(new Date(), 'yyyy-MM-dd');
            var salida = [];
            angular.forEach($scope.tickets, function(eachtime){
            	

            var creado = $scope.tickets.creado =  pais.diaAnt.replace(/^\"(.*)\"/,"$1");

            console.log("Creado :",$scope.tickets.creado);

            var diaTickete = $filter('date')(new Date(creado), 'yyyy-MM-dd');

            console.log("diaTickete :", diaTickete);
              
              
             if ($scope.diaActual === diaTickete ) {   

                salida.push($scope.tickets)
              }
            })
            return salida;
        }
    });
        
