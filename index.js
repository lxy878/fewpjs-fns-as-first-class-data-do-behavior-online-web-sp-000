/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time='00:00'){
  let times = time.split(':')
  if(times[0].parseInt<12){
    return "Good Morning"
  }else if (times[0].parseInt>17) {
    return "Good Evening"
  }else{
    return "Good Afternoon"
  }
}

function displayMessage(){

}
