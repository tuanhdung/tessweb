let students = [];

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Vui lòng nhập đầy đủ tên và email.");
    return;
  }

  students.push({ name, email });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  updateList();
}

function updateList() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${student.name} (${student.email})</span>
      <button onclick="editStudent(${index})">Sửa</button>
      <button onclick="deleteStudent(${index})">Xóa</button>
    `;
    list.appendChild(li);
  });
}

function editStudent(index) {
  const newName = prompt("Tên mới:", students[index].name);
  const newEmail = prompt("Email mới:", students[index].email);
  if (newName && newEmail) {
    students[index] = { name: newName, email: newEmail };
    updateList();
  }
}

function deleteStudent(index) {
  if (confirm("Bạn có chắc muốn xóa không?")) {
    students.splice(index, 1);
    updateList();
  }
}
