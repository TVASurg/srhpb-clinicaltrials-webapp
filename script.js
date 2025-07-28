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
      console.log(biliary_BTC_master);
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

/*const liver_HCC_master = {
  names: [
    "NEOTOMA",
    "HMLTO002",
    "ARTEMIDE HCC01",
    "Phase II Cabozantinib in Recurrent HCC Post Liver Transplant (CaboTx)",
    "TYR430",
    "Phase I/II BC2059 in HCC"
  ],
  setting: [
    "Peri-OR",
    "Pre-transplant",
    "1st",
    "1st or 2nd",
    "Any line",
    "Last line"
  ],
  fullTitle: [
    "Neoadjuvant Tremelimumab + durvalumab and adjuvant durvalumab in previously untreated resectable HCC",
    "Atezolizumab and Bevacizumab Pre-Liver Transplantation for Patients with Hepatocellular Carcinoma Beyond Milan Criteria: A Feasibility Study",
    "A Phase III Randomised, Open Label, Sponsor-Blinded, Multicentre Study of Rilvegostomig in Combination with Bevacizumab with or without Tremelimumab as First-line Treatment in Patients with Advanced Hepatocellular Carcinoma",
    "With KRAS/NRAS and BRAF Wild-type Unresectable or Metastatic Left-sided Colorectal",
    "A Multicenter, Open-label, First-in-Human Study of TYRA-430 in Advanced Hepatocellular Carcinoma and Other Solid Tumors with Activating FGF/FGFR pathway aberrations (SURF-431)",
    "A phase 1/2 exploratory study of the TBL1 inhibitor, tegavivint (BC2059), in patients with advanced hepatocellular carcinoma"
  ],
  additionalNotes: ["", "", "", "", "", ""],
  arms: [
    "Durva + treme",
    "Atezo + bev",
    "A: Rilvegostomig + bev B: rilvegostomig + bev + tremelimumab",
    "Cabozanitnib",
    "TYR430",
    "BC2059, or BC2059+pembro"
  ],
  keyCriteria: [
    "Resectable HCC",
    "HCC, candidate for liver transplant",
    "HCC, not prior systemic therapy No main portal vein thrombosis ",
    "Recurrence after transplant",
    "FGF/FGFR pathway alteration",
    "CTNNB1 or AXIN1 Pre- and on treatment biopies "
  ],
  contact: [
    "jennifer.knox@uhn.ca",
    "eric.chen@uhn.ca",
    "jennifer.knox@uhn.ca",
    "robert.grant@uhn.ca<br/>jennifer.knox@uhn.ca",
    "ardnt.vogel@uhn.ca",
    "eric.chen@uhn.ca"
  ],
  NCT: [
    "NCT05440864",
    "NCT05185505",
    "NCT06921785",
    "NCT04204850",
    "NCT06915753",
    "NCT05797805"
  ]
};*/

