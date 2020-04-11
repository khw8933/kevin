
function nightModeHandler(self){
  var target = document.querySelector('body');
  if(self.value ==='Night Mode'){
  target.style.backgroundColor='black';
  target.style.color='white';
  self.value ='Day Mode';

  var alist = document.querySelectorAll('a');
  i = 0;
  while(i<alist.length){
  alist[i].style.color = 'powderblue';
  i++
  }
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value ='Night Mode';

    var alist = document.querySelectorAll('a');
    i = 0;
    while(i<alist.length){
    alist[i].style.color = 'blue';
    i++
    }
  }
}
