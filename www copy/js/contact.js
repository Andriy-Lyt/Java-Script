window.onload=function() {
   // alert("Vasya");
 //  window.onload=Move();

//===Form Validation====================

var success = document.getElementById("success");

var s_form = document.forms.contact_form;
s_form.onsubmit = validateForm;

function validateForm () {
    var name = document.forms["contact_form"]["name"];             
    var email = document.forms["contact_form"]["email"];    
    var message = document.forms["contact_form"]["message"];  
    var noname = document.getElementById("noname");

	if (name.value === "" ||  !isNaN(name.value)) {
        noname.innerHTML = "Please enter Your Name"; 
        noname.style.border = "1px solid rgb(119, 216, 150)";
        name.focus();
        name.style.backgroundColor="#84efb6";
		return false;
    }
   	if (email.value === "" ) {
        noemail.innerHTML = "Please enter Your Email"; 
        noemail.style.border = "1px solid rgb(119, 216, 150)";
        email.focus();
        email.style.backgroundColor="#84efb6";
		return false;
    }
    if (message.value === "" ) {
        nomessage.innerHTML = "Please enter Your Message"; 
        nomessage.style.border = "1px solid rgb(119, 216, 150)";
        message.focus();
        message.style.backgroundColor="#84efb6";
		return false;
    }
else {
    success.style.visibility = "visible";
    //if we were actually sending form to a server should've been return true, 
    //but I wanted to display Success message, so it's return falce below;
    return false; 
}
} //End of Validation=================

/* ===Animated Div at the bottom=======
        animation code I found at https://www.freecodecamp.org/forum/t/setinterval-and-javascript-animation/172709;
        modified it a bit to work with 2 moving object;
*/
addEventListener("onkeydown", function() {
   Move();
  });

function Move() {
    var container = document.getElementById("animat-container");
    var element1 = document.getElementById("animate1");
    var element2 = document.getElementById("animate2");
    var id = setInterval(frame, 20);
    var maxDistToTravel = container.offsetWidth - element1.offsetWidth; // container width-element width
    var position = 0;
    var end = maxDistToTravel;
    var direction = 1;
    
    function frame() { 
     if (position === end) {
       direction *= -1; // reverses current direction
       end = Math.abs(maxDistToTravel - end); 
     }

     position += direction;
     element1.style.left = position + "px";
     element2.style.right = position + "px";

    }
/*    if ( document.keydown()) {
        return;
    }
*/
} 

}




