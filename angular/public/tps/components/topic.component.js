const template = `
        
            <ul>
                <show-comment comment="c"  ng-repeat="c in $ctrl.topic.comments | orderBy:'-score'">
                </show-comment>
            </ul>

        <form novalidate>
            <select ng-model="$ctrl.commentModel.user" 
                    ng-options="user.name for user in $ctrl.users">      
            </select>
            <textarea ng-model="$ctrl.commentModel.content" required></textarea>
            <button ng-click='$ctrl.createComment($ctrl.commentModel)'>Submit</button>
        </form>

`;

//<show-topic> angular will $ctrl = new ShowTopicController();
function ShowTopicController(topicService, $http){ //$HTTP dans le controller :  c'est mal !
    //vaut mieux mettre $http dans un service

    //SI pas utilisé textarea...
    this.commentModel ={
        user : undefined,
        content : undefined
    };

    //injecting and keeping the topicService
    this.topicService = topicService;
    this.$http = $http;

}

ShowTopicController.prototype = {
    //$ctrl.createComment()
    createComment(commentModel){

        console.log('I want to create a comment', commentModel);

        this.topicService.createComment(this.topic, commentModel)
            .then(newComment => this.topic.comments.push(newComment))
            .catch(error=>alert("error"+error));

    }
}


//use : <show-topic topic="model.selectedTopic" users="users"><show-topic>

angular.module('forum')
    .component('showTopic', {

        template, //on pourrait mettre template : template
        controller : ShowTopicController, //pas de () parce qu'on lui passe une fonction on ne l'appelle pas
        //de toutes façon, la fonction n'a pas de retour donc n'affiche rien
        bindings: {
            topic:'=',
            users:"="
        }

    });