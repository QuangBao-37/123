
const scare = document.getElementById('scare-zone');
const btn = document.getElementById('trigger-btn');
const scream = document.getElementById('scream');

btn.addEventListener('click', () => {
  scare.classList.remove('hidden');

  // Lắc màn hình
  setInterval(() => {
    window.moveBy(Math.random() * 20 - 10, Math.random() * 20 - 10);
  }, 100);

  // Popup liên tục
  let count = 0;
  let spamPopup = setInterval(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "width=400,height=300");
    count++;
    if (count > 10) clearInterval(spamPopup);
  }, 800);

  // Sau 10 giây chuyển trang chính
  setTimeout(() => {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, 10000);
});
