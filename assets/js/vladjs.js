//form submit
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
        $('#name, #email, #phone, #website, #message').val('');
    }
});



function submitForm(){
    console.log("i am about to grab variables");
    // Initiate Variables With Form Content
    var name = $("#name").val();
    console.log("i got a name");
    var email = $("#email").val();
    console.log("i got an email");
    var phone = $("#phone").val();
    console.log("i got a phone");
    var website = $("#website").val();
    console.log("i got a site");
    var message = $("#message").val();
    
    console.log("i have received ALL variables");

    $.ajax({
        type: "POST",
        url: "assets/mail/process.php",
        data: "name=" + name + "&email=" + email + "&phone" + phone + "&website" + website + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        },
        error : function(text){
          console.log('i tried');
        }
    });
}

// function formSuccess(){
//     $( "#msgSubmit" ).toggleClass( "invisible" );
// }
