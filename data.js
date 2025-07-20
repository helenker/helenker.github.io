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
            <li>Ensure taking a <a href=https://www.healthinfo.org.nz/patientinfo/nutrition-supplements-after-bariatric-surgery.pdf> bariatric specific multi-vitamin</a> (funded MVITE not sufficient) and has dietary information</li>
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
            <li>Dumping syndrome - dizziness, flushing, headaches after eating due to concentrated carbs being dumped from stomach, reduce meal size and carb load</li>
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
            <li>All insulin, sulfonylureas and SGLT-2 inhibitors should have been stopped pre-operatively</li>
            <li>Consider stopping metformin once diabetes in remission</li>
            <li>Could consider restarting empagliflozin if needed for heart failure once carbohydrate intake sufficient</li> 
            <li>Continue statins</li>
            <li>Review antihypertensives at each follow up—lower doses may be needed.</li>
            <li>Titrate all medications with a narrow therapeutic index e.g warfarin, sodium valproate</li>
            <li>Avoid NSAIDs</li>
            <li>If reflux history consider starting a PPI, sleeve can exacerbate underlying reflux</li>
            <li>Ensure tolerating <a href=https://www.healthinfo.org.nz/patientinfo/nutrition-supplements-after-bariatric-surgery.pdf>bariatric-specific multi-vitamin</a> (funded MVITE not sufficient)</li>
          </ul>`
  },
    {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "*",
    "diabetesHistory": "no diabetes",
    "adviceType": "medications",
    "yield": `<strong>Medication adjustments:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li>Review antihypertensives — some may no longer be needed. Continue statins if on a statin pre-operatively.</li>
            <li>Titrate all medications with a narrow therapeutic index e.g warfarin, sodium valproate</li>
            <li> Stop empagliflozin pre and post op and consider reintroducing if needed for HF once carbohydrate intake sufficient</li> 
            <li>Avoid NSAIDs</li>
            <li>If reflux history consider starting a PPI, sleeve can exacerbate underlying reflux</li>
            <li>Ensure tolerating <a href=https://www.healthinfo.org.nz/patientinfo/nutrition-supplements-after-bariatric-surgery.pdf> bariatric-specific multi-vitamin</a> (funded MVITE not sufficient)</li>
          </ul>`
  },
  {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "<3 weeks",
    "diabetesHistory": "*",
    "adviceType": "dietary",
    "yield": `<strong>Dietary and Nutritional advice:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li> Offer referral to a private bariatric dietician -follow up with a dietician will vary depending on the package deal and surgeon</li>
            <li>General principles - slow progression from liquid diet to soft diet over 8 weeks, maintaining hydration and ensuring adequate nutrients and protein intake</li>
            <li>AVOID drinking liquids with meals and chew thoroughly before swallowing.</li>
            <li>Drink between 6-8 glasses of water a day </li>
            <li>Provide an <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0025/1039912/bari-surg-overview.pdf> information sheet</a> with a dietary overview</li>
            <li> If needed offer specific dietary advice for <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0030/1039908/bari-surg-s1.pdf>stage 1 (liquid diet)</a> or a <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0031/1039909/bari-surg-s2-puree.pdf >stage 2 (pureed diet)</a>
            <li>Ensure tolerating <a href=https://www.healthinfo.org.nz/patientinfo/nutrition-supplements-after-bariatric-surgery.pdf> bariatric-specific multi-vitamin</a> (funded MVITE not sufficient)</li>          
          </ul>`
  },
    {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": "3-8 weeks",
    "diabetesHistory": "*",
    "adviceType": "dietary",
    "yield": `<strong>Dietary and Nutritional advice:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li> Offer referral to a private bariatric dietician -follow up with a dietician will vary depending on the package deal and surgeon</li>
            <li>General principles - slow progression from liquid diet to soft diet over 8 weeks, maintaining hydration and ensuring adequate nutrients and protein</li>
            <li> Patient's follow up with a dietician will vary depending on the package deal and surgeon</li>
            <li>AVOID drinking liquids with meals and chew thoroughly before swallowing.</li>
            <li>Drink between 6-8 glasses of water a day </li>
            <li>Provide an <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0025/1039912/bari-surg-overview.pdf> information sheet</a> with a dietary overview</li>
            <li> If needed offer specific dietary advice for <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0031/1039909/bari-surg-s2-puree.pdf >stage 2 (pureed diet)</a> or <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0023/1039910/bari-surg-s3.pdf > stage 3 (soft diet)</a>
            <li>Ensure tolerating <a href=https://www.healthinfo.org.nz/patientinfo/nutrition-supplements-after-bariatric-surgery.pdf> bariatric-specific multi-vitamin</a> (funded MVITE not sufficient)</li>
          </ul>`
  },
    {
    "order": 1,
    "surgeryType": "gastric sleeve",
    "timeSinceSurgery": ">8 weeks",
    "diabetesHistory": "*",
    "adviceType": "dietary",
    "yield": `<strong>Dietary and Nutritional advice:</strong><br><br>
          <ul style="text-align: left; display: inline-block; line-height: 1.6;">
            <li> Offer referral to a private bariatric dietician-follow up with a dietician will vary depending on the package deal and surgeon</li>
            <li>Should now be able to tolerate a diet of <a href=https://www.health.qld.gov.au/__data/assets/pdf_file/0024/1039911/bari-surg-s4-solids.pdf >solid food</a>
            <li>General principles - maintaining adequate hydration and ensuring adequate nutrients and protein intake</li>
            <li>Patient's follow up with a dietician will vary depending on the package deal and surgeon</li>
            <li>AVOID drinking liquids with meals and chew thoroughly before swallowing.</li>
            <li>Drink between 6-8 glasses of water a day </li>
            <li>Ensure tolerating <a href=https://www.healthinfo.org.nz/patientinfo/nutrition-supplements-after-bariatric-surgery.pdf> bariatric-specific multi-vitamin</a> (funded MVITE not sufficient)</li>
          </ul>`
  }
];
