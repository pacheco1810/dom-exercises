// =========================
// DATE
// =========================
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

// =========================
// COPYRIGHT
// =========================
const yearCopy = document.getElementById("yearCopyright");
if (yearCopy) {
  yearCopy.innerText = new Date().getFullYear();
}

// =========================
// STORAGE HELPERS
// =========================
function getTasks() {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.warn("Corrupted localStorage detected. Resetting...");
    localStorage.removeItem("tasks");
    return [];
  }
}
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =========================
// DOM REFERENCES
// =========================
const taskInput = document.getElementById("task-input");
const taskForm = document.querySelector(".task-form");
const taskList = document.querySelector(".task-list");

const modal = document.getElementById("delete-modal");
const cancelBtn = document.querySelector(".cancel-btn");
const confirmBtn = document.querySelector(".confirm-delete-btn");

let taskToDelete = null;
let lastFocusedElement = null;

// =========================
// CREATE TASK ELEMENT
// =========================
function createTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("task-item");

  if (task.completed) {
    li.classList.add("task-active");
  }

  li.dataset.id = task.id;

  li.innerHTML = `
    <label class="task-checkbox">
      <input type="checkbox" ${task.completed ? "checked" : ""} />

      <span class="checkmark">
        <i class="fa-solid fa-check" aria-hidden="true"></i>
      </span>

      <span class="task-text">${task.text}</span>
    </label>

    <button 
      type="button" 
      class="delete-btn"
      aria-label="Delete task: ${task.text}">
      <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
    </button>
  `;

  return li;
}

// =========================
// LOAD TASKS (INIT)
// =========================
function loadTasks() {
  const tasks = getTasks();

  tasks.forEach(task => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
  });
}

loadTasks();

// =========================
// ADD TASK
// =========================
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return;

  const tasks = getTasks();

  const newTask = {
    id: Date.now().toString(),
    text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks(tasks);

  const li = createTaskElement(newTask);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
});

// =========================
// CHECK / UNCHECK TASK
// =========================
taskList.addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {

    const li = e.target.closest(".task-item");
    const id = li.dataset.id;

    let tasks = getTasks();

    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: e.target.checked };
      }
      return task;
    });

    saveTasks(tasks);

    li.classList.toggle("task-active", e.target.checked);
  }
});

// =========================
// OPEN MODAL (DELETE)
// =========================
taskList.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  lastFocusedElement = deleteBtn;
  taskToDelete = deleteBtn.closest(".task-item");

  openModal();
});

// =========================
// MODAL CONTROL
// =========================
function openModal() {
  modal.hidden = false;

  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });

  confirmBtn.focus();
}

function closeModal() {
  modal.classList.remove("is-open");

  setTimeout(() => {
    modal.hidden = true;
  }, 250);

  taskToDelete = null;

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// =========================
// CANCEL DELETE
// =========================
cancelBtn.addEventListener("click", closeModal);

// =========================
// CONFIRM DELETE
// =========================
confirmBtn.addEventListener("click", () => {
  if (taskToDelete) {
    const li = taskToDelete; // 🔥 guardamos referencia
    const id = li.dataset.id;

    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== id);

    saveTasks(tasks);

    li.classList.add("removing");

    setTimeout(() => {
      li.remove(); // ✅ ya no depende de taskToDelete
    }, 300);
  }

  closeModal();
});

// =========================
// CLOSE WITH ESC
// =========================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

