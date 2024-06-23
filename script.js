document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = {
        'index.html': 'home-link',
        'about.html': 'about-link',
        'portfolio.html': 'portfolio-link',
        'contact.html': 'contact-link'
    };

    if (navLinks[currentPage]) {
        document.getElementById(navLinks[currentPage]).classList.add('active');
    }
});

// document.getElementById('customForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var emailAddress = document.getElementById('emailAddress').value;
//     var message = document.getElementById('message').value;

//     fetch('https://script.google.com/macros/s/AKfycbxtk3n_ZF7cWfk7uvNOtTG7jPiJfZiyoeBq9hSNwJifIy0b6-kYet5-oaSGpfyGU5HE/exec', {
//         method: 'POST',
//         body: JSON.stringify({FirstName: firstName, lastName: lastName, emailAddress: emailAddress, message: message}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.result === 'success') {
//             document.getElementById('responseMessage').innerText = 'Form submitted successfully!';
//             document.getElementById('customForm').reset();
//         } else {
//             document.getElementById('responseMessage').innerText = 'There was an error submitting the form.';
//         }
//     })
//     .catch(error => {
//         document.getElementById('responseMessage').innerText = 'There was an error submitting the form.';
//         console.error('Error:', error);
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const navbarIcon = document.getElementById('navbar-icon');
    const menuIcon = document.getElementById('menu-icon');
    const cancelIcon = document.getElementById('cancel-icon');
    const sidebar = document.getElementById('sidebar');

    navbarIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('hidden');
        cancelIcon.classList.toggle('hidden');
        sidebar.classList.toggle('hidden-sidebar');

        if (menuIcon.classList.contains('hidden')) {
            menuIcon.classList.add('animate-spin');
        } else {
            menuIcon.classList.remove('animate-spin');
        }
    });
});

  