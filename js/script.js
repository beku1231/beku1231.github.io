'use strict';

$( document ).ready( function() {

var dodaj = $("#przycisk");
var container = $("#container");

$( dodaj ).click( function() {

$.ajax({
url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
dataType: 'json',
success: function (resultJSON) {
console.log(resultJSON);
$(container).append('<div id="costam">'+resultJSON.firma+',<br> '+resultJSON.imie+',<br> '+resultJSON.nazwisko+',<br>'+resultJSON.zawod+'</div>');
},
onerror: function (msg) {
console.log(msg);
}
});
});

$.ajax({
url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
dataType: 'json',
success: function (resultJSON) {
console.log(resultJSON);
},
onerror: function (msg) {
console.log(msg);
}
});
    
    
    
} );