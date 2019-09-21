function target() {
  return document.querySelector('body');}
var Body = {
  setColor:function(color){
    target().style.color = color;},
  setBackgroundColor:function(color){
    target().style.backgroundColor = color;}
}
var Links ={
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
      alist[i].style.color = color;
      i++;
    }
  }
}
function nightDayHandler(self){
  if(self.value =='night'){
    self.value='day';
    Body.setBackgroundColor('dimgray'); Body.setColor('white');
    Links.setColor('powderblue');
  }else{
    self.value='night';
    Body.setBackgroundColor('white'); Body.setColor('black');
    Links.setColor('black');
  }
}
