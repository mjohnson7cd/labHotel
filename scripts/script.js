$(function(){
    $("#togglePassword").click(function (){
        showPassword();
    });

    $("#pizzaCheckbox").click ( function () {
        thankYouMessage();
        let pizzaCheck = $('#pizzaCheckbox').prop("checked");
        
    });

    function showPassword() {
        var x = document.getElementById("InputPassword");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      function thankYouMessage() {
    
        $("#pizzaOutput").text("Thanks! We love you!");

        let pizzaCheck = $('#pizzaCheckbox').prop("checked");
        pizzaCheck ? $("#pizzaOutput").text("Thanks! We love you!") : $("#pizzaOutput").text("Fine! Be that way! :( ");
        // if (pizzaCheck){
        //   $("#pizzaOutput").text("Thanks! We love you!");
        // } else {
        //   $("#pizzaOutput").text("Fine! Be that way! :( ");
        // }
        // let x = document.getElementById("pizzaTalk");
        // x.innerText = "Thanks! We love you!";
      }

      $(document).on('click', "#ResetForm", function() {
		// Reset the form
		document.getElementById('signup').reset();
	});


});