var data = [];

var dataStr = "1.Enjoy the nice beach<br>\
<br>\
I haven't been everyhere, but it's on my list.<br>\
<br>\
<br>\
2.Your way to go<br>\
<br>\
The World is a book, and those who do not travel read only a page.<br>\
<br>\
<br>\
3.Nature<br>\
<br>\
Travel is the only thing you buy that make you richer...<br>\
<br>\
<br>\
4.The beauty of the sea<br>\
<br>\
My favorite thing is to go where I've never been...<br>\
<br>\
<br>\
5.Mountains<br>\
<br>\
Happiness is a way to ravel not a destination<br>\
<br>\
<br>\
6.Steps in the sand<br>\
<br>\
Eat well travel often<br>\
<br>\
<br>\
7.Love traveling<br>\
<br>\
Love to travel hate to arrive...<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}

