// filepath: script.js
// ...existing code...
// เพิ่มการ select text เมื่อคลิก input
document.addEventListener("DOMContentLoaded", function () {
 const guessInput = document.getElementById("guessInput");
 guessInput.addEventListener("focus", function () {
 this.select();
 });
});
// ...existing code..
อัปเดต index.html เพิ่ม button:
<!-- filepath: index.html -->
<!-- ...existing code... -->
<div class="d-grid gap-2">
 <button onclick="checkGuess()" class="btn btn-primary">ทาย</button>
 <button onclick="resetGame()" class="btn btn-secondary">เริ่มใหม่</button>
</div>
<!-- ...existing code... -->
