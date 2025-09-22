//idea is the pull the master JSON file
function initAllData(data) {
      ericList(data);
      // Loop through each sheet
        for (const [sheetName, rows] of Object.entries(data)) {
        if (sheetName === "Gastroesophageal") {
          rows.forEach((row, i) => {
            if (row["Disease Setting"]){
            gastroesophageal_master["names"].push(row["Trial Name"]);
            gastroesophageal_master["setting"].push(row["Disease Setting"]);
            gastroesophageal_master["fullTitle"].push(row["Full title"]);
            gastroesophageal_master["additionalNotes"].push(row["Additional notes"]);
            gastroesophageal_master["tissueRequirements"].push(row["Tissue Requirements"]);
            gastroesophageal_master["arms"].push(row["Trial Intervention/Arms"]);
            gastroesophageal_master["keyCriteria"].push(row["Eligibility "]);
            gastroesophageal_master["contact"].push(row["Contacts"]);
            gastroesophageal_master["NCT"].push(row["NCT number"]);
            gastroesophageal_master["status"].push(row["Study status"]);
            gastroesophageal_master["schema"].push(row["Schema image data"]);
            }
            else if (row["Disease Setting"] == null)
            {
            gastroesophageal_master["names"].push(row["Trial Name"]);
            gastroesophageal_master["setting"].push("null");
            gastroesophageal_master["fullTitle"].push(row["Full title"]);
            gastroesophageal_master["additionalNotes"].push(row["Additional notes"]);
            gastroesophageal_master["tissueRequirements"].push(row["Tissue Requirements"]);
            gastroesophageal_master["arms"].push(row["Trial Intervention/Arms"]);
            gastroesophageal_master["keyCriteria"].push(row["Eligibility "]);
            gastroesophageal_master["contact"].push(row["Contacts"]);
            gastroesophageal_master["NCT"].push(row["NCT number"]);
            gastroesophageal_master["status"].push(row["Study status"]);
            gastroesophageal_master["schema"].push(row["Schema image data"]);
            }
            if (row["Biomarker/unselected"])
            {
             biomarker_master["categories"].push("GE");
             biomarker_master["names"].push(row["Trial Name"]);
             biomarker_master["biomarker"].push(row["Biomarker/unselected"]);
             biomarker_master["keyInCategory"].push(i);
            }

          });
      }
        else if (sheetName === "HCC") {
          rows.forEach((row, i) => {
            liver_HCC_master["names"].push(row["Trial Name"]);
            liver_HCC_master["setting"].push(row["Disease Setting"]);
            liver_HCC_master["fullTitle"].push(row["Full title"]);
            liver_HCC_master["additionalNotes"].push(row["Additional notes"]);
            liver_HCC_master["tissueRequirements"].push(row["Tissue Requirements"]);
            liver_HCC_master["arms"].push(row["Trial Intervention/Arms"]);
            liver_HCC_master["keyCriteria"].push(row["Eligibility "]);
            liver_HCC_master["contact"].push(row["Contacts"]);
            liver_HCC_master["NCT"].push(row["NCT number"]);
            liver_HCC_master["status"].push(row["Study status"]);
            liver_HCC_master["schema"].push(row["Schema image data"]);

            if (row["Biomarker/unselected"])
            {
            biomarker_master["categories"].push("HCC");
             biomarker_master["names"].push(row["Trial Name"]);
             biomarker_master["biomarker"].push(row["Biomarker/unselected"]);
             biomarker_master["keyInCategory"].push(i);
            }

          });
        }
        else if (sheetName === "PDAC") {
          rows.forEach((row, i) => {
            pancreas_master["names"].push(row["Trial Name"]);
            pancreas_master["setting"].push(row["Disease Setting"]);
            pancreas_master["fullTitle"].push(row["Full title"]);
            pancreas_master["additionalNotes"].push(row["Additional notes"]);
            pancreas_master["tissueRequirements"].push(row["Tissue Requirements"]);
            pancreas_master["arms"].push(row["Trial Intervention/Arms"]);
            pancreas_master["keyCriteria"].push(row["Eligibility "]);
            pancreas_master["contact"].push(row["Contacts"]);
            pancreas_master["NCT"].push(row["NCT number"]);
            pancreas_master["status"].push(row["Study status"]);
            //adding in base64 encoded images
            pancreas_master["schema"].push(row["Schema image data"]);

            if (row["Biomarker/unselected"])
            {
             biomarker_master["categories"].push("PDAC");
             biomarker_master["names"].push(row["Trial Name"]);
             biomarker_master["biomarker"].push(row["Biomarker/unselected"]);
             biomarker_master["keyInCategory"].push(i);
            }

          });
        }
        else if (sheetName === "CCA") {
          rows.forEach((row, i) => {
            biliary_CCA_master["names"].push(row["Trial Name"]);
            biliary_CCA_master["setting"].push(row["Disease Setting"]);
            biliary_CCA_master["fullTitle"].push(row["Full title"]);
            biliary_CCA_master["additionalNotes"].push(row["Additional notes"]);
            biliary_CCA_master["tissueRequirements"].push(row["Tissue Requirements"]);
            biliary_CCA_master["arms"].push(row["Trial Intervention/Arms"]);
            biliary_CCA_master["keyCriteria"].push(row["Eligibility "]);
            biliary_CCA_master["contact"].push(row["Contacts"]);
            biliary_CCA_master["NCT"].push(row["NCT number"]);
            biliary_CCA_master["status"].push(row["Study status"]);
            biliary_CCA_master["schema"].push(row["Schema image data"]);

            //if the row["Biomarker"] contains data
            //push the biomarker and name to the biomarker array
            if (row["Biomarker/unselected"])
            {
             biomarker_master["categories"].push("CCA");
             biomarker_master["names"].push(row["Trial Name"]);
             biomarker_master["biomarker"].push(row["Biomarker/unselected"]);
             biomarker_master["keyInCategory"].push(i);
            }
          });
        }

      }
        for (const[sheetName,rows] of Object.entries(data.Changes))
        {
          rows.forEach(row => {
          changes.push([sheetName, row["Trial Name"], row.timestamp]);
        });
        }
    }

