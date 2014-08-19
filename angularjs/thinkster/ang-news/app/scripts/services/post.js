'use strict';

app.factory('Post', function($resource){
	return $resource('https://fiery-fire-7209.firebaseio.com//posts/:id.json');
});