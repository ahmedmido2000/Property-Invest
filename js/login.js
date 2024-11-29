
        const password = document.querySelector('#password');

     function showPassword() {
            // toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            // toggle the icon
            document.getElementById('togglePassword').classList.toggle('fa-eye');
            document.getElementById('togglePassword').classList.toggle('fa-eye-slash');
        };