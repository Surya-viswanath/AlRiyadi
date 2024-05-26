



// document.addEventListener('DOMContentLoaded', function () {
//     const input = document.querySelector("#mobileNumber");
//     const iti = window.intlTelInput(input, {
//         initialCountry: "auto",
//         geoIpLookup: function(callback) {
//             fetch('https://ipinfo.io?token=<your_token>')
//                 .then(response => response.json())
//                 .then(data => callback(data.country))
//                 .catch(() => callback('us'));
//         },
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
//     });

//     const nationalitySelect = $('#nationality');
    
//     // Fetch country list from an API or use a static JSON file
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => {
//             const countries = data.map(country => ({
//                 id: country.cca2.toLowerCase(),
//                 text: country.name.common
//             }));

//             nationalitySelect.select2({
//                 data: countries
//             });
//         });

//     const form = document.getElementById('registrationForm');

//     form.addEventListener('submit', async function(e) {
//         e.preventDefault();

//         const fullName = document.getElementById('fullName').value;
//         if (fullName.length <= 6) {
//             alert('Full Name must be greater than 6 letters.');
//             return;
//         }

//         const formData = {
//             fullName: fullName,
//             motherName: document.getElementById('motherName').value,
//             birthday: document.getElementById('birthday').value,
//             nationality: document.getElementById('nationality').value,
//             gender: document.getElementById('gender').value,
//             email: document.getElementById('email').value,
//             maritalStatus: document.getElementById('maritalStatus').value,
//             mobileNumber: iti.getNumber(),
//         };

//         try {
//             const response = await fetch('https://formspree.io/f/mrgnvobe', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert('Form submitted successfully!');
//             } else {
//                 alert('Failed to submit the form.');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const input = document.querySelector("#mobileNumber");
//     const secondInput = document.querySelector("#secondMobileNumber");
    
//     const iti = window.intlTelInput(input, {
//         initialCountry: "auto",
//         geoIpLookup: function(callback) {
//             fetch('https://ipinfo.io?token=<your_token>')
//                 .then(response => response.json())
//                 .then(data => callback(data.country))
//                 .catch(() => callback('us'));
//         },
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
//     });

//     const itiSecond = window.intlTelInput(secondInput, {
//         initialCountry: "auto",
//         geoIpLookup: function(callback) {
//             fetch('https://ipinfo.io?token=<your_token>')
//                 .then(response => response.json())
//                 .then(data => callback(data.country))
//                 .catch(() => callback('us'));
//         },
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
//     });

//     const nationalitySelect = $('#nationality');
    
//     // Fetch country list from an API or use a static JSON file
//     fetch('https://restcountries.com/v3.1/all')
//         .then(response => response.json())
//         .then(data => {
//             const countries = data.map(country => ({
//                 id: country.cca2.toLowerCase(),
//                 text: country.name.common
//             }));

//             nationalitySelect.select2({
//                 data: countries
//             });
//         });

//     const form = document.getElementById('registrationForm');

//     form.addEventListener('submit', async function(e) {
//         e.preventDefault();

//         const fullName = document.getElementById('fullName').value;
//         const mobileNumber = iti.getNumber();
//         const secondMobileNumber = itiSecond.getNumber();

//         if (fullName.length <= 6) {
//             alert('Full Name must be greater than 6 letters.');
//             return;
//         }

//         const formData = {
//             fullName: fullName,
//             motherName: document.getElementById('motherName').value,
//             birthday: document.getElementById('birthday').value,
//             nationality: document.getElementById('nationality').value,
//             gender: document.getElementById('gender').value,
//             email: document.getElementById('email').value,
//             maritalStatus: document.getElementById('maritalStatus').value,
//             mobileNumber: mobileNumber,
//             secondMobileNumber: secondMobileNumber || '',
//         };

//         try {
//             const response = await fetch('https://formspree.io/f/mrgnvobe', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert('Form submitted successfully!');
//             } else {
//                 alert('Failed to submit the form.');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector("#mobileNumber");
    const secondInput = document.querySelector("#secondMobileNumber");
    
    const iti = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch('https://ipinfo.io?token=<your_token>')
                .then(response => response.json())
                .then(data => callback(data.country))
                .catch(() => callback('us'));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
    });

    const itiSecond = window.intlTelInput(secondInput, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch('https://ipinfo.io?token=<your_token>')
                .then(response => response.json())
                .then(data => callback(data.country))
                .catch(() => callback('us'));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
    });

    const nationalitySelect = $('#nationality');
    const residentCountrySelect = $('#residentCountry');
    
    // Fetch country list for nationality and resident country dropdowns
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countries = data.map(country => ({
                id: country.cca2.toLowerCase(),
                text: country.name.common
            }));

            nationalitySelect.select2({
                data: countries
            });

            residentCountrySelect.select2({
                data: countries
            });
        });

    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const mobileNumber = iti.getNumber();
        const secondMobileNumber = itiSecond.getNumber();

        if (fullName.length <= 6) {
            alert('Full Name must be greater than 6 letters.');
            return;
        }

        const formData = {
            fullName: fullName,
            motherName: document.getElementById('motherName').value,
            fatherName: document.getElementById('fatherName').value,
            birthday: document.getElementById('birthday').value,
            nationality: document.getElementById('nationality').value,
            gender: document.getElementById('gender').value,
            residentCountry: document.getElementById('residentCountry').value,
            address: document.getElementById('address').value,
            email: document.getElementById('email').value,
            maritalStatus: document.getElementById('maritalStatus').value,
            mobileNumber: mobileNumber,
            secondMobileNumber: secondMobileNumber || '',
        };

        try {
            // const response = await fetch('https://formspree.io/f/mrgnvobe', {
                const response = await fetch('https://formspree.io/f/xkndakok', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // alert('Form submitted successfully!');
                // alert('Form submitted successfully!');
                // Redirect to submit.html
                window.location.href = 'submit.html';
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });
});
