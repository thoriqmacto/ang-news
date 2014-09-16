'use strict';

app.factory('Post', function($resource){
	return $resource('https://fiery-heat-4853.firebaseio.com/posts/:id.json');
});