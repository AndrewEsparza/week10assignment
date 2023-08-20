
// Function to add a new row to the table
function addTableRow(name, email) {
    const tableBody = document.getElementById("table-body");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
    `;
    tableBody.appendChild(newRow);
}

// Form submit event listener
document.getElementById("add-row-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Add a new row to the table
    addTableRow(nameInput.value, emailInput.value);

    // Clear form inputs
    nameInput.value = "";
    emailInput.value = "";
});
