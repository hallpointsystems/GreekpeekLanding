<script>

$(function() {
    

// Set up an event listener for the contact form.
$("#canvasF").submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO

    var element = document.getElementById('email').value;
    var forms = { "Email": element}
    $.ajax({
            type: "post",
            url: "https://greekpeekapi.azurewebsites.net/api/Prerollment/EnrollForUpdate",
            data: JSON.stringify(forms),
            contentType: "application/json",
            success: function(responseData, textStatus, jqXHR) {
              $('#myModal').modal('show');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
})

});
  
  </script>