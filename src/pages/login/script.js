// Login page script: password toggle, validation and navigation to dashboard
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const usernameInput = document.getElementById('username');
    const loginButton = document.querySelector('.login-button');

    // Simple demo credentials — replace with real auth in production
    const VALID_USERNAME = 'a';
    const VALID_PASSWORD = 'a';

    // Password visibility toggle
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function () {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;

            const icon = passwordToggle.querySelector('i');
            if (icon) {
                if (type === 'password') {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                } else {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }
            }
        });
    }

    // Form submission handling
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = usernameInput?.value?.trim() ?? '';
            const password = passwordInput?.value ?? '';

            hideError();

            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                showSuccess();
                // Redirect to dashboard (correct relative path)
                setTimeout(() => {
                    window.location.href = '../dashboard/index.html';
                }, 500);
            } else {
                showError();
                if (passwordInput) passwordInput.value = '';
                if (username !== VALID_USERNAME) {
                    usernameInput?.focus();
                    usernameInput?.select();
                } else {
                    passwordInput?.focus();
                }
            }
        });
    }

    function showError() {
        if (!errorMessage) return;
        errorMessage.style.display = 'block';
        errorMessage.classList.add('shake');
        setTimeout(() => errorMessage.classList.remove('shake'), 500);
    }

    function hideError() {
        if (!errorMessage) return;
        errorMessage.style.display = 'none';
    }

    function showSuccess() {
        if (!loginButton) return;
        loginButton.textContent = 'Logging in...';
        loginButton.style.pointerEvents = 'none';
        loginButton.style.backgroundColor = '#28a745';
    }

    // Remove error when user types
    usernameInput?.addEventListener('input', hideError);
    passwordInput?.addEventListener('input', hideError);

    // Autofocus
    usernameInput?.focus();
});

// Add a small shake animation style used for the error message
;(function addShakeStyle(){
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake { 0%,100%{transform:translateX(0)} 10%,30%,50%,70%,90%{transform:translateX(-5px)} 20%,40%,60%,80%{transform:translateX(5px)} }
        .shake { animation: shake 0.5s ease-in-out; }
    `;
    document.head.appendChild(style);
})();