/**
 * Created by apple on 18/5/26.
 */

var aa = '1111';

var str = `<div id="container">
        <img src="img/1.jpg" alt="">
        <img src="img/2.jpg" alt="">
        <img src="img/3.jpg" alt="">
        <img src="img/4.jpg" '' "'" alt="">
        <span id="prev">&lt;</span>
        <span id="next">&gt;</span>
        ${aa}
        <ul id="tab">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>`;
console.log(str);