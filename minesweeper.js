function doSomething() {
  var helloworldparagraph = document.getElementById('helloworld');
  if(helloworldparagraph.classList.contains('helloworld')) {
    helloworldparagraph.classList.add('helloworld-alt');
    helloworldparagraph.classList.remove('helloworld');
  } else {
    helloworldparagraph.classList.add('helloworld');
    helloworldparagraph.classList.remove('helloworld-alt');
  }
  setTimeout(doSomething, 500);
}

setTimeout(doSomething, 500);
