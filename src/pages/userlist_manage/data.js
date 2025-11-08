// Data users dengan informasi presensi lengkap
const usersData = {
  1: {
    name: "Rafelixa Reynard Isak",
    nim: "01082230017",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 4, late: 3, absent: 0, sick: 0, excused: 0, total: 16 }, // Reached: Late = 3
      { name: "KKLR 1544", present: 2, late: 4, absent: 1, sick: 0, excused: 0, total: 16 }, // Exceeded: Late > 3
      { name: "PMLR 1547", present: 4, late: 0, absent: 3, sick: 0, excused: 0, total: 16 }, // Reached: Absent = 3
      { name: "PAPR 1550", present: 5, late: 2, absent: 0, sick: 0, excused: 0, total: 16 }, // Normal
      { name: "PALR 1582", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "IKSR 1586", present: 6, late: 1, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPWR 1590", present: 5, late: 2, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPLR 1591", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKJR 1597", present: 6, late: 1, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1613", present: 5, late: 1, absent: 1, sick: 0, excused: 0, total: 16 }
    ],
    toleranceLimit: 3
  },
  2: {
    name: "Teofilus Satria Rada Insani",
    nim: "01082230015",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1544", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PMLR 1547", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PAPR 1550", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PALR 1582", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "IKSR 1586", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPWR 1590", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPLR 1591", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKJR 1597", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1613", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 }
    ],
    toleranceLimit: 3
  },
  3: {
    name: "Joko Armando Setiabudi",
    nim: "01082230016",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1544", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PMLR 1547", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PAPR 1550", present: 4, late: 0, absent: 3, sick: 0, excused: 0, total: 16 }, // Reached: Absent = 3
      { name: "PALR 1582", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "IKSR 1586", present: 3, late: 0, absent: 4, sick: 0, excused: 0, total: 16 }, // Exceeded: Absent > 3
      { name: "PPWR 1590", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPLR 1591", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKJR 1597", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1613", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 }
    ],
    toleranceLimit: 3
  },
  4: {
    name: "Putra Futsal",
    nim: "01082230023",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 3, late: 1, absent: 1, sick: 1, excused: 1, total: 16 },
      { name: "KKLR 1544", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PMLR 1547", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PAPR 1550", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PALR 1582", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "IKSR 1586", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPWR 1590", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPLR 1591", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKJR 1597", present: 4, late: 1, absent: 2, sick: 0, excused: 0, total: 16 }, // Reached: Late + Absent = 3
      { name: "KKLR 1613", present: 3, late: 2, absent: 2, sick: 0, excused: 0, total: 16 }  // Exceeded: Late + Absent = 4 > 3
    ],
    toleranceLimit: 3
  },
  5: {
    name: "Benaya Simamora",
    nim: "01082230031",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 6, late: 1, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1544", present: 5, late: 2, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PMLR 1547", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PAPR 1550", present: 5, late: 2, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PALR 1582", present: 6, late: 1, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "IKSR 1586", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPWR 1590", present: 5, late: 2, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPLR 1591", present: 4, late: 3, absent: 0, sick: 0, excused: 0, total: 16 }, // Reached: Late = 3
      { name: "KKJR 1597", present: 6, late: 1, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKLR 1613", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 }
    ],
    toleranceLimit: 3
  },
  6: {
    name: "Ben Majesty Adrah Nesta",
    nim: "01082230018",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 3, late: 0, absent: 4, sick: 0, excused: 0, total: 16 }, // Exceeded: Absent > 3
      { name: "KKLR 1544", present: 3, late: 0, absent: 4, sick: 0, excused: 0, total: 16 }, // Exceeded: Absent > 3
      { name: "PMLR 1547", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PAPR 1550", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PALR 1582", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "IKSR 1586", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPWR 1590", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "PPLR 1591", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 },
      { name: "KKJR 1597", present: 4, late: 2, absent: 1, sick: 0, excused: 0, total: 16 }, // Reached: Late + Absent = 3
      { name: "KKLR 1613", present: 7, late: 0, absent: 0, sick: 0, excused: 0, total: 16 }
    ],
    toleranceLimit: 3
  },
  7: {
    name: "Simon",
    nim: "01082230010",
    cohort: "2023",
    faculty: "Faculty of Information and Technology/ Informatics",
    classes: [
      { name: "KKKR 1543", present: 2, late: 1, absent: 4, sick: 0, excused: 0, total: 16 }, // Exceeded: Absent > 3
      { name: "KKLR 1544", present: 0, late: 2, absent: 5, sick: 0, excused: 0, total: 16 }, // Exceeded: Late + Absent > 3, Absent > 3
      { name: "PMLR 1547", present: 3, late: 1, absent: 3, sick: 0, excused: 0, total: 16 }, // Exceeded: Late + Absent > 3, Absent = 3
      { name: "PAPR 1550", present: 5, late: 0, absent: 2, sick: 0, excused: 0, total: 16 },
      { name: "PALR 1582", present: 1, late: 2, absent: 4, sick: 0, excused: 0, total: 16 }, // Exceeded: Late + Absent > 3, Absent > 3
      { name: "IKSR 1586", present: 3, late: 1, absent: 3, sick: 0, excused: 0, total: 16 }, // Exceeded: Late + Absent > 3, Absent = 3
      { name: "PPWR 1590", present: 1, late: 1, absent: 5, sick: 0, excused: 0, total: 16 }, // Exceeded: Late + Absent > 3, Absent > 3
      { name: "PPLR 1591", present: 5, late: 0, absent: 2, sick: 0, excused: 0, total: 16 },
      { name: "KKJR 1597", present: 1, late: 2, absent: 4, sick: 0, excused: 0, total: 16 }, // Exceeded: Late + Absent > 3, Absent > 3
      { name: "KKLR 1613", present: 3, late: 1, absent: 3, sick: 0, excused: 0, total: 16 }  // Exceeded: Late + Absent > 3, Absent = 3
    ],
    toleranceLimit: 3
  }
};

