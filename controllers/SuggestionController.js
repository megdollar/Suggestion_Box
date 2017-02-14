app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id].comments;

	//add comments
	$scope.addComment = function() {
		//check if input is empty
		if(!$scope.comment || $scope.comment === ""){
				return;
		}
		$scope.comments.push({
			body: $scope.comment,
			upvotes: 0
		});

		//clear submit input after submitted
		$scope.comment = '';

	}

	$scope.upVote = function(comment){
    	comment.upvotes += 1;  
    };

}]);
