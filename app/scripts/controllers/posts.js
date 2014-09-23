'use strict';

(function(){
	// Posts controller
	app.controller('PostsCtrl', function($scope,$location,$routeParams,Post){
		$scope.posts = Post.all;
		$scope.post = { url: 'http://' };
		
		// Submit Post persistent way
		// $scope.submitPost = function(){
			/* static data */
			// $scope.posts.push($scope.post);
			// $scope.post = {
			// 	url: 'http://',
			// 	title: ''
			// };
			
			// Updating view via callbacks
			// Post.save($scope.post,function(ref){
			// 	$scope.posts[ref.name] = $scope.post;
			// 	$scope.post = { url: 'http://', title: '' };
			// });
			
			// Post.create($scope.post).then(function(ref){
				// $scope.post = {url: 'http://',title: ''};
				// $location.path('/posts' + ref.name());
		// 	});
		// };
			
		// Delete Post persistent way			
		$scope.deletePost = function(post){
			// static delete
			// $scope.posts.splice(index,1);
			
			// Deleting view with callbacks
			// Post.delete({id: postId},function(){
			// 	delete $scope.posts[postId];
			// });
			
			Post.delete(post);
		};
	});			
})();