'use strict';

// PostView Controller
app.controller('PostViewCtrl', function($scope, $routeParams, Post){
	$scope.post = Post.find($routeParams.postId);
});