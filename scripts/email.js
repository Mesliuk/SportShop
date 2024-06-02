document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validaciones
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    } else if (!isValidEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }    

    if (message === '') {
        alert('Por favor, ingresa tu mensaje.');
        return;
    }

    // Use your EmailJS credentials below
    emailjs.sendForm('service_yiss79a', 'template_qy16ptb', this)
        .then(function (response) {
            alert('Tu mensaje ha sido enviado exitosamente!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert('¡Ups! Se ha producido un error. Por favor, inténtalo de nuevo más tarde.');
            console.log('FAILED...', error);
        });
});

function isValidEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    var phoneRegex = /^\+[0-9]{1,3}-[0-9]{3,14}$/;
    return phoneRegex.test(phone);
}

/*


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Use your EmailJS credentials below
    emailjs.sendForm('service_yiss79a', 'template_qy16ptb', this)
        .then(function(response) {
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Oops! An error occurred. Please try again later.');
            console.log('FAILED...', error);
        });
}); */