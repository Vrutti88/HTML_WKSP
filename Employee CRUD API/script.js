const APIurl = 'https://employee-api-using-nodejs.onrender.com/employee';

// Fetch & Display Employees
function fetchEmployeeData() {
    fetch(APIurl)
        .then(res => res.json())
        .then(data => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            data.forEach(emp => {
                output.innerHTML += `
                <tr>
                    <td>${emp._id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.role}</td>
                    <td>${emp.salary}</td>
                    <td>
                        <button onclick="openModal('${emp._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">EDIT</button>
                        <button onclick="deleteEmployee('${emp._id}')" class="btn btn-danger">DELETE</button>
                    </td>
                </tr>`;
            });
        });
}

// Load single employee into modal
function openModal(id) {
    fetch(`${APIurl}/${id}`)
        .then(res => res.json())
        .then(emp => {
            document.getElementById('modal-id').value = emp._id;
            document.getElementById('modal-name').value = emp.name;
            document.getElementById('modal-email').value = emp.email;
            document.getElementById('modal-role').value = emp.role;
            document.getElementById('modal-salary').value = emp.salary;
        });
}

// Save Edited Employee
function editEmployee() {
    const id = document.getElementById('modal-id').value;
    const name = document.getElementById('modal-name').value;
    const email = document.getElementById('modal-email').value;
    const role = document.getElementById('modal-role').value;
    const salary = document.getElementById('modal-salary').value;

    fetch(`${APIurl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, salary })
    })
    .then(res => res.json())
    .then(() => {
        Swal.fire("Updated!", "Employee updated successfully", "success");
        setTimeout(() => window.location.reload(), 1500);
    })
    .catch(() => {
        Swal.fire("Error", "Something went wrong!", "error");
    });
}

// Create Employee
function createEmployee() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const salary = document.getElementById('salary').value;

    fetch(APIurl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, salary })
    })
    .then(res => res.json())
    .then(() => {
        Swal.fire("Created!", "Employee created successfully", "success");
        setTimeout(() => window.location.href = 'employee.html', 1500);
    })
    .catch(() => {
        Swal.fire("Error", "Something went wrong!", "error");
    });
}

// Delete Employee
function deleteEmployee(id) {
    fetch(`${APIurl}/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        Swal.fire("Deleted!", "Employee deleted successfully", "success");
        fetchEmployeeData();
    })
    .catch(() => {
        Swal.fire("Error", "Something went wrong!", "error");
    });
}

// Auto-fetch when on index page
if (document.getElementById('output')) {
    fetchEmployeeData();
}
