function toggleFilter() {
  const popup = document.querySelector('.filter-popup');
  const overlay = document.querySelector('.filter-overlay');
  
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
}

function closeFilter() {
  document.querySelector('.filter-popup').style.display = 'none';
  document.querySelector('.filter-overlay').style.display = 'none';
}

function filterBy(status) {
  // Implement filter logic here
  console.log('Filter by:', status);
  
  // Remove active class from all options
  document.querySelectorAll('.filter-option').forEach(option => {
    option.classList.remove('active');
  });
  
  // Add active class to clicked option
  event.target.classList.add('active');
  
  // Filter logic based on attendance status
  if (status === 'all') {
    // Show all log entries
    console.log('Showing all log entries');
  } else if (status === 'present') {
    // Show only present entries
    console.log('Showing present entries');
  } else if (status === 'late') {
    // Show only late entries
    console.log('Showing late entries');
  }
  
  closeFilter();
}
