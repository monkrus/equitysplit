/**
 * Created by krutoy on 3/20/17.
 */
$(document).ready(function() {
    var screenSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    $('#cal_table_id th:nth-child(1)').show();
    $('#cal_table_id td:nth-child(1)').show();
    $('#cal_table_id th:nth-child(2)').show();
    $('#cal_table_id td:nth-child(2)').show();

    if(screenSize >= 1670) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').show();
        $('#cal_table_id td:nth-child(8)').show();
        $('#cal_table_id th:nth-child(9)').show();
        $('#cal_table_id td:nth-child(9)').show();
        $('#cal_table_id th:nth-child(10)').show();
        $('#cal_table_id td:nth-child(10)').show();
        $('#cal_table_id th:nth-child(11)').show();
        $('#cal_table_id td:nth-child(11)').show();
        $('#cal_table_id th:nth-child(12)').show();
        $('#cal_table_id td:nth-child(12)').show();
        $('#cal_table_id th:nth-child(13)').show();
        $('#cal_table_id td:nth-child(13)').show();
        max = 14;
    }
    else if(screenSize < 1670 && screenSize >= 1540) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').show();
        $('#cal_table_id td:nth-child(8)').show();
        $('#cal_table_id th:nth-child(9)').show();
        $('#cal_table_id td:nth-child(9)').show();
        $('#cal_table_id th:nth-child(10)').show();
        $('#cal_table_id td:nth-child(10)').show();
        $('#cal_table_id th:nth-child(11)').show();
        $('#cal_table_id td:nth-child(11)').show();
        $('#cal_table_id th:nth-child(12)').show();
        $('#cal_table_id td:nth-child(12)').show();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 13;
    }
    else if(screenSize < 1540 && screenSize >= 1410) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').show();
        $('#cal_table_id td:nth-child(8)').show();
        $('#cal_table_id th:nth-child(9)').show();
        $('#cal_table_id td:nth-child(9)').show();
        $('#cal_table_id th:nth-child(10)').show();
        $('#cal_table_id td:nth-child(10)').show();
        $('#cal_table_id th:nth-child(11)').show();
        $('#cal_table_id td:nth-child(11)').show();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 12;
    }
    else if(screenSize < 1410 && screenSize >= 1280) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').show();
        $('#cal_table_id td:nth-child(8)').show();
        $('#cal_table_id th:nth-child(9)').show();
        $('#cal_table_id td:nth-child(9)').show();
        $('#cal_table_id th:nth-child(10)').show();
        $('#cal_table_id td:nth-child(10)').show();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 11;
    }
    else if(screenSize < 1280 && screenSize >= 1150) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').show();
        $('#cal_table_id td:nth-child(8)').show();
        $('#cal_table_id th:nth-child(9)').show();
        $('#cal_table_id td:nth-child(9)').show();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 10;
    }
    else if (screenSize < 1150 && screenSize >= 1020) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').show();
        $('#cal_table_id td:nth-child(8)').show();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 9;
    }
    else if (screenSize < 1020 && screenSize >= 890) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').show();
        $('#cal_table_id td:nth-child(7)').show();
        $('#cal_table_id th:nth-child(8)').hide();
        $('#cal_table_id td:nth-child(8)').hide();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 8;
    }
    else if (screenSize < 890 && screenSize >= 760) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').show();
        $('#cal_table_id td:nth-child(6)').show();
        $('#cal_table_id th:nth-child(7)').hide();
        $('#cal_table_id td:nth-child(7)').hide();
        $('#cal_table_id th:nth-child(8)').hide();
        $('#cal_table_id td:nth-child(8)').hide();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 7;
    }
    else if (screenSize < 760 && screenSize >= 630) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').show();
        $('#cal_table_id td:nth-child(5)').show();
        $('#cal_table_id th:nth-child(6)').hide();
        $('#cal_table_id td:nth-child(6)').hide();
        $('#cal_table_id th:nth-child(7)').hide();
        $('#cal_table_id td:nth-child(7)').hide();
        $('#cal_table_id th:nth-child(8)').hide();
        $('#cal_table_id td:nth-child(8)').hide();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 6;
    }
    else if (screenSize < 630 && screenSize >= 500) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').show();
        $('#cal_table_id td:nth-child(4)').show();
        $('#cal_table_id th:nth-child(5)').hide();
        $('#cal_table_id td:nth-child(5)').hide();
        $('#cal_table_id th:nth-child(6)').hide();
        $('#cal_table_id td:nth-child(6)').hide();
        $('#cal_table_id th:nth-child(7)').hide();
        $('#cal_table_id td:nth-child(7)').hide();
        $('#cal_table_id th:nth-child(8)').hide();
        $('#cal_table_id td:nth-child(8)').hide();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 5;
    }
    else if (screenSize < 500 && screenSize >= 370) {
        $('#cal_table_id th:nth-child(3)').show();
        $('#cal_table_id td:nth-child(3)').show();
        $('#cal_table_id th:nth-child(4)').hide();
        $('#cal_table_id td:nth-child(4)').hide();
        $('#cal_table_id th:nth-child(5)').hide();
        $('#cal_table_id td:nth-child(5)').hide();
        $('#cal_table_id th:nth-child(6)').hide();
        $('#cal_table_id td:nth-child(6)').hide();
        $('#cal_table_id th:nth-child(7)').hide();
        $('#cal_table_id td:nth-child(7)').hide();
        $('#cal_table_id th:nth-child(8)').hide();
        $('#cal_table_id td:nth-child(8)').hide();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 4;
    }
    else if (screenSize < 370) {
        $('#cal_table_id th:nth-child(3)').hide();
        $('#cal_table_id td:nth-child(3)').hide();
        $('#cal_table_id th:nth-child(4)').hide();
        $('#cal_table_id td:nth-child(4)').hide();
        $('#cal_table_id th:nth-child(5)').hide();
        $('#cal_table_id td:nth-child(5)').hide();
        $('#cal_table_id th:nth-child(6)').hide();
        $('#cal_table_id td:nth-child(6)').hide();
        $('#cal_table_id th:nth-child(7)').hide();
        $('#cal_table_id td:nth-child(7)').hide();
        $('#cal_table_id th:nth-child(8)').hide();
        $('#cal_table_id td:nth-child(8)').hide();
        $('#cal_table_id th:nth-child(9)').hide();
        $('#cal_table_id td:nth-child(9)').hide();
        $('#cal_table_id th:nth-child(10)').hide();
        $('#cal_table_id td:nth-child(10)').hide();
        $('#cal_table_id th:nth-child(11)').hide();
        $('#cal_table_id td:nth-child(11)').hide();
        $('#cal_table_id th:nth-child(12)').hide();
        $('#cal_table_id td:nth-child(12)').hide();
        $('#cal_table_id th:nth-child(13)').hide();
        $('#cal_table_id td:nth-child(13)').hide();
        max = 3;
    }

    min = 2;
    boundmax = 13 - max;

    $('a[href="#next"]').click(function(){
        if(count <= boundmax) {
            switch(count) {
                case 0:
                    $("#cal_table_id th:nth-child(" + min + ")").hide();
                    $("#cal_table_id td:nth-child(" + min + ")").hide();
                    $("#cal_table_id th:nth-child(" + max + ")").show();
                    $("#cal_table_id td:nth-child(" + max + ")").show();
                    break;
                case 1:
                    $("#cal_table_id th:nth-child(" + (min + 1) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 1) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 1) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 1) + ")").show();
                    break;
                case 2:
                    $("#cal_table_id th:nth-child(" + (min + 2) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 2) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 2) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 2) + ")").show();
                    break;
                case 3:
                    $("#cal_table_id th:nth-child(" + (min + 3) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 3) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 3) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 3) + ")").show();
                    break;
                case 4:
                    $("#cal_table_id th:nth-child(" + (min + 4) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 4) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 4) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 4) + ")").show();
                    break;
                case 5:
                    $("#cal_table_id th:nth-child(" + (min + 5) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 5) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 5) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 5) + ")").show();
                    break;
                case 6:
                    $("#cal_table_id th:nth-child(" + (min + 6) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 6) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 6) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 6) + ")").show();
                    break;
                case 7:
                    $("#cal_table_id th:nth-child(" + (min + 7) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 7) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 7) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 7) + ")").show();
                    break;
                case 8:
                    $("#cal_table_id th:nth-child(" + (min + 8) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 8) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 8) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 8) + ")").show();
                    break;
                case 9:
                    $("#cal_table_id th:nth-child(" + (min + 9) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 9) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 9) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 9) + ")").show();
                    break;
                case 10:
                    $("#cal_table_id th:nth-child(" + (min + 10) + ")").hide();
                    $("#cal_table_id td:nth-child(" + (min + 10) + ")").hide();
                    $("#cal_table_id th:nth-child(" + (max + 10) + ")").show();
                    $("#cal_table_id td:nth-child(" + (max + 10) + ")").show();
                    break;

            }
        }
        if(count <= boundmax) {
            ++count;
        }
    });

    $('a[href="#back"]').click(function(){
        switch(count) {
            case 1:
                $("#cal_table_id th:nth-child(" + min + ")").show();
                $("#cal_table_id td:nth-child(" + min + ")").show();
                $("#cal_table_id th:nth-child(" + max + ")").hide();
                $("#cal_table_id td:nth-child(" + max + ")").hide();
                break;
            case 2:
                $("#cal_table_id th:nth-child(" + (min + 1) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 1) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 1) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 1) + ")").hide();
                break;
            case 3:
                $("#cal_table_id th:nth-child(" + (min + 2) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 2) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 2) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 2) + ")").hide();
                break;
            case 4:
                $("#cal_table_id th:nth-child(" + (min + 3) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 3) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 3) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 3) + ")").hide();
                break;
            case 5:
                $("#cal_table_id th:nth-child(" + (min + 4) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 4) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 4) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 4) + ")").hide();
                break;
            case 6:
                $("#cal_table_id th:nth-child(" + (min + 5) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 5) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 5) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 5) + ")").hide();
                break;
            case 7:
                $("#cal_table_id th:nth-child(" + (min + 6) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 6) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 6) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 6) + ")").hide();
                break;
            case 8:
                $("#cal_table_id th:nth-child(" + (min + 7) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 7) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 7) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 7) + ")").hide();
                break;
            case 9:
                $("#cal_table_id th:nth-child(" + (min + 8) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 8) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 8) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 8) + ")").hide();
                break;
            case 10:
                $("#cal_table_id th:nth-child(" + (min + 9) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 9) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 9) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 9) + ")").hide();
                break;
            case 11:
                $("#cal_table_id th:nth-child(" + (min + 10) + ")").show();
                $("#cal_table_id td:nth-child(" + (min + 10) + ")").show();
                $("#cal_table_id th:nth-child(" + (max + 10) + ")").hide();
                $("#cal_table_id td:nth-child(" + (max + 10) + ")").hide();
                break;
        }
        if(count > 0) {
            --count;
        }
    });

    $('a[href="#add"]').click(function(){
        addRow();
    });

    $('a[href="#remove"]').click(function(){
        removeRow();
    });

    $("#member1_ocs_id").focusout(function() {
        var my_val = $("#member1_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member1_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_ocs_id").focusout(function() {
        var my_val = $("#member2_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member2_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_ocs_id").focusout(function() {
        var my_val = $("#member3_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member3_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_ocs_id").focusout(function() {
        var my_val = $("#member4_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member4_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member5_ocs_id").focusout(function() {
        var my_val = $("#member5_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member5_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member5_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member6_ocs_id").focusout(function() {
        var my_val = $("#member6_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member6_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member6_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member7_ocs_id").focusout(function() {
        var my_val = $("#member7_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member7_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member7_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member8_ocs_id").focusout(function() {
        var my_val = $("#member8_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member8_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member8_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member9_ocs_id").focusout(function() {
        var my_val = $("#member9_ocs_id").val();
        if (isEmpty(my_val)) {
            $("#member9_ocs_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member9_ocs_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member1_hw_id").focusout(function() {
        var my_val = $("#member1_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member1_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_hw_id").focusout(function() {
        var my_val = $("#member2_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member2_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_hw_id").focusout(function() {
        var my_val = $("#member3_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member3_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_hw_id").focusout(function() {
        var my_val = $("#member4_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member4_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member5_hw_id").focusout(function() {
        var my_val = $("#member5_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member5_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member5_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member6_hw_id").focusout(function() {
        var my_val = $("#member6_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member6_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member6_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member7_hw_id").focusout(function() {
        var my_val = $("#member7_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member7_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member7_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member8_hw_id").focusout(function() {
        var my_val = $("#member8_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member8_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member8_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member9_hw_id").focusout(function() {
        var my_val = $("#member9_hw_id").val();
        if (isEmpty(my_val)) {
            $("#member9_hw_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member9_hw_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member1_ic_id").focusout(function() {
        var my_val = $("#member1_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member1_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member1_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member2_ic_id").focusout(function() {
        var my_val = $("#member2_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member2_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member2_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member3_ic_id").focusout(function() {
        var my_val = $("#member3_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member3_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member3_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member4_ic_id").focusout(function() {
        var my_val = $("#member4_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member4_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member4_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member5_ic_id").focusout(function() {
        var my_val = $("#member5_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member5_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member5_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member6_ic_id").focusout(function() {
        var my_val = $("#member6_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member6_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member6_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member7_ic_id").focusout(function() {
        var my_val = $("#member7_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member7_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member7_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member8_ic_id").focusout(function() {
        var my_val = $("#member8_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member8_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member8_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member9_ic_id").focusout(function() {
        var my_val = $("#member9_ic_id").val();
        if (isEmpty(my_val)) {
            $("#member9_ic_id").val(0);
        } else {
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member9_ic_id").val(Number(my_val).toLocaleString('en'));
        }
    });

    $("#member999_vt_id").focusout(function() {
        var my_val = $("#member999_vt_id").val();
        if (isEmpty(my_val)) {
            document.forms[0].member999_vt.value = 0;
        } else {
            /* recalculate member's share (#) */
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member999_vt_id").val(Number(my_val).toLocaleString('en'));
            for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
                var x = document.getElementById('tr_id_' + i);
                if (x.style.display == 'table-row') {
                    switch(i) {
                        case 1:
                            var a = moment(document.forms[0].member1_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member1_vt.value = formatDate(date);
                            break;
                        case 2:
                            var a = moment(document.forms[0].member2_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member2_vt.value = formatDate(date);
                            break;
                        case 3:
                            var a = moment(document.forms[0].member3_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member3_vt.value = formatDate(date);
                            break;
                        case 4:
                            var a = moment(document.forms[0].member4_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member4_vt.value = formatDate(date);
                            break;
                        case 5:
                            var a = moment(document.forms[0].member5_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member5_vt.value = formatDate(date);
                            break;
                        case 6:
                            var a = moment(document.forms[0].member6_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member6_vt.value = formatDate(date);
                            break;
                        case 7:
                            var a = moment(document.forms[0].member7_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member7_vt.value = formatDate(date);
                            break;
                        case 8:
                            var a = moment(document.forms[0].member8_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member8_vt.value = formatDate(date);
                            break;
                        case 9:
                            var a = moment(document.forms[0].member9_djtp.value,'YYYY/MM/DD');
                            var date = a.toDate();
                            date.setDate(date.getDate() + 30 * my_val);
                            document.forms[0].member9_vt.value = formatDate(date);
                            break;
                    }
                }
            }
        }
    });

    $('#member999_vt_id').on('keypress', function(e) {
        if (e.which === 13) {
            $('#member999_vt_id').trigger('focusout');
            $('#member999_vt_id').blur();
        } else {
            if (e.which != 46 && e.which != 8 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        }
    });

    $("#member999_yss_id").focusout(function() {
        var my_val = $("#member999_yss_id").val();
        if (isEmpty(my_val)) {
            document.forms[0].member999_yss.value = 0;
        } else {
            /* recalculate member's share (#) */
            my_val = parseFloat(my_val.replace(/,/g, ''), 10);
            $("#member999_yss_id").val(Number(my_val).toLocaleString('en'));
            for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
                var x = document.getElementById('tr_id_' + i);
                if (x.style.display == 'table-row') {
                    switch(i) {
                        case 1:
                            var temp = (parseFloat(document.forms[0].member1_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member1_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 2:
                            var temp = (parseFloat(document.forms[0].member2_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member2_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 3:
                            var temp = (parseFloat(document.forms[0].member3_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member3_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 4:
                            var temp = (parseFloat(document.forms[0].member4_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member4_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 5:
                            var temp = (parseFloat(document.forms[0].member5_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member5_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 6:
                            var temp = (parseFloat(document.forms[0].member6_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member6_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 7:
                            var temp = (parseFloat(document.forms[0].member7_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member7_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 8:
                            var temp = (parseFloat(document.forms[0].member8_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member8_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                        case 9:
                            var temp = (parseFloat(document.forms[0].member9_ysp.value.replace(/,/g, ''), 10) * my_val) / 100;
                            document.forms[0].member9_yss.value = Number(Number(temp).toFixed(2)).toLocaleString("en");
                            break;
                    }
                }
            }
        }
    });

    $('#member999_yss_id').on('keypress', function(e) {
        if (e.which === 13) {
            $('#member999_yss_id').trigger('focusout');
            $('#member999_yss_id').blur();
        } else {
            if (e.which != 46 && e.which != 8 && (e.which < 48 || e.which > 57)) {
                return false;
            }
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

    $('#member5_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member6_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member7_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member8_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });

    $('#member9_datetimepicker').datepicker({
        format : 'yyyy/mm/dd',
        container : container,
        todayHighlight : true,
        autoclose : true,
    });
});
