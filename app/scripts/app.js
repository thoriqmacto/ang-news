/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angNewsApp', ['ngCookies','ngResource','ngRoute','ngSanitize','firebase']);

app.config(function ($routeProvider) {
	$routeProvider 
		.when('/', {
			templateUrl: 'views/posts.html',
			controller: 'PostsCtrl'
		})
		.when('/posts/:postId',{
			templateUrl: 'views/showpost.html',
			controller: 'PostViewCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/register',{
			templateUrl: 'views/register.html',
			controller: 'AuthCtrl'
		})
		.when('/login',{
			templateUrl: 'views/login.html',
			controller: 'AuthCtrl'
		})		
		.otherwise({
			redirectTo: '/'
		});
});

app.constant('FIREBASE_URL','https://fiery-heat-4853.firebaseio.com/');