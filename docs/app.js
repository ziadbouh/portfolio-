document.querySelector('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message, je reviendrai vers vous bientôt !');
    this.reset();
});
