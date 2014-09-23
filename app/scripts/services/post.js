'use strict';

// Post factory with firebase
app.factory('Post',function($firebase, FIREBASE_URL, User){
	var ref = new Firebase(FIREBASE_URL + 'posts');
	
	var posts = $firebase(ref).$asArray();  
	
	var Post = {
		all: posts,
		
		create: function(post){
			if(User.signedIn()){
				var user = User.getCurrent();
				
				post.owner = user.username;
				
				return posts.$add(post).then(function(ref){
					var postId = ref.name();
					
					User.posts(user.username).$set(postId,postId);
					
					return postId;
				});	
			} 
			// return posts.$add(post);
		},
		
		find: function(postId){
			return $firebase(ref.child(postId)).$asObject(); 
		},
		
		delete: function(post){
			// return posts.$remove(post);
			if(User.signedIn()){
				var user = User.getCurrent();
				
				if(user.username === post.owner){
					posts.$remove(post).then(function(){
						User.posts(user.username).$remove(post.$id);
					});
				}
			}
		},
		
		comments: function(postId){
			return $firebase(new Firebase(FIREBASE_URL + 'comments/' + postId));
		},
		
		addComment: function(postId, comment){
			if(User.signedIn()){
				var user = User.getCurrent();
				
				comment.username = user.username;
				// console.log(comment.username);
				Post.comments(postId).$push(comment).then(function(ref){
					var commentId = ref.name();
					
					User.comments(user.username).$set(commentId, postId);
				});
			}
		},
		
		deleteComment: function(postId,comment){
			if(User.signedIn()){
				var user = User.findByUsername(comment.username);
				var commentId = comment.$id;
				
				console.log(postId)
				
				Post.comments(postId).$remove(commentId).then(function(){
					User.comments(user.username).$remove(commentId);
				});
			}
		}
	};
	
	return Post;
});


// not using $firebase
// app.factory('Post', function($resource){
// 	return $resource('https://fiery-heat-4853.firebaseio.com/posts/:id.json');
// });