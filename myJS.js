/*
* Excercise 1
*
*/

const block = document.getElementById("color-block");
block.addEventListener("click", changeColor);

// document.getElementById('color-block').addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
  const name = document.getElementById('color-name');
    // Write a condition determine what color it should be changed to
  if(block.getAttribute("class") === "color1"){
      //change the background color using JS
      block.setAttribute("class", "color2");
      //Change the text of the color using the span id color-name
      name.innerHTML = '#1ABC9C';
  }
  else{
      //change the background color using JS
      block.setAttribute("class", "color1");
      //Change the text of the color using the span id color-name
      name.innerHTML = '#F08080';
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const button = document.getElementById("convertbtn");
button.addEventListener("click", convertTemp);


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    const fah_input = document.getElementById("f-input");
    fah = fah_input.value;
    //Calculate the temperature here
    let cel = (fah - 32) * (5/9);
    cel = cel.toFixed(2);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = cel;
}
