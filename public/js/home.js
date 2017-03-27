/**
 * Created by equitysplit on 3/26/17.
 */
$(document).ready(function () {
    $('#message_button').click(function(){
        $('#message_button').notify('Message sent!', 'success');
    });
    $('#subscribe_button').click(function(){
        $('#subscribe_button').notify('Subscription successful!', 'success');
    });

    $(".submit").click(function() {
        $(this).closest('form').find("input[type=text], textarea").val("");
        $(this).closest('form').find("input[type=email], textarea").val("");
    });
});