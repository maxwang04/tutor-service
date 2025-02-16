document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            window.location.href = "booking-confirmed.html";
        });
    }

    const tutorForm = document.getElementById("tutor-form");
    if (tutorForm) {
        tutorForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Your application has been submitted!");
        });
    }
});
