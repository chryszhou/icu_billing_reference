window.SITE = {
 "base": 6752.61,
 "organ": [
  {
   "section": "RESPIRATORY (incl. pulmonary hypertension)",
   "rows": [
    {
     "code": "J96.01",
     "name": "Acute respiratory failure with hypoxia",
     "status": "MCC",
     "tip": "Support with PaO2/FiO2 or SpO2 + O2 need."
    },
    {
     "code": "J96.02",
     "name": "Acute respiratory failure with hypercapnia",
     "status": "MCC",
     "tip": "Tie to ABG (PaCO2) + ventilatory support; don't also code acidosis (integral)."
    },
    {
     "code": "J96.00",
     "name": "Acute respiratory failure, unspecified",
     "status": "MCC",
     "tip": "Specify hypoxic vs hypercapnic."
    },
    {
     "code": "J96.21/.22",
     "name": "Acute-on-chronic resp failure (hypoxic/hypercapnic)",
     "status": "MCC",
     "tip": "Link the chronic baseline (COPD, OHS) + acute decompensation."
    },
    {
     "code": "J96.10/.11/.12",
     "name": "Chronic respiratory failure",
     "status": "CC",
     "tip": "Chronic alone is only a CC."
    },
    {
     "code": "J80",
     "name": "Acute respiratory distress syndrome (ARDS)",
     "status": "MCC",
     "tip": "Berlin criteria; bilateral infiltrates not cardiac."
    },
    {
     "code": "J44.1",
     "name": "COPD with (acute) exacerbation",
     "status": "CC",
     "tip": "'Exacerbation/decompensation' must be stated."
    },
    {
     "code": "J44.0",
     "name": "COPD with acute lower respiratory infection",
     "status": "CC",
     "tip": "Also code the infection (pneumonia)."
    },
    {
     "code": "J45.901/.902",
     "name": "Asthma w/ (acute) exacerbation / status asthmaticus",
     "status": "CC",
     "tip": "Use 'status asthmaticus' when applicable."
    },
    {
     "code": "J15.212 / J15.211",
     "name": "Pneumonia due to MRSA / MSSA",
     "status": "CC",
     "tip": "Document culture organism."
    },
    {
     "code": "J15.0/.1/.5/.6",
     "name": "Pneumonia: Klebsiella / Pseudomonas / E.coli / other GN",
     "status": "CC",
     "tip": "Gram-negative pneumonias are CC."
    },
    {
     "code": "J69.0",
     "name": "Aspiration pneumonia",
     "status": "CC",
     "tip": "Document witnessed/suspected aspiration event."
    },
    {
     "code": "U07.1",
     "name": "COVID-19",
     "status": "MCC",
     "tip": "Code first; add manifestations (pneumonia J12.82, ARF, ARDS)."
    },
    {
     "code": "J10.0-/J11.0-",
     "name": "Influenza with pneumonia",
     "status": "CC",
     "tip": "Specify identified vs unidentified virus."
    },
    {
     "code": "J95.851",
     "name": "Ventilator-associated pneumonia",
     "status": "CC",
     "tip": "Provider must state 'VAP'; add organism."
    },
    {
     "code": "I26.02/.09",
     "name": "Pulmonary embolism WITH acute cor pulmonale (saddle/other)",
     "status": "MCC",
     "tip": "RV strain/cor pulmonale drives MCC; document echo/CT."
    },
    {
     "code": "I26.99",
     "name": "Pulmonary embolism without acute cor pulmonale",
     "status": "CC",
     "tip": "Document saddle/segmental + RV status."
    },
    {
     "code": "J93.0",
     "name": "Spontaneous tension pneumothorax",
     "status": "MCC",
     "tip": "J93.0 is the only MCC pneumothorax; other J93.x are CC."
    },
    {
     "code": "J90 / J91.8",
     "name": "Pleural effusion",
     "status": "Neither",
     "tip": "Code the underlying cause."
    },
    {
     "code": "R09.2",
     "name": "Respiratory arrest",
     "status": "MCC",
     "tip": "Distinct from cardiac arrest."
    },
    {
     "code": "I27.0",
     "name": "Primary (idiopathic) pulmonary arterial hypertension",
     "status": "CC",
     "tip": "Within I27, only I27.0, I27.1, and I27.82 (chronic PE) carry CC weight."
    },
    {
     "code": "I27.20",
     "name": "Pulmonary hypertension, unspecified",
     "status": "Neither",
     "tip": "No severity weight."
    },
    {
     "code": "I27.21",
     "name": "Secondary pulmonary arterial hypertension",
     "status": "Neither",
     "tip": "No severity weight."
    },
    {
     "code": "I27.22",
     "name": "PH due to left heart disease",
     "status": "Neither",
     "tip": "No weight; Group 2 PH."
    },
    {
     "code": "I27.23",
     "name": "PH due to lung diseases and hypoxia",
     "status": "Neither",
     "tip": "Group 3 PH (common in ICU/COPD) — NOT a CC; the lung disease/resp failure carries the severity."
    },
    {
     "code": "I27.24",
     "name": "Chronic thromboembolic PH (CTEPH)",
     "status": "Neither",
     "tip": "No weight (but chronic PE I27.82 IS a CC)."
    },
    {
     "code": "I27.29",
     "name": "Other secondary pulmonary hypertension",
     "status": "Neither",
     "tip": "No severity weight."
    },
    {
     "code": "I27.81/.83",
     "name": "Cor pulmonale (chronic) / Eisenmenger syndrome",
     "status": "Neither",
     "tip": "Neither carries weight."
    }
   ]
  },
  {
   "section": "CARDIOVASCULAR",
   "rows": [
    {
     "code": "R57.0",
     "name": "Cardiogenic shock",
     "status": "MCC",
     "tip": "Link to MI/HF."
    },
    {
     "code": "R57.1",
     "name": "Hypovolemic shock",
     "status": "MCC",
     "tip": "Document source (hemorrhage vs volume loss)."
    },
    {
     "code": "R57.9",
     "name": "Shock, unspecified",
     "status": "MCC",
     "tip": "Specify type when known."
    },
    {
     "code": "R65.21",
     "name": "Severe sepsis with septic shock",
     "status": "MCC",
     "tip": "Sequence infection first; distributive shock."
    },
    {
     "code": "I46.2/.8/.9",
     "name": "Cardiac arrest (cardiac cause / other / unspecified)",
     "status": "MCC",
     "tip": "Specify cause; pair with CPR. 'PEA' has no unique code."
    },
    {
     "code": "I21.4",
     "name": "NSTEMI",
     "status": "MCC",
     "tip": "Type 1 vs type 2 (demand=I21.A1)."
    },
    {
     "code": "I21.A1",
     "name": "Myocardial infarction type 2 (demand)",
     "status": "CC",
     "tip": "Document demand-ischemia trigger; CC not MCC."
    },
    {
     "code": "I21.0-/.1-/.2-/.3",
     "name": "STEMI (by wall / unspecified)",
     "status": "MCC",
     "tip": "Specify wall/artery."
    },
    {
     "code": "I50.21/.23",
     "name": "Acute / acute-on-chronic systolic HF (HFrEF)",
     "status": "MCC",
     "tip": "'Acute' or 'acute on chronic' required."
    },
    {
     "code": "I50.31/.33",
     "name": "Acute / acute-on-chronic diastolic HF (HFpEF)",
     "status": "MCC",
     "tip": "Same acuity rule."
    },
    {
     "code": "I50.41/.43",
     "name": "Acute / acute-on-chronic combined HF",
     "status": "MCC",
     "tip": "Document both components."
    },
    {
     "code": "I50.22/.32/.42",
     "name": "Chronic systolic / diastolic / combined HF",
     "status": "CC",
     "tip": "Chronic-only is CC."
    },
    {
     "code": "I42.0/.8/.9",
     "name": "Cardiomyopathy (dilated / other / unspecified)",
     "status": "CC",
     "tip": "Specify type; takotsubo = I51.81."
    },
    {
     "code": "I47.2",
     "name": "Ventricular tachycardia",
     "status": "CC",
     "tip": "Sustained vs nonsustained."
    },
    {
     "code": "I49.01",
     "name": "Ventricular fibrillation",
     "status": "MCC",
     "tip": "Ties to arrest/defibrillation."
    },
    {
     "code": "I48.0/.91",
     "name": "Atrial fibrillation (paroxysmal / unspecified)",
     "status": "Neither",
     "tip": "Specify type; flutter I48.92 also no weight."
    },
    {
     "code": "I16.1",
     "name": "Hypertensive emergency",
     "status": "CC",
     "tip": "'Emergency' (end-organ damage) vs 'urgency' I16.0 (no weight)."
    },
    {
     "code": "I71.00-.03",
     "name": "Aortic dissection (by site)",
     "status": "MCC",
     "tip": "Specify thoracic/abdominal/thoracoabdominal."
    },
    {
     "code": "I31.4 / I31.9",
     "name": "Cardiac tamponade (I31.4) / pericardial disease, unsp (I31.9)",
     "status": "CC",
     "tip": "Both CC. Note: I31.4 = tamponade; noninflammatory pericardial effusion = I31.39 (also CC)."
    },
    {
     "code": "I33.0",
     "name": "Acute/subacute infective endocarditis",
     "status": "MCC",
     "tip": "Add organism (B95-B96); document vegetation/valve."
    },
    {
     "code": "I40.0/.1/.8/.9",
     "name": "Acute myocarditis",
     "status": "MCC",
     "tip": "All acute myocarditis (I40.x) is MCC; chronic/unspecified (I51.4) carries no weight."
    }
   ]
  },
  {
   "section": "RENAL / FLUID-ELECTROLYTE / ACID-BASE",
   "rows": [
    {
     "code": "N17.0",
     "name": "AKI with tubular necrosis (ATN)",
     "status": "CC",
     "tip": "ATN is a CC, NOT MCC; document ischemic/nephrotoxic."
    },
    {
     "code": "N17.9",
     "name": "Acute kidney injury, unspecified",
     "status": "CC",
     "tip": "AKI = CC, not MCC. Tie labs to a stated diagnosis."
    },
    {
     "code": "N17.x + N18.x",
     "name": "AKI on CKD",
     "status": "CC",
     "tip": "Code both; sequence per reason for admission."
    },
    {
     "code": "N18.6",
     "name": "End-stage renal disease",
     "status": "CC",
     "tip": "Requires dialysis dependence (add Z99.2)."
    },
    {
     "code": "N18.5",
     "name": "CKD stage 5 (not ESRD)",
     "status": "CC",
     "tip": "Distinguish from ESRD."
    },
    {
     "code": "N18.4",
     "name": "CKD stage 4 (severe)",
     "status": "CC",
     "tip": "Stage by eGFR."
    },
    {
     "code": "N18.30/.31/.32",
     "name": "CKD stage 3 (unsp/3a/3b)",
     "status": "Neither",
     "tip": "Stages 1-3 carry no weight."
    },
    {
     "code": "E87.21",
     "name": "Acute metabolic acidosis (incl. acute lactic)",
     "status": "CC",
     "tip": "Document lactate/anion gap; not coded if integral to DKA/shock."
    },
    {
     "code": "E87.20/.22/.29",
     "name": "Acidosis (unspecified / chronic metabolic / other)",
     "status": "CC",
     "tip": "Specify type and driver (pH, bicarb)."
    },
    {
     "code": "E87.3",
     "name": "Alkalosis",
     "status": "CC",
     "tip": "Metabolic vs respiratory."
    },
    {
     "code": "E87.0",
     "name": "Hyperosmolality and hypernatremia",
     "status": "CC",
     "tip": "Document Na and osmolality."
    },
    {
     "code": "E87.1",
     "name": "Hypo-osmolality and hyponatremia",
     "status": "CC",
     "tip": "Distinguish hypo/eu/hypervolemic etiology."
    },
    {
     "code": "E87.5",
     "name": "Hyperkalemia",
     "status": "Neither",
     "tip": "No severity weight (confirmed). Document EKG changes/treatment for the clinical record."
    },
    {
     "code": "E87.6",
     "name": "Hypokalemia",
     "status": "Neither",
     "tip": "No severity weight."
    },
    {
     "code": "E87.70/.71",
     "name": "Fluid overload / TACO",
     "status": "Neither",
     "tip": "No severity weight."
    },
    {
     "code": "E83.52",
     "name": "Hypercalcemia",
     "status": "Neither",
     "tip": "No severity weight; document level/cause clinically."
    },
    {
     "code": "E86.0/.1/.9",
     "name": "Volume depletion (dehydration / hypovolemia / unsp)",
     "status": "Neither",
     "tip": "Distinct from hypovolemic shock (R57.1, MCC)."
    },
    {
     "code": "M62.82",
     "name": "Rhabdomyolysis",
     "status": "CC",
     "tip": "Document CK elevation; link to AKI if present."
    },
    {
     "code": "Z99.2",
     "name": "Dependence on renal dialysis",
     "status": "Neither",
     "tip": "No weight; the CC is ESRD (N18.6)."
    }
   ]
  },
  {
   "section": "NEUROLOGIC",
   "rows": [
    {
     "code": "G93.41",
     "name": "Acute metabolic encephalopathy",
     "status": "MCC",
     "tip": "Document trigger (uremia, electrolytes) + altered mentation."
    },
    {
     "code": "G92.8",
     "name": "Other toxic encephalopathy",
     "status": "MCC",
     "tip": "'Code first' the toxin/drug."
    },
    {
     "code": "G93.40",
     "name": "Encephalopathy, unspecified",
     "status": "CC",
     "tip": "Specify metabolic/toxic to reach MCC."
    },
    {
     "code": "G93.49",
     "name": "Other encephalopathy (incl. septic)",
     "status": "CC",
     "tip": "Document infection link; G93.41 metabolic is MCC."
    },
    {
     "code": "F05",
     "name": "Delirium due to known physiological condition",
     "status": "CC",
     "tip": "'Delirium', not just 'altered mental status'; link to cause."
    },
    {
     "code": "R40.20",
     "name": "Coma, unspecified",
     "status": "MCC",
     "tip": "Entire R40.2x coma-scale series is MCC; document GCS."
    },
    {
     "code": "G40.911",
     "name": "Epilepsy w/ status epilepticus, intractable",
     "status": "MCC",
     "tip": "'Status epilepticus' is the driver; note duration/refractory."
    },
    {
     "code": "I63.x",
     "name": "Cerebral infarction (ischemic stroke)",
     "status": "CC",
     "tip": "Specify mechanism/vessel (I63.0-I63.5)."
    },
    {
     "code": "I61.x",
     "name": "Nontraumatic intracerebral hemorrhage",
     "status": "MCC",
     "tip": "Specify location."
    },
    {
     "code": "I60.x",
     "name": "Nontraumatic subarachnoid hemorrhage",
     "status": "MCC",
     "tip": "Specify source artery; document aneurysm."
    },
    {
     "code": "G93.1",
     "name": "Anoxic brain damage, NEC",
     "status": "CC",
     "tip": "CC, NOT MCC; document anoxic event/duration."
    },
    {
     "code": "G93.6",
     "name": "Cerebral edema",
     "status": "MCC",
     "tip": "Distinguish from herniation (G93.5); imaging/ICP."
    },
    {
     "code": "S06.x",
     "name": "Traumatic brain injury (SDH, contusion, diffuse)",
     "status": "MCC",
     "tip": "S06 intracranial injury at initial encounter (7th char A) is MCC; specify type/LOC."
    },
    {
     "code": "G61.0",
     "name": "Guillain-Barre syndrome",
     "status": "CC",
     "tip": "Document ascending weakness/areflexia; flag resp involvement."
    },
    {
     "code": "G70.01",
     "name": "Myasthenia gravis with (acute) exacerbation/crisis",
     "status": "MCC",
     "tip": "'With exacerbation/crisis'=MCC; G70.00 without=CC."
    },
    {
     "code": "G72.81",
     "name": "Critical illness myopathy (ICU-acquired weakness)",
     "status": "CC",
     "tip": "Document EMG/clinical exam."
    },
    {
     "code": "G62.81",
     "name": "Critical illness polyneuropathy",
     "status": "CC",
     "tip": "Distinguish from myopathy; can coexist."
    },
    {
     "code": "G93.82",
     "name": "Brain death",
     "status": "MCC",
     "tip": "Document clinical brain-death exam."
    }
   ]
  },
  {
   "section": "GI / HEPATIC",
   "rows": [
    {
     "code": "K25.0/.4 / K26.0/.4",
     "name": "Gastric / duodenal ulcer WITH hemorrhage",
     "status": "MCC",
     "tip": "State 'with hemorrhage' explicitly."
    },
    {
     "code": "K92.0/.1/.2",
     "name": "GI hemorrhage (hematemesis / melena / unspecified)",
     "status": "CC",
     "tip": "Specify source/site when known."
    },
    {
     "code": "I85.01 / I85.11",
     "name": "Esophageal varices WITH bleeding (primary/secondary)",
     "status": "MCC",
     "tip": "Active variceal hemorrhage; note banding/octreotide."
    },
    {
     "code": "I85.00 / I85.10",
     "name": "Esophageal varices without bleeding",
     "status": "Neither (CC if primary I85.00)",
     "tip": "I85.00 is CC; secondary I85.10 no weight."
    },
    {
     "code": "K72.00/.01",
     "name": "Acute/subacute hepatic failure (without/with coma)",
     "status": "MCC",
     "tip": "Acute liver failure is MCC."
    },
    {
     "code": "K72.10",
     "name": "Chronic hepatic failure without coma",
     "status": "CC",
     "tip": "'Chronic' without coma is CC."
    },
    {
     "code": "K72.11/.91",
     "name": "Hepatic failure with coma",
     "status": "MCC",
     "tip": "Coma upgrades to MCC."
    },
    {
     "code": "K76.82",
     "name": "Hepatic encephalopathy",
     "status": "Neither",
     "tip": "Confirmed NOT a CC/MCC. For severity capture hepatic failure with/without coma (K72.x). Still document grade/precipitant."
    },
    {
     "code": "K70.30/.31",
     "name": "Alcoholic cirrhosis (without/with ascites)",
     "status": "CC",
     "tip": "Both CC; document decompensations separately."
    },
    {
     "code": "K70.11",
     "name": "Alcoholic hepatitis with ascites",
     "status": "MCC",
     "tip": "'With ascites' (K70.11)=MCC; without (K70.10)=CC."
    },
    {
     "code": "K74.60/.69",
     "name": "Other/unspecified cirrhosis",
     "status": "CC",
     "tip": "Document etiology (NASH, viral)."
    },
    {
     "code": "K65.2",
     "name": "Spontaneous bacterial peritonitis (SBP)",
     "status": "MCC",
     "tip": "Para with PMN >=250; name SBP specifically."
    },
    {
     "code": "K76.7",
     "name": "Hepatorenal syndrome",
     "status": "MCC",
     "tip": "State HRS explicitly; distinguish from ATN/prerenal AKI."
    },
    {
     "code": "R18.8",
     "name": "Ascites (other)",
     "status": "Neither",
     "tip": "Code the cause; supports clinical picture."
    },
    {
     "code": "K85.20",
     "name": "Alcohol-induced acute pancreatitis",
     "status": "MCC",
     "tip": "Alcohol-induced AP is MCC even without necrosis."
    },
    {
     "code": "K85.91/.92",
     "name": "Acute pancreatitis with uninfected / infected necrosis",
     "status": "MCC",
     "tip": "Necrosis (esp. infected) drives MCC; document organism."
    },
    {
     "code": "K85.90",
     "name": "Acute pancreatitis without necrosis/infection",
     "status": "MCC",
     "tip": "All acute pancreatitis (K85.x) is MCC; still specify etiology/necrosis."
    },
    {
     "code": "K55.069",
     "name": "Acute infarction of intestine (mesenteric ischemia)",
     "status": "MCC",
     "tip": "Distinguish infarction from reversible ischemia (K55.05x); specify vessel."
    },
    {
     "code": "K56.x",
     "name": "Intestinal obstruction / ileus",
     "status": "CC",
     "tip": "Complete vs partial + cause (adhesions, hernia)."
    },
    {
     "code": "A04.72 / A04.71",
     "name": "C. difficile enterocolitis (not recurrent / recurrent)",
     "status": "CC",
     "tip": "Document recurrence; consider fulminant."
    },
    {
     "code": "K65.0 / K65.1",
     "name": "Generalized peritonitis / peritoneal abscess",
     "status": "MCC",
     "tip": "Specify source/perforation + organism."
    },
    {
     "code": "K59.31",
     "name": "Toxic megacolon",
     "status": "CC",
     "tip": "CC (not MCC); document with underlying colitis."
    }
   ]
  },
  {
   "section": "HEMATOLOGY / ONCOLOGY",
   "rows": [
    {
     "code": "C92.00",
     "name": "AML, not having achieved remission",
     "status": "MCC",
     "tip": "Highest-value tier (DRG 834); document remission status."
    },
    {
     "code": "C91.00",
     "name": "ALL, not having achieved remission",
     "status": "MCC",
     "tip": "Acute leukemia; see DRG 834-836."
    },
    {
     "code": "C92.01",
     "name": "AML, in remission",
     "status": "CC",
     "tip": "Remission downgrades to CC."
    },
    {
     "code": "D65",
     "name": "Disseminated intravascular coagulation (DIC)",
     "status": "MCC",
     "tip": "Document trigger (sepsis, OB, malignancy)."
    },
    {
     "code": "E88.3",
     "name": "Tumor lysis syndrome",
     "status": "MCC",
     "tip": "Spontaneous vs chemo-induced; capture metabolic derangements."
    },
    {
     "code": "D70.3 / D70.9",
     "name": "Neutropenia (due to infection / unspecified)",
     "status": "Neither",
     "tip": "Confirmed NOT a CC/MCC — capture resulting infection/sepsis/febrile neutropenia separately."
    },
    {
     "code": "D70.1",
     "name": "Agranulocytosis secondary to chemotherapy",
     "status": "Neither",
     "tip": "NOT a CC/MCC; capture resulting infection/sepsis separately."
    },
    {
     "code": "D61.818 / D61.810",
     "name": "Pancytopenia (other / chemo-induced)",
     "status": "CC",
     "tip": "Don't also code D70 neutropenia (Excludes1)."
    },
    {
     "code": "D69.3",
     "name": "Immune thrombocytopenic purpura (ITP)",
     "status": "CC",
     "tip": "Document platelet count/bleeding."
    },
    {
     "code": "D75.82",
     "name": "Heparin-induced thrombocytopenia (HIT)",
     "status": "Neither",
     "tip": "NOT a CC/MCC; document any resulting thrombosis (which may carry weight) + treatment."
    },
    {
     "code": "M31.10",
     "name": "Thrombotic microangiopathy (incl. TTP)",
     "status": "MCC",
     "tip": "All M31.1x (TTP/TMA) are MCC."
    },
    {
     "code": "D62",
     "name": "Acute posthemorrhagic (blood loss) anemia",
     "status": "CC",
     "tip": "Document blood-loss source + transfusion."
    },
    {
     "code": "D57.00/.01",
     "name": "Sickle-cell crisis (unsp / acute chest)",
     "status": "MCC",
     "tip": "Specify crisis type (acute chest, sequestration)."
    },
    {
     "code": "I82.4xx",
     "name": "Acute DVT of lower extremity (by vessel/side)",
     "status": "CC",
     "tip": "Specify acute vs chronic, vessel, laterality."
    },
    {
     "code": "D68.4",
     "name": "Acquired coagulation factor deficiency",
     "status": "CC",
     "tip": "Document cause (liver, anticoagulant, vit K)."
    }
   ]
  },
  {
   "section": "ENDOCRINE / NUTRITION / METABOLIC",
   "rows": [
    {
     "code": "E10.10/.11",
     "name": "Type 1 DM with ketoacidosis (without/with coma)",
     "status": "MCC",
     "tip": "DKA is MCC; document type."
    },
    {
     "code": "E11.10/.11",
     "name": "Type 2 DM with ketoacidosis (without/with coma)",
     "status": "MCC",
     "tip": "Groups to Diabetes-with-MCC."
    },
    {
     "code": "E11.00/.01",
     "name": "Type 2 DM hyperosmolarity (HHS) without/with coma",
     "status": "MCC",
     "tip": "Distinguish HHS from DKA; document serum osm."
    },
    {
     "code": "E05.91",
     "name": "Thyrotoxicosis with thyrotoxic crisis/storm",
     "status": "MCC",
     "tip": "'Storm/crisis' is the trigger vs E05.90."
    },
    {
     "code": "E03.5",
     "name": "Myxedema coma",
     "status": "MCC",
     "tip": "Document precipitant (infection, cold, sedation)."
    },
    {
     "code": "E27.2",
     "name": "Addisonian (adrenal) crisis",
     "status": "MCC",
     "tip": "State 'crisis', not just insufficiency."
    },
    {
     "code": "E27.1/.40",
     "name": "Adrenocortical insufficiency (primary / unspecified)",
     "status": "CC",
     "tip": "Distinguish from crisis (E27.2=MCC)."
    },
    {
     "code": "E43 / E41 / E42 / E40",
     "name": "Severe malnutrition (PCM / marasmus / marasmic kwash / kwash)",
     "status": "MCC",
     "tip": "Document GLIM/ASPEN criteria. See Malnutrition tab."
    },
    {
     "code": "E44.0",
     "name": "Moderate protein-calorie malnutrition",
     "status": "CC",
     "tip": "Moderate=CC."
    },
    {
     "code": "E44.1 / E46",
     "name": "Mild / unspecified malnutrition",
     "status": "CC",
     "tip": "Push for severity grade."
    },
    {
     "code": "R64",
     "name": "Cachexia",
     "status": "CC",
     "tip": "CC (not MCC); document underlying disease; often co-codes with malnutrition."
    },
    {
     "code": "E15",
     "name": "Nondiabetic hypoglycemic coma",
     "status": "CC",
     "tip": "CC (not MCC); document precipitant."
    },
    {
     "code": "E16.2",
     "name": "Hypoglycemia, unspecified",
     "status": "Neither",
     "tip": "No weight; document cause (insulin, sepsis)."
    },
    {
     "code": "M62.84",
     "name": "Sarcopenia",
     "status": "Neither",
     "tip": "Supports ICU-weakness picture; no weight."
    },
    {
     "code": "R62.7",
     "name": "Adult failure to thrive",
     "status": "Neither",
     "tip": "Supports complexity/LOS; no weight."
    }
   ]
  },
  {
   "section": "INFECTIOUS / SEPSIS",
   "rows": [
    {
     "code": "A41.9",
     "name": "Sepsis, unspecified organism",
     "status": "MCC",
     "tip": "Name organism; document POA."
    },
    {
     "code": "A41.01/.02",
     "name": "Sepsis due to MSSA / MRSA",
     "status": "MCC",
     "tip": "Specify organism."
    },
    {
     "code": "A41.51 / A41.50",
     "name": "Sepsis due to E. coli / gram-negative unspecified",
     "status": "MCC",
     "tip": "Organism-specific sepsis is MCC."
    },
    {
     "code": "A40.x",
     "name": "Streptococcal sepsis",
     "status": "MCC",
     "tip": "Document Strep group."
    },
    {
     "code": "B37.7",
     "name": "Candidal sepsis (candidemia)",
     "status": "MCC",
     "tip": "Document source."
    },
    {
     "code": "R65.20",
     "name": "Severe sepsis without septic shock",
     "status": "MCC",
     "tip": "Requires documented acute organ dysfunction + its codes."
    },
    {
     "code": "R65.21",
     "name": "Severe sepsis with septic shock",
     "status": "MCC",
     "tip": "Septic shock per Sepsis-3 (vasopressors despite fluids)."
    },
    {
     "code": "M72.6",
     "name": "Necrotizing fasciitis",
     "status": "MCC",
     "tip": "Document anatomic site; surgical urgency."
    },
    {
     "code": "R78.81",
     "name": "Bacteremia",
     "status": "Neither",
     "tip": "Bacteremia is not sepsis; query if sepsis intended."
    },
    {
     "code": "R65.10",
     "name": "SIRS, non-infectious, without acute organ dysfunction",
     "status": "Neither",
     "tip": "SIRS alone is not sepsis."
    },
    {
     "code": "A49.02",
     "name": "MRSA infection, unspecified site",
     "status": "Neither",
     "tip": "Not a CC/MCC; MRSA sepsis (A41.02) is the MCC."
    },
    {
     "code": "Z16.x / Z22.322",
     "name": "Antimicrobial resistance (MDRO) / MRSA colonization",
     "status": "Neither",
     "tip": "Supports isolation/therapy; colonization is not infection."
    }
   ]
  }
 ],
 "drg": [
  {
   "family": "Tracheostomy / ECMO w/ MV>96h or extensive proc",
   "drg": "003",
   "tier": "procedure-defined",
   "weight": 21.2252
  },
  {
   "family": "Tracheostomy w/ MV>96h (no major OR proc)",
   "drg": "004",
   "tier": "procedure-defined",
   "weight": 13.8514
  },
  {
   "family": "Sepsis w/ mechanical ventilation >96 hrs",
   "drg": "870",
   "tier": "MV>96h",
   "weight": 6.9118
  },
  {
   "family": "Respiratory dx w/ ventilator support >96 hrs",
   "drg": "207",
   "tier": "procedure-defined",
   "weight": 6.4347
  },
  {
   "family": "Acute leukemia",
   "drg": "834",
   "tier": "with MCC",
   "weight": 5.4899
  },
  {
   "family": "Acute leukemia",
   "drg": "835",
   "tier": "with CC",
   "weight": 2.0858
  },
  {
   "family": "Acute leukemia",
   "drg": "836",
   "tier": "without CC/MCC",
   "weight": 1.2195
  },
  {
   "family": "Ischemic stroke w/ thrombolytic (tPA/TNK)",
   "drg": "061",
   "tier": "with MCC",
   "weight": 2.7571
  },
  {
   "family": "Ischemic stroke w/ thrombolytic (tPA/TNK)",
   "drg": "062",
   "tier": "with CC",
   "weight": 1.7572
  },
  {
   "family": "Ischemic stroke w/ thrombolytic (tPA/TNK)",
   "drg": "063",
   "tier": "without CC/MCC",
   "weight": 1.4038
  },
  {
   "family": "Respiratory dx w/ ventilator support <=96 hrs",
   "drg": "208",
   "tier": "procedure-defined",
   "weight": 2.7487
  },
  {
   "family": "Intracranial hemorrhage OR cerebral infarction",
   "drg": "064",
   "tier": "with MCC",
   "weight": 2.011
  },
  {
   "family": "Intracranial hemorrhage OR cerebral infarction",
   "drg": "065",
   "tier": "with CC / tPA<24h",
   "weight": 1.0103
  },
  {
   "family": "Intracranial hemorrhage OR cerebral infarction",
   "drg": "066",
   "tier": "without CC/MCC",
   "weight": 0.6844
  },
  {
   "family": "Sepsis (no MV>96h)",
   "drg": "871",
   "tier": "with MCC",
   "weight": 1.9425
  },
  {
   "family": "Sepsis (no MV>96h)",
   "drg": "872",
   "tier": "without MCC",
   "weight": 1.0233
  },
  {
   "family": "Cirrhosis & alcoholic hepatitis",
   "drg": "432",
   "tier": "with MCC",
   "weight": 1.9682
  },
  {
   "family": "Cirrhosis & alcoholic hepatitis",
   "drg": "433",
   "tier": "with CC",
   "weight": 1.0562
  },
  {
   "family": "Cirrhosis & alcoholic hepatitis",
   "drg": "434",
   "tier": "without CC/MCC",
   "weight": 0.7125
  },
  {
   "family": "GI hemorrhage",
   "drg": "377",
   "tier": "with MCC",
   "weight": 1.828
  },
  {
   "family": "GI hemorrhage",
   "drg": "378",
   "tier": "with CC",
   "weight": 0.9807
  },
  {
   "family": "GI hemorrhage",
   "drg": "379",
   "tier": "without CC/MCC",
   "weight": 0.6304
  },
  {
   "family": "Disorders of liver (exc. cirrhosis/malignancy)",
   "drg": "441",
   "tier": "with MCC",
   "weight": 1.7947
  },
  {
   "family": "Disorders of liver (exc. cirrhosis/malignancy)",
   "drg": "442",
   "tier": "with CC",
   "weight": 0.9653
  },
  {
   "family": "Disorders of liver (exc. cirrhosis/malignancy)",
   "drg": "443",
   "tier": "without CC/MCC",
   "weight": 0.6997
  },
  {
   "family": "Acute MI, discharged alive",
   "drg": "280",
   "tier": "with MCC",
   "weight": 1.6041
  },
  {
   "family": "Acute MI, discharged alive",
   "drg": "281",
   "tier": "with CC",
   "weight": 0.9191
  },
  {
   "family": "Acute MI, discharged alive",
   "drg": "282",
   "tier": "without CC/MCC",
   "weight": 0.7231
  },
  {
   "family": "Poisoning & toxic effects of drugs",
   "drg": "917",
   "tier": "with MCC",
   "weight": 1.5684
  },
  {
   "family": "Poisoning & toxic effects of drugs",
   "drg": "918",
   "tier": "without MCC",
   "weight": 0.8571
  },
  {
   "family": "Respiratory infections & inflammations",
   "drg": "177",
   "tier": "with MCC",
   "weight": 1.5627
  },
  {
   "family": "Respiratory infections & inflammations",
   "drg": "178",
   "tier": "with CC",
   "weight": 0.976
  },
  {
   "family": "Respiratory infections & inflammations",
   "drg": "179",
   "tier": "without CC/MCC",
   "weight": 0.755
  },
  {
   "family": "Renal failure",
   "drg": "682",
   "tier": "with MCC",
   "weight": 1.481
  },
  {
   "family": "Renal failure",
   "drg": "683",
   "tier": "with CC",
   "weight": 0.8758
  },
  {
   "family": "Renal failure",
   "drg": "684",
   "tier": "without CC/MCC",
   "weight": 0.6003
  },
  {
   "family": "Pulmonary embolism",
   "drg": "175",
   "tier": "with MCC or acute cor pulmonale",
   "weight": 1.3736
  },
  {
   "family": "Pulmonary embolism",
   "drg": "176",
   "tier": "without MCC",
   "weight": 0.805
  },
  {
   "family": "Nutritional & metabolic disorders",
   "drg": "640",
   "tier": "with MCC",
   "weight": 1.3356
  },
  {
   "family": "Nutritional & metabolic disorders",
   "drg": "641",
   "tier": "without MCC",
   "weight": 0.7782
  },
  {
   "family": "Simple pneumonia & pleurisy",
   "drg": "193",
   "tier": "with MCC",
   "weight": 1.3144
  },
  {
   "family": "Simple pneumonia & pleurisy",
   "drg": "194",
   "tier": "with CC",
   "weight": 0.8059
  },
  {
   "family": "Simple pneumonia & pleurisy",
   "drg": "195",
   "tier": "without CC/MCC",
   "weight": 0.6285
  },
  {
   "family": "Heart failure & shock",
   "drg": "291",
   "tier": "with MCC",
   "weight": 1.2838
  },
  {
   "family": "Heart failure & shock",
   "drg": "292",
   "tier": "with CC",
   "weight": 0.849
  },
  {
   "family": "Heart failure & shock",
   "drg": "293",
   "tier": "without CC/MCC",
   "weight": 0.566
  },
  {
   "family": "Pulmonary edema & respiratory failure",
   "drg": "189",
   "tier": "no severity split",
   "weight": 1.2354
  },
  {
   "family": "COPD",
   "drg": "190",
   "tier": "with MCC",
   "weight": 1.1077
  },
  {
   "family": "COPD",
   "drg": "191",
   "tier": "with CC",
   "weight": 0.843
  },
  {
   "family": "COPD",
   "drg": "192",
   "tier": "without CC/MCC",
   "weight": 0.642
  }
 ],
 "complex": [
  {
   "code": "L89.--3 / --4 / --0",
   "name": "Pressure injury, stage 3 / stage 4 / unstageable",
   "status": "MCC",
   "tip": "Stage 3/4/unstageable = MCC. Document POA — if not POA it is a HAC and forfeits the MCC's DRG benefit."
  },
  {
   "code": "L89.--1 / --2",
   "name": "Pressure injury, stage 1 / stage 2",
   "status": "Neither",
   "tip": "Stages 1-2 carry no weight."
  },
  {
   "code": "5A1955Z (PCS)",
   "name": "Mechanical ventilation > 96 consecutive hours",
   "status": "drives DRG",
   "tip": "Procedure code, not CC/MCC. >96h drives DRG 207/870/003-004. Document continuous vent hours precisely."
  },
  {
   "code": "5A1945Z (PCS)",
   "name": "Mechanical ventilation 24-96 hours",
   "status": "drives DRG",
   "tip": "Maps to DRG 208 (lower weight). Count from intubation."
  },
  {
   "code": "5A1935Z (PCS)",
   "name": "Mechanical ventilation < 24 hours",
   "status": "drives DRG",
   "tip": "Document start/stop times."
  },
  {
   "code": "Z99.11",
   "name": "Dependence on ventilator",
   "status": "Neither",
   "tip": "Code for vent-dependent patients; supports complexity/risk scores."
  },
  {
   "code": "Z93.0",
   "name": "Tracheostomy status",
   "status": "Neither",
   "tip": "Status code; pair with any complication."
  },
  {
   "code": "J95.02",
   "name": "Infection of tracheostomy stoma",
   "status": "CC",
   "tip": "Document organism; distinguish from VAP."
  },
  {
   "code": "J95.851",
   "name": "Ventilator-associated pneumonia",
   "status": "CC",
   "tip": "Provider must state 'VAP'; add organism."
  },
  {
   "code": "J96.10/.11/.12",
   "name": "Chronic respiratory failure (chronic vent baseline)",
   "status": "CC",
   "tip": "The chronically vented patient's baseline; specify hypoxic/hypercapnic."
  },
  {
   "code": "J96.20/.21/.22",
   "name": "Acute-on-chronic respiratory failure",
   "status": "MCC",
   "tip": "An acute change/decompensation in a chronic patient = the MCC."
  },
  {
   "code": "R13.11-.14",
   "name": "Dysphagia (by phase)",
   "status": "Neither",
   "tip": "NOT a CC/MCC; document phase + aspiration risk for care planning."
  },
  {
   "code": "G72.81 / G62.81",
   "name": "Critical illness myopathy / polyneuropathy",
   "status": "CC",
   "tip": "ICU-acquired weakness; document EMG/exam."
  },
  {
   "code": "M62.81",
   "name": "Generalized muscle weakness / deconditioning",
   "status": "Neither",
   "tip": "Supports rehab need/LOS; no weight."
  },
  {
   "code": "M24.5-",
   "name": "Joint contracture (by site)",
   "status": "Neither",
   "tip": "Supports LOS/rehab; document site."
  },
  {
   "code": "T80.211A",
   "name": "CLABSI (bloodstream infection due to central line), initial",
   "status": "CC",
   "tip": "Document POA (HAC if not POA); add organism sepsis code."
  },
  {
   "code": "T83.511A",
   "name": "CAUTI (infection due to indwelling urinary catheter), initial",
   "status": "CC",
   "tip": "HAC if not POA; specify organism."
  },
  {
   "code": "F05",
   "name": "Delirium due to known physiological condition",
   "status": "CC",
   "tip": "Document delirium + cause; distinct from encephalopathy."
  },
  {
   "code": "E43 / E44.0",
   "name": "Severe / moderate protein-calorie malnutrition",
   "status": "MCC / CC",
   "tip": "See Malnutrition tab; common in long-stay ICU patients."
  },
  {
   "code": "R64",
   "name": "Cachexia",
   "status": "CC",
   "tip": "CC (not MCC); document underlying disease."
  },
  {
   "code": "Z79.01/.02 / Z79.4",
   "name": "Long-term use of anticoagulants/antithrombotics / insulin",
   "status": "Neither",
   "tip": "Capture for risk/therapy context."
  },
  {
   "code": "Z68.4-",
   "name": "Body mass index 40.0+",
   "status": "Neither",
   "tip": "Supports morbid obesity; also code clinician-documented obesity (E66.x)."
  }
 ],
 "cirrhosis": [
  {
   "name": "Hepatic failure, with coma",
   "code": "K72.01/.11/.91",
   "status": "MCC",
   "tip": "'With coma' = highest tier."
  },
  {
   "name": "Hepatic failure, without coma",
   "code": "K72.00/.10/.90",
   "status": "MCC (chronic w/o coma = CC)",
   "tip": "Acute liver failure is MCC."
  },
  {
   "name": "Hepatic encephalopathy",
   "code": "K76.82",
   "status": "Neither",
   "tip": "Confirmed NOT a CC/MCC. Capture hepatic failure with/without coma (K72.x) for severity; still document grade/precipitant."
  },
  {
   "name": "Esophageal varices WITH bleeding",
   "code": "I85.01",
   "status": "MCC",
   "tip": "Active variceal hemorrhage; banding/octreotide/transfusion."
  },
  {
   "name": "Spontaneous bacterial peritonitis",
   "code": "K65.2",
   "status": "MCC",
   "tip": "Para PMN >=250; name SBP, not 'peritonitis'."
  },
  {
   "name": "Hepatorenal syndrome",
   "code": "K76.7",
   "status": "MCC",
   "tip": "Distinguish from prerenal AKI/ATN."
  },
  {
   "name": "Alcoholic hepatitis with ascites",
   "code": "K70.11",
   "status": "MCC",
   "tip": "With ascites = MCC; without (K70.10) = CC."
  },
  {
   "name": "Alcoholic cirrhosis with ascites",
   "code": "K70.31",
   "status": "CC",
   "tip": "Links alcohol etiology + ascites."
  },
  {
   "name": "Ascites",
   "code": "R18.8",
   "status": "Neither",
   "tip": "No weight alone; code with cirrhosis."
  },
  {
   "name": "Portal hypertension",
   "code": "K76.6",
   "status": "Neither",
   "tip": "Basis for varices/ascites; code it."
  },
  {
   "name": "Coagulopathy of liver disease",
   "code": "D68.4",
   "status": "CC",
   "tip": "Document INR/bleeding."
  }
 ],
 "malnutrition": [
  {
   "name": "Severe protein-calorie malnutrition",
   "code": "E43",
   "status": "MCC",
   "tip": "One of the most commonly missed MCCs."
  },
  {
   "name": "Nutritional marasmus",
   "code": "E41",
   "status": "MCC",
   "tip": "Severe energy deficiency."
  },
  {
   "name": "Marasmic kwashiorkor / Kwashiorkor",
   "code": "E42 / E40",
   "status": "MCC",
   "tip": "Severe forms (rare in US adults)."
  },
  {
   "name": "Moderate protein-calorie malnutrition",
   "code": "E44.0",
   "status": "CC",
   "tip": "Mid-tier; still affects DRG."
  },
  {
   "name": "Mild protein-calorie malnutrition",
   "code": "E44.1",
   "status": "CC",
   "tip": "—"
  },
  {
   "name": "Malnutrition, unspecified",
   "code": "E46",
   "status": "CC",
   "tip": "Always push for a severity grade."
  },
  {
   "name": "Cachexia",
   "code": "R64",
   "status": "CC",
   "tip": "CC (not MCC); document underlying disease."
  }
 ],
 "trachvent": [
  {
   "name": "Mechanical ventilation > 96 hrs",
   "code": "5A1955Z (PCS)",
   "status": "drives DRG",
   "tip": "Biggest lever: DRG 207 (~$43,500) vs 208 (~$18,600). Document continuous hours."
  },
  {
   "name": "Mechanical ventilation 24-96 hrs",
   "code": "5A1945Z (PCS)",
   "status": "drives DRG",
   "tip": "Maps to DRG 208."
  },
  {
   "name": "Tracheostomy w/ MV>96h",
   "code": "DRG 004 / 003",
   "status": "drives DRG",
   "tip": "Among the highest-weight DRGs (13.85 / 21.23)."
  },
  {
   "name": "Dependence on ventilator",
   "code": "Z99.11",
   "status": "Neither",
   "tip": "Always code for chronically vented patients."
  },
  {
   "name": "Tracheostomy status",
   "code": "Z93.0",
   "status": "Neither",
   "tip": "Code for established trach."
  },
  {
   "name": "Attention to / care of tracheostomy",
   "code": "Z43.0",
   "status": "Neither",
   "tip": "Routine trach aftercare encounter."
  },
  {
   "name": "Chronic respiratory failure",
   "code": "J96.10/.11/.12",
   "status": "CC",
   "tip": "Baseline for the chronically vented; specify hypoxic/hypercapnic."
  },
  {
   "name": "Acute-on-chronic respiratory failure",
   "code": "J96.20/.21/.22",
   "status": "MCC",
   "tip": "Acute decompensation = the MCC, not the status code."
  },
  {
   "name": "Tracheostomy infection / hemorrhage",
   "code": "J95.02 / J95.01",
   "status": "CC",
   "tip": "J95.02 stoma infection confirmed CC; add organism."
  },
  {
   "name": "VAP",
   "code": "J95.851",
   "status": "CC",
   "tip": "Meet VAP criteria; add organism."
  }
 ]
};
