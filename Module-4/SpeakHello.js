(function () {

  var speakWord = "Hello";

  var helloSpeaker = {};
  
 helloSpeaker.speak = function () {
    console.log(speakWord + " "+ this.name);
  }
  
  



})();