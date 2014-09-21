'use strict';

// Post factory with firebase
app.factory('Post',function($firebase, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL + 'posts');
	
	var posts = $firebase(ref).$asArray();  
	
	var Post = {
		all: posts,
		create: function(post){ 
			return posts.$add(post); 
		},
		find: function(postId){ 
			return $firebase(ref.child(postId)).$asObject(); 
		},
		delete: function(post){ 
			return posts.$remove(post); 
		}
	};
	
	return Post;
});


// not using $firebase
// app.factory('Post', function($resource){
// 	return $resource('https://fiery-heat-4853.firebaseio.com/posts/:id.json');
// });