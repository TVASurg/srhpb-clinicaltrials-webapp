//idea is the pull the master JSON file
function initAllData() {
  fetch(`/jsonUpdates/latest.json?ver=${Date.now()}`)
    .then(res => res.json())
    .then(data => {
      // Loop through each sheet
        for (const [sheetName, rows] of Object.entries(data)) {
        if (sheetName === "BTC") {
          rows.forEach((row, i) => {
            // Make sure biliary_BTC_master is defined and has a names array
            biliary_BTC_master["names"].push(row["Trial Name"]);
            biliary_BTC_master["setting"].push(row["Disease Setting"]);
            biliary_BTC_master["fullTitle"].push(row["Full title"]);
            biliary_BTC_master["additionalNotes"].push(row["Additional notes"]);
            biliary_BTC_master["arms"].push(row["Trial Intervention/Arms"]);
            biliary_BTC_master["keyCriteria"].push(row["Eligibility "]);
            biliary_BTC_master["contact"].push(row["Coordinator"]);
            biliary_BTC_master["NCT"].push(row["NCT number"]);
          });
        }
        else if (sheetName === "HCC") {
          rows.forEach((row, i) => {
            // Make sure biliary_BTC_master is defined and has a names array
            liver_HCC_master["names"].push(row["Trial Name"]);
            liver_HCC_master["setting"].push(row["Disease Setting"]);
            liver_HCC_master["fullTitle"].push(row["Full title"]);
            liver_HCC_master["additionalNotes"].push(row["Additional notes"]);
            liver_HCC_master["arms"].push(row["Trial Intervention/Arms"]);
            liver_HCC_master["keyCriteria"].push(row["Eligibility "]);
            liver_HCC_master["contact"].push(row["Coordinator"]);
            liver_HCC_master["NCT"].push(row["NCT number"]);
          });
        }
        else if (sheetName === "pancreas") {
          rows.forEach((row, i) => {
            // Make sure biliary_BTC_master is defined and has a names array
            pancreas_master["names"].push(row["Trial Name"]);
            pancreas_master["setting"].push(row["Disease Setting"]);
            pancreas_master["fullTitle"].push(row["Full title"]);
            pancreas_master["additionalNotes"].push(row["Additional notes"]);
            pancreas_master["arms"].push(row["Trial Intervention/Arms"]);
            pancreas_master["keyCriteria"].push(row["Eligibility "]);
            pancreas_master["contact"].push(row["Coordinator"]);
            pancreas_master["NCT"].push(row["NCT number"]);
          });
        }

      }
    
      hidePreactivations(pancreas_preactivation, "pancreas_preactivation")
      
    })
    .catch(err => console.error('Error parsing JSON:', err));
}

//then populate these const arrays 
//the other fun functions can proceed as usual

const biliary_BTC_master = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[]  
};

const liver_HCC_master  = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[]  
};

const pancreas_master  = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[]  
};

