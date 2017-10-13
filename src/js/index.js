"use strict";

var app = new Vue({
    el: "#app",
    data: {
        article_list: null,
        source_api: "https://cnodejs.org/api/v1",
        topics: "https://cnodejs.org/api/v1/topics",
        topic: "https://cnodejs.org/api/v1/topic/",  // topic/:id
        user: "https://cnodejs.org/api/v1/user" //  /user/:loginname
    },
    methods:{
        /**
         * 
         getTop: function(item){
             var topic = this.topic;
             function* get(){
                 var a = yield do_ajax(topic + item.id).then(function(data){it.next(data)});
                 item.something = 250;
                }
                var it = get();
                it.next();
            }
        */
    }
});




function do_ajax(url){
    return new Promise(function(solve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    solve(xhr.response);
                }else{
                    reject(xhr.status);
                }
            }
        }
    });
}

function success(data){
    var res = JSON.parse(data);
    app.article_list = res.data;
    // console.log(res.data);
}

do_ajax('https://cnodejs.org/api/v1/topics')
.then(success)
.catch((some)=>{
    console.log(some);
});

