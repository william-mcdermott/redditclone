var app=angular.module("redditApp", ['ngAnimate']);
app.controller("redditController", function($scope){
  $scope.view={};
  $scope.view.postArray=[];
  $scope.view.addPost=function(){
    var newPostObject={};
    newPostObject.title=$scope.post.title;
    newPostObject.author=$scope.post.author;
    newPostObject.imageURL=$scope.post.imageURL;
    newPostObject.description=$scope.post.description;
    $scope.view.postArray.push(newPostObject);
    $scope.post={};
    console.log($scope.view.postArray);
  };
  $scope.view.addPostClick=function(){
    if ($scope.addPost){
      $scope.addPost = false;
    } else {
      $scope.addPost=true;
    }
  };
});
