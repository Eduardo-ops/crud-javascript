var selectedRow = null;

// SUBMISSION COMPLETED FORM
function formSubmit() {
    var formData = readData();
    if (selectedRow == null)
        createUser(formData);
    else
        updateRecord(formData);
    resetForm();
}

// RESET FORM
function resetForm() {
    document.getElementById("nome").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contato").value = '';
    entById("contato").value = '';
}

//CREATE
function createUser(data) {
    var table = document.getElementById("userList").getElementsByTagName('tbody')['0'];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contato;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="updateUser(this)">Editar</a> <a onClick="deleteUser(this)">Deletar</a>`;
}

// READ DATA FORM
function readData() {
    var data = {};
    FormData["nome"] = document.getElementById("nome").value;
    FormData["email"] = document.getElementById("email").value;
    FormData["contato"] = document.getElementById("contato").value;
    return FormData;
}

// UPDATE USER
function updateUser(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementsByTagName("nome").value = selectedRow.cell1[0].innerHTML;
    document.getElementsByTagName("email").value = selectedRow.cell2[1].innerHTML;
    document.getElementsByTagName("contato").value = selectedRow[2].innerHTML;
}

// UPDATE RECORD EXISTENT
function updateRecord() {
    selectedRow.cell1["nome"].value = selectedRow.cell[0].innerHTML;
    selectedRow.cell2["email"].value = selectedRow.cell[1].innerHTML;
    selectedRow.cell3["contato"].value = selectedRow.cell[2].innerHTML;
}

// DELETE USER
function deleteUser(td) {
    if (confirm('Deseja realmente excluir ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("userList").deleteRow(row.rowIndex);
        resetForm();
    }
}