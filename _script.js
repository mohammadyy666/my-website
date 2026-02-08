document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("services")
    .scrollIntoView({behavior:"smooth"});
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("پیام شما ارسال شد ✅");
});