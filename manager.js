var selectedRow=null;

function onFormSubmit(){

        var formData=readFormData();

        if(selectedRow==null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();    
}

function readFormData(){
    var formData = {
        websiteName:document.getElementById('websiteName').value,
        userName:document.getElementById('userName').value,
        emailUsed:document.getElementById('emailUsed').value,
        passwordUsed:document.getElementById('passwordUsed').value,
        
    };
    // console.log(formData);
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById('passwordList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.websiteName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailUsed;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.passwordUsed;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = ` <button onClick="onEdit(this)">Edit</button>
                        <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm(){
    document.getElementById('websiteName').value="";
    document.getElementById('userName').value="";
    document.getElementById('emailUsed').value="";
    document.getElementById('passwordUsed').value="";
    selectedRow=null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('websiteName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('userName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('emailUsed').value = selectedRow.cells[2].innerHTML;
    document.getElementById('passwordUsed').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.websiteName;
    selectedRow.cells[1].innerHTML=formData.userName;
    selectedRow.cells[2].innerHTML=formData.emailUsed;
    selectedRow.cells[3].innerHTML=formData.passwordUsed;
}

function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('passwordList').deleteRow(row.rowIndex);
        resetForm();
    }
}