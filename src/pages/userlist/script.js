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

function filterBy(tolerance) {
  // Implement filter logic here
  console.log('Filter by:', tolerance);
  
  // Remove active class from all options
  document.querySelectorAll('.filter-option').forEach(option => {
    option.classList.remove('active');
  });
  
  // Add active class to clicked option
  event.target.classList.add('active');
  
  // Filter logic based on tolerance status
  if (tolerance === 'all') {
    // Show all users
    console.log('Showing all users');
  } else if (tolerance === 'past') {
    // Show users with past tolerance
    console.log('Showing users with past tolerance');
  } else if (tolerance === 'reach') {
    // Show users who reach tolerance
    console.log('Showing users who reach tolerance');
  }
  
  closeFilter();
}

// Function to navigate to user detail page
function navigateToUserDetail(userId) {
  window.location.href = `../userlist_manage/index.html?id=${userId}`;
}

// Add click event listeners to table rows when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Map user rows to their IDs (based on order in the table)
  const userRows = document.querySelectorAll('.frame-4, .frame-6, .frame-7, .frame-8, .frame-9, .frame-10, .frame-11');
  
  userRows.forEach((row, index) => {
    // Add 1 to index since user IDs start from 1
    const userId = index + 1;
    
    // Add click event listener
    row.addEventListener('click', function() {
      navigateToUserDetail(userId);
    });
    
    // Add hover cursor style
    row.style.cursor = 'pointer';
    
    // Add hover effect
    row.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f8f9fa';
    });
    
    row.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
  });
});
