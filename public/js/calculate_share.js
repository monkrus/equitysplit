/**
 * Created by krutoy on 3/20/17.
 */


function resizeChart() {
    document.getElementById("pieChartContainer").innerHTML = "";
    document.getElementById("barChartContainer").innerHTML = "";
    var x = document.getElementById('graph_id');
    if (x.style.display != 'none') {
        var member_name1 = document.forms[0].member1_name.value;
        if(isEmpty(member_name1)) {
            member_name1 = "Member A";
        }
        var member_name2 = document.forms[0].member2_name.value;
        if(isEmpty(member_name2)) {
            member_name2 = "Member B";
        }
        var member_name3 = document.forms[0].member3_name.value;
        if(isEmpty(member_name3)) {
            member_name3 = "Member C";
        }
        var member_name4 = document.forms[0].member4_name.value;
        if(isEmpty(member_name4)) {
            member_name4 = "Member D";
        }
        showPieGraph(member_name1, member_name2, member_name3, member_name4, parseFloat(document.forms[0].member1_ysc.value), parseFloat(document.forms[0].member2_ysc.value),
            parseFloat(document.forms[0].member3_ysc.value),parseFloat(document.forms[0].member4_ysc.value));
        showBarGraph(member_name1, member_name2, member_name3, member_name4, parseFloat(document.forms[0].member1_ysc.value), parseFloat(document.forms[0].member2_ysc.value),
            parseFloat(document.forms[0].member3_ysc.value),parseFloat(document.forms[0].member4_ysc.value));
    }
}



function loadBody() {
    document.getElementById("graph_id").style.display = 'none';
    google.charts.load('current', {'packages':['corechart']});
}

function resetData(form) {
    form.member1_name.value = "";
    form.member2_name.value = "";
    form.member3_name.value = "";
    form.member4_name.value = "";
    form.member1_ocs.value = "100,000";
    form.member2_ocs.value = "100,000";
    form.member3_ocs.value = "100,000";
    form.member4_ocs.value = "100,000";
    form.member1_hw.value = "30";
    form.member2_hw.value = "40";
    form.member3_hw.value = "50";
    form.member4_hw.value = "60";
    form.member1_ic.value = "0";
    form.member2_ic.value = "0";
    form.member3_ic.value = "0";
    form.member4_ic.value = "0";
    form.member1_cc.value = "500";
    form.member2_cc.value = "600";
    form.member3_cc.value = "750";
    form.member4_cc.value = "1,000";
    form.member1_djtp.value = "";
    form.member2_djtp.value = "";
    form.member3_djtp.value = "";
    form.member4_djtp.value = "";
    form.member1_ysc.value = "";
    form.member2_ysc.value = "";
    form.member3_ysc.value = "";
    form.member4_ysc.value = "";
    form.member1_ysp.value = "";
    form.member2_ysp.value = "";
    form.member3_ysp.value = "";
    form.member4_ysp.value = "";

    var x = document.getElementById('graph_id');
    if (x.style.display != 'none') {
        x.style.display = 'none';
    }
}
function isEmpty(str) {
    return (!str || 0 === str.length);
}
function dataValid(form) {
    if(isEmpty(form.member1_ocs.value) || parseFloat(form.member1_ocs.value) < 0) {
        return false;
    }
    if(isEmpty(form.member2_ocs.value) || parseFloat(form.member2_ocs.value) < 0) {
        return false;
    }
    if(isEmpty(form.member3_ocs.value) || parseFloat(form.member3_ocs.value) < 0) {
        return false;
    }
    if(isEmpty(form.member4_ocs.value) || parseFloat(form.member4_ocs.value) < 0) {
        return false;
    }

    if(isEmpty(form.member1_hw.value) || parseFloat(form.member1_hw.value) < 0) {
        return false;
    }
    if(isEmpty(form.member2_hw.value) || parseFloat(form.member2_hw.value) < 0) {
        return false;
    }
    if(isEmpty(form.member3_hw.value) || parseFloat(form.member3_hw.value) < 0) {
        return false;
    }
    if(isEmpty(form.member4_hw.value) || parseFloat(form.member4_hw.value) < 0) {
        return false;
    }

    if(isEmpty(form.member1_ic.value) || parseFloat(form.member1_ic.value) < 0) {
        return false;
    }
    if(isEmpty(form.member2_ic.value) || parseFloat(form.member2_ic.value) < 0) {
        return false;
    }
    if(isEmpty(form.member3_ic.value) || parseFloat(form.member3_ic.value) < 0) {
        return false;
    }
    if(isEmpty(form.member4_ic.value) || parseFloat(form.member4_ic.value) < 0) {
        return false;
    }

    if(isEmpty(form.member1_cc.value) || parseFloat(form.member1_cc.value) < 0) {
        return false;
    }
    if(isEmpty(form.member2_cc.value) || parseFloat(form.member2_cc.value) < 0) {
        return false;
    }
    if(isEmpty(form.member3_cc.value) || parseFloat(form.member3_cc.value) < 0) {
        return false;
    }
    if(isEmpty(form.member4_cc.value) || parseFloat(form.member4_cc.value) < 0) {
        return false;
    }

    return true;
}
function calculation(form) {
    if(dataValid(form) == false)  {
        return;
    }

    /* member 1 */
    var contributionCase = calculateContributionCash(form.member1_ic.value, form.member1_cc.value);
    var opportunityCostPerHour = calculateOpportunityCostPerHour(form.member1_ocs.value);
    var theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member1_hw.value);
    var shareCash = calculateShareCash(contributionCase, theoreticalContribution);
    form.member1_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");

    /* member 2 */
    contributionCase = calculateContributionCash(form.member2_ic.value, form.member2_cc.value);
    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member2_ocs.value);
    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member2_hw.value);
    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
    form.member2_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");

    /* member 3 */
    contributionCase = calculateContributionCash(form.member3_ic.value, form.member3_cc.value);
    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member3_ocs.value);
    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member3_hw.value);
    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
    form.member3_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");

    /* member 4 */
    contributionCase = calculateContributionCash(form.member4_ic.value, form.member4_cc.value);
    opportunityCostPerHour = calculateOpportunityCostPerHour(form.member4_ocs.value);
    theoreticalContribution = calculateTheoreticalContribution(opportunityCostPerHour, form.member4_hw.value);
    shareCash = calculateShareCash(contributionCase, theoreticalContribution);
    form.member4_ysc.value = Number(Number(shareCash).toFixed(2)).toLocaleString("en");

    var total = parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10)
        + parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10)
        + parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10)
        + parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10);

    form.member1_ysp.value = Number((parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
    form.member2_ysp.value = Number((parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
    form.member3_ysp.value = Number((parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);
    form.member4_ysp.value = Number((parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10) * 100) / total).toFixed(2);

    form.totalshare.value = Number(total).toFixed(2);

    document.getElementById("graph_id").style.display = 'block';

    var member_name1 = form.member1_name.value;
    if(isEmpty(member_name1)) {
        member_name1 = "Member A";
    }
    var member_name2 = form.member2_name.value;
    if(isEmpty(member_name2)) {
        member_name2 = "Member B";
    }
    var member_name3 = form.member3_name.value;
    if(isEmpty(member_name3)) {
        member_name3 = "Member C";
    }
    var member_name4 = form.member4_name.value;
    if(isEmpty(member_name4)) {
        member_name4 = "Member D";
    }
    showPieGraph(member_name1, member_name2, member_name3, member_name4,
        parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10), parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10),
        parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10),parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10));
    showBarGraph(member_name1, member_name2, member_name3, member_name4,
        parseFloat(form.member1_ysc.value.replace(/,/g, ''), 10), parseFloat(form.member2_ysc.value.replace(/,/g, ''), 10),
        parseFloat(form.member3_ysc.value.replace(/,/g, ''), 10),parseFloat(form.member4_ysc.value.replace(/,/g, ''), 10));
}

