angular.module("forum")
    .factory("userService", function($http){

        //create an object...
        const service = {
            getUsers(){
                return $http.get("/api/users")
                    .then(response => response.data)
                    .then(users => {
                        users.sort(function(u1,u2){
                            if(u1.name<u2.name){
                                return -1;
                            }
                            if(u1.name===u2.name){
                                return 0;
                            }
                            return 1;
                        });
                        //users are sorted now
                        return users;
                    });
            }
        };

        //...and return this object
        return service;
    });