// Fungsi untuk mendapatkan parameter ID dari URL
function getUserIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Fungsi untuk menghitung total tolerance issues (late + absent)
function calculateToleranceTotal(classData) {
  return classData.late + classData.absent;
}

// Fungsi untuk menentukan status toleransi
function getToleranceStatus(user) {
  const exceededClasses = [];
  const reachedClasses = [];
  
  user.classes.forEach(classData => {
    const toleranceTotal = calculateToleranceTotal(classData);
    const late = classData.late;
    const absent = classData.absent;
    
    // Check for Exceeded Tolerance (Red Alert)
    const isExceeded = (
      toleranceTotal > user.toleranceLimit ||  // Total Late + Absent > 3
      late > user.toleranceLimit ||            // Total Late > 3
      absent > user.toleranceLimit             // Total Absent > 3
    );
    
    // Check for Reached Tolerance (Yellow Alert) - only if not exceeded
    const isReached = !isExceeded && (
      toleranceTotal === user.toleranceLimit || // Total Late + Absent = 3
      late === user.toleranceLimit ||           // Total Late = 3
      absent === user.toleranceLimit            // Total Absent = 3
    );
    
    if (isExceeded) {
      exceededClasses.push({
        name: classData.name,
        late: late,
        absent: absent,
        total: toleranceTotal,
        reasons: getToleranceReasons(late, absent, toleranceTotal, user.toleranceLimit, 'exceeded')
      });
    } else if (isReached) {
      reachedClasses.push({
        name: classData.name,
        late: late,
        absent: absent,
        total: toleranceTotal,
        reasons: getToleranceReasons(late, absent, toleranceTotal, user.toleranceLimit, 'reached')
      });
    }
  });
  
  return { exceededClasses, reachedClasses };
}

// Fungsi untuk menentukan alasan toleransi
function getToleranceReasons(late, absent, total, limit, type) {
  const reasons = [];
  
  if (type === 'exceeded') {
    if (total > limit) reasons.push(`Late + Absent: ${total} > ${limit}`);
    if (late > limit) reasons.push(`Late: ${late} > ${limit}`);
    if (absent > limit) reasons.push(`Absent: ${absent} > ${limit}`);
  } else if (type === 'reached') {
    if (total === limit) reasons.push(`Late + Absent: ${total} = ${limit}`);
    if (late === limit) reasons.push(`Late: ${late} = ${limit}`);
    if (absent === limit) reasons.push(`Absent: ${absent} = ${limit}`);
  }
  
  return reasons;
}

