//idea is the pull the master JSON file
function initAllData() {
  fetch(`/jsonUpdates/latest.json?ver=${Date.now()}`)
    .then(res => res.json())
    .then(data => {
      // Loop through each sheet
        for (const [sheetName, rows] of Object.entries(data)) {
        if (sheetName === "CCA") {
          rows.forEach((row, i) => {
            // Make sure biliary_BTC_master is defined and has a names array
            biliary_BTC_master["names"].push(row["Trial Name"]);
            biliary_BTC_master["setting"].push(row["Disease Setting"]);
            biliary_BTC_master["fullTitle"].push(row["Full title"]);
            biliary_BTC_master["additionalNotes"].push(row["Additional notes"]);
            biliary_BTC_master["tissueRequirements"].push(row["Tissue Requirements"]);
            biliary_BTC_master["arms"].push(row["Trial Intervention/Arms"]);
            biliary_BTC_master["keyCriteria"].push(row["Eligibility "]);
            biliary_BTC_master["contact"].push(row["Contacts"]);
            biliary_BTC_master["NCT"].push(row["NCT number"]);
            biliary_BTC_master["schema"].push(row["Schema image data"]);
          });
        }
        else if (sheetName === "HCC") {
          rows.forEach((row, i) => {
            // Make sure biliary_BTC_master is defined and has a names array
            liver_HCC_master["names"].push(row["Trial Name"]);
            liver_HCC_master["setting"].push(row["Disease Setting"]);
            liver_HCC_master["fullTitle"].push(row["Full title"]);
            liver_HCC_master["additionalNotes"].push(row["Additional notes"]);
            liver_HCC_master["tissueRequirements"].push(row["Tissue Requirements"]);
            liver_HCC_master["arms"].push(row["Trial Intervention/Arms"]);
            liver_HCC_master["keyCriteria"].push(row["Eligibility "]);
            liver_HCC_master["contact"].push(row["Contacts"]);
            liver_HCC_master["NCT"].push(row["NCT number"]);
            liver_HCC_master["schema"].push(row["Schema image data"]);
          });
        }
        else if (sheetName === "PDAC") {
          rows.forEach((row, i) => {
            // Make sure biliary_BTC_master is defined and has a names array
            pancreas_master["names"].push(row["Trial Name"]);
            pancreas_master["setting"].push(row["Disease Setting"]);
            pancreas_master["fullTitle"].push(row["Full title"]);
            pancreas_master["additionalNotes"].push(row["Additional notes"]);
            pancreas_master["tissueRequirements"].push(row["Tissue Requirements"]);
            pancreas_master["arms"].push(row["Trial Intervention/Arms"]);
            pancreas_master["keyCriteria"].push(row["Eligibility "]);
            pancreas_master["contact"].push(row["Contacts"]);
            pancreas_master["NCT"].push(row["NCT number"]);
            //adding in base64 encoded images
            pancreas_master["schema"].push(row["Schema image data"]);
          });
        }

      }
    })
    //.catch(err => console.error('Error parsing JSON:', err));
  
  hidePreactivations(pancreas_preactivation, "pancreas_preactivation")
}

//then populate these const arrays 
//the other fun functions can proceed as usual

const biliary_BTC_master = {
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
  schema:[]
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
  schema:[]
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

function fillTrialNameBasedOnSetting(mainCategory, setting) {
  //document.getElementById("scroll-spacer").style.display= 'block';
  
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
      outputHTMLstring += '<label class="btn btn-outline-dark text-start" for="trialName';
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
}

function fillTrialDetails(mainCategory, key) {
  
  var htmlString = "";
  var titleString = "";
  var notesString = "";
  var tissueReqString = "";
  var armString = "";
  var criteriaString = "";
  var schemaString = "";
  var contactString = "";
  var NCTstring = "";

  //ul elements
  htmlString += '<ul class="list-group list-group p-3">';

  //Full title
  titleString += '<li class="list-group-item bg-gray-200 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#fullTitleCollapse">Full title</li><li class="list-inline-item ps-5 collapse" id="fullTitleCollapse"><p class="py-2">';
  titleString += mainCategory[`fullTitle`][key];
  titleString += '</p></li>';
  
 
  //Additional notes (optional)
  if(mainCategory[`additionalNotes`][key] != null)
    {
    notesString += '<li class="list-group-item bg-gray-200 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#notesCollapse">Additional notes</li><li class="list-inline-item ps-5 collapse" id="notesCollapse"><p class="py-2">';
    notesString += mainCategory[`additionalNotes`][key].replaceAll("\n", "<br/>");
    notesString += '</p></li>';
    }
 
  
  //Tissue requirements (optional)
  if(mainCategory[`tissueRequirements`][key] != null)
    {
    tissueReqString += '<li class="list-group-item bg-gray-300 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#tissueReqCollapse">Tissue requirements</li><li class="list-inline-item ps-5 collapse" id="tissueReqCollapse"><p class="py-2">';
    tissueReqString += mainCategory[`tissueRequirements`][key].replaceAll("\n", "<br/>");
    tissueReqString += '</p></li>';
    }
  
  
  //Arms
  armString += '<li class="list-group-item bg-gray-300 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#armsCollapse">Arms</li><li class="list-inline-item ps-5 collapse" id="armsCollapse"><p class="py-2">';
  armString += mainCategory[`arms`][key].replaceAll("\n", "<br/>");
  armString += "</p></li>";

  //Key criteria
  if(mainCategory[`keyCriteria`][key] != null)
    {
  criteriaString += '<li class="list-group-item bg-gray-400 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#keyCollapse">Key criteria</li><li class="list-inline-item ps-5 collapse" id="keyCollapse"><p class="py-2">';
  criteriaString += mainCategory[`keyCriteria`][key].replaceAll("\n", "<br/>");      
  criteriaString += "</p></li>";
    }
  
  //Schema
  if(mainCategory[`schema`][key] != null)
    {
  schemaString += '<li class="list-group-item bg-gray-400 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#schemaCollapse">Schema</li><li class="list-inline-item ps-5 collapse" id="schemaCollapse"><p class="my-2"><a href="" onclick="event.preventDefault(); openImage(`';
  schemaString += mainCategory[`schema`][key]; 
  schemaString += '`)">View schema</a></p></li>';
    }

  //Contact
  contactString += '<li class="list-group-item bg-gray-500 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#contactCollapse">Contact</li><li class="list-inline-item ps-5 collapse" id="contactCollapse"><p class="py-2">';

  
  //contactString += mainCategory[`contact`][key];
  //contactString += mainCategory[`contact`][key].replaceAll("\n", "<br/>");
  contactString += parseContact(mainCategory[`contact`][key]);
  contactString += '</p></li>';
  
  //More information link
  if(mainCategory[`NCT`][key] != null)
    {
  NCTstring += '<li class="list-group-item bg-gray-600 text-gray-900 btn btn-toggle d-inline-flex align-items-center fw-semibold" data-bs-toggle="collapse" data-bs-target="#nctCollapse">More information</li><li class="list-inline-item ps-5 collapse" id="nctCollapse"><p class="py-2">';
  NCTstring += '<a target="_blank" href="https://clinicaltrials.gov/study/';
  NCTstring += mainCategory[`NCT`][key];
  NCTstring += '">Link to clinicaltrials.gov</p></li>';
    }   

  htmlString += titleString + notesString + armString + tissueReqString + criteriaString + schemaString+ contactString + NCTstring;
  
  htmlString += "</ul>";

  
  document.getElementById("trialDetails").innerHTML = htmlString;
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
initAllData();

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


/*

<a href="#" class="list-group-item list-group-item-action py-3 lh-sm">
<div class="d-flex w-100 align-items-center justify-content-between"> 
  <strong class="mb-1"></strong> 
</div>
<div class="col-10 mb-1"></div>
</a> 
*/
