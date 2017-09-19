'use strict';

$( document ).ready( function() {

var dodaj = $("#przycisk");
var container = $("#container");

$( dodaj ).click( function() {

$.ajax({
url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
dataType: 'json',
success: function (resultJSON) {
console.log(resultJSON);
$(container).append('<div id="costam">'+resultJSON.userName+', '+resultJSON.userId+', '+resultJSON.userURL+'</div>');
},
onerror: function (msg) {
console.log(msg);
}
});
//$.ajax({
//url: "http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108",
//dataType: 'json',
//success: function (resultJSON) {
//console.log(resultJSON);
//},
//onerror: function (msg) {
//console.log(msg);
//}
//});
});

$.ajax({
url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
dataType: 'json',
success: function (resultJSON) {
console.log(resultJSON);
},
onerror: function (msg) {
console.log(msg);
}
});
    
    
    
} );