// Fungsi untuk memuat data user ke halaman
function loadUserData() {
  const userId = getUserIdFromURL();
  
  console.log('Loading user data for ID:', userId);
  
  if (!userId || !usersData[userId]) {
    // Jika tidak ada ID atau user tidak ditemukan, gunakan default ID 6 (Ben Majesty) untuk testing
    console.log('User not found, using default ID: 6');
    const defaultUserId = '6';
    if (!usersData[defaultUserId]) {
      console.log('Default user not found, redirecting to userlist');
      window.location.href = '../userlist/index.html';
      return;
    }
    
    const user = usersData[defaultUserId];
    console.log('Using default user data:', user);
    updatePageContent(user);
    return;
  }
  
  const user = usersData[userId];
  console.log('User data:', user);
  
  updatePageContent(user);
}

// Fungsi untuk update konten halaman
function updatePageContent(user) {
  // Update detail section
  const detailValues = document.querySelectorAll('.detail-value');
  if (detailValues.length >= 4) {
    detailValues[0].textContent = user.name;
    detailValues[1].textContent = user.nim;
    detailValues[2].textContent = user.cohort;
    detailValues[3].textContent = user.faculty;
  }

  // Update class information table
  const tableRows = document.querySelectorAll('.table-row');
  user.classes.forEach((classData, index) => {
    if (tableRows[index]) {
      const cells = tableRows[index].querySelectorAll('.table-cell');
      if (cells.length >= 6) {
        cells[0].textContent = classData.name;
        cells[1].textContent = `${classData.present}/${classData.total}`;
        cells[2].textContent = `${classData.late}/${classData.total}`;
        cells[3].textContent = `${classData.absent}/${classData.total}`;
        cells[4].textContent = `${classData.sick}/${classData.total}`;
        cells[5].textContent = `${classData.excused}/${classData.total}`;
      }
    }
  });

  // Update condition section
  const toleranceStatus = getToleranceStatus(user);
  console.log('Tolerance status:', toleranceStatus);
  
  const conditionAlertsDiv = document.querySelector('.condition-alerts');
  const conditionDescription = document.querySelector('.condition-description');  if (toleranceStatus.exceededClasses.length > 0 || toleranceStatus.reachedClasses.length > 0) {
    conditionAlertsDiv.style.display = 'block';
    conditionDescription.textContent = 'Student has attendance issues in the following courses:';
    
    // Show exceeded tolerance alert
    const exceededAlert = conditionAlertsDiv.querySelector('.alert.exceeded');
    if (toleranceStatus.exceededClasses.length > 0) {
      exceededAlert.style.display = 'block';
      const exceededClassesDiv = exceededAlert.querySelector('.alert-classes');
      exceededClassesDiv.innerHTML = '';
      
      toleranceStatus.exceededClasses.forEach(classInfo => {
        const classItem = document.createElement('div');
        classItem.className = 'class-alert-item';
        
        classItem.innerHTML = `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div class="class-alert-name">${classInfo.name}</div>
              <div class="class-alert-details">
                <span class="class-alert-late">Late: ${classInfo.late}</span>
                <span class="class-alert-absent">Absent: ${classInfo.absent}</span>
                <span class="class-alert-total">Total: ${classInfo.total}/3</span>
              </div>
            </div>
          </div>
        `;
        exceededClassesDiv.appendChild(classItem);
      });
    } else {
      exceededAlert.style.display = 'none';
    }
    
    // Show reached tolerance alert
    const reachedAlert = conditionAlertsDiv.querySelector('.alert.reached');
    if (toleranceStatus.reachedClasses.length > 0) {
      reachedAlert.style.display = 'block';
      const reachedClassesDiv = reachedAlert.querySelector('.alert-classes');
      reachedClassesDiv.innerHTML = '';
      
      toleranceStatus.reachedClasses.forEach(classInfo => {
        const classItem = document.createElement('div');
        classItem.className = 'class-alert-item';
        
        classItem.innerHTML = `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div class="class-alert-name">${classInfo.name}</div>
              <div class="class-alert-details">
                <span class="class-alert-late">Late: ${classInfo.late}</span>
                <span class="class-alert-absent">Absent: ${classInfo.absent}</span>
                <span class="class-alert-total">Total: ${classInfo.total}/3</span>
              </div>
            </div>
          </div>
        `;
        reachedClassesDiv.appendChild(classItem);
      });
    } else {
      reachedAlert.style.display = 'none';
    }
  } else {
    conditionAlertsDiv.style.display = 'none';
    conditionDescription.textContent = 'Student has not exceeded or reached the tolerance limit for any courses.';
  }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadUserData);