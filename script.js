// This script toggles the visibility of the contact info when the button is clicked
document.getElementById('contact-button').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});
