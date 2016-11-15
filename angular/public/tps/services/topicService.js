angular.module("forum")
    .factory("topicService", function($http){

        //create an object...
        const service = {
            getTopics(){
                return $http.get("/api/topics")
                    .then(response => response.data);
            },

            createComment(topic, commentModel){
                console.log('new comment model :',commentModel);
                return $http.post("/api/comments/topic/" + topic.id, commentModel)
                    .then(response => response.data);
            }
        };
        return service;
    });