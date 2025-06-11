
const btn = document.getElementById('troll-btn');
const alertBox = document.getElementById('alert-box');
const scream = new Audio('https://www.soundjay.com/human/screaming-woman-01.mp3');

let moveCount = 0;

// Di chuyển nút khi di chuột đến gần
btn.addEventListener('mouseover', () => {
  if (moveCount >= 5) return;
  btn.style.position = 'absolute';
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
  moveCount++;
});

// Sau vài giây hiện thông báo và phát âm thanh giật mình
setTimeout(() => {
  alertBox.style.display = 'block';
  scream.volume = 1.0;
  scream.play();
  document.body.style.backgroundColor = '#222';
}, 7000);

// Thêm nháy màu nền mỗi giây sau 10 giây
setTimeout(() => {
  setInterval(() => {
    document.body.style.backgroundColor = 
      '#' + Math.floor(Math.random()*16777215).toString(16);
  }, 500);
}, 10000);