//then populate these const arrays 
//the other fun functions can proceed as usual

const biomarker_master ={
  categories: [],
  keyInCategory: [],
  names: [],
  biomarker: []
}

const gastroesophageal_master = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  tissueRequirements: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[],
  schema:[],
  status:[],
  label: "Gastroesophageal" //this is the sheet name
};

const biliary_CCA_master = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  tissueRequirements: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[],
  schema:[],
  status:[],
  label: "CCA" //this is the sheet name
};

const liver_HCC_master  = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  tissueRequirements: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[],
  schema:[],
  status:[],
  label: "HCC" //this is the sheet name
};

const pancreas_master  = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  tissueRequirements: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[],
  schema:[],
  status:[],
  label: "PDAC" //this is the sheet name
};

const pancreas_preactivation = {
  names: [],
  setting: [],
  fullTitle: [],
  additionalNotes: [],
  tissueRequirements: [],
  arms: [],
  keyCriteria: [],
  contact: [],
  NCT:[],
  schema:[]
};

const changes = [];

function fillTrialNameBasedOnBiomarker(biomarker)
{
  var outputHTMLline = "";
  
  //create vertical radio button group
  outputHTMLline += '<div class="btn-group-vertical p-3" role="group">';

  clearUpdateLine();
  
  for (i=0; i < biomarker_master[`names`].length; i++)
  {
   if (biomarker_master[`biomarker`][i] == biomarker)
   {//add in switches for div group based on category?
    switch (biomarker_master[`categories`][i]) {
      case "GE":
        outputHTMLline += '<div data-bs-theme="ge">';
        break;
    
      case "HCC":
        outputHTMLline += '<div data-bs-theme="hcc">';
        break;

      case "PDAC":
        outputHTMLline += '<div data-bs-theme="pdac">';
        break;

      case "CCA":
        outputHTMLline += '<div data-bs-theme="cca">';
        break;
      default:
        break;
    }

    //this is the button itself
      
      outputHTMLline += '<input type="radio" class="btn-check" name="trialName';
      outputHTMLline += '" id="';
      outputHTMLline += biomarker_master[`categories`][i] + "_" + biomarker_master[`keyInCategory`][i];
      outputHTMLline += '" autocomplete="off">';

      //this is the label for the button
      
      outputHTMLline += '<label class="btn btn-outline-custom text-start" for="';
      outputHTMLline += biomarker_master[`categories`][i] + "_" + biomarker_master[`keyInCategory`][i];
      outputHTMLline += '">';
      outputHTMLline += biomarker_master[`categories`][i] + ":  " + biomarker_master[`names`][i];
      outputHTMLline += "</label></div>";
   }
  }
  //closing the vertical btn group
  outputHTMLline += "</div>";

  //filling in the HTML (remember to clear trialDetails)
  document.getElementById("trialName").innerHTML = outputHTMLline;
  document.getElementById("trialDetails").innerHTML = "";

  //add eventlisteners to trialnames
  document.querySelectorAll('input[name="trialName"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        const category = this.id.split('_')[0];
        const elementID = this.id.match(/\d+/g);
        const key = parseInt(elementID);

        if (category == "HCC")
        {
          fillTrialDetails(liver_HCC_master, elementID);
        }
        else if (category == "PDAC")
        {
          fillTrialDetails(pancreas_master, elementID);
        }
        else if (category == "CCA")
        {
          fillTrialDetails(biliary_CCA_master, elementID);
        }
        else if (category == "GE")
        {
          fillTrialDetails(gastroesophageal_master, elementID);
        }
        
        
      }
    });
  });
