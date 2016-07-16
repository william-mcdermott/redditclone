var app=angular.module("redditApp", ['ngAnimate']);
app.controller("redditController", function($scope){
  $scope.view={};
  $scope.view.postArray=[
    {
      title: "Billy's Post",
      author: "Billy",
      id: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      commentArray: [],
      date: moment().calendar(),
      upvotes: 0,
    }
  ];
  $scope.view.comment={};
  $scope.addPost=false;
  $scope.showComments=false;
  $scope.addComment=false;
  $scope.view.addPost=function(){
    var newPostObject={};
    newPostObject.title=$scope.post.title;
    newPostObject.author=$scope.post.author;
    newPostObject.imageURL=$scope.post.imageURL;
    newPostObject.description=$scope.post.description;
    newPostObject.date=moment().calendar();
    newPostObject.upvotes=0;
    newPostObject.commentArray=[];
    newPostObject.showComments=false;
    newPostObject.addComment=false;
    newPostObject.id=$scope.view.postArray[$scope.view.postArray.length-1].id+1;
    $scope.view.postArray.push(newPostObject);
    $scope.post={};
    $scope.addPost=false;
    console.log($scope.view.postArray);
  };
  $scope.view.addPostClick=function(){
    if ($scope.addPost){
      $scope.addPost = false;
    } else {
      $scope.addPost=true;
    }
  };
  $scope.view.showCommentsClick=function(object){
    if (object.showComments){
      object.showComments=false;
    } else {
      object.showComments=true;
      var displayComments = object.commentArray;
      console.log(displayComments);
    }
  };
  $scope.view.addCommentClick=function(object){
    if (object.addComment){
      object.addComment=false;
    } else {
      object.addComment=true;
    }
  };
  $scope.view.addComment=function(post){
    var newCommentObject={};
    newCommentObject.author=$scope.view.comment.author;
    newCommentObject.comment=$scope.view.comment.comment;
    post.commentArray.push(newCommentObject);
    $scope.view.comment={};
    post.addComment=false;
    console.log(post);
  };
});
