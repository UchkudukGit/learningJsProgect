"use strict";
function howMany(selectObject) {
    var numberSelected = 0;
    let genres = [];
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
        genres[genres.length] = selectObject.options[i].value;
      }
    }
    return "count: " + numberSelected + " names: " + genres;
  }
  
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert('Выбрано элементов: ' + howMany(document.selectForm.musicTypes));
  });