highlightCategory();
scrollToTrialName("trialName");
}

function fillTrialNameBasedOnSetting(mainCategory, setting) {
  //document.getElementById("scroll-spacer").style.display= 'block';
  clearUpdateLine();
  //user input dicates which main category we're going into
  var totalTrialsAvailable = mainCategory[`names`].length;
  var outputHTMLstring = "";

  //create vertical radio button group
  outputHTMLstring += '<div class="btn-group-vertical p-3" role="group" ';

  switch (mainCategory) {
    case gastroesophageal_master:
      outputHTMLstring += 'data-bs-theme="ge">';
      break;
  
    case liver_HCC_master:
      outputHTMLstring += 'data-bs-theme="hcc">';
      break;
    
    case pancreas_master:
      outputHTMLstring += 'data-bs-theme="pdac">';
      break;
    
    case biliary_CCA_master:
      outputHTMLstring += 'data-bs-theme="cca">';
      break;

    default:
      outputHTMLstring += '>';
      break;
  }

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
      outputHTMLstring += '<label class="btn btn-outline-custom text-start" for="trialName';
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
  
  //highlight category selected for breadcrumb purposes
  highlightCategory();
  scrollToTrialName("trialName");
}

function fillTrialDetails(mainCategory, key) {
  clearUpdateLine();
  var htmlString = "";
  var titleString = "";
  var notesString = "";
  var tissueReqString = "";
  var settingString = "";
  var armString = "";
  var criteriaString = "";
  var biomarkerString = "";
  var schemaString = "";
  var contactString = "";
  var NCTstring = "";

  //ul elements
  htmlString += '<ul class="list-group list-group p-3"';

  switch (mainCategory) {
    case gastroesophageal_master:
      htmlString += ' data-bs-theme="ge">';
      break;

    case liver_HCC_master:
      htmlString += ' data-bs-theme="hcc">';
      break;

    case pancreas_master:
      htmlString += ' data-bs-theme="pdac">';
      break;

    case biliary_CCA_master:
      htmlString += ' data-bs-theme="cca">';
      break;
  
    default:
      htmlString += '>';
      break;
  }

  //Full title
  titleString += '<li class="detailsSection01 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#fullTitleCollapse">Full title</li><li class="list-inline-item ps-5 collapse" id="fullTitleCollapse"><p class="py-2">';
  titleString += mainCategory[`fullTitle`][key];
  titleString += '</p></li>';
  
 
  //Additional notes (optional)
  if(mainCategory[`additionalNotes`][key] != null)
    {
    notesString += '<li class="detailsSection01 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#notesCollapse">Summary</li><li class="list-inline-item ps-5 collapse" id="notesCollapse"><p class="py-2">';
    notesString += mainCategory[`additionalNotes`][key].replaceAll("\n", "<br/>");
    notesString += '</p></li>';
    }
 
  //Schema
  if(mainCategory[`schema`][key] != null)
    {
  schemaString += '<li class="detailsSection02 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#schemaCollapse">Schema</li><li class="list-inline-item ps-5 collapse" id="schemaCollapse"><p class="my-2">';
  // schemaString += '<a href="" onclick="event.preventDefault(); openImage(`';
  // schemaString += mainCategory[`schema`][key]; 
  // schemaString += '`)">View Schema</a></p></li>';
  schemaString += "<img class='img-fluid mx-0 px-0 my-2 py-2' src='";
  schemaString += mainCategory[`schema`][key];
  schemaString += "'></p>";
    }
  
  //Setting
    if(mainCategory[`setting`][key] != null)
    {
  settingString += '<li class="detailsSection02 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#settingCollapse">Disease setting</li><li class="list-inline-item ps-5 collapse" id="settingCollapse"><p class="py-2">';
  settingString += mainCategory[`setting`][key].replaceAll("\n", "<br/>");
  settingString += "</p></li>";
    }

  //Arms
    if(mainCategory[`arms`][key] != null)
    {
  armString += '<li class="detailsSection02 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#armsCollapse">Arms/Cohorts</li><li class="list-inline-item ps-5 collapse" id="armsCollapse"><p class="py-2">';
  armString += mainCategory[`arms`][key].replaceAll("\n", "<br/>");
  armString += "</p></li>";
    }
    
  //Tissue requirements (optional)
  if(mainCategory[`tissueRequirements`][key] != null)
    {
    tissueReqString += '<li class="detailsSection02 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#tissueReqCollapse">Tissue requirements</li><li class="list-inline-item ps-5 collapse" id="tissueReqCollapse"><p class="py-2">';
    tissueReqString += mainCategory[`tissueRequirements`][key].replaceAll("\n", "<br/>");
    tissueReqString += '</p></li>';
    }

  //Key criteria
  if(mainCategory[`keyCriteria`][key] != null)
    {
  criteriaString += '<li class="detailsSection03 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#keyCollapse">Key criteria</li><li class="list-inline-item ps-5 collapse" id="keyCollapse"><p class="py-2">';
  criteriaString += mainCategory[`keyCriteria`][key].replaceAll("\n", "<br/>");      
  criteriaString += "</p></li>";
    }
  
  //Biomarker (if present)
  //
  biomarker_master[`names`].forEach((element,index) => {
  if (element == mainCategory[`names`][key])

    //console.log(biomarker_master[`biomarker`][index])
    biomarkerString += '<li class="detailsSection03 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#biomarkerCollapse">Biomarkers</li><li class="list-inline-item ps-5 collapse" id="biomarkerCollapse"><p class="py-2">' + biomarker_master[`biomarker`][index].replaceAll("\n", "<br/>") + '</p></li>';

    
  });

  //Contact
  if(mainCategory[`contact`][key] != null)
  {
  contactString += '<li class="detailsSection04 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#contactCollapse">Contact</li><li class="list-inline-item ps-5 collapse" id="contactCollapse"><p class="py-2">';

  
  //contactString += mainCategory[`contact`][key];
  //contactString += mainCategory[`contact`][key].replaceAll("\n", "<br/>");
  contactString += parseContact(mainCategory[`contact`][key]);
  contactString += '</p></li>';
  }
  //More information link
  if(mainCategory[`NCT`][key] != null)
    {
  NCTstring += '<li class="detailsSection04 list-group-item btn btn-toggle d-inline-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#nctCollapse">Helpful links</li><li class="list-inline-item ps-5 collapse" id="nctCollapse"><p class="py-2">';
  NCTstring += '<a target="_blank" href="https://clinicaltrials.gov/study/';
  NCTstring += mainCategory[`NCT`][key];
  NCTstring += '">Link to clinicaltrials.gov</p></li>';
    }   

  htmlString += titleString + notesString + schemaString + settingString+ armString + tissueReqString + criteriaString + biomarkerString + contactString + NCTstring;
  
  htmlString += "</ul>";
 
  document.getElementById("trialDetails").innerHTML = htmlString;

  displayLastUpdateForTrial(mainCategory[`label`], mainCategory[`names`][key]);
  displayStudyStatus(mainCategory['status'][key]);

  //document.getElementById("scroll-spacer").style.display= 'none';
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
    document.getElementById(UItoHide).previousElementSibling.classList.add('rounded-bottom');
    document.getElementById(UItoHide).previousElementSibling.classList.add('mb-3');
    }
}

