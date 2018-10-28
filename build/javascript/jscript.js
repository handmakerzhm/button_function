

alert('this is Javascript {;-}');
//Date and Time format
let dateTime = new Date();
document.getElementById("date").innerHTML = dateTime;

//date drop down with event listener and function
let button = document.getElementById('button1').addEventListener('click', clickedButton);

//Function for the date dropdown
function clickedButton (){
    
    let currentDay= document.getElementById('date');
    if(currentDay.style.display==='none'){
    currentDay.style.display= 'block';
    }else {
    currentDay.style.display='none';
    }
    /*For testing purposes
    console.log('click test2');  */
   };



//button2: selector for wrapper
let container = document.getElementById('wrapper');

let button2 = document.getElementById('button2').addEventListener('click',clickMe);

function clickMe (){
    
      //toggle button
     container.style.height= '300px';
     if(container.style.display==='none'){
    container.style.display= 'block';
    }else {
    container.style.display='none';
    }
    
    };


//button3:
let button3 = document.getElementById('button3').addEventListener('click',clickIt);

let footerButton = document.getElementById('footer');

function clickIt (){
    
      //toggle button
    
    if(footerButton.style.display==='none'){
    footerButton.style.display= 'block';
    }else{
    footerButton.style.display='none';
    }
    
    };



    

