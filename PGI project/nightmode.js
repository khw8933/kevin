

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
},
  SetContentBackgroundColor: function (color){
    $('.panel').css('background-color', color)
  },

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
var Pseudo = {
  SetPseudoColor: function (color){
  document.querySelector('.pseudo').style.color = color;

  }
}

function nightModeHandler(self){
  var target = document.querySelector('body');
  if(self.value ==='Night Mode'){
  Body.SetBackgroundColor('black');
  Body.SetColor('white');
  self.value ='Day Mode';
  Link.SetColor('powderblue');
  Pseudo.SetPseudoColor('powderblue');

  Body.SetBorderColor('white');
  Body.SetContentBackgroundColor('black');
  } else {
  Body.SetBackgroundColor('#d3dee2');
  Body.SetColor('black');
    self.value ='Night Mode';

  Link.SetColor('blue');
  Pseudo.SetPseudoColor('blue');
  Body.SetBorderColor('black');
  Body.SetContentBackgroundColor('#f1f1f1');
  }
}
