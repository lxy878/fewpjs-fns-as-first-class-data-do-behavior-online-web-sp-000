/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time='00:00'){
  times = time.split(':')
  if(times[0].parseInt()<12){

  }else if (times[0].parseInt()>17) {

  }else{
    
  }
}

function displayMessage(){

}
