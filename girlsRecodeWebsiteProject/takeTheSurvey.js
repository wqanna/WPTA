var subjectObject = {
    "Technology": {
      "Google": ["Data Analyst", "Software Engineer", "Operations Manager", "Data Scientist", "Cybersecurity Analysist", "Customer Support", "Tech Support", "IT Coordinator", "UX/UI Designer"],
      "Apple": ["Data Analyst", "Software Engineer", "Operations Manager", "Data Scientist", "Cybersecurity Analysist", "Customer Support", "Tech Support", "IT Coordinator", "UX/UI Designer"],

    },
    "Buisness/Finance": {
      "Omnicom Group": ["Marketing", "Advertisment", "Sales", "Finance Manager", "Accountant", "Tax associate", "Data analyst", "Investment Banker", "Insurance advisor"],
      "Bank of America": ["Marketing", "Advertisment", "Sales", "Finance Manager", "Accountant", "Tax associate", "Data analyst", "Investment Banker", "Insurance advisor"]
      
    },
    "Healthcare": {
      "CVS Health Corp.": ["Pharmacist", "Nurse", "Doctor", "Therapist", "Anesthesiologist", "Surgeon", "Pharmacy technician", "Nutritionist"],
      "UnitedHealth Group Inc.": ["Pharmacist", "Nurse", "Doctor", "Therapist", "Anesthesiologist", "Surgeon", "Pharmacy technician", "Nutritionist"]
    }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }

  const emailList = [];


  const FsalaryGGL = [];
  const MsalaryGGL = [];

  const FsalaryAPPL = [];
  const MsalaryAPPL = [];

  const FsalaryOMC = [];
  const MsalaryOMC = [];

  const FsalaryBAC = [];
  const MsalaryBAC = [];

  const FsalaryCVS = [];
  const MsalaryCVS = [];

  const FsalaryUNH = [];
  const MsalaryUNH = [];

  

function storeValues(){
  // COLLECTING THE DATA
  let email = document.getElementById("email").value;
  let salaryInput = document.getElementById("salary").value;
  let company = document.getElementById("topic").value;

  let salary = 25000;
  
  if(salaryInput=="25,000 - 40,000"){
    salary = 32500
  }
  else if(salaryInput=="40,000 - 60,000"){
    salary = 50000
  }
  else if(salaryInput=="60,000 - 80,000"){
    salary = 70000
  }
  else if(salaryInput=="80,000 - 100,000"){
    salary = 90000
  }
  else if(salaryInput==" > 100,000"){
    salary = 120000
  }

  //add values to the list if email is not duped
  if(!emailList.includes(email)){

    if (document.getElementById("FemaleBubble").checked || document.getElementById("NBBubble").checked){

      if(company=="Google"){
        FsalaryGGL.push(salary);
        sessionStorage.setItem("firstResponseFGGL", "False");
        sessionStorage.setItem("FAvSalaryGGL", JSON.stringify(FsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryGGL.length));
      }
      else if(company=="Apple"){
        FsalaryAPPL.push(salary);
        sessionStorage.setItem("firstResponseFAPPL", "False");
        sessionStorage.setItem("FAvSalaryAPPL", JSON.stringify(FsalaryAPPL.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryAPPL.length));
      }
      else if(company=="Omnicom Group"){
        FsalaryOMC.push(salary);
        sessionStorage.setItem("firstResponseFOMC", "False");
        sessionStorage.setItem("FAvSalaryOMC", JSON.stringify(FsalaryOMC.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryOMC.length));
      }
      else if(company=="Bank of America"){
        FsalaryBAC.push(salary);
        sessionStorage.setItem("firstResponseFBAC", "False");
        sessionStorage.setItem("FAvSalaryBAC", JSON.stringify(FsalaryBAC.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryBAC.length));
      }
      else if(company=="CVS Health Corp."){
        FsalaryCVS.push(salary);
        sessionStorage.setItem("firstResponseFCVS", "False");
        sessionStorage.setItem("FAvSalaryCVS", JSON.stringify(FsalaryCVS.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryCVS.length));
      }
      else if(company=="UnitedHealth Group Inc."){
        FsalaryUNH.push(salary);
        sessionStorage.setItem("firstResponseFUNH", "False");
        sessionStorage.setItem("FAvSalaryUNH", JSON.stringify(FsalaryUNH.reduce((partialSum, a) => partialSum + a, 0))/(FsalaryUNH.length));
      }
    }
    else if (document.getElementById("MaleBubble").checked){

      if(company=="Google"){
        MsalaryGGL.push(salary);
        sessionStorage.setItem("firstResponseMGGL", "False");
        sessionStorage.setItem("MAvSalaryGGL", JSON.stringify(MsalaryGGL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryGGL.length));
      }
      else if(company=="Apple"){
        MsalaryAPPL.push(salary);
        sessionStorage.setItem("firstResponseMAPPL", "False");
        sessionStorage.setItem("MAvSalaryAPPL", JSON.stringify(MsalaryAPPL.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryAPPL.length));
      }
      else if(company=="Omnicom Group"){
        MsalaryOMC.push(salary);
        sessionStorage.setItem("firstResponseMOMC", "False");
        sessionStorage.setItem("MAvSalaryOMC", JSON.stringify(MsalaryOMC.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryOMC.length));
      }
      else if(company=="Bank of America"){
        MsalaryBAC.push(salary);
        sessionStorage.setItem("firstResponseMBAC", "False");
        sessionStorage.setItem("MAvSalaryBAC", JSON.stringify(MsalaryBAC.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryBAC.length));
      }
      else if(company=="CVS Health Corp."){
        MsalaryCVS.push(salary);
        sessionStorage.setItem("firstResponseMCVS", "False");
        sessionStorage.setItem("MAvSalaryCVS", JSON.stringify(MsalaryCVS.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryCVS.length));
      }
      else if(company=="UnitedHealth Group Inc."){
        MsalaryUNH.push(salary);
        sessionStorage.setItem("firstResponseMUNH", "False");
        sessionStorage.setItem("MAvSalaryUNH", JSON.stringify(MsalaryUNH.reduce((partialSum, a) => partialSum + a, 0))/(MsalaryUNH.length));
      }
    }

  
    emailList.push(email);

  
    console.log(emailList);
    console.log(company);
    console.log(salary)   

  }
}