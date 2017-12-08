function getTime(time){
    var a = new Date();
    var b = new Date(time);
    var o;
    console.log(a);
    var c = a - b;
    if(c/1000 <= 60){
        o = Math.round(c/1000); 
        console.log(o+ " 秒前");
    }else if(c/1000/60 <60){
        o = Math.round(c/1000/60);
        console.log(o + "分钟前");
    }else if(c/1000/60/60 < 24){
        o = Math.round(c/1000/60/60);
        console.log(o + "小时前");
    }else if(c/1000/60/60/24 < 30){
        o = Math.round(c/1000/60/60/24);
        console.log(o + "天前");
    }else if(c/1000/60/60/24/30 <12){
        o = Math.round(c/1000/60/60/24/30);
        console.log(o + "个月前");
    }else{
        o = Math.round(c/1000/60/60/24/30/12);
        console.log(o + "年前");
    }
}

var app = new Vue({
    el: "#app",
    data: {
        myinput: ' '
    },
    watch: {
        myinput: function(val, oldv){
            console.log("新   " + val)
            console.log("旧  " + oldv);
            console.log(this.myinput);

        }
    }
});