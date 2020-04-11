
function nightModeHandler(){
  var target = document.querySelector('body');
  if(this.value ==='Night Mode'){
  target.style.backgroundColor='black';
  target.style.color='white';
  this.value ='Day Mode';

  var alist = document.querySelectorAll('a');
  i = 0;
  while(i<alist.length){
  alist[i].style.color = 'powderblue';
  i++
  }
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    this.value ='Night Mode';

    var alist = document.querySelectorAll('a');
    i = 0;
    while(i<alist.length){
    alist[i].style.color = 'blue';
    i++
    }
  }
}
