'use strict';

app.controller('PostCtrl',function($scope, Post){
	// $scope.posts = [];
	$scope.posts = Post.get();
	$scope.post = {url:'http://', title:''};

	$scope.submitPost = function(){
		// $scope.posts.push($scope.post);
		Post.save($scope.post, function(ref){
			$scope.posts[ref.name] = $scope.post;
			$scope.post = {url:'http://', title:''};
		});

	};

	$scope.deletePost = function(postId){
		delete $scope.posts[postId];
	};

});	