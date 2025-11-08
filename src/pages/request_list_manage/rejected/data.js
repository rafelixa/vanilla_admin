// Data dummy untuk rejected request
const requestsData = {
  1: {
    // Rejected 1 - INFORMATIKA DALAM KOM SELULER - EXCUSED
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "INFORMATIKA DALAM KOM SELULER",
      requestedTime: "1:15PM - 3:45PM",
      requestedDate: "17 SEPTEMBER 2025",
      submitTime: "21:00",
      submitDate: "16 SEPTEMBER 2025",
      reason: "EXCUSED",
      reasonClass: "reason-excused"
    },
    classInfo: {
      day: "Wednesday",
      schedule: "1:15PM - 3:45PM",
      date: "17 September 2025"
    },
    description: "ooooaaa! oackalooolooo ooaoa tt",
    image: "../../../../img/rejected.webp",
    hasImage: true
  }
};

// Fungsi untuk mendapatkan ID dari URL parameter
function getRequestIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  return id ? parseInt(id) : 1; // Default ke request 1 jika tidak ada parameter
}

// Fungsi untuk load data berdasarkan ID
function loadRequestData() {
  const requestId = getRequestIdFromURL();
  const data = requestsData[requestId];

  if (!data) {
    console.error('Request data not found for ID:', requestId);
    return;
  }

  // Update Detail section
  document.querySelector('.detail-row:nth-child(1) .detail-value').textContent = data.detail.name;
  document.querySelector('.detail-row:nth-child(2) .detail-value').textContent = data.detail.nim;
  document.querySelector('.detail-row:nth-child(3) .detail-value').textContent = data.detail.class;
  document.querySelector('.detail-row:nth-child(4) .detail-value').textContent = data.detail.requestedTime;
  document.querySelector('.detail-row:nth-child(5) .detail-value').textContent = data.detail.requestedDate;
  document.querySelector('.detail-row:nth-child(6) .detail-value').textContent = data.detail.submitTime;
  document.querySelector('.detail-row:nth-child(7) .detail-value').textContent = data.detail.submitDate;
  
  const reasonElement = document.querySelector('.detail-row:nth-child(8) .detail-value');
  reasonElement.textContent = data.detail.reason;
  reasonElement.className = 'detail-value ' + data.detail.reasonClass;

  // Update Class Information section
  document.querySelector('.class-info-container .detail-row:nth-child(1) .detail-value').textContent = data.classInfo.day;
  document.querySelector('.class-info-container .detail-row:nth-child(2) .detail-value').textContent = data.classInfo.schedule;
  document.querySelector('.class-info-container .detail-row:nth-child(3) .detail-value').textContent = data.classInfo.date;

  // Update Description section
  document.querySelector('.description-text').textContent = data.description;

  // Update or hide image
  const imageContainer = document.querySelector('.image-container');
  if (data.hasImage && data.image) {
    imageContainer.style.display = 'block';
    document.querySelector('.rejected-image').src = data.image;
  } else {
    imageContainer.style.display = 'none';
  }
}

// Load data saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadRequestData);