/*const pancreas_preActivation ={
        names: [
          "Platinum-Can",
          "WATCH-PC",
          "PRISM-1"
        ],
        setting: [
          "2L metastatic",
          "Any",
          "1L metastatic"
        ],
        fullTitle: [
          "Comparing Second-Line NABPLAGEM vs. Nab-paclitaxel/Gemcitabine in BRCA1/2 or PALB2 Mutant Metastatic Pancreatic Ductal Adenocarcinoma",
          "Wearable Devices and Remote Toxicity Checks to Predict Health Outcomes in Pancreatic Cancer",
          "A Randomized, Placebo-Controlled, Double-Blind, Multicenter Phase 3 Trial of Quemliclustat and Chemotherapy Versus Placebo and Chemotherapy in Patients with Treatment Naïve Metastatic Pancreatic Ductal Adenocarcinoma"
        ],
        additionalNotes: [
          "",
          "Diagnosis of epithelial pancreatic cancer, confirmed with biopsy or suspected based on review of imaging at the multi-disciplinary conference<br/> Plan for chemotherapy as part of treatment plan or ongoing treatment",
          ""
        ],
        arms: [
          "Pre-Activation Pancreas Trials <br/> NABPLAGEM VS. NAB-PACLITAXEL/GEMCITABINE",
          "Weekly questionnaires <br/>FitBit Smartwatch",
          "Arm A (Experimental Arm)<br/>Doses and administration of quemliclustat, NP, and Gem will be administered using a 28-day cycle<br/><br/>Arm B (Comparator Arm)<br/>Doses and administration of placebo, NP,and Gem will be administered using a 28-day cycle"
        ],
        keyCriteria:
        [
          "ECOG 0-2<br/><br/>Histologic documentation of metastatic pancreatic adenocarcinoma, adenosquamous carcinoma, carcinoma or acinar carcinoma<br/><br/>Pathogenic BRCA1/2 or PALB2 mutation (somatic or germline)<br/><br/>Exclusion:<br/><br/>No prior Cisplatin",
          "Inclusion:<br/><br/> Diagnosis of epithelial pancreatic cancer, confirmed with biopsy or suspected based on review of imaging at the multi-disciplinary conference<br/><br/> Plan for chemotherapy as part of treatment plan or ongoing treatment<br/><br/> Exclusion: <br/><br/> Lack of an email address<br/><br/> Inability to fluently speak and read English, given the questionnaires will only be developed in English at first because of resource constraints<br/><br/> Inability or unwillingness to adhere to the study procedures, at the discretion of the investigator<br/><br/> Admitted as an inpatient at enrolment",
          "Inclusion:<br/><br/>No prior treatment for metastatic PDAC<br/><br/>Prior neoadjuvant/adjuvant therapy allowed if >12 months ago<br/><br/>Prior palliative radiation allowed if completed ≥2 weeks before randomization and AEs resolved to ≤ Grade 1<br/><br/>Biliary stent/tube allowed if no active obstruction and AEs ≤ Grade 1<br/><br/>≥1 measurable lesion by CT/MRI (RECIST v1.1)<br/><br/>Adequate organ, marrow, and coagulation function<br/><br/>Exclusion: <br/><br/>Previously treated for locally advanced, unresectable PDAC<br/><br/>History of brain metastases or leptomeningeal metastases.<br/><br/>Prior treatment with a CD73 antagonist or inhibitor."
          
        ],
        contact: [
          "TBD",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Ochir Gansukh<br/> 416-946-4501 ext. 4551<br/> ochir.gansukh@uhn.ca"
        ],
        NCT: [
          "NCT06783140",
          "N/A",
          "NCT06608927"
        ]        
      }*/

const pancreas_preactivation = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[]  
};

function fillTrialNameBasedOnSetting(mainCategory, setting) {
  //user input dicates which main category we're going into
  var totalTrialsAvailable = mainCategory[`names`].length;
  var outputHTMLstring = "";

  //create vertical radio button group
  outputHTMLstring += '<div class="btn-group-vertical p-3" role="group">';

  for (i = 0; i < totalTrialsAvailable; i++) {
    //list all
    if (setting == "List all")
      {
        outputHTMLstring +=
        '<input type="radio" class="btn-check" name="trialName';
      outputHTMLstring += '" id="trialName';
      outputHTMLstring += [i];
      outputHTMLstring += '" autocomplete="off">';

      //this is the label for the button
      outputHTMLstring += '<label class="btn fw-bold" for="trialName';
      outputHTMLstring += [i];
      outputHTMLstring += '">';
      outputHTMLstring += mainCategory[`names`][i];
      outputHTMLstring += "</label>";
        
      }
    //list according to setting
    if (mainCategory[`setting`][i].includes(setting) == true && setting != "List All") {
      //this is the button itself
      outputHTMLstring +=
        '<input type="radio" class="btn-check" name="trialName';
      outputHTMLstring += '" id="trialName';
      outputHTMLstring += [i];
      outputHTMLstring += '" autocomplete="off">';

      //this is the label for the button
      outputHTMLstring += '<label class="btn btn-outline-secondary text-start" for="trialName';
      outputHTMLstring += [i];
      outputHTMLstring += '">';
      outputHTMLstring += mainCategory[`names`][i];
      outputHTMLstring += "</label>";
    }
  }

  //closing the vertical btn group
  outputHTMLstring += "</div>";

  //filling in the HTML (remember to clear trialDetails)
  document.getElementById("trialName").innerHTML = outputHTMLstring;
  document.getElementById("trialDetails").innerHTML = "";

  //add eventlisteners to trialnames
  document.querySelectorAll('input[name="trialName"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        const elementID = this.id.match(/\d+/g);
        const key = parseInt(elementID);
        fillTrialDetails(mainCategory, key);
      }
    });
  });
}

