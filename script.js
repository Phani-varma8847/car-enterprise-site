const form = document.getElementById("bookForm");
const message = document.getElementById("message");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const car = document.getElementById("car").value;
  const date = document.getElementById("date").value;

  if (!name || !car || !date) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
    return;
  }

  message.innerHTML = `✅ Booking confirmed for <strong>${car}</strong> by <strong>${name}</strong> on <strong>${date}</strong>.`;
  message.style.color = "green";
  form.reset();
});
