document.addEventListener('DOMContentLoaded', function() {

var lightSwitch = document.querySelector('.switch');

lightSwitch.addEventListener('click', function(e) {

    switch (this.className) {
      case 'switch on':
        return this.className = 'switch off';
        break;
      case 'switch off':
        return this.className = 'switch on';
      default:
    }
})

var background = document.querySelector('body');
var text = document.querySelector('.status');

  background.addEventListener('click', function(e) {

    switch (this.className) {
      case 'light':
        text.innerHTML = 'Hey, who turned off the lights?'
        return this.className = 'dark';
        break;
      case 'dark':
        text.innerHTML = "It's so bright in here!"
        return this.className = 'light';
      default:
    }
})

});
