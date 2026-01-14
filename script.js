@@ -1,124 +1,127 @@
// filepath: script.js
<<<<<<< HEAD
// ================================
// เกมทายตัวเลข (Number Guessing Game)
// ================================

// -------------------------------
// ตัวแปรสถานะของเกม
// -------------------------------

// ตัวเลขลับ (สุ่มใหม่ทุกครั้งที่เริ่มเกม)
let secretNumber = 0;

// ตัวแปรนับจำนวนครั้งที่ผู้เล่นทาย
let attemptCount = 0;

// -------------------------------
=======
// ...existing code...
<<<<<<< HEAD
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
 const guessInput = document.getElementById("guessInput");
 const guessValue = parseInt(guessInput.value);
 const resultContainer = document.getElementById("resultContainer");
 // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
 if (isNaN(guessValue) || guessInput.value === "") {
 resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลข!
 </div>
 `;
 return;
 }
 // Validation: ตรวจสอบว่าอยู่ในช่วง 1-100 หรือไม่
 if (guessValue < 1 || guessValue > 100) {
 resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100!
 </div>
 `;
 return;
 }
 attemptCount++;
 if (guessValue === secretNumber) {
 resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
 } else if (guessValue > secretNumber) {
 resultContainer.innerHTML = `
 <div class="alert alert-warning" role="alert">
 ↓ ตัวเลขสูงไป
 </div>
 `;
 } else {
 resultContainer.innerHTML = `
 <div class="alert alert-info" role="alert">
 ↑ ตัวเลขตํ่าไป
 </div>
 `;
 }
 updateDisplay();
 guessInput.value = "";
 guessInput.focus();
}
// ...existing code...
// filepath: script.js
// ตัวแปรนับจํานวนครั้งที่ทาย
let attemptCount = 0;
// ฟังก์ชันอัปเดตจํานวนครั้ง
function updateDisplay() {
 const attemptsContainer = document.getElementById("attemptsContainer");
 attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}
//และแก้ไข checkGuess() ให้เพิ่ม attemptCount:
function checkGuess() {
 const guessInput = document.getElementById("guessInput");
 const guessValue = parseInt(guessInput.value);
 const resultContainer = document.getElementById("resultContainer");
 // ... validation code ...
 attemptCount++; // เพิ่มตรงนี้
 if (guessValue === secretNumber) {
 resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
 }
 // ... rest of code ...
}
=======
>>>>>>> 96569d34d3bb139fdf33be568543874c28c405a1
// ฟังก์ชันเริ่มเกมใหม่
// - สุ่มตัวเลข 1–100
// - รีเซ็ตจำนวนครั้งที่ทาย
// - อัปเดตการแสดงผล
// -------------------------------
function initializeGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;
  updateDisplay();
}
<<<<<<< HEAD

// -------------------------------
// ฟังก์ชันตรวจสอบค่าที่ผู้เล่นทาย
// - ตรวจสอบความถูกต้องของข้อมูล (validation)
// - เพิ่มจำนวนครั้งที่ทาย
// - แสดงผลลัพธ์ว่าถูก / สูงไป / ต่ำไป
// -------------------------------
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");

  // Validation: ตรวจสอบว่ามีการใส่ค่าและเป็นตัวเลขหรือไม่
  if (isNaN(guessValue) || guessInput.value === "") {
    resultContainer.innerHTML = `
      <div class="alert alert-danger" role="alert">
        กรุณาใส่ตัวเลข!
      </div>
    `;
    return;
  }

  // Validation: ตรวจสอบว่าตัวเลขอยู่ในช่วง 1–100 หรือไม่
  if (guessValue < 1 || guessValue > 100) {
    resultContainer.innerHTML = `
      <div class="alert alert-danger" role="alert">
        กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100!
      </div>
    `;
    return;
  }

  // เพิ่มจำนวนครั้งที่ผู้เล่นทาย
  attemptCount++;

  // ตรวจสอบผลลัพธ์การทาย
  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
      <div class="alert alert-success" role="alert">
        <h5>✓ ถูกต้อง!</h5>
        <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
      </div>
    `;
  } else if (guessValue > secretNumber) {
    resultContainer.innerHTML = `
      <div class="alert alert-warning" role="alert">
        ↓ ตัวเลขสูงไป
      </div>
    `;
  } else {
    resultContainer.innerHTML = `
      <div class="alert alert-info" role="alert">
        ↑ ตัวเลขต่ำไป
      </div>
    `;
  }

  // อัปเดตจำนวนครั้งที่ทายบนหน้าจอ
  updateDisplay();

  // เคลียร์ช่องกรอกและโฟกัสเพื่อทายครั้งถัดไป
  guessInput.value = "";
  guessInput.focus();
}

// -------------------------------
// ฟังก์ชันอัปเดตการแสดงจำนวนครั้งที่ทาย
// -------------------------------
function updateDisplay() {
  const attemptsContainer = document.getElementById("attemptsContainer");
  attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}

// -------------------------------
// ฟังก์ชันรีเซ็ตเกม
// - เริ่มเกมใหม่
// - ล้างผลลัพธ์เดิม
// - เคลียร์ช่องกรอก
// -------------------------------
function resetGame() {
  initializeGame();
  document.getElementById("resultContainer").innerHTML = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}

// -------------------------------
// เริ่มเกมอัตโนมัติเมื่อโหลดหน้าเว็บ
// -------------------------------
window.addEventListener("load", initializeGame);

document.addEventListener("DOMContentLoaded", function () {

     document
    .getElementById("guessInput")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        checkGuess();
      }
    });
});
=======
// ...existing code...
อัปเดต index.html เพิ่ม button:
<!-- filepath: index.html -->
<!-- ...existing code... -->
<div class="d-grid gap-2">
 <button onclick="checkGuess()" class="btn btn-primary">ทาย</button>
 <button onclick="resetGame()" class="btn btn-secondary">เริ่มใหม่</button>
</div>
<!-- ...existing code... -->
>>>>>>> 8e69db09db87af7cc53691cc826561a0068b3f24
>>>>>>> 96569d34d3bb139fdf33be568543874c28c405a1
