function homeController($scope,$http){
	$http.get('/my/evals')
		.then(function(response){
			$scope.evals= response.data.result;
		});
	$scope.creator={
		questions: [],
		addQuestion:function(item){
			$scope.creator.questions.push(item);
			$scope.model=null;
			console.log($scope.creator.questions)
		},
		destroyQuestion:function($index){
			console.log($index)
			$scope.creator.questions.splice($index,1);
		},
		print:function(){
			console.log('ss')
			console.log($scope.creator.questions)
		},
		createEvaluation:function(){
			$http.post('/Evaluacion/create',{ title :  $scope.evalTitle,
												gerencia: $scope.gerencia,
												body: $scope.creator.questions
			}).then(function(response){
				window.location.href=window.location.href
			})
		}
	}
}