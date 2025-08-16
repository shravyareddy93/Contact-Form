const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields!");
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Please enter a valid email address!");
    return;
  }
  alert("Form submitted successfully!");
  form.reset();
});
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task === "") {
    alert("⚠️ Please enter a task before adding!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  todoList.appendChild(li);
  todoInput.value = "";
});
