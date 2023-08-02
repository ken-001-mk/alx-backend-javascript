interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location:string;
}
const student1: Student = {
    firstName: 'Peter',
    lastName: 'Harts',
    age: 34,
    location: 'California'
};
const student2: Student ={
    firstName: 'Mark',
    lastName: 'Jones',
    age: 29,
    location: 'Texas'
};
const studentsList: Student[] = [student1, student2];

const table = document.getElementById("students-table");
function renderTable() {
    studentsList.forEach((student) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        nameCell.textContent = '${student.firstName} ${student.lastName}';
        locationCell.textContent = student.location;
        row.appendChild(nameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });
}