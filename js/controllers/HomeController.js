app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function() {
		//if the input is empty dont submit
		if(!$scope.title || $scope.title === "") {
			return;
		}

		//push suggestion post into suggestions.js
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: []
		});

		//clear submit input after submitted
		$scope.title = '';
	};

    $scope.upVote = function(post){
    	post.upvotes += 1;  
    };
}]);
