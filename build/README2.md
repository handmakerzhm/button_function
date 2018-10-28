# Basic button setup

>Add class or id or both for styling and selection. Two different ways to add an event listener to a button.
```
<html>
<button class='btn' id='button1'>Click IT</button>
</html>

<script>
let button = document.getElementById('button1').addEventListener('click', buttonClicked);

or

let button = document.getElementById('button1');

button.addEventListener('click', buttonClicked);

//function for the button

function buttonClicked (){
    alert('button clicked');
}
//alert button clicked
</script>
```