setInterval(clockUpdates, 1000);

function clockUpdates () {
  let date = new Date();
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());
  let days = date.getDay();
  if (hours > 12) {
    hours = hours - 12;
    document.getElementById("pm").classList.add('ontext');
  }
  else if (hours === 12) {
    document.getElementById("pm").classList.add('ontext');
  }
  else if (hours > 0) {
    document.getElementById("am").classList.add('ontext');
  }
  else {
    hours = 12;
    document.getElementById("am").classList.add('ontext');
  }
  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
  switch(days) {
    case 0:
      document.getElementById("sunday").classList.add('ontext');
      break;
    case 1:
      document.getElementById("monday").classList.add('ontext');
      break;
    case 2:
      document.getElementById("tuesday").classList.add('ontext');
      break;
    case 3:
      document.getElementById("wednesday").classList.add('ontext');
      break;
    case 4:
      document.getElementById("thursday").classList.add('ontext');
      break;
    case 5:
      document.getElementById("friday").classList.add('ontext');
      break;
    case 6:
      document.getElementById("saturday").classList.add('ontext');
  }
}

function addZero (n) { 
  if (n < 10) {
      n = "0" + n;
  }
  return n;
}
