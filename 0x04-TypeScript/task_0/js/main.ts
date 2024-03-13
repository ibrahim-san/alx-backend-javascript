interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: "Ali",
    lastName: "Zayyed",
    age: 20,
    location: "Palestine"
};

const secondStudent: Student = {
    firstName: "Fatima",
    lastName: "Omar",
    age: 17,
    location: "Qatar"
};

const studentsList: Student[] = [firstStudent, secondStudent];

function createAndRenderTable() {
    // Create table element
    const table = document.createElement('table');

    // Create table header
    const tableHead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);

    tableHead.appendChild(headerRow);

    // Create table body
    const tableBody = document.createElement('tbody');

    // Loop through each student and create a new row
    studentsList.forEach(student => {
        const row = document.createElement('tr');

        // Create table data for first name and location
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        // Append cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Append table head and body to the table
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    // Append the table to the document body
    document.body.appendChild(table);
}

createAndRenderTable();