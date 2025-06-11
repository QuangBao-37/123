
document.getElementById("transfer-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message").value;

  document.getElementById("r-name").innerText = name;
  document.getElementById("r-amount").innerText = parseInt(amount).toLocaleString();
  document.getElementById("r-message").innerText = message;

  document.getElementById("transfer-form").classList.add("hidden");
  document.getElementById("receipt").classList.remove("hidden");

  document.getElementById("ting").play();
});

function copyReceipt() {
  const receiptText = `
--- HÓA ĐƠN GIẢ CHUYỂN KHOẢN ---
Người nhận: ${document.getElementById("r-name").innerText}
Số tiền: ${document.getElementById("r-amount").innerText} VND
Nội dung: ${document.getElementById("r-message").innerText}
✅ Giao dịch thành công!
  `;
  navigator.clipboard.writeText(receiptText);
  alert("Đã sao chép hóa đơn giả!");
}