function fillTrialDetails(mainCategory, key) {
  
  var htmlString = "";
  var titleString = "";
  var notesString = "";
  var armString = "";
  var criteriaString = "";
  var contactString = "";
  var NCTstring = "";

  //ul elements
  htmlString += '<ul class="list-group list-group p-3">';

  //Full title
  titleString += '<li class="list-group-item bg-gray-200 text-gray-900">Full title</li><li class="list-group-item list-group-item-light ps-5">';
  titleString += mainCategory[`fullTitle`][key];
  titleString += '</li>';
  
  //Additional notes (optional)
  if(mainCategory[`additionalNotes`][key] != "")
    {
    notesString += '<li class="list-group-item bg-gray-200 text-gray-900">Additional notes</li><li class="list-group-item list-group-item-light ps-5">';
    notesString += mainCategory[`additionalNotes`][key];
    notesString += '</li>';
    }
  
  
  //Arms
  armString += '<li class="list-group-item bg-gray-300 text-gray-900">Arms</li><li class="list-group-item list-group-item-light ps-5">';
  armString += mainCategory[`arms`][key];
  armString += "</li>";

  //Key criteria
  if(mainCategory[`keyCriteria`][key] != "")
    {
  criteriaString += '<li class="list-group-item bg-gray-400 text-gray-900">Key criteria</li><li class="list-group-item list-group-item-light ps-5">';
  criteriaString += mainCategory[`keyCriteria`][key];
  criteriaString += "</li>";
    }

  //Contact
  contactString += '<li class="list-group-item bg-gray-500 text-gray-900">Contact</li><li class="list-group-item list-group-item-light ps-5">';

  //can try to parse into separate emails
  //and also phone
  contactString += mainCategory[`contact`][key];
  contactString += '</li>';

  //More information link
  if(mainCategory[`NCT`][key] != "N/A")
    {
  NCTstring += '<li class="list-group-item bg-gray-600 text-gray-900">More information</li><li class="list-group-item list-group-item-light ps-5"><a target="_blank" href="https://clinicaltrials.gov/study/';
  NCTstring += mainCategory[`NCT`][key];
  NCTstring += '">Link to Clinical Trials entry</a></li>';
    }   

  htmlString += titleString + notesString + armString + criteriaString + contactString + NCTstring;
  
  htmlString += "</ul>";

  
  document.getElementById("trialDetails").innerHTML = htmlString;
}

function addIndicator(){
  document.getElementById("trialName").addEventListener('change', function (e) {
    const prefix = "◉ ";
    const labels = this.querySelectorAll('label');

    labels.forEach(label => {
      const inputId = label.getAttribute('for');
      const input = document.getElementById(inputId);
      const originalText = label.textContent.replace(/^◉\s*/, '');

      // Apply prefix only to the selected one
      label.textContent = input.checked ? prefix + originalText : originalText;
    });
  });
}

function hidePreactivations(categoryToHide, UItoHide)
{
  var categoryCheck = categoryToHide[`names`].length;
  if (categoryCheck == 0)
    {
      document.getElementById(UItoHide).classList.add('d-none'); 
    }
}

addIndicator(); 
initAllData();

