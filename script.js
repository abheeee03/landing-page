function scrollToContact() {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('mail-me-button').addEventListener('click', scrollToContact);
