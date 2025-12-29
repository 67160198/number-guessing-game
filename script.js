// filepath: script.js
// ...existing code...
// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
 initializeGame();
 document.getElementById("resultContainer").innerHTML = "";
 document.getElementById("guessInput").value = "";
 document.getElementById("guessInput").focus();
}
// ...existing code...
อัปเดต index.html เพิ่ม button:
<!-- filepath: index.html -->
<!-- ...existing code... -->
<div class="d-grid gap-2">
 <button onclick="checkGuess()" class="btn btn-primary">ทาย</button>
 <button onclick="resetGame()" class="btn btn-secondary">เริ่มใหม่</button>
</div>
<!-- ...existing code... -->