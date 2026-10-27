function generateTable() {
    // array of object
    let student_array = [
        { name: "Rahim", cgpa: 3.5 },
        { name: "Karim", cgpa: 3.3 },
        { name: "Nadia", cgpa: 3.6 },
    ];

    let student_table = document.createElement("table");

    let header_row = document.createElement("tr");

    let th_name = document.createElement("th");
    th_name.innerText = "Name";
    header_row.appendChild(th_name);
    let th_cgpa = document.createElement("th");
    th_cgpa.innerText = "CGPA";
    header_row.appendChild(th_cgpa);

    student_table.appendChild(header_row);

    document.body.appendChild(student_table);

	/////////////////////////////////////////////////////////////

	for (let s of student_array) {
		let student_row = document.createElement('tr');

		let name_data = document.createElement('td');
		name_data.innerText = s.name;
		// <td>Rahim</td>
		student_row.appendChild(name_data);

		student_table.appendChild(student_row);


		// cgpa column
		cgpa_data = "<td>" + s.cgpa + "</td>";
		// console.log(student_row.innerHTML);
		student_row.innerHTML += cgpa_data;
		// <tr>
		//   <td>Rahim</td>
		//   <td>3.5</td>
		// </tr>
		// <tr><td></td></tr>

	}
}
