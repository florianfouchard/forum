angular.module("forum", [])
    .controller("ForumController", function($scope, userService, topicService)  {

        $scope.users = globals.users;

        $scope.topics = globals.topics;

        $scope.model={
            selectedTopic : undefined
        }

        $scope.users = userService.getUsers() //PROMESSE !!!
            .then(users => $scope.users = users);


        $scope.topics = topicService.getTopics()
            .then(topics =>$scope.topics = topics);

        /*const p1 = topicService.getTopics();

        const p2 = p1.then(topics =>{
            $scope.topics = topics;
        });*/



    });




























