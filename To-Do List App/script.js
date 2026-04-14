const timeElement = document.getElementById("current-date");

const now = new Date();
const formatted = now.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

timeElement.innerHTML = `<i class="fa-solid fa-calendar"></i> ${formatted}`;
timeElement.setAttribute('datetime', now.toISOString().split('T')[0]);


const yearCopy = document.getElementById("yearCopyright");
yearCopy.innerText = new Date().getFullYear();
