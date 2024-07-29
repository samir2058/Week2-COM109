document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnlogin-popup');
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.toggle('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.toggle('active-popup');
    });

document.getElementById('register-form').addEventListener('submit', function(event) {
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    let isValid = true;
    let errorMessage = '';

    if (!emailPattern.test(email)) {
        errorMessage += 'Please enter a valid email address.<br>';
        isValid = false;
    }
    if (!phonePattern.test(phone)) {
        errorMessage += 'Please enter a valid 10-digit phone number.<br>';
        isValid = false;
    }
    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.<br>';
        isValid = false;
    }
    if (!terms) {
        errorMessage += 'You must agree to the terms & conditions.<br>';
        isValid = false;
    }
    if (!isValid) {
        event.preventDefault();
        alert('Form validation failed:\n' + errorMessage);
    }
    });
});

function login() {
    alert('Login function called');
}

function register() {
    alert('Register function called');
}
