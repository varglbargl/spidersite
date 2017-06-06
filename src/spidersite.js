$(function(){
  $('.jiggle').val(function () {
    var text = this.innerText;
    var wrappedText = '';

    for (var i = 0; i < text.length; i++) {
      wrappedText = wrappedText + '<span class="jigg-' + i%10 + '">' + text[i] + '</span>'
    }

    this.innerHTML = wrappedText;
  });
});