/*const pancreas_master = {
        names: [
          "DORA (WOO)",
          "GO44479/ROCHE",
          "Prosper-PANC (Cohort 1)",
          "ABLATE",
          "NASC-009/NCI 10464",
          "Prosper-PANC (Cohort 2)",
          "CLARITY-PanTumour01",
          "20230223 (AMG193)",
          "PEGASUS",
          "OZM-114",
          "ADOPT",
          "BOLD-100-001",
          "NUANCE",
          "OPCS Registry",
          "HPB Banking Protocol"
        ],
        setting: [
          "Resectable",
          "Resectable",
          "Resectable",
          "Locally advanced unresectable",
          "Locally advanced unresectable",
          "Any line advanced",
          "1L metastatic",
          "1L metastatic",
          "1L metastatic",
          "2L metastatic",
          "2L metastatic",
          "2L metastatic",
          "Non-therapeutic",
          "Non-therapeutic",
          "Non-therapeutic"
        ],
        fullTitle: [
          "Durvalumab and Oleclumab in Resectable PDAC: A Window of Opportunity Study (DORA)",
          "A Study of the Efficacy and Safety of Adjuvant Autogene Cevumeran Plus Atezolizumab and mFOLFIRINOX Versus mFOLFIRINOX Alone in Participants With Resected PDAC",
          "Province of Ontario Strategy for Personalized Management of Pancreatic Cancer Trial",
          "Ablative radiation therapy with high dose geometric Boost for Locally Advanced pancreatic cancer patients following Treatment response Evaluation of standard of care induction chemotherapy (ABLATE): a phase II clinical trial",
          "A Phase 1 Study of Olaparib in Combination with Durvalumab (MEDI4736) and Concurrent Radiation Therapy Following First-Line Chemotherapy in Locally Advanced Unresectable Pancreatic Cancer",
          "Province of Ontario Strategy for Personalized Management of Pancreatic Cancer Trial",
          "A Phase II, Open-label, Multi-centre Study to Evaluate Safety, Tolerability, Efficacy, PK, and Immunogenicity of AZD0901 as Monotherapy and in Combination With Anti-cancer Agents in Participants With Advanced Solid Tumours Expressing Claudin 18.2",
          "A Study Evaluating AMG 193 in Combination With Other Therapies in Participants With Advanced Gastrointestinal, Biliary Tract, or Pancreatic Cancers With Homozygous Methylthioadenosine Phosphorylase (MTAP)-Deletion",
          "Pancreatic Cancer Glucose Assessment and Regulation Study",
          "Phase 1b Expansion Study of CX-5461 In Patients With Solid Tumors and BRCA2 and/or PALB2 mutation",
          "ADOPT: ADaptive Organoid-Based Precision Therapy Study in Pancreatic Cancer, A Prospective Single-Arm Phase II Trial",
          "A Phase 1b/2a Dose Escalation Study of BOLD-100 in Combination With FOLFOX Chemotherapy in Patients With Advanced Solid Tumours",
          "Optimizing Nutrition in patients with PDAC on chemo",
          "Ontario Pancreas Cancer Study: Identifying genetic, environmental, and lifestyle causes of PDAC",
          "HPB Banking Protocol",
        ],
        additionalNotes: [
          "Upfront resectable, CA19-9 < 300",
          "Upfront resectable, Randomized study of autogene cevumeran + Atezolizumab + mFOLFIRINOX vs. mFOLFIRINOX alone, CA19-9 < ~500",
          "Upfront resectable, Includes DORA and GO44479 patients",
          "Locally advanced unresectable on 1L chemo for at least 16 weeks with stable disease or partial response; Ideally pre-chemo biopsy under HPB tissue banking, page CRC to consent to HPB tissue banking prior to chemo",
          "Locally advanced unresectable on 1L chemo for at least 16 weeks without progression",
          "Unresectable, locally advanced and metastatic PDAC, At initial diagnosis or at progression – goal is to look for actionable mutations",
          "Investigate the safety and tolerability of AZD0901 monotherapy in combination with anti-cancer agents in PDAC (1L) in participants with advanced or metastatic solid tumours expressing CLDN18.2; Prior neoadjuvant/adjuvant chemotherapy is permitted as long as participants progressed ≥ 6 months (183 days) from the last dose",
          "A Phase 1b Study Evaluating the Safety, Tolerability, Pharmacokinetics, and Efficacy of AMG 193 in Combination with mFOLFIRINOX or with Gemcitabine and Nab-paclitaxel in Subjects with Locally Advanced or Metastatic Pancreatic Ductal Adenocarcinoma (PDAC) with Homozygous MTAP-deletion (Subprotocol B); Prior neoadjuvant/adjuvant therapy is allowed if completed at least 6 months prior to diagnosis of advanced and/or unresectable disease,and if subjects did not receive gemcitabine and/or nab-paclitaxel (arm 1) orany active agent of FOLFIRINOX (arm 2) in the neoadjuvant/adjuvant setting.",
          "mPDAC patients starting 1L mFFX, ECOG 0-1, Adequate bone marrow and organ function, RECIST measurable disease at BL, No prior diabetes diagnosis, HbA1C < 6.5%",
          "",
          "",
          "",
          "Optimizing Nutrition in patients with PDAC on chemo",
          "All PDAC patients",
          "All PDAC patients going to surgery who are not enrolled in Prosper-PANC; Advanced patients who are not eligible for Prosper-PANC but having a biopsy and investigator requests WGTS"
        ],
        arms: [
          "Baseline EUS biopsy<br/><br/> Durvalumab 1500 mg IV x 1 dose and oleclumab 3000 mg x 2 doses Q2W prior to resection",
          "Tissue collected at surgery for adjuvant vaccine manufacture<br/><br/> Arm 1: autogene cevumeran+Atezo+mFOLFIRINOX<br/><br/> Arm 2: mFOLFIRINOX",
          "Fresh tissue collection for WGTS + organoids<br/><br/> Serial blood draws for ctDNA",
          "Pre-radiation biopsy optional<br/><br/> Ablative high dose RT: 50Gy/5Fx or 67.5Gy/15Fx or 75Gy/25Fx",
          "Cycle 1: Olaparib BID + Durvalumab C1D1<br/><br/> Cycle 2: Olaparib + Durva + RT (39Gy in 15Fx starting C2D1)<br/><br/> Cycle 3 onwards: Olaparib + Durva q4w",
          "Requires fresh tumor biopsy for WGTS + organoids<br/><br/> Serial blood draws wk 2, 4, 8 and q8 for ctDNA",
          "Pre-screen: needs archival ( ≤ 24 months) or fresh tissue<br/><br/> Arm1: AZD0901 in combination with 5FU/leucovorin and Irinotecan or nanoliposomal Irinotecan<br/><br/> Arm2: AZD0901 combination with Gemcitabine",
          "Pre-screen: needs archival or fresh tissue<br/><br/> AMG 193 alone or in combination with mFOLFIRINOX or with Gemcitabine and Nab-paclitaxel",
          "Continuous glucose monitor (CGM) for first 2 months of mFFX<br/><br/> Arm 1: Intensive glucose intervention with endocrinologist directed glycemic management, with target glucose levels between 4-10 mmol/L<br/><br/> Arm 2: Standard of care glucose intervention with intervention only if glucose level >15 mmol/L (Blinded to CGM results)",
          "Phase 1b Expansion Study of CX-5461 In Patients with Solid Tumors and BRCA2 and/or PALB2 mutation",
          "PDO-directed therapy",
          "Arm VII: dose expansion - randomized 1:1:1open label to 500 mg/m2 or 625 mg/m2 BOLD-100 in combination with FOLFOX or FOLFOX alone<br/><br/> BOLD-100: IV ruthenium-based small molecule decreasing GRP78 in tumor cells",
          "Weekly / monthly calls with Dietician, Clinical Nurse Specialist and Social Worker<br/><br/> QOL questionnaires at BL, 2 months and 6 months",
          "Questionnaire + one-time blood draw",
          "Fresh tumor collection for WGTS ± organoids"
        ],
        keyCriteria: [
          "Inclusion: <br/><br/>Resectable PDAC by NCCN criteria, CA 19-9 < 300<br/><br/> Life expectancy ≥ 12 weeks<br/><br/> Exclusion: <br/><br/>Anticancer therapy within 21 days or palliative RT within 14 days prior to 1st dose<br/><br/> Other invasive malignancy within 5 years<br/><br/> Prior receipt of any immune-mediated therapy<br/><br/> Other invasive malignancy within 5 years<br/><br/> Prior history of myocardial infarction, transient ischemic attack, congestive heart failure ≥ Class 3 based on New York Heart Association Functional Classification or stroke within the past 3 months prior to the scheduled first dose of study treatment<br/><br/> Positve for HIV",
          "Inclusion: <br/><br/>TNM Staging per AJCC: T1-T3, N0-N2, and M0<br/><br/> Complete resection (R0 or R1) of PDAC<br/><br/> Interval of between 6 and 12 weeks since resection of PDAC<br/><br/> Exclusion: <br/><br/>Prior adjuvant, neoadjuvant, or induction treatment for pancreatic cancer<br/><br/> Known complete dihydropyrimidine dehydrogenase (DPD) deficiency",
          "Inclusion: <br/><br/>Upfront resectable: definition of resectability will be according to NCCN guidelines and the patient must be planned for a surgery first approach<br/><br/> Life expectancy of ≥ 6 months<br/><br/> Must be suitable for systemic therapy<br/><br/> Exclusion: <br/><br/>Histologies excluded: colloid, high grade neuroendocrine<br/><br/> Patients receiving neoadjuvant chemotherapy (neoadjuvant immunotherapy is permitted)",
          "Inclusion: <br/><br/>Pancreatic tumour <8.0 cm in greatest axial dimension - final determination will be based upon satisfying the radiation normal tissue constraints<br/><br/> Life expectancy > 6 months<br/><br/> Prior 1L chemotherapy for at least 16 weeks without clinical or radiographic progression<br/><br/> Exclusion: <br/><br/>Metastatic disease at the time of registration<br/><br/> Prior RT to the upper abdomen region that would result in overlap of RT volume<br/><br/> Currently on anti-cancer treatment including chemotherapy",
          "Inclusion: <br/><br/>have had prior 1L chemotherapy for this cancer for at least 16 weeks without clinical, biochemical, or radiologic progression<br/><br/> Body weight > 30 kg<br/><br/> Life expectancy >= 16 weeks<br/><br/> Willing to provide archived tissue, if available, from a previous biopsy<br/><br/> Exclusion: <br/><br/>Had prior upper abdominal radiotherapy prior to entering the study<br/><br/> Major surgical procedure within 28 days prior to enrollment<br/><br/> Patients who are receiving any other investigational agents<br/><br/> Must not have germline BRCA1 or BRCA2 mutation.",
          "Inclusion: <br/><br/>All stages are eligible including locally advanced unresectable, first-line metastatic, second-line (or beyond) metastatic<br/><br/> Single lesion is to be biopsied: a minimum of 4 to 6 x 18 Gauge (G) good quality tumour cores must be safely obtainable<br/><br/> Exclusion: <br/><br/>Without a tumour lesion amenable to biopsy or with tumour lesions that are not safe for sampling a minimum of 4 to 6 x 18G good quality tumour cores<br/><br/> Patients who are not fit enough to undergo a tumour biopsy",
          "Inclusion: <br/><br/>CLDN18.2 positive at least one measurable lesion according to RECIST v1.1<br/><br/> Life expectancy of ≥ 12 weeks<br/><br/> Exclusion: <br/><br/>Unstable or active peptic ulcer disease or digestive tract bleeding including but not limited to clinically significant bleeding in the setting of prior CLDN18.2 directed therapy<br/><br/> Clinically significant ascites that require drainage<br/><br/> History of another primary malignancy.",
          "Inclusion: <br/><br/>ECOG 0-1<br/><br/> Tumor tissue (FFPE sample) or an archival block must be available<br/><br/> Participants without archived tumor tissue available may be allowed to enroll by undergoing tumor biopsy before dosing<br/><br/> Homozygous MTAP-deletion<br/><br/> Disease measurable as defined by RECIST v1.1<br/><br/> Exclusion: <br/><br/>Prior systemic therapy for advanced or unresectable (locally advanced) adenocarcinoma of the pancreas<br/><br/> Prior treatment with a MAT2A inhibitor or a PRMT5 inhibitor<br/><br/> Radiation therapy within 28 days of first dose.",
          "Exclusion: <br/><br/>Absence of distant or lymph node metastases<br/><br/> Participants withborderline resectable or locally advanced PDAC are not eligible<br/><br/> Received prior systemic therapy (chemotherapy or any other anti-cancer agent) for treatment of metastatic PDAC Known diagnosis of type I diabetes where strict glucose control and close Endocrinology follow-up is already indicated<br/><br/> Known diagnosis of type II diabetes and already followed by Endocrinologist",
          "Inclusion: <br/><br/>Histologically confirmed pancreatic, ovarian, prostate or breast cancers with pathogenic/likely pathogenic germline BRCA2 and/or PALB2 mutation<br/><br/> Measurable disease as per RECIST 1.1<br/><br/> Exclusion: <br/><br/>Patients with malignant bowel obstruction<br/><br/> Unresolved toxicity > CTCAE grade 1 from previous anti-cancer therapy<br/><br/> Treatment with an investigational (non-registered - other than PARP inhibitor) agent within 30 days and treatment with PARP inhibitor within 14 days prior to the first dose of study medication<br/><br/> No concurrent systemic anti-cancer therapy, biological therapy or other novel agent is to be permitted.",
          "Inclusion: <br/><br/>Advanced, inoperable PDAC<br/><br/> Stable disease or partial response to FOLFIRINOX after ≥4 months (Cohort B)<br/><br/> Disease progression post-SOC (Cohort A)<br/><br/> No max prior treatment lines<br/><br/> recurrence within 6 months of adjuvant-intent chemo eligible<br/><br/> Must have a Patient Derived Organoid (PDO) showing sensitivity to HC Marketed drug(s)<br/><br/> Exclusion: <br/><br/>Patients concurrently receiving any other anti-cancer therapy<br/><br/> Patients with ongoing toxicity ≥ CTCAE grade 2; ongoing peripheral neuropathy of ≥ CTCAE grade 3<br/><br/> Patients with a prior or concurrent malignancy whose natural history or treatment has the potential to interfere with the safety or efficacy assessment of the investigational regimen",
          "Inclusion: <br/><br/>Histologically and/or cytologically confirmed gastrointestinal tumours that are metastatic or unresectable, and have measurable disease according to RECIST v1.1 (at least one measurable lesion)<br/><br/> ARM VII --> subjects must have received only 1 prior line of therapy but remain naive to oxaliplatin prior to enrollment<br/><br/> Exclusion: <br/><br/>MSH-H tumours<br/><br/> concurrent monoclonal antibody therapy: anti-EGFR or anti-VEGF",
          "",
          "",
          ""
        ],
        contact: [
          "Mary (Lan) Wei<br/> Pager: 416-715-0289<br/> Phone: 416-946-4501 ext. 3048",
          "Guillaume Cheung<br/> Tel: 416-946-4501 ext. 4727 ",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Nicole De Pinto<br/> Tel: 416-946-4501 ext. 3132 ",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Pre-screen: <br/>Dorian Facey: 437-779-7757<br/> Rachel Ding: 437-990-4238<br/><br/> Screen: <br/>guillaume.cheung@uhn.ca",
          "Ochir Gansukh<br/> 416-946-4501 ext. 4551<br/> ochir.gansukh@uhn.ca<br/><br/> Maggie Hildebrand<br/> Maggie.Hildebrand@uhn.ca",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Nicole De Pinto<br/> Tel: 416-946-4501 ext. 3132 ",
          "Mary (Lan) Wei<br/> Pager: 416-715-0289<br/> Phone: 416-946-4501 ext. 3048",
          "Nicole De Pinto<br/> Tel: 416-946-4501 ext. 3132 ",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757",
          "Rachel Ding<br/> 437-990-4238<br/><br/> Dorian Facey<br/> 437-779-7757"
        ],
        NCT: [
          "NCT06060405",
          "NCT05968326",
          "NCT05927298",
          "NCT06453486",
          "NCT05411094",
          "NCT05927298",
          "NCT06219941",
          "NCT06360354",
          "NCT05132244",
          "NCT04890613",
          "N/A",
          "NCT04421820",
          "N/A",
          "N/A",
          "N/A"
        ]
      };*/

const pancreas_preActivation ={
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
      }


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

function addIndicator()
{
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
