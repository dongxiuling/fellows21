/**
 * Created by apple on 18/5/20.
 */
require(['sortArray'],function(sortArray){

    var arr1 = [1,23,4,13,8,10];
    var str = 'sdfghjk';
    var obj = {
        name:'22',
        age:10
    }

    console.log( sortArray(obj)  );

});

/*seaJs*/
/*define(function(require){

    var arr1 = [1,23,4,13,8,10];
    var str = 'sdfghjk';
    var obj = {
        name:'22',
        age:10
    }

    var sortArray = require('sortArray');
    console.log( sortArray(obj)  );

});*/
