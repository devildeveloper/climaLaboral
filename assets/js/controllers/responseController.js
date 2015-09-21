function responseController($scope,$http){
	//$scope.evalId =window.location.pathname.split('/')[2],
	$scope.get=function(){
		$http.get('/evaluacion/'+window.location.pathname.split('/')[3])
				.then(function(response){
					//console.log(response)
					if(response.data.status==500){
						alert('ha ocurrido un error en el servidor :/')
					}else if(response.data.status==200){
						$scope.data=response.data.evals;
						console.log($scope.data)
					}else{
						window.location.href='/404'
					}
				})
	}
	$scope.form=function() {
		console.log(this)
	}
	//init
	$scope.get();
}