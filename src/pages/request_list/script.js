// Filter popup functionality
const filterButton = document.getElementById('filterButton');
const filterOverlay = document.getElementById('filterOverlay');
const filterPopup = document.getElementById('filterPopup');
const filterOptions = document.querySelectorAll('.filter-option');

// Toggle popup
filterButton.addEventListener('click', function(e) {
  e.stopPropagation();
  const isVisible = filterPopup.style.display === 'block';
  
  if (isVisible) {
    filterPopup.style.display = 'none';
    filterOverlay.style.display = 'none';
  } else {
    filterPopup.style.display = 'block';
    filterOverlay.style.display = 'block';
  }
});

// Close popup when clicking on overlay
filterOverlay.addEventListener('click', function() {
  filterPopup.style.display = 'none';
  filterOverlay.style.display = 'none';
});

// Prevent popup from closing when clicking inside the popup
filterPopup.addEventListener('click', function(e) {
  e.stopPropagation();
});

// Handle filter option selection
filterOptions.forEach(option => {
  option.addEventListener('click', function() {
    // Remove active class from all options
    filterOptions.forEach(opt => opt.classList.remove('active'));
    
    // Add active class to selected option
    this.classList.add('active');
    
    // Get filter value
    const filterValue = this.getAttribute('data-filter');
    
    // Here you can add filtering logic
    console.log('Filter selected:', filterValue);
    
    // Close popup
    filterPopup.style.display = 'none';
    filterOverlay.style.display = 'none';
  });
});

// Close popup when pressing Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    filterPopup.style.display = 'none';
    filterOverlay.style.display = 'none';
  }
});

// Set default active filter
document.querySelector('.filter-option[data-filter="all"]').classList.add('active');

// Add click handler for pending rows to navigate to detail page with ID parameter
const pendingRows = document.querySelectorAll('.frame-4, .frame-6');
pendingRows.forEach((row, index) => {
  row.style.cursor = 'pointer';
  row.addEventListener('click', function() {
    // index 0 = request ID 1, index 1 = request ID 2
    const requestId = index + 1;
    window.location.href = `../request_list_manage/pending/index.html?id=${requestId}`;
  });
});

// Add click handler for approved rows to navigate to approved detail page
const approvedRows = document.querySelectorAll('.frame-7, .frame-8, .frame-9, .frame-10');
approvedRows.forEach((row, index) => {
  row.style.cursor = 'pointer';
  row.addEventListener('click', function() {
    // index 0 = approved ID 1, index 1 = approved ID 2, etc.
    const requestId = index + 1;
    window.location.href = `../request_list_manage/approved/index.html?id=${requestId}`;
  });
});

// Add click handler for rejected row to navigate to rejected detail page
const rejectedRow = document.querySelector('.frame-11');
if (rejectedRow) {
  rejectedRow.style.cursor = 'pointer';
  rejectedRow.addEventListener('click', function() {
    window.location.href = '../request_list_manage/rejected/index.html?id=1';
  });
}
