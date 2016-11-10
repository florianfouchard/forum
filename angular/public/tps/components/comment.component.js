const myTemplate =`


    <li ng-if="$ctrl.comment.user" ng-class="$ctrl.getScoreClass()">
        {{$ctrl.comment.user.name}} said  : " {{$ctrl.comment.content}} "
    </li>
    <li ng-if="!$ctrl.comment.user" ng-class="$ctrl.getScoreClass()">
        Anonymous said  :  "{{$ctrl.comment.content}}" 
    </li>
    <button ng-click="$ctrl.up()">+</button>
    <button ng-click="$ctrl.down()">-</button>
    {{$ctrl.comment.score}}

`;

function CommentController (){
    this.comment.score=0;
}

CommentController.prototype = {
    up(){
        this.comment.score ++;
    },

    down(){
        this.comment.score --;
    },

    getScoreClass(){
        if(this.comment.score===0){
            return'';
        }
        else if(this.comment.score>0){
            return 'pos';
        }
        else{
            return 'neg';
        }
    }
};

angular.module('forum')
    //HOULA ! camelCase will refer to kebab-case
    .component('showComment', {
       template : myTemplate,
        controller : CommentController,
        bindings :{
            comment: '='
       }
    });