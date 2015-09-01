function resultController($scope,$http){
	$scope.evaluacion={
		id:window.location.pathname.split('/')[3],
		responses:function(id){
			$http.get('/results/from/evaluacion/'+id)
				.then(function(response){
					$scope.evaluacion.result=response.data.response;
					console.log($scope.evaluacion.result)
				})
		}
	};
	$scope.countResult=function(element){
		var _this=this;
			_this.counter = 0;
		//recorro todas las evaluaciones respondidas
		$scope.evaluacion.result.respuestas.forEach(function(evalsRespondidas){
			//recorro todas las respuestas de dicha evaluacion respondida
			evalsRespondidas.body.forEach(function(respuesta){
				if(respuesta.value===element.question && respuesta.name=== element.title){
					_this.counter++;
				}
			})
		})
		return (_this.counter)
	}
	//calling
	$scope.evaluacion.responses($scope.evaluacion.id);
}