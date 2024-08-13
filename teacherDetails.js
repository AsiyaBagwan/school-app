$(document).ready(function() {
    // Extract teacher ID from URL
    var urlParams = new URLSearchParams(window.location.search);
    var teacherId = urlParams.get('id');

    if (teacherId) {
        var apiUrl = 'https://d7e294ae-988d-4cbc-963b-36ef06c51870.mock.pstmn.io/Teacher/details'; // Replace with your mock API URL

        // AJAX GET request to fetch teacher details
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json', // Ensure the response is parsed as JSON
            success: function(response) {
                console.log('Response:', response); // Log the response for debugging
                if (response && Array.isArray(response.teachers)) {
                    // Find the teacher with the matching ID
                    var teacher = response.teachers.find(function(teacher) {
                        return teacher.id == teacherId;
                    });

                    if (teacher) {
                        var detailsHtml = `
                            <table>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Date of Birth</th>
                                    <th>Class</th>
                                    <th>Mobile No</th>
                                </tr>
                                <tr>
                                    <td>${teacher.id}</td>
                                    <td>${teacher.firstname}</td>
                                    <td>${teacher.lastname}</td>
                                    <td>${teacher.date_of_birth}</td>
                                    <td>${teacher.class}</td>
                                    <td>${teacher.mobileNo}</td>
                                </tr>
                            </table>`;

                        // Append details to the page
                        $('#teacherDetails').html(detailsHtml);
                    } else {
                        console.error('Teacher not found');
                        alert('Error: Teacher not found.');
                    }
                } else {
                    console.error('Expected an array of teachers but received:', response);
                    alert('Error: Expected an array of teachers.');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error occurred:', error);
                alert('An error occurred while fetching the data.');
            }
        });
    } else {
        alert('Teacher ID not provided.');
    }
});









