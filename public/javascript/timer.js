
function setTimer(){
  set();
  console.log(setVar);
};

// increments the counter by 1 and sets it as the timer html
function count(){
  if(counter === 60){
    gameOver();
  } else {
    counter++;
    $timer.html(counter);
  }
};

// executes the count function every second.
function set(){
  setVar = setInterval(count, 1000);
};

// clears the interval and sets the counter to zero
function clearTimer(){
  clearInterval(setVar);
  counter = 0;
  $timer.html("");
};
