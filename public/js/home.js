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
    $(".option-content").hide();
    $(".glyphicon-chevron-up").hide();
    $(".option-heading").click(function(){
        $(this).next(".option-content").slideToggle(500);
        $(this).find(".glyphicon-chevron-up, .glyphicon-chevron-down").toggle();
    });
});