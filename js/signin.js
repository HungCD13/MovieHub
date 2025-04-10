document.addEventListener('DOMContentLoaded', function() {
    // Toggle between login and signup forms
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    showSignup.addEventListener('click', function(e) {
      e.preventDefault();
      loginForm.classList.remove('active');
      signupForm.classList.add('active');
    });
  
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      signupForm.classList.remove('active');
      loginForm.classList.add('active');
    });
  
    // Form validation and submission
    const loginFormEl = document.getElementById('loginForm');
    const signupFormEl = document.getElementById('signupForm');
  
    loginFormEl.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      if (validateLogin(email, password)) {
        // Simulate successful login
        alert('Login successful! Redirecting to homepage...');
        window.location.href = 'index.html';
      }
    });
  
    signupFormEl.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      
      if (validateSignup(name, email, password)) {
        // Simulate successful signup
        alert('Account created successfully! Please sign in.');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        signupFormEl.reset();
      }
    });
  
    // Validation functions
    function validateLogin(email, password) {
      if (!email) {
        alert('Please enter your email or phone number');
        return false;
      }
      
      if (!password) {
        alert('Please enter your password');
        return false;
      }
      
      if (password.length < 4 || password.length > 60) {
        alert('Your password must contain between 4 and 60 characters.');
        return false;
      }
      
      return true;
    }
  
    function validateSignup(name, email, password) {
      if (!name) {
        alert('Please enter your name');
        return false;
      }
      
      if (!email) {
        alert('Please enter your email');
        return false;
      }
      
      if (!password) {
        alert('Please enter your password');
        return false;
      }
      
      if (password.length < 4 || password.length > 60) {
        alert('Your password must contain between 4 and 60 characters.');
        return false;
      }
      
      return true;
    }
  
    // Floating label effect
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        const label = this.nextElementSibling;
        label.style.top = '7px';
        label.style.transform = 'none';
        label.style.fontSize = '11px';
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          const label = this.nextElementSibling;
          label.style.top = '50%';
          label.style.transform = 'translateY(-50%)';
          label.style.fontSize = '16px';
        }
      });
    });
  });