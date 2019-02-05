var smiloIcon = require('./')

var body = document.querySelector('body')
for(var i = 0; i < 600; i++) {
  var el = smiloIcon(100, i)
  body.appendChild(el)
}
