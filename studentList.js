$(document).ready(function() {
    var apiUrl = 'https://f05f388e-0a2b-4879-80e8-6687ab09f493.mock.pstmn.io/students/list'; // Replace with your mock API URL

    // AJAX POST request to fetch student list
    $.ajax({
        url: apiUrl,
        type: 'POST',
        success: function(response) {
            if (response && Array.isArray(response.students)) {
                response.students.forEach(function(student) {
                    var tableRow = '<tr>' +
                                   '<td><a href="studentDetails.html?id=' + encodeURIComponent(student.id) + '">' +
                                   student.id + '</a></td>' +
                                   '<td>' + student.firstname + '</td>' +
                                   '<td>' + student.lastname + '</td>' +
                                   '<td>' + student.date_of_birth + '</td>' +
                                   '<td>' + student.class + '</td>' +
                                   '<td>' + student.mobileNo + '</td>' +
                                   '</tr>';

                    // Append the row to the table body
                    $('#studentTable tbody').append(tableRow);
                });
            } else {
                console.error('Expected an array of students but received:', response);
                alert('Error: Expected an array of students.');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error occurred:', error);
            alert('An error occurred while fetching the data.');
        }
    });
});
