// เสียง
const clickSound = new Audio("./click.mp3");
const successSound = new Audio("./success.mp3");
const errorSound = new Audio("./error.mp3");

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// ดอกไม้ร่วง
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 20 + 20;
    flower.style.width = size + "px";
    flower.style.height = size + "px";
    const duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";
    document.getElementById("flower-container").appendChild(flower);
    setTimeout(() => flower.remove(), duration * 1000);
}
setInterval(createFlower, 300);

// Toast แจ้งเตือน
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// เปลี่ยนหน้าแบบ crossfade
let currentPage = 1;
function nextPage() {
    const current = document.getElementById(`page${currentPage}`);
    const next = document.getElementById(`page${currentPage + 1}`);
    if (!next) return;
    next.classList.add("active");
    requestAnimationFrame(() => {
        current.style.opacity = 0;
        next.style.opacity = 1;
        setTimeout(() => {
            current.classList.remove("active");
            current.style.opacity = "";
        }, 900);
    });
    currentPage++;
}

// ตรวจรหัสผ่าน
function checkPassword() {
    const pass = document.getElementById("password-input").value;
    if (pass === "0808") {
        successSound.currentTime = 0;
        successSound.play();
        showToast("✅ รหัสถูกต้อง");
        setTimeout(() => {
            nextPage();
        }, 800);
    } else {
        errorSound.currentTime = 0;
        errorSound.play();
        showToast("❌ รหัสไม่ถูกต้อง");
    }
}

// กด Enter เพื่อยืนยันรหัส
document.getElementById("password-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkPassword();
    }
});