//contact parser
//email - if contains '@'
//phone - whoa can use regex
/*
function populateTrialDetails(category) {
  var htmlString = "";
  var newArray = [];
  var arrayLength = 0;

  switch (category) {
    case "mccainPancreas_R":
      newArray = Array.from(mccainPancreas_R_A);

      break;
    case "mccainPancreas_LAU":
      newArray = Array.from(mccainPancreas_LAU_A);

      break;
    case "mccainPancreas_ALA":
      newArray = Array.from(mccainPancreas_ALA_A);

      break;
    case "mccainPancreas_1LM":
      newArray = Array.from(mccainPancreas_1LM_A);

      break;
    case "mccainPancreas_2LM":
      newArray = Array.from(mccainPancreas_2LM_A);

      break;
    case "mccainPancreas_NT":
      newArray = Array.from(mccainPancreas_NT_A);

      break;
    case "preactivationPancreas_1LM":
      newArray = Array.from(preactivationPancreas_1LM_A);

      break;
    case "preactivationPancreas_2LM":
      newArray = Array.from(preactivationPancreas_2LM_A);

      break;
    case "preactivationPancreas_ANY":
      newArray = Array.from(preactivationPancreas_ANY_A);

      break;
    default:
  }
  arrayLength = newArray.length;

  for (i = 0; i < arrayLength; i++) {
    htmlString +=
      '<a href="#" class="list-group-item list-group-item-action py-3 lh-sm" onclick="populateTrialInterventionsContact(' +
      `'` +
      category +
      `',` +
      i +
      ')">';
    htmlString += newArray[i];
    htmlString += "</a>";
  }

  document.getElementById("trialName").innerHTML = htmlString;
  document.getElementById("trialDetails").innerHTML = "";
}

function populateTrialInterventionsContact(category, index) {
  var htmlString = "";
  var interventionArray = [];
  var contactArray = [];

  switch (category) {
    case "mccainPancreas_R":
      interventionArray = Array.from(mccainPancreas_R_B);
      contactArray = Array.from(mccainPancreas_R_C);

      break;
    case "mccainPancreas_LAU":
      interventionArray = Array.from(mccainPancreas_LAU_B);
      contactArray = Array.from(mccainPancreas_LAU_C);

      break;
    case "mccainPancreas_ALA":
      interventionArray = Array.from(mccainPancreas_ALA_B);
      contactArray = Array.from(mccainPancreas_ALA_C);

      break;
    case "mccainPancreas_1LM":
      interventionArray = Array.from(mccainPancreas_1LM_B);
      contactArray = Array.from(mccainPancreas_1LM_C);

      break;
    case "mccainPancreas_2LM":
      interventionArray = Array.from(mccainPancreas_2LM_B);
      contactArray = Array.from(mccainPancreas_2LM_C);

      break;
    case "mccainPancreas_NT":
      interventionArray = Array.from(mccainPancreas_NT_B);
      contactArray = Array.from(mccainPancreas_NT_C);

      break;
    case "preactivationPancreas_1LM":
      interventionArray = Array.from(preactivationPancreas_1LM_B);
      contactArray = Array.from(preactivationPancreas_1LM_C);

      break;
    case "preactivationPancreas_2LM":
      interventionArray = Array.from(preactivationPancreas_2LM_B);
      contactArray = Array.from(preactivationPancreas_2LM_C);

      break;
    case "preactivationPancreas_ANY":
      interventionArray = Array.from(preactivationPancreas_ANY_B);
      contactArray = Array.from(preactivationPancreas_ANY_C);

      break;
    default:
  }

  htmlString +=
    '<a href="#" class="list-group-item list-group-item-action py-3 lh-sm">';
  htmlString += interventionArray[index];
  htmlString += "</a>";
  htmlString +=
    '<a href="#" class="list-group-item list-group-item-action py-3 lh-sm"> Contact:<br/><br/>';
  htmlString += contactArray[index];
  htmlString += "</a>";

  document.getElementById("trialDetails").innerHTML = htmlString;
}
*/
function testAPI() {
  /*  fetch('https://corsproxy.io/?url=https://clinicaltrials.gov/api/v2/studies/NCT06060405').then((response) => {
      return response.json();
    }).then((data) => {
    console.log('data');
  });*/
}

//button call is...
//populateTrialDetails("mccainPancreas_2LM");

/*

<a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
<div class="d-flex w-100 align-items-center justify-content-between"> 
  <strong class="mb-1"></strong> 
</div>
<div class="col-10 mb-1"></div>
</a> 
*/
