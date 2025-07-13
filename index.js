const wildcardMatcher = "*";

function toggleDropdown(element) {
  const dropdown = element.parentElement.querySelector('.dropdown-options');
  const allDropdowns = document.querySelectorAll('.dropdown-options');

  allDropdowns.forEach(d => {
    if (d !== dropdown) d.style.display = 'none';
  });

  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectOption(option, dataValue, scroll = false) {
  const selectedDiv = option.closest('.custom-dropdown').querySelector('.selected');

  selectedDiv.textContent = option.textContent;
  selectedDiv.setAttribute('data-value', dataValue);
  option.parentElement.style.display = 'none';

  document.getElementById("results-text").innerHTML = buildText();

  if(scroll){
    const resultsElement = document.getElementById("myResults")
    resultsElement.style.display = "block";
    resultsElement.scrollIntoView({ behavior: "smooth" }); 
  }
}

function buildText() {
  const surgeryType = document.querySelector('#surgeryType').getAttribute('data-value');
  const timeSinceSurgery = document.querySelector('#timeSinceSurgery').getAttribute('data-value');
  const diabetesHistory = document.querySelector('#diabetesHistory').getAttribute('data-value');
  const adviceType = document.querySelector('#adviceType').getAttribute('data-value');

  // Use filter() to get all matching items
  const matchedItems = bariatricAdviceData.filter(item => {
    const surgeryMatch = item.surgeryType === surgeryType || item.surgeryType === wildcardMatcher;
    const timeMatch = item.timeSinceSurgery === timeSinceSurgery || item.timeSinceSurgery === wildcardMatcher;
    const diabetesMatch = item.diabetesHistory === diabetesHistory || item.diabetesHistory === wildcardMatcher;
    const adviceMatch = item.adviceType === adviceType || item.adviceType === wildcardMatcher;
    
    return surgeryMatch && timeMatch && diabetesMatch && adviceMatch;
  });
  
  // Sort by order attribute before mapping
  const sortedItems = matchedItems.sort((a, b) => (a.order || 0) - (b.order || 0));
  
  // Combine all matched content or handle multiple results as needed
  const fullText = sortedItems.map(item => item.yield).join('\n');
  return fullText
}

function closeResults() {
  window.scrollTo( { behavior: "smooth", top: 0 } );
}

window.addEventListener('click', function(e) {
  if (e.target.classList.contains('results')) {
    closeResults();
  }
  if (!e.target.classList.contains('selected')) {
    document.querySelectorAll('.dropdown-options').forEach(d => d.style.display = 'none');
  }
});
