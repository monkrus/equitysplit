/**
 * Created by equitysplit on 3/25/17.
 */
var count = 0;
var min = 0;
var max = 0;
var boundmax = 0;
function resizeChart() {
    document.getElementById("pieChartContainer").innerHTML = "";
    document.getElementById("barChartContainer").innerHTML = "";
    var x = document.getElementById('graph_id');
    if (x.style.display != 'none') {
        showPieGraph(document.forms[0]);
        showBarGraph(document.forms[0]);
    }
    var screenSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(screenSize >= 1920) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 13;
    }
    else if(screenSize < 1920 && screenSize >= 1760) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 12;
    }
    else if(screenSize < 1760 && screenSize >= 1600) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 11;
    }
    else if(screenSize < 1600 && screenSize >= 1440) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 10;
    }
    else if(screenSize < 1440 && screenSize >= 1280) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 9;
    }
    else if(screenSize < 1280 && screenSize >= 1120) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 8;
    }
    else if (screenSize < 1120 && screenSize >= 960) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 7;
    }
    else if (screenSize < 960 && screenSize >= 700) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 6;
    }
    else if (screenSize < 700 && screenSize >= 540) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 5;
    }
    else if (screenSize < 540 && screenSize >= 380) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 4;
    }
    else if (screenSize < 380) {
        $('#cal_table_id th:nth-child(2)').show();
        $('#cal_table_id td:nth-child(2)').show();
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
        $('#cal_table_id th:nth-child(14)').hide();
        $('#cal_table_id td:nth-child(14)').hide();
        max = 3;
    }
    count = 0;
    min = 2;
    boundmax = 14 - max;
}
function loadBody() {
    document.getElementById("graph_id").style.display = 'none';
    document.getElementById("tr_id_1").style.display = 'table-row';
    document.getElementById("tr_id_2").style.display = 'none';
    document.getElementById("tr_id_3").style.display = 'none';
    document.getElementById("tr_id_4").style.display = 'none';
    document.getElementById("tr_id_5").style.display = 'none';
    document.getElementById("tr_id_6").style.display = 'none';
    document.getElementById("tr_id_7").style.display = 'none';
    document.getElementById("tr_id_8").style.display = 'none';
    document.getElementById("tr_id_9").style.display = 'none';
    document.getElementById("tr_id_999").style.display = 'table-row';
}
function addRow() {
    for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
        var x = document.getElementById('tr_id_' + i);
        if (x.style.display == 'none') {
            x.style.display = 'table-row';
            break;
        }
    }
}
function removeRow() {
    for (i = document.getElementById("cal_table_id").rows.length -2 ; i >= 2; i--) {
        var x = document.getElementById('tr_id_' + i);
        if (x.style.display == 'table-row') {
            x.style.display = 'none';
            break;
        }
    }
}
function resetData(form) {
    form.reset();
    var x = document.getElementById('graph_id');
    if (x.style.display != 'none') {
        x.style.display = 'none';
    }
    document.getElementById("member999_yss_id").disabled = true;
}
function isEmpty(str) {
    return (!str || 0 === str.length);
}
function diffCurrentDay(b) {
    var a = moment(new Date(),'YYYY/MM/DD');
    var b = moment(b,'YYYY/MM/DD');
    return a.diff(b, 'days');
}
function calculateIndividualEfficiency(wh, dotp) {
    var num1 = parseFloat(wh.replace(/,/g, ''), 10);
    var num2 = parseFloat(dotp.replace(/,/g, ''), 10);
    return (num1/(num2*(5/7)*7.5)) * 100;
}
function calculation(form) {
    var activeRow = 0;
    var total = 0;
    var total_non_cash = 0;
    var total_contributed_cash = 0;
    var total_invested_cash = 0;
    var total_day_on_project = 0;
    var total_hour_work = 0;
    var total_individual_efficiency = 0;
    var total_salary = 0;
    var total_salary_per_hour = 0;
    var contributionCase;
    var opportunityCostPerHour;
    var theoreticalContribution;
    var shareCash;
    for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
        var x = document.getElementById('tr_id_' + i);
        if (x.style.display == 'table-row') {
            ++activeRow;
            switch(i) {
                case 1:
                    /* member 1 */
                    contributionCase = calculateContributionCash(form.member1_ic.value, form.member1_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member1_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member1_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member1_ocs.value);
                    form.member1_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member1_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member1_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member1_dotp.value = Number(diffCurrentDay(form.member1_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member1_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member1_hw.value, form.member1_dotp.value);
                    form.member1_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member1_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member1_hw.value);
                    total_hour_work += parseFloat(form.member1_hw.value.replace(/,/g, ''), 10);
                    form.member1_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member1_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 2:
                    /* member 2 */
                    contributionCase = calculateContributionCash(form.member2_ic.value, form.member2_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member2_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member2_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member2_ocs.value);
                    form.member2_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member2_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member2_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member2_dotp.value = Number(diffCurrentDay(form.member2_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member2_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member2_hw.value, form.member2_dotp.value);
                    form.member2_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member2_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member2_hw.value);
                    total_hour_work += parseFloat(form.member2_hw.value.replace(/,/g, ''), 10);
                    form.member2_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member2_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 3:
                    /* member 3 */
                    contributionCase = calculateContributionCash(form.member3_ic.value, form.member3_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member3_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member3_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member3_ocs.value);
                    form.member3_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member3_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member3_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member3_dotp.value = Number(diffCurrentDay(form.member3_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member3_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member3_hw.value, form.member3_dotp.value);
                    form.member3_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member3_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member3_hw.value);
                    total_hour_work += parseFloat(form.member3_hw.value.replace(/,/g, ''), 10);
                    form.member3_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member3_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 4:
                    /* member 4 */
                    contributionCase = calculateContributionCash(form.member4_ic.value, form.member4_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member4_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member4_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member4_ocs.value);
                    form.member4_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member4_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member4_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member4_dotp.value = Number(diffCurrentDay(form.member4_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member4_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member4_hw.value, form.member4_dotp.value);
                    form.member4_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member4_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member4_hw.value);
                    total_hour_work += parseFloat(form.member4_hw.value.replace(/,/g, ''), 10);
                    form.member4_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member4_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 5:
                    /* member 5 */
                    contributionCase = calculateContributionCash(form.member5_ic.value, form.member5_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member5_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member5_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member5_ocs.value);
                    form.member5_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member5_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member5_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member5_dotp.value = Number(diffCurrentDay(form.member5_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member5_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member5_hw.value, form.member5_dotp.value);
                    form.member5_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member5_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member5_hw.value);
                    total_hour_work += parseFloat(form.member5_hw.value.replace(/,/g, ''), 10);
                    form.member5_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member5_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 6:
                    /* member 6 */
                    contributionCase = calculateContributionCash(form.member6_ic.value, form.member6_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member6_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member6_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member6_ocs.value);
                    form.member6_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member6_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member6_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member6_dotp.value = Number(diffCurrentDay(form.member6_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member6_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member6_hw.value, form.member6_dotp.value);
                    form.member6_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member6_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member6_hw.value);
                    total_hour_work += parseFloat(form.member6_hw.value.replace(/,/g, ''), 10);
                    form.member6_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member6_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 7:
                    /* member 7 */
                    contributionCase = calculateContributionCash(form.member7_ic.value, form.member7_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member7_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member7_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member7_ocs.value);
                    form.member7_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member7_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member7_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member7_dotp.value = Number(diffCurrentDay(form.member7_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member7_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member7_hw.value, form.member7_dotp.value);
                    form.member7_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member7_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member7_hw.value);
                    total_hour_work += parseFloat(form.member7_hw.value.replace(/,/g, ''), 10);
                    form.member7_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member7_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 8:
                    /* member 8 */
                    contributionCase = calculateContributionCash(form.member8_ic.value, form.member8_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member8_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member8_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member8_ocs.value);
                    form.member8_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member8_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member8_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member8_dotp.value = Number(diffCurrentDay(form.member8_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member8_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member8_hw.value, form.member8_dotp.value);
                    form.member8_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member8_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member8_hw.value);
                    total_hour_work += parseFloat(form.member8_hw.value.replace(/,/g, ''), 10);
                    form.member8_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member8_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
                case 9:
                    /* member 9 */
                    contributionCase = calculateContributionCash(form.member9_ic.value, form.member9_cc.value);
                    total_contributed_cash = total_contributed_cash + parseFloat(form.member9_cc.value.replace(/,/g, ''), 10);
                    total_invested_cash = total_invested_cash + parseFloat(form.member9_ic.value.replace(/,/g, ''), 10);
                    /* salary per hour */
                    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member9_ocs.value);
                    form.member9_sph.value = Number(Number(opportunityCostPerHour).toFixed(2)).toLocaleString("en");
                    total_salary += parseFloat(form.member9_ocs.value.replace(/,/g, ''), 10);
                    total_salary_per_hour += parseFloat(form.member9_sph.value.replace(/,/g, ''), 10);
                    /* days on the project */
                    form.member9_dotp.value = Number(diffCurrentDay(form.member9_djtp.value)).toLocaleString("en");
                    total_day_on_project += parseFloat(form.member9_dotp.value.replace(/,/g, ''), 10);
                    /* individual efficiency */
                    var ie = calculateIndividualEfficiency(form.member9_hw.value, form.member9_dotp.value);
                    form.member9_ie.value = Number(Number(ie).toFixed(2)).toLocaleString("en");
                    total_individual_efficiency += parseFloat(form.member9_ie.value.replace(/,/g, ''), 10);
                    /* non cash */
                    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member9_hw.value);
                    total_hour_work += parseFloat(form.member9_hw.value.replace(/,/g, ''), 10);
                    form.member9_nc.value = Number(Number(theoreticalContribution).toFixed(2)).toLocaleString("en");
                    /* share case $ */
                    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
                    form.member9_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");
                    break;
            } /* switch */
            total = total + parseFloat(Number(shareCash).toFixed(2), 10);
            total_non_cash = total_non_cash + parseFloat(Number(theoreticalContribution).toFixed(2), 10);
        } /* if */
    } /* for */
    for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
        var x = document.getElementById('tr_id_' + i);
        if (x.style.display == 'table-row') {
            switch(i) {
                case 1:
                    form.member1_ysp.value = Number((parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 2:
                    form.member2_ysp.value = Number((parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 3:
                    form.member3_ysp.value = Number((parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 4:
                    form.member4_ysp.value = Number((parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 5:
                    form.member5_ysp.value = Number((parseFloat(form.member5_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 6:
                    form.member6_ysp.value = Number((parseFloat(form.member6_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 7:
                    form.member7_ysp.value = Number((parseFloat(form.member7_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 8:
                    form.member8_ysp.value = Number((parseFloat(form.member8_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
                case 9:
                    form.member9_ysp.value = Number((parseFloat(form.member9_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
                    break;
            }
        }
    }
    form.member1_yss.value = "";
    form.member2_yss.value = "";
    form.member3_yss.value = "";
    form.member4_yss.value = "";
    form.member5_yss.value = "";
    form.member6_yss.value = "";
    form.member7_yss.value = "";
    form.member8_yss.value = "";
    form.member9_yss.value = "";
    form.member999_yss.value = "";
    /* calculate total row */
    form.member999_ysc.value = Number(Number(total).toFixed(2)).toLocaleString("en");
    document.getElementById("member999_yss_id").disabled = false;
    form.member999_ysp.value = "100.00";
    form.member999_nc.value = Number(Number(total_non_cash).toFixed(2)).toLocaleString("en");
    form.member999_cc.value = Number(Number(total_contributed_cash).toFixed(2)).toLocaleString("en");
    form.member999_ic.value = Number(Number(total_invested_cash).toFixed(2)).toLocaleString("en");
    form.member999_dotp.value = Number(Number(total_day_on_project).toFixed(2)).toLocaleString("en");
    form.member999_hw.value = Number(Number(total_hour_work).toFixed(2)).toLocaleString("en");
    form.member999_ie.value = Number(Number(total_individual_efficiency).toFixed(2)).toLocaleString("en");
    form.member999_ocs.value = Number(Number(total_salary).toFixed(2)).toLocaleString("en");
    form.member999_sph.value = Number(Number(total_salary_per_hour).toFixed(2)).toLocaleString("en");
    document.getElementById("graph_id").style.display = 'block';
    showPieGraph(form);
    showBarGraph(form);
}
function calculateContributionCash(investedCash, contributedCash) {
    var num1 = parseFloat(investedCash.replace(/,/g, ''), 10);
    var num2 = parseFloat(contributedCash.replace(/,/g, ''), 10);
    return (num1 + num2);
}
function calculateOpportunityCostPerHour(opportunityCostPerSalary) {
    var num = parseFloat(opportunityCostPerSalary.replace(/,/g, ''), 10);
    return (num / 52.1429) / 37.5;
}
function calculateTheoreticalContribution(opportunityCostPerHour, hourWorked) {
    var num = parseFloat(hourWorked.replace(/,/g, ''), 10);
    return opportunityCostPerHour * num;
}
function calculateShareCash(contributionCash, theoreticalContribution) {
    return (contributionCash * 4) + theoreticalContribution;
}
function showPieGraph(form) {
    google.charts.load('current', {'packages' : ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Staff');
        dataTable.addColumn('number', 'Share');
        for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
            var x = document.getElementById('tr_id_' + i);
            if (x.style.display == 'table-row') {
                switch(i) {
                    case 1:
                        var member_name1 = form.member1_name.value;
                        if (isEmpty(member_name1)) {
                            member_name1 = "Member 1";
                        }
                        var temp = [member_name1, parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 2:
                        var member_name2 = form.member2_name.value;
                        if (isEmpty(member_name2)) {
                            member_name2 = "Member 2";
                        }
                        var temp = [member_name2, parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 3:
                        var member_name3 = form.member3_name.value;
                        if (isEmpty(member_name3)) {
                            member_name3 = "Member 3";
                        }
                        var temp = [member_name3, parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 4:
                        var member_name4 = form.member4_name.value;
                        if (isEmpty(member_name4)) {
                            member_name4 = "Member 4";
                        }
                        var temp = [member_name4, parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 5:
                        var member_name5 = form.member5_name.value;
                        if (isEmpty(member_name5)) {
                            member_name5 = "Member 5";
                        }
                        var temp = [member_name5, parseFloat(form.member5_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 6:
                        var member_name6 = form.member6_name.value;
                        if (isEmpty(member_name6)) {
                            member_name6 = "Member 6";
                        }
                        var temp = [member_name6, parseFloat(form.member6_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 7:
                        var member_name7 = form.member7_name.value;
                        if (isEmpty(member_name7)) {
                            member_name7 = "Member 7";
                        }
                        var temp = [member_name7, parseFloat(form.member7_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 8:
                        var member_name8 = form.member8_name.value;
                        if (isEmpty(member_name8)) {
                            member_name8 = "Member 8";
                        }
                        var temp = [member_name8, parseFloat(form.member8_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                    case 9:
                        var member_name9 = form.member9_name.value;
                        if (isEmpty(member_name9)) {
                            member_name9 = "Member 9";
                        }
                        var temp = [member_name9, parseFloat(form.member9_ysc.value.replace(/,/g, ''), 10)];
                        dataTable.addRow(temp);
                        break;
                }
            }
        }
        var options = {
            title : ''
        };
        var chart = new google.visualization.PieChart(document.getElementById('pieChartContainer'));
        chart.draw(dataTable, options);
    }
}
function showBarGraph(form) {
    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Staff');
        dataTable.addColumn('number', 'Share');
        dataTable.addColumn({type: 'string', role: 'style'});
        for (i = 1; i < document.getElementById("cal_table_id").rows.length - 1; i++) {
            var x = document.getElementById('tr_id_' + i);
            if (x.style.display == 'table-row') {
                switch(i) {
                    case 1:
                        var member_name1 = form.member1_name.value;
                        if (isEmpty(member_name1)) {
                            member_name1 = "Member 1";
                        }
                        var temp = [member_name1, parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10), 'color: #3266CC'];
                        dataTable.addRow(temp);
                        break;
                    case 2:
                        var member_name2 = form.member2_name.value;
                        if (isEmpty(member_name2)) {
                            member_name2 = "Member 2";
                        }
                        var temp = [member_name2, parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10), 'color: #DC3812'];
                        dataTable.addRow(temp);
                        break;
                    case 3:
                        var member_name3 = form.member3_name.value;
                        if (isEmpty(member_name3)) {
                            member_name3 = "Member 3";
                        }
                        var temp = [member_name3, parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10), 'color: #FE9900'];
                        dataTable.addRow(temp);
                        break;
                    case 4:
                        var member_name4 = form.member4_name.value;
                        if (isEmpty(member_name4)) {
                            member_name4 = "Member 4";
                        }
                        var temp = [member_name4, parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10), 'color: #109717'];
                        dataTable.addRow(temp);
                        break;
                    case 5:
                        var member_name5 = form.member5_name.value;
                        if (isEmpty(member_name5)) {
                            member_name5 = "Member 5";
                        }
                        var temp = [member_name5, parseFloat(form.member5_ysc.value.replace(/,/g, ''), 10), 'color: #990099'];
                        dataTable.addRow(temp);
                        break;
                    case 6:
                        var member_name6 = form.member6_name.value;
                        if (isEmpty(member_name6)) {
                            member_name6 = "Member 6";
                        }
                        var temp = [member_name6, parseFloat(form.member6_ysc.value.replace(/,/g, ''), 10), 'color: #0099C5'];
                        dataTable.addRow(temp);
                        break;
                    case 7:
                        var member_name7 = form.member7_name.value;
                        if (isEmpty(member_name7)) {
                            member_name7 = "Member 7";
                        }
                        var temp = [member_name7, parseFloat(form.member7_ysc.value.replace(/,/g, ''), 10), 'color: #DD4578'];
                        dataTable.addRow(temp);
                        break;
                    case 8:
                        var member_name8 = form.member8_name.value;
                        if (isEmpty(member_name8)) {
                            member_name8 = "Member 8";
                        }
                        var temp = [member_name8, parseFloat(form.member8_ysc.value.replace(/,/g, ''), 10), 'color: #66AA00'];
                        dataTable.addRow(temp);
                        break;
                    case 9:
                        var member_name9 = form.member9_name.value;
                        if (isEmpty(member_name9)) {
                            member_name9 = "Member 9";
                        }
                        var temp = [member_name9, parseFloat(form.member9_ysc.value.replace(/,/g, ''), 10), 'color: #B82D30'];
                        dataTable.addRow(temp);
                        break;
                }
            }
        }
        var options = {
            title : ''
        };
        var chart = new google.visualization.BarChart(document.getElementById('barChartContainer'));
        chart.draw(dataTable, options);
    }
}
function inputNumber(evt) {
    var key = window.event ? evt.keyCode : evt.which;
    if (evt.keyCode == 8) {
        return true;
    } else if (key == 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else
        return true;
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('/');
}