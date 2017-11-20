var jigglers = document.getElementsByClassName('jiggle');

for (var i = 0; i < jigglers.length; i++) {
  var text = jigglers[i].innerText;
  var wrappedText = '';

  for (var j = 0; j < text.length; j++) {
    wrappedText = wrappedText + '<span class="jigg-' + j%10 + '">' + text[j] + '</span>';
  }

  jigglers[i].innerHTML = wrappedText;
}