function parseContact(contact)
{
  //regexes

  const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/g;
  const phoneRegex = /\d{3}[- ]?\d{3}[- ]?\d{4}|( x \d{4})|(x\d{4})|( ext. \d{4})|( ext.\d{4})/g;
  
  //try for this string
  var outputString = contact;

  //replace \n first with <br/>_
  const strippedNs = contact.replaceAll("\n", " <br/> ");
  
  //console.log(strippedNs);
  //if we do a match(), then it returns an array
  let emailMatches = strippedNs.match(emailRegex);
  let phoneMatches = strippedNs.match(phoneRegex);
  //console.log(emailMatches);

  
  //console.log(phoneMatches);
  if (emailMatches != null){
  //so then run a for loop in the array with the rawstring
  //that uses the 'replace()' to replace the email with an ahref mailto link
      for (const element of emailMatches){
        var constructedEmailLink = '<a href=\"mailto:' + element + '\">' + element + '</a>';
        
        outputString = outputString.replace(element, constructedEmailLink);
  }
  }
  if (phoneMatches != null){ 
        var cleanPhoneNumbers = [];
        //constructing the cleanNumbers
        for (i=0; i<phoneMatches.length; i++){
          //extract only numbers
          var cleanElement = phoneMatches[i].replace(/[^0-9]/g, '');
          
          //if its an extension we append it to the previous number
          if (cleanElement.length == 4)
            {
              cleanPhoneNumbers[i-1] = cleanPhoneNumbers[i-1] + "," + cleanElement;
              //pass this onto phoneMatches so the entry becomes a number + extention
              phoneMatches[i-1] = phoneMatches[i-1] + phoneMatches[i];
              phoneMatches.splice(i,1);
            }
          //if not an extension then just push it back to its original element
          else if (cleanElement.length == 10)
            {
              cleanPhoneNumbers[i] = cleanElement;
            }
       }
      
    //constructing the tel link lines
    for (i=0; i<phoneMatches.length; i++)
      {
        var constructedPhoneLink = '<a href=\"tel:' + cleanPhoneNumbers[i] + '\">' + phoneMatches[i] + '</a>';
        outputString = outputString.replace(phoneMatches[i], constructedPhoneLink);
      }
    
   
   
  }
  outputString = outputString.replaceAll("\n", " <br/> ");
  //document.getElementById("lastUpdated").innerHTML = outputString;
  return(outputString);
  
}

