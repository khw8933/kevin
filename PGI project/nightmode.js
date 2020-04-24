

var Body = {
  SetColor: function (color){
    //document.querySelector('body').style.color= color;
    $('body').css('color', color);
  },
  SetBackgroundColor: function (color){
    //document.querySelector('body').style.backgroundColor= color;
    $('body').css('backgroundColor', color)
  },
  SetBorderColor: function (color){
  $('table, td, th').css('borderColor', color)

  }
}
var Link = {
  SetColor: function (color){
    //var alist = document.querySelectorAll('a');
    //i = 0;
    //while(i<alist.length){
    //alist[i].style.color = color;
    //i++
    $('a').css('color', color);
  }
 }


function nightModeHandler(self){
  var target = document.querySelector('body');
  if(self.value ==='Night Mode'){
  Body.SetBackgroundColor('black');
  Body.SetColor('white');
  self.value ='Day Mode';
  Link.SetColor('powderblue');
  Body.SetBorderColor('white');
  } else {
  Body.SetBackgroundColor('white');
  Body.SetColor('black');
    self.value ='Night Mode';

  Link.SetColor('blue');
  Body.SetBorderColor('black');
  }
}
