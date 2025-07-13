// this is a list of json objects that contain html snippets that we will display conditionally
// based on other attributes they have
// each object will have four variables: surgeryType, timeSinceSurgery, diabetesHisotry, and adviceType
// each object will also have a "yield" attribute containing the html snippet to be displayed

// Options for surgeryType: "gastric sleeve", "roux-en-Y bypass"
// Options for timeSinceSurgery: "<3 weeks", "3-8 weeks", ">8 weeks"
// Options for diabetesHistory: "has diabetes", "no diabetes"
// Options for adviceType: "routine", "complications", "medications", "dietary"
const bariatricAdviceData = [
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "*",
    "diabetesHistory": "*",
    "adviceType": "routine",
    "yield": `<strong>Routine follow-up consult:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li><strong>Assessment:</strong><br>Hydration status, blood pressure, possible complications, tolerance of pureed diet - should slowly progress to solids at 6 weeks<br/></li>
            <li><strong>Management:</strong><br>Review anti-hypertensives and medications with a narrow therapeutic index. Bariatric-specific multivitamin commenced plus thiamine for the first 3 weeks</li>
            <li><strong>Request:</strong><br>Set up blood recalls<br/></li>
          </ul>`
  },
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "*",
    "diabetesHistory": "*",
    "adviceType": "complications",
    "yield": `<strong>Watch for complications such as:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>Wound infections or abscesses.</li>
            <li>Anastomotic leaks (especially in the first few weeks).</li>
            <li>Nutritional deficiencies—fatigue, neuropathy, or anemia.</li>
            <li>Dumping syndrome (especially in bypass patients).</li>
          </ul>`
  },
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "*",
    "diabetesHistory": "*",
    "adviceType": "medications",
    "yield": `<strong>Medication adjustments:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>Review antihypertensives—some may no longer be needed.</li>
            <li>Titrate or cease diabetic medications as needed.</li>
            <li>Avoid NSAIDs; consider gastroprotection.</li>
            <li>Ensure continuation of vitamin/mineral supplementation.</li>
          </ul>`
  },
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "*",
    "diabetesHistory": "*",
    "adviceType": "dietary",
    "yield": `<strong>Nutritional advice:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>High-protein, low-sugar meals eaten slowly in small portions.</li>
            <li>Avoid drinking fluids with meals.</li>
            <li>Lifelong vitamin and mineral supplementation required.</li>
            <li>Regular follow-up with a bariatric dietitian is essential.</li>
          </ul>`
  }
];
