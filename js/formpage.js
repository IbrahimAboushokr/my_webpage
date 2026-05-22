$(document).ready(function() {
    $('#requestForm').on('submit', function(event) {
        event.preventDefault();

        // Basic validation for demonstration
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();

        if (name === '' || email === '' || phone === '') {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Form submitted successfully!');
        // Here you can add your AJAX code or form submission logic
        this.reset();
    });
});