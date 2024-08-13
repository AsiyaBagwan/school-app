$(document).ready(function() {
    var apiUrl = 'https://d7e294ae-988d-4cbc-963b-36ef06c51870.mock.pstmn.io/Teacher/list'; // Replace with your mock API URL

    // AJAX POST request to fetch student list
    $.ajax({
        url: apiUrl,
        type: 'POST',
        success: function(response) {
            if (response && Array.isArray(response.Teachers)) {
                response.Teachers.forEach(function(Teacher) {
                    var tableRow = '<tr>' +
                                   '<td><a href="teacherdetails.html?id=' + encodeURIComponent(Teacher.id) + '">' +
                                   Teacher.id + '</a></td>' +
                                   '<td>' + Teacher.firstname + '</td>' +
                                   '<td>' + Teacher.lastname + '</td>' +
                                   '<td>' + Teacher.date_of_birth + '</td>' +
                                   '<td>' + Teacher.class + '</td>' +
                                   '<td>' + Teacher.mobileNo + '</td>' +
                                   '</tr>';

                    // Append the row to the table body
                    $('#teacherTable tbody').append(tableRow);
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