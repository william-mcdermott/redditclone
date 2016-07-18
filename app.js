var app=angular.module("redditApp", ['ngAnimate']);
app.controller("redditController", function($scope){
  $scope.view={};
  $scope.view.postArray=[
    {
      title: "Billy's Post",
      author: "Billy",
      id: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: moment().calendar(),
      sortDate: moment().unix(),
      upvotes: 0,
      commentArray: [
        {
          author: "Bill",
          comment: "This post rocks!"
        }
      ],
      imageURL: 'http://www.espnsa.com/wp-content/uploads/2016/07/Darryl-Strawberry.jpg'
    },
    {
      title: "Alan's Post",
      author: "Alan",
      id: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: moment().subtract(2, 'days').calendar(),
      sortDate: moment().subtract(2, 'days').unix(),
      upvotes: -1,
      commentArray: [
        {
          author: "Dave",
          comment: "Shitty post!"
        }
      ],
      imageURL: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c66.66.828.828/s320x320/554186_10152189465295368_1137327509_n.jpg?oh=5c8070252a726f5114ad4a5e0e140cf9&oe=5826ACE8'
    },
    {
      title: "Steve's Post",
      author: "Steve",
      id: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: moment().subtract(6, 'days').calendar(),
      sortDate: moment().subtract(6, 'days').unix(),
      upvotes: 2,
      commentArray: [
        {
          author: "Arthur",
          comment: "This post rocks! totally"
        },
        {
          author: "Doug",
          comment: "Awesome post!"
        }
      ],
    },
  ];
  $scope.view.comment={};
  $scope.addPost=false;
  $scope.view.sortBy="upvotes";
  $scope.ascdes = 'descend';

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
    console.log('yo');
    object.showComments= !object.showComments;
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
  $scope.view.prepComments=function(post){
    var comments= post.commentArray;
  };
});
