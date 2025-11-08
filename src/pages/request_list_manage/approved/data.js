// Data dummy untuk approved requests
const requestsData = {
  1: {
    // Approved 1 - KEAMANAN KOMPUTER & JARINGAN Laboratory - SICK (approved1.png)
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "KEAMANAN KOMPUTER & JARINGAN Laboratory",
      requestedTime: "10:00AM - 11:40AM",
      requestedDate: "19 SEPTEMBER 2025",
      submitTime: "17:00",
      submitDate: "18 SEPTEMBER 2025",
      reason: "SICK",
      reasonClass: "reason-sick"
    },
    classInfo: {
      day: "Friday",
      schedule: "10:00AM - 11:40AM",
      date: "19 September 2025"
    },
    description: "Good morning Sir/Madam, I would like to inform you that I am unable to attend class today due to illness. Thank you for your understanding.",
    image: "../../../../img/surat_sakit.webp",
    hasImage: true,
    hasEvidence: false,
    evidenceFile: null
  },
  2: {
    // Approved 2 - PERANCANGAN & PEMROGRAMAN WEB - EXCUSED (approved2.png)
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "PERANCANGAN & PEMROGRAMAN WEB",
      requestedTime: "7:15AM - 9:45AM",
      requestedDate: "18 SEPTEMBER 2025",
      submitTime: "19:00",
      submitDate: "17 SEPTEMBER 2025",
      reason: "EXCUSED",
      reasonClass: "reason-excused"
    },
    classInfo: {
      day: "Thursday",
      schedule: "7:15AM - 9:45AM",
      date: "19 September 2025"
    },
    description: "Good morning Sir/Madam, I kindly request permission to be excused from class today as I have to attend another event. Thank you for your understanding.",
    image: null,
    hasImage: false,
    hasEvidence: true,
    evidenceFile: "Perizinan_Anggota_SungutLele49.pdf"
  },
  3: {
    // Approved 3 - PERANCANGAN & PEMROGRAMAN WEB Laboratory - EXCUSED (approved3.png)
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "PERANCANGAN & PEMROGRAMAN WEB Laboratory",
      requestedTime: "10:00AM - 11:40AM",
      requestedDate: "18 SEPTEMBER 2025",
      submitTime: "19:20",
      submitDate: "17 SEPTEMBER 2025",
      reason: "EXCUSED",
      reasonClass: "reason-excused"
    },
    classInfo: {
      day: "Thursday",
      schedule: "10:00AM - 11:40AM",
      date: "19 September 2025"
    },
    description: "Good morning Sir/Madam, I kindly request permission to be excused from class today as I have to attend another event. Thank you for your understanding.",
    image: null,
    hasImage: false,
    hasEvidence: true,
    evidenceFile: "Perizinan_Anggota_SungutLele49.pdf"
  },
  4: {
    // Approved 4 - KEAMANAN KOMPUTER & JARINGAN - SICK (approved4.png)
    detail: {
      name: "TEOFILUS SATRIA RADA INSANI",
      nim: "01082230017",
      class: "KEAMANAN KOMPUTER & JARINGAN",
      requestedTime: "7:15AM - 9:45AM",
      requestedDate: "19 SEPTEMBER 2025",
      submitTime: "16:40",
      submitDate: "18 SEPTEMBER 2025",
      reason: "SICK",
      reasonClass: "reason-sick"
    },
    classInfo: {
      day: "Friday",
      schedule: "7:15AM - 9:45AM",
      date: "19 September 2025"
    },
    description: "Good morning Sir/Madam, I would like to inform you that I am unable to attend class today due to illness. Thank you for your understanding.",
    image: "../../../../img/surat_sakit.webp",
    hasImage: true,
    hasEvidence: false,
    evidenceFile: null
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
    document.querySelector('.medical-image').src = data.image;
  } else {
    imageContainer.style.display = 'none';
  }

  // Update or hide evidence
  const evidenceContainer = document.querySelector('.evidence-container');
  if (data.hasEvidence && data.evidenceFile) {
    evidenceContainer.style.display = 'block';
    document.querySelector('.file-name').textContent = data.evidenceFile;
  } else {
    evidenceContainer.style.display = 'none';
  }
}

// Load data saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadRequestData);
