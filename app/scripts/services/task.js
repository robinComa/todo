angular.module('taskApp.services.task', []).factory('Task', function($rootScope){

    var ref = new Firebase('https://to-do.firebaseio.com/');
    var firstConnection = true;

    return {

        onValues : function(callbackSuccess){
            ref.on('value', function(snapshot) {
                if(snapshot.val() !== null) {
                    if(firstConnection){
                        $rootScope.$apply(function(){
                            callbackSuccess(snapshot.val());
                        });
                    }else{
                        callbackSuccess(snapshot.val());
                    }
                }
                firstConnection = false;
            });
        },

        add : function(todo){
            ref.push(todo);
        },

        remove : function(id){
            ref.child(id).remove();
        },

        setDone : function(id, done){
            ref.child(id).update({
                done : done
            });
        },

        setText : function(id, text){
            ref.child(id).update({
                text : text
            });
        }
    };

});