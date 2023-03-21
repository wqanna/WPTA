

function refreshValues(){
    let FGGL = sessionStorage.getItem("FAvSalaryGGL");
    let MGGL = sessionStorage.getItem("MAvSalaryGGL");

    let FAPPL = sessionStorage.getItem("FAvSalaryAPPL");
    let MAPPL = sessionStorage.getItem("MAvSalaryAPPL");

    let FOMC = sessionStorage.getItem("FAvSalaryOMC");
    let MOMC = sessionStorage.getItem("MAvSalaryOMC");

    let FBAC = sessionStorage.getItem("FAvSalaryBAC");
    let MBAC = sessionStorage.getItem("MAvSalaryBAC");

    let FCVS = sessionStorage.getItem("FAvSalaryCVS");
    let MCVS = sessionStorage.getItem("MAvSalaryCVS");

    let FUNH = sessionStorage.getItem("FAvSalaryUNH");
    let MUNH = sessionStorage.getItem("MAvSalaryUNH");

    console.log("Female google: " + FGGL);
    console.log("Male google: " + MGGL);
    console.log("Female apple: " + FAPPL);
    console.log("male apple: " + MAPPL);
    console.log("Female omnicom: " + FOMC);
    console.log("Male omnicom: " + MOMC);
    console.log("Female bank of america: " + FBAC);
    console.log("Male bank of america: " + MBAC);
    console.log("Female CVS: " + FCVS);
    console.log("Male CVS: " + MCVS);
    console.log("Female UnitedHealth group: " + FUNH);
    console.log("Male UnitedHealth group: " + MUNH);

// Google
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartGoogle);

function drawChartGoogle() {
var dataGoogle = google.visualization.arrayToDataTable([
  ['Gender', 'Salary'],
  ['Males', parseInt(MGGL)], 
  ['Gender Minorities (Females & Non-Binary)', parseInt(FGGL)]
]);

var optionsGoogle = {
  title:'Google'
};

var Googlechart = new google.visualization.BarChart(document.getElementById('Google'));
  Googlechart.draw(dataGoogle, optionsGoogle);
}




//Apple

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartApple);


function drawChartApple() {
var dataApple = google.visualization.arrayToDataTable([
  ['Gender', 'Salary'],
  ['Males', parseInt(MAPPL)],
  ['Gender Minorities (Females & Non-Binary)', parseInt(FAPPL)]
]);

var optionsApple = {
  title:'Apple'
};

var Applechart = new google.visualization.BarChart(document.getElementById('Apple'));
  Applechart.draw(dataApple, optionsApple);
}


// Omnicom Group
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartOmnicom);

function drawChartOmnicom() {
var dataOMC = google.visualization.arrayToDataTable([
  ['Gender', 'Salary'],
  ['Males', parseInt(MOMC)],
  ['Gender Minorities (Females & Non-Binary)', parseInt(FOMC)]
]);

var optionsOMC = {
  title:'Omnicom Group'
};

var chartOMC = new google.visualization.BarChart(document.getElementById('Omnicom'));
  chartOMC.draw(dataOMC, optionsOMC);
}

// BAC

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBAC);

function drawChartBAC() {
var dataBAC = google.visualization.arrayToDataTable([
  ['Gender', 'Salary'],
  ['Males', parseInt(MBAC)],
  ['Gender Minorities (Females & Non-Binary)', parseInt(MBAC)]
]);

var optionsBAC = {
  title:'Bank of America'
};

var chartBAC = new google.visualization.BarChart(document.getElementById('BOA'));
  chartBAC.draw(dataBAC, optionsBAC);
}

// CVS
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartCVS);

function drawChartCVS() {
var CVSdata = google.visualization.arrayToDataTable([
  ['Gender', 'Salary'],
  ['Males', parseInt(MCVS)],
  ['Gender Minorities (Females & Non-Binary)', parseInt(FCVS)]
]);

var optionsCVS = {
  title:'CVS Health Corp.'
};

var CVSchart = new google.visualization.BarChart(document.getElementById('CVS'));
  CVSchart.draw(CVSdata, optionsCVS);
}

// United Health Group

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Gender', 'Salary'],
  ['Males', parseInt(MUNH)],
  ['Gender Minorities (Females & Non-Binary)', parseInt(FUNH)]
]);

var options = {
  title:'United Health Group Inc.'
};

var chart = new google.visualization.BarChart(document.getElementById('UHC'));
  chart.draw(data, options);
}

}

