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
    "yield": `<strong>Routine follow-up:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>Update classificiation on PMS</li>
            <li>Arrange recalls for blood tests</li>
            <li>Ensure taking bariatric specific multi-vitamin and has dietary information</li>
            <li>Brief screen for complications</li>
            <li>Encourage smoking cessation and alcohol avoidance</li>
            <li>Council re: pregnancy planning if appropriate - aim to avoid 12-18 months post surgery</li>
            <li>Connect with health coach or green prescription for ongoing physical activity and mental health support</li>
          </ul>`
  },
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "<3 weeks",
    "diabetesHistory": "*",
    "adviceType": "complications",
    "yield": `<strong>Possible complications:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li><strong>Any fever or unexplained tachycardia even in the absence of abdominal pain needs urgent investigation</strong></li>
            <li>Assess for dehydration. If intractable vomiting or severe dehydration: at risk of thiamine defiency needs referral to hospital</li>
            <li>Hair loss and constipation common, increase protein in diet and treat constipation with stool softeners</li>
            <li>Staple line leak may present as pleuritic pain or SOB, low index of suspicion even in the absence of abdominal pain</li>
          </ul>`
  },
   {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "3-8 weeks",
    "diabetesHistory": "*",
    "adviceType": "complications",
    "yield": `<strong>Possible complications:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li><strong>Any fever or unexplained tachycardia even in the absence of abdominal pain needs urgent investigation</strong></li>
            <li>Assess for dehydration. If intractable vomiting or severe dehydration: at risk of thiamine defiency needs referral to hospital</li>
            <li>Hair loss and constipation common, increase protein in diet and treat constipation with stool softeners</li>
            <li>Staple line leak may present as pleuritic pain or SOB, low index of suspicion even in the absence of abdominal pain</li>
            <li> Dumping syndrome</li>
          </ul>`
  },
   {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": ">8 weeks",
    "diabetesHistory": "*",
    "adviceType": "complications",
    "yield": `<strong>Possible complications:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>Assess for dehydration. If intractable vomiting or severe dehydration: at risk of thiamine defiency needs referral to hospital</li>
            <li>Hair loss and constipation common, increase protein in diet and treat constipation with stool softeners</li>
            <li>Dumping syndrome - dizziness, flushing, headaches after eating due to concentrated carbs being dumped from stomach, reduce meal size and carb load</li>
            <li>Nutritional deficiency - may present as anaemia, neurological symptoms, taste disturbance, poor wound healing. hair loss - check blood tests</li>
            <li>Stricture</li>
            <li>Weight regain</li>
            <li>Reflux - treat with OTC meds or PPI and if no improvement refer to bariatric surgeon</li>
            <li>Excessive skin - often need plastic surgery referral 12 months after surgery</li>
          </ul>`
  },
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "*",
    "diabetesHistory": "has diabetes",
    "adviceType": "medications",
    "yield": `<strong>Medication adjustments:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>All insulin and sulfonylureas should have been stopped pre-operatively</li>
            <li>Review antihypertensives—some may no longer be needed.</li>
            <li>Titrate all medications with a narrow therapeutic index e.g warfarin, sodium valproate</li>
            <li>Avoid NSAIDs</li>
            <li>If reflux history consider PPIs, sleeve can exacerbate underlying reflux</li>
            <li>Ensure tolerating bariatric-specific multi-vitamin</li>
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
