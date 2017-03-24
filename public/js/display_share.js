/**
 * Created by krutoy on 3/20/17.
 */
function inputNumber(evt) {
    var key = window.event ? evt.keyCode : evt.which;
    if (evt.keyCode == 8) {
        return true;
    }
    else if (key == 46) {
        return true;
    }
    else if ( key < 48 || key > 57 ) {
        return false;
    }
    else return true;
}

$(document).ready(function() {
    $("#member1_ocs_id").focusout(function() {
        var my_val = $("#member1_ocs_id").val();
        if(isEmpty(my_val)) {
            $("#member1_ocs_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_ocs_id").focusout(function() {
        var my_val = $("#member2_ocs_id").val();
        if(isEmpty(my_val)) {
            $("#member2_ocs_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_ocs_id").focusout(function() {
        var my_val = $("#member3_ocs_id").val();
        if(isEmpty(my_val)) {
            $("#member3_ocs_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_ocs_id").focusout(function() {
        var my_val = $("#member4_ocs_id").val();
        if(isEmpty(my_val)) {
            $("#member4_ocs_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member1_hw_id").focusout(function() {
        var my_val = $("#member1_hw_id").val();
        if(isEmpty(my_val)) {
            $("#member1_hw_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_hw_id").focusout(function() {
        var my_val = $("#member2_hw_id").val();
        if(isEmpty(my_val)) {
            $("#member2_hw_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_hw_id").focusout(function() {
        var my_val = $("#member3_hw_id").val();
        if(isEmpty(my_val)) {
            $("#member3_hw_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_hw_id").focusout(function() {
        var my_val = $("#member4_hw_id").val();
        if(isEmpty(my_val)) {
            $("#member4_hw_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member1_ic_id").focusout(function() {
        var my_val = $("#member1_ic_id").val();
        if(isEmpty(my_val)) {
            $("#member1_ic_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_ic_id").focusout(function() {
        var my_val = $("#member2_ic_id").val();
        if(isEmpty(my_val)) {
            $("#member2_ic_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_ic_id").focusout(function() {
        var my_val = $("#member3_ic_id").val();
        if(isEmpty(my_val)) {
            $("#member3_ic_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_ic_id").focusout(function() {
        var my_val = $("#member4_ic_id").val();
        if(isEmpty(my_val)) {
            $("#member4_ic_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_ic_id").val(Number(my_val).toLocaleString('en'));
        }

    });

    $("#member1_cc_id").focusout(function() {
        var my_val = $("#member1_cc_id").val();
        if(isEmpty(my_val)) {
            $("#member1_cc_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_cc_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_cc_id").focusout(function() {
        var my_val = $("#member2_cc_id").val();
        if(isEmpty(my_val)) {
            $("#member2_cc_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_cc_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_cc_id").focusout(function() {
        var my_val = $("#member3_cc_id").val();
        if(isEmpty(my_val)) {
            $("#member3_cc_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_cc_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_cc_id").focusout(function() {
        var my_val = $("#member4_cc_id").val();
        if(isEmpty(my_val)) {
            $("#member4_cc_id").val(0);
        }
        else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_cc_id").val(Number(my_val).toLocaleString('en'));
        }
    });
});

$(function() {
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    $('#member1_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member2_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member3_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member4_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });
});