function highlightCategory()
{
  const allCategories = document.getElementsByClassName("diseaseState"); 
  for (var category of allCategories)
    {
      if (category.classList.contains('selectedCategory'))
      {
        category.classList.remove('selectedCategory');
      }
    }
  event.target.classList.add('selectedCategory');
}

addIndicator(); 

function openImage(dataUrl) {
    // Extract base64 part and MIME type from the data URL
    const matches = dataUrl.match(/^data:(.+);base64,(.*)$/);
    if (!matches) {
        console.error("Invalid data URL");
        return;
    }
    const mimeType = matches[1];
    const base64Data = matches[2];

    // Convert base64 to byte array
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Create a Blob and object URL
    const blob = new Blob([byteArray], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);

    // Open in new tab
    window.open(blobUrl, '_blank');

    // Optional: release memory after a while
    setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
}

const { jsPDF } = window.jspdf;
const doc = new jsPDF("landscape");

function ericList(data)
{
// Build rows from mapping, with multi-line first column
// We're going to separate these into specific sheets for now (HCC/PDAC/CCA)

if (data.HCC != null){

// Map of PDF header → JSON key
const columnMap = [
  { header: "", key: null }, // first column for vertical rowspan text
  { header: "Title", key: "Trial Name" },
  { header: "Setting", key: "Disease Setting" },
  { header: "Arms", key: "Trial Intervention/Arms" },
  { header: "Key Criteria", key: "Eligibility " },
  { header: "Contact", key: "Contacts" }
];

// Build headers from mapping
const headers = columnMap.map(col => col.header);

const rows = data.HCC.map(trial =>
  columnMap.map((col, colIndex) => {
    let value = trial[col.key] ?? "";

    if (typeof value === "string" && value.includes("Coordinator")) {
      // Keep only text before "Coordinator"
      value = value.split("Coordinator")[0].trim();
    }

    return value;
  })
);

// Variable to store rowspan height
let groupRowSpanHeight = 0;

doc.autoTable({
  head: [headers],
  body: rows,
  styles: { fontSize: 10, cellPadding: 2, overflow: 'linebreak', lineWidth: 0.2, lineColor: [50, 50, 50]},
  headStyles: { fillColor: [84, 209, 126], textColor: 255 },
  pagebreak: 'auto',
  rowPageBreak: 'avoid',
  columnStyles: {
    0: { cellWidth: 12, lineWidth: 0, textColor: 255, fillColor: false },
    1: { cellWidth: 80 },
    2: { cellWidth: 30 },
    3: { cellWidth: 55 },
    4: { cellWidth: 55 },
    5: { cellWidth: 40 }
  },
  didParseCell: function (data) {
    if (data.section === 'body') {
      if (data.row.index % 2 === 0 && data.column.index > 0 ) {
        data.cell.styles.fillColor = [135, 230, 167];
      } else if (data.column.index > 0){
        data.cell.styles.fillColor = [255, 255, 255];
      }
    }
  },
  didDrawPage: function (data) {
    const table = data.table;
    const startY = table.settings.margin.top;   // top of header
    const endY = data.cursor.y;                  // bottom of rows on this page
    const startX = table.settings.margin.left;
    const cellWidth = 11;                       // width of your rotated column

    // Draw filled rectangle spanning header + body for this page
    doc.setFillColor(84, 209, 126);
    doc.rect(startX, startY, cellWidth, endY - startY, 'F');


    // Rotated text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("HCC", startX + cellWidth / 2 + 8, startY + (endY - startY) / 2, {
      angle: 90,
      align: 'center',
      baseline: 'middle'
    });
  },
  willDrawCell: function(data) {
    // Skip all cells in the first column (header + body)
    if (data.column.index === 0) {
      return false; // skip drawing this cell
    }
  }
});


}

