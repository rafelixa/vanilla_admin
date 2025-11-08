// Data dummy untuk request list
const requestsData = {
  1: {
    // Request 1 - SICK (pending1.png)
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "KECERDASAN KOMPUTASIONAL",
      requestedTime: "8:45AM - 11:25AM",
      requestedDate: "29 SEPTEMBER 2025",
      submitTime: "19:20",
      submitDate: "28 SEPTEMBER 2025",
      reason: "SICK",
      reasonColor: "#8A38F5"
    },
    classInfo: {
      day: "Monday",
      schedule: "8:45AM - 11:25AM",
      date: "29 September 2025"
    },
    description: "Good morning Sir/Madam, I would like to inform you that I am unable to attend class today due to illness. Thank you for your understanding.",
    image: "../../../../img/surat_sakit.webp",
    hasImage: true
  },
  2: {
    // Request 2 - SICK (pending2.png)
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "KECERDASAN KOMPUTASIONAL Laboratory",
      requestedTime: "1:15PM - 2:55PM",
      requestedDate: "29 SEPTEMBER 2025",
      submitTime: "19:20",
      submitDate: "28 SEPTEMBER 2025",
      reason: "SICK",
      reasonColor: "#8A38F5"
    },
    classInfo: {
      day: "Monday",
      schedule: "1:15PM - 2:55PM",
      date: "29 September 2025"
    },
    description: "Good morning Sir/Madam, I would like to inform you that I am unable to attend class today due to illness. Thank you for your understanding.",
    image: "../../../../img/surat_sakit.webp",
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
  reasonElement.style.color = data.detail.reasonColor;

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
    document.querySelector('.medical-image').src = data.image;
  } else {
    imageContainer.style.display = 'none';
  }
}

// Load data saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadRequestData);
