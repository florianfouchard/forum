const template = `
            <h1>Jagy</h1>
            <ul>
                <show-comment comment="c"  ng-repeat="c in $ctrl.topic.comments">
                </show-comment>
            </ul>

        <form novalidate>
            <select ng-model="$ctrl.commentModel.user" 
                    ng-options="user.name for user in $ctrl.users">      
            </select>
            <textarea ng-model="$ctrl.commentModel.content" required></textarea>
            <button ng-click='$ctrl.createComment(commentModel)'>Submit</button>
        </form>

`;

function ShowTopicController(){

}

//use : <show-topic topic="model.selectedTopic"><show-topic>

angular.module('forum')
    .component('showTopic', {

        template, //on pourrait mettre template : template
        controller : ShowTopicController(),
        bindings: {
            topic:'=',
            users:"="
        }

    });