if (data.PDAC != null){
// Map of PDF header → JSON key
const columnMap = [
  { header: "", key: null }, // first column for vertical rowspan text
  { header: "Title", key: "Trial Name" },
  { header: "Setting", key: "Disease Setting" },
  { header: "Arms", key: "Trial Intervention/Arms" },
  { header: "Key Criteria", key: "Additional notes" },
  { header: "Contact", key: "Contacts" }
];
// Build headers from mapping
const headers = columnMap.map(col => col.header);
//we may need to cull the contacts for just site PI;


const rows = data.PDAC.map(trial =>
  columnMap.map((col, colIndex) => {
    let value = trial[col.key] ?? "";

    if (typeof value === "string" && value.includes("Coordinator")) {
      // Keep only text before "Coordinator"
      value = value.split("Coordinator")[0].trim();
    }

    return value;
  })
);

// Variable to store rowspan height
let groupRowSpanHeight = 0;
doc.addPage();
doc.autoTable({
  head: [headers],
  body: rows,
  styles: { fontSize: 10, cellPadding: 2, overflow: 'linebreak', lineWidth: 0.2, lineColor: [50, 50, 50]},
  headStyles: { fillColor: [173, 123, 172], textColor: 255 },
  pagebreak: 'auto',
  rowPageBreak: 'avoid',
  columnStyles: {
    0: { cellWidth: 12, lineWidth: 0, textColor: 255, fillColor: false },
    1: { cellWidth: 80 },
    2: { cellWidth: 30 },
    3: { cellWidth: 55 },
    4: { cellWidth: 55 },
    5: { cellWidth: 40 }
  },
  didParseCell: function (data) {
    if (data.section === 'body') {
      if (data.row.index % 2 === 0 && data.column.index > 0 ) {
        data.cell.styles.fillColor = [224, 182, 224];
      } else if (data.column.index > 0){
        data.cell.styles.fillColor = [255, 255, 255];
      }
    }
  },
  didDrawPage: function (data) {
    const table = data.table;
    const startY = table.settings.margin.top;   // top of header
    const endY = data.cursor.y;                  // bottom of rows on this page
    const startX = table.settings.margin.left;
    const cellWidth = 11;                       // width of your rotated column

    // Draw filled rectangle spanning header + body for this page
    doc.setFillColor(173, 123, 172);
    doc.rect(startX, startY, cellWidth, endY - startY, 'F');


    // Rotated text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("PDAC", startX + cellWidth / 2 + 9.45, startY + (endY - startY) / 2, {
      angle: 90,
      align: 'center',
      baseline: 'middle'
    });
  },
  willDrawCell: function(data) {
    // Skip all cells in the first column (header + body)
    if (data.column.index === 0) {
      return false; // skip drawing this cell
    }
  }
});
}
if (data.CCA != null){
// Map of PDF header → JSON key
const columnMap = [
  { header: "", key: null }, // first column for vertical rowspan text
  { header: "Title", key: "Trial Name" },
  { header: "Setting", key: "Disease Setting" },
  { header: "Arms", key: "Trial Intervention/Arms" },
  { header: "Key Criteria", key: "Eligibility " },
  { header: "Contact", key: "Contacts" }
];

// Build headers from mapping
const headers = columnMap.map(col => col.header);

  const rows = data.CCA.map(trial =>
  columnMap.map((col, colIndex) => {
    let value = trial[col.key] ?? "";

    if (typeof value === "string" && value.includes("Coordinator")) {
      // Keep only text before "Coordinator"
      value = value.split("Coordinator")[0].trim();
    }

    return value;
  })
);

// Variable to store rowspan height
let groupRowSpanHeight = 0;

doc.addPage();

doc.autoTable({
  head: [headers],
  body: rows,
  styles: { fontSize: 10, cellPadding: 2, overflow: 'linebreak', lineWidth: 0.2, lineColor: [50, 50, 50]},
  headStyles: { fillColor: [6, 147, 110], textColor: 255 },
  pagebreak: 'auto',
  rowPageBreak: 'avoid',
  columnStyles: {
    0: { cellWidth: 12, lineWidth: 0, textColor: 255, fillColor: false },
    1: { cellWidth: 80 },
    2: { cellWidth: 30 },
    3: { cellWidth: 55 },
    4: { cellWidth: 55 },
    5: { cellWidth: 40 }
  },
  didParseCell: function (data) {
    if (data.section === 'body') {
      if (data.row.index % 2 === 0 && data.column.index > 0 ) {
        data.cell.styles.fillColor = [111, 191, 171];
      } else if (data.column.index > 0){
        data.cell.styles.fillColor = [255, 255, 255];
      }
    }
  },
  didDrawPage: function (data) {
    const table = data.table;
    const startY = table.settings.margin.top;   // top of header
    const endY = data.cursor.y;                  // bottom of rows on this page
    const startX = table.settings.margin.left;
    const cellWidth = 11;                       // width of your rotated column

    // Draw filled rectangle spanning header + body for this page
    doc.setFillColor(6, 147, 110);
    doc.rect(startX, startY, cellWidth, endY - startY, 'F');


    // Rotated text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("CCA", startX + cellWidth / 2 + 8, startY + (endY - startY) / 2, {
      angle: 90,
      align: 'center',
      baseline: 'middle'
    });
  },
  willDrawCell: function(data) {
    // Skip all cells in the first column (header + body)
    if (data.column.index === 0) {
      return false; // skip drawing this cell
    }
  }
});
}
if (data.Gastroesophageal != null){
// Map of PDF header → JSON key
const columnMap = [
  { header: "", key: null }, // first column for vertical rowspan text
  { header: "Title", key: "Trial Name" },
  { header: "Setting", key: "Disease Setting" },
  { header: "Arms", key: "Trial Intervention/Arms" },
  { header: "Key Criteria", key: "Eligibility " },
  { header: "Contact", key: "Contacts" }
];

// Build headers from mapping
const headers = columnMap.map(col => col.header);

  const rows = data.Gastroesophageal.map(trial =>
  columnMap.map((col, colIndex) => {
    let value = trial[col.key] ?? "";

    if (typeof value === "string" && value.includes("Coordinator")) {
      // Keep only text before "Coordinator"
      value = value.split("Coordinator")[0].trim();
    }

    return value;
  })
);

// Variable to store rowspan height
let groupRowSpanHeight = 0;

doc.addPage();
doc.autoTable({
  head: [headers],
  body: rows,
  styles: { fontSize: 10, cellPadding: 2, overflow: 'linebreak', lineWidth: 0.2, lineColor: [50, 50, 50]},
  headStyles: { fillColor: [153, 153, 225], textColor: 255 },
  pagebreak: 'auto',
  rowPageBreak: 'avoid',
  columnStyles: {
    0: { cellWidth: 12, lineWidth: 0, textColor: 255, fillColor: false },
    1: { cellWidth: 80 },
    2: { cellWidth: 30 },
    3: { cellWidth: 55 },
    4: { cellWidth: 55 },
    5: { cellWidth: 40 }
  },
  didParseCell: function (data) {
    if (data.section === 'body') {
      if (data.row.index % 2 === 0 && data.column.index > 0 ) {
        data.cell.styles.fillColor = [200, 200, 239];
      } else if (data.column.index > 0){
        data.cell.styles.fillColor = [255, 255, 255];
      }
    }
  },
  didDrawPage: function (data) {
    const table = data.table;
    const startY = table.settings.margin.top;   // top of header
    const endY = data.cursor.y;                  // bottom of rows on this page
    const startX = table.settings.margin.left;
    const cellWidth = 11;                       // width of your rotated column

    // Draw filled rectangle spanning header + body for this page
    doc.setFillColor(153, 153, 225);
    doc.rect(startX, startY, cellWidth, endY - startY, 'F');


    // Rotated text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("GE", startX + cellWidth / 2 + 6, startY + (endY - startY) / 2, {
      angle: 90,
      align: 'center',
      baseline: 'middle'
    });
  },
  willDrawCell: function(data) {
    // Skip all cells in the first column (header + body)
    if (data.column.index === 0) {
      return false; // skip drawing this cell
    }
  }
});
}
}