function calculateContributionCash(investedCash, contributedCash) {
    var num1 = parseFloat(investedCash.replace(/,/g, ''), 10);
    var num2 = parseFloat(contributedCash.replace(/,/g, ''), 10);
    return (num1 + num2);
}

function calculateOpportunityCostPerHour(opportunityCostPerSalary) {
    var num = parseFloat(opportunityCostPerSalary.replace(/,/g, ''), 10);
    return (num/52.1429)/37.5;
}

function calculateTheoreticalContribution(opportunityCostPerHour, hourWorked) {
    var num = parseFloat(hourWorked.replace(/,/g, ''), 10);
    return opportunityCostPerHour * num;
}

function calculateShareCash(contributionCash, theoreticalContribution) {
    return (contributionCash * 4) + theoreticalContribution;
}

function showPieGraph(member_name1, member_name2, member_name3, member_name4, shareCash1, shareCash2, shareCash3, shareCash4) {
    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Staff', 'Share'],
            [member_name1, shareCash1],
            [member_name2, shareCash2],
            [member_name3, shareCash3],
            [member_name4, shareCash4]
        ]);

        var options = {
            title: ''
        };

        var chart = new google.visualization.PieChart(document.getElementById('pieChartContainer'));
        chart.draw(data, options);
    }
}

function showBarGraph(member_name1, member_name2, member_name3, member_name4, shareCash1, shareCash2, shareCash3, shareCash4) {
    //google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Staff', 'Value', { role: 'style' }],
            [member_name1, shareCash1, 'color: #3266CC'],
            [member_name2, shareCash2, 'color: #DC3812'],
            [member_name3, shareCash3, 'color: #FE9900'],
            [member_name4, shareCash4, 'color: #109717']
        ]);

        var options = {
            title: ''
        };

        var chart = new google.visualization.BarChart(document.getElementById('barChartContainer'));
        chart.draw(data, options);
    }
}
