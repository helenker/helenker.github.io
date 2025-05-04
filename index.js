function toggleDropdown(element) {
  const dropdown = element.parentElement.querySelector('.dropdown-options');
  const allDropdowns = document.querySelectorAll('.dropdown-options');

  allDropdowns.forEach(d => {
    if (d !== dropdown) d.style.display = 'none';
  });

  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectOption(option) {
  const selectedDiv = option.closest('.custom-dropdown').querySelector('.selected');

  selectedDiv.textContent = option.textContent;
  option.parentElement.style.display = 'none';

  checkSelections();
}

function selectInfoOption(option, value) {
  const selectedDiv = document.getElementById('info-selected');

  selectedDiv.textContent = option.textContent;
  option.parentElement.style.display = 'none';

  showInfo(value)
}

function showInfo(value) {
  let message = "";
  console.log('value: ' + value)
  console.log(!value)
  if (!value) {
    return;
  }

  switch (value) {
    case "routine":
      message = `
        <strong>Routine follow-up should include:</strong><br><br>
        <ul style="text-align: left; display: inline-block; line-height: 1.6;">
          <li><strong>Diet:</strong> Pureed diet, slow wean onto solid foods after 6 weeks.</li>
          <li><strong>Medications:</strong> Check insulin and oral hypoglycaemic agents stopped pre-op.<br>Review anti-hypertensives and medications with a narrow therapeutic index.</li>
          <li><strong>Multivitamins:</strong> Bariatric-specific multivitamin commenced plus thiamine for the first 3 weeks.</li>
          <li><strong>Bloods:</strong> Arrange recalls for bloods.</li>
        </ul>
      `;
      break;
    case "complications":
      message = `
        <strong>Watch for complications such as:</strong><br><br>
        <ul style="text-align: left; display: inline-block; line-height: 1.6;">
          <li>Wound infections or abscesses.</li>
          <li>Anastomotic leaks (especially in the first few weeks).</li>
          <li>Nutritional deficiencies—fatigue, neuropathy, or anemia.</li>
          <li>Dumping syndrome (especially in bypass patients).</li>
        </ul>
      `;
      break;
    case "medications":
      message = `
        <strong>Medication adjustments:</strong><br><br>
        <ul style="text-align: left; display: inline-block; line-height: 1.6;">
          <li>Review antihypertensives—some may no longer be needed.</li>
          <li>Titrate or cease diabetic medications as needed.</li
          <li>Avoid NSAIDs; consider gastroprotection.</li>
          <li>Ensure continuation of vitamin/mineral supplementation.</li>
        </ul>
      `;
      break;
    case "nutrition":
      message = `
        <strong>Nutritional advice:</strong><br><br>
        <ul style="text-align: left; display: inline-block; line-height: 1.6;">
          <li>High-protein, low-sugar meals eaten slowly in small portions.</li>
          <li>Avoid drinking fluids with meals.</li>
          <li>Lifelong vitamin and mineral supplementation required.</li>
          <li>Regular follow-up with a bariatric dietitian is essential.</li>
        </ul>
      `;
      break;
    default:
      message = "";
  }

  document.getElementById("modal-text").innerHTML = message;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function checkSelections() {
  const selections = document.querySelectorAll('.custom-dropdown .selected');
  let allSelected = true;

  selections.forEach(function (selection) {
    if (selection.textContent.trim() === "") {
      allSelected = false;
    }
  });

  if (allSelected) {
    // Do something if needed when all selections made
  }
}

window.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
  if (!e.target.classList.contains('selected')) {
    document.querySelectorAll('.dropdown-options').forEach(d => d.style.display = 'none');
  }
});
