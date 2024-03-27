document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        print("From your website")
        // Construct the WhatsApp message
        const whatsappMessage = `From your website %0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        // Replace the '+' with '%2B' in the phone number
        const phoneNumber = '+91 9355041510'.replace('+', '%2B');

        // Construct the WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

        // Open WhatsApp in a new tab with the pre-filled message
        window.open(whatsappUrl, '_blank');
    });
});
