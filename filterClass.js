$(document).ready(function() {
    var apiUrl = 'https://73dd31f3-6e26-44a0-836c-5738be080baa.mock.pstmn.io/filter'; // Replace with your actual API endpoint

    // Function to fetch and display student list based on class filter
    function fetchAndDisplayStudents(classFilter) {
        $.ajax({
            url: apiUrl,
            type: 'POST',
            dataType: 'json',
            data: {
                class: classFilter // Send class filter as JSON data
            },
            success: function(response) {
                if (response && Array.isArray(response.students)) {
                    var students = response.students;

                    // Clear existing table rows
                    $('#studentTable tbody').empty();

                    // Populate table with filtered students
                    students.forEach(function(student) {
                        var tableRow = '<tr>' +
                            '<td><a href="studentDetails.html?id=' + encodeURIComponent(student.id) + '">' +
                            student.id + '</a></td>' +
                            '<td>' + student.firstname + '</td>' +
                            '<td>' + student.lastname + '</td>' +
                            '<td>' + student.date_of_birth + '</td>' +
                            '<td>' + student.class + '</td>' +
                            '<td>' + student.mobileNo + '</td>' +
                            '</tr>';

                        // Append to table body
                        $('#studentTable tbody').append(tableRow);
                    });
                } else {
                    console.error('Error: Expected an array of students.');
                    alert('Error: Expected an array of students.');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error occurred while fetching students:', error);
                alert('An error occurred while fetching student data.');
            }
        });
    }

    // Initial fetch and display all students
    fetchAndDisplayStudents();

    // Handle change in class filter dropdown
    $('#classFilter').change(function() {
        var selectedClass = $(this).val();
        fetchAndDisplayStudents(selectedClass);
    });
});
