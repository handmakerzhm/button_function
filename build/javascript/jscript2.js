



// Get the button that opens the modal
let button = document.getElementById("btn").addEventListener('click', openModal);

// When the user clicks the button, open the modal 
//function for button
 function openModal () {
    let theModal = document.getElementById('modal_content');
    if(theModal.style.display==='none') {theModal.style.display = "block";
    }else {
        theModal.style.display='none';
    }

   
};
