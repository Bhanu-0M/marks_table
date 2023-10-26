function createTable() {
    var name = document.getElementById("studentName").value;
    var rollNumber = document.getElementById("rollNumber").value;
    var subject1Marks = parseFloat(document.getElementById("subject1Marks").value) || 0;
    var subject2Marks = parseFloat(document.getElementById("subject2Marks").value) || 0;
    var subject3Marks = parseFloat(document.getElementById("subject3Marks").value) || 0;

    var totalMarks = subject1Marks + subject2Marks + subject3Marks;

    var table = document.getElementById("studentTable");
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = rollNumber;
    cell3.innerHTML = subject1Marks;
    cell4.innerHTML = subject2Marks;
    cell5.innerHTML = subject3Marks;

    var totalMarksCell = newRow.insertCell(5);
    totalMarksCell.innerHTML = totalMarks;

    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";
    document.getElementById("subject1Marks").value = "";
    document.getElementById("subject2Marks").value = "";
    document.getElementById("subject3Marks").value = "";
}