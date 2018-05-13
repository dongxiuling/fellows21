/**
 * Created by apple on 18/5/13.
 */
function setCookie(key,value,day){
    var str = key +"="+value+";"    ;
    if(day){
        var date = new Date();

        date.setDate( date.getDate()+day);

        str += 'expires = '+date;
    }
    document.cookie = str;
}
function getCookie(key){

    var sCookie = document.cookie;//'name=zhangsan; age=20'
    var arr = sCookie.split('; '); //['name=zhangsan','age=20']
    for(var i=0; i<arr.length; i++){
        var arr1 = arr[i].split('=');   //'name=zhangsan' =>['name','zhangsan']
        if(arr1[0] == key){
            return arr1[1];
        }
    }
}
function removeCookie(key){
    setCookie(key,'',-1);
}