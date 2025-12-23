let horses = JSON.parse(localStorage.getItem("horses")) || [];
let logs = JSON.parse(localStorage.getItem("logs")) || [];
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function saveData() {
    localStorage.setItem("horses", JSON.stringify(horses));
    localStorage.setItem("logs", JSON.stringify(logs));
    localStorage.setItem("appointments", JSON.stringify(appointments));
    localStorage.setItem("posts", JSON.stringify(posts));
    updateDashboard();
}

function updateDashboard() {
    document.getElementById("horseCount").textContent = horses.length;
    document.getElementById("appointmentCount").textContent = appointments.length;
}

/* Horse */
function addHorse() {
    const name = horseName.value;
    const breed = horseBreed.value;
    if (!name || !breed) return;
    horses.push({ name, breed });
    horseName.value = "";
    horseBreed.value = "";
    renderHorses();
    saveData();
}

function renderHorses() {
    horseList.innerHTML = "";
    horses.forEach(h => {
        horseList.innerHTML += `<li>${h.name} (${h.breed})</li>`;
    });
}

/* Logs */
function addLog() {
    if (!logText.value) return;
    logs.push(logText.value);
    logText.value = "";
    renderLogs();
    saveData();
}

function renderLogs() {
    logList.innerHTML = "";
    logs.forEach(l => logList.innerHTML += `<li>${l}</li>`);
}

/* Appointments */
function addAppointment() {
    if (!apptDate.value || !apptDesc.value) return;
    appointments.push({ date: apptDate.value, desc: apptDesc.value });
    apptDate.value = "";
    apptDesc.value = "";
    renderAppointments();
    saveData();
}

function renderAppointments() {
    appointmentList.innerHTML = "";
    appointments.forEach(a => {
        appointmentList.innerHTML += `<li>${a.date} - ${a.desc}</li>`;
    });
}

/* Community */
function addPost() {
    if (!postText.value) return;
    posts.push(postText.value);
    postText.value = "";
    renderPosts();
    saveData();
}

function renderPosts() {
    postList.innerHTML = "";
    posts.forEach(p => postList.innerHTML += `<li>${p}</li>`);
}

/* Init */
renderHorses();
renderLogs();
renderAppointments();
renderPosts();
updateDashboard();