function printCommunityList()
{
  doc.save("testClinicalTrialsList.pdf");  
}

function clearUpdateLine()
{
  document.getElementById("trialLastUpdated").innerHTML = "";
  document.getElementById("studyStatus").innerHTML = "";
  document.getElementById("studyStatus").classList.remove('bg-danger','bg-success');
}

function displayLastUpdateForTrial(mainCategory, trialName)
{
  //setting this as the default
  lastUpdatedString = "August 1, 2025 10:30:00";
  parsedDate = new Date(lastUpdatedString);
  
  changes.forEach(entry =>{
    
    if(entry[0] == mainCategory && entry[1] == trialName)
    {
      lastUpdatedString = entry[2];
      parsedDate = new Date(lastUpdatedString);
    }
    
});

  parsedDateHTML = "Last update: " + parsedDate.getFullYear() + "-";
  parsedDateHTML += parsedDate.toLocaleString('default', { month: 'short' }) + "-";
  parsedDateHTML += parsedDate.getDate();
  
  //here we fill in the last updated info to a badge
  document.getElementById("trialLastUpdated").innerHTML = parsedDateHTML;
}

function displayStudyStatus(studystatus)
{
  if (studystatus != "Active")
  {
    document.getElementById("studyStatus").classList.add("bg-danger");
  }
  else
  {
    document.getElementById("studyStatus").classList.add("bg-success");
  }

  document.getElementById("studyStatus").innerHTML = studystatus;
}

function toggleNav()
{
    if(document.getElementById("mainNavInner").classList.contains('active'))
    {
      document.getElementById("mainNavInner").classList.remove('active');
      document.getElementById("navToggle").innerHTML = "Browse by biomarker";
    }else
    {
      document.getElementById("mainNavInner").classList.add('active'); 
      document.getElementById("navToggle").innerHTML = "Browse by organ group";

    }

    clearTrialInfo();
    clearUpdateLine();
}

function clearTrialInfo()
{
    document.getElementById("trialName").innerHTML = "";
    document.getElementById("trialDetails").innerHTML = "";
}

function test()
{
  console.log(gastroesophageal_master);
}

function scrollToTrialName(scrollTarget)
{
    //breakpoint lg for bootstrap
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width <= 992)
    {
        const target = document.getElementById(scrollTarget);
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - document.getElementById("topNavBar").offsetHeight - 50;
    
        document.getElementById('footer').classList.add('bottomSpacerActive');
            
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });        
    }
}

function removeFooterSpacing()
{
    document.getElementById('footer').classList.remove('bottomSpacerActive');
}