document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Theme Toggle Logic
  // ==========================================
  const themeToggle = document.getElementById('themeToggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Preserve user theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.setAttribute('data-theme', 'light');
  }

  // ==========================================
  // 2. Password Show / Hide Toggle
  // ==========================================
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', function () {
      const input = this.parentElement.querySelector('input');
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      this.style.opacity = isPassword ? '1' : '0.6';
    });
  });

  // ==========================================
  // 3. Password Strength Meter
  // ==========================================
  const regPassword = document.getElementById('regPassword');
  const passwordProgress = document.getElementById('passwordProgress');
  const passwordText = document.getElementById('passwordText');

  if (regPassword && passwordProgress && passwordText) {
    regPassword.addEventListener('input', (e) => {
      const val = e.target.value;
      const score = calculatePasswordStrength(val);

      let width = '0%';
      let color = 'var(--error, #ef4444)';
      let label = 'Password strength';

      if (val.length > 0) {
        if (score <= 2) {
          width = '33%';
          color = 'var(--error, #ef4444)';
          label = 'Weak';
        } else if (score === 3 || score === 4) {
          width = '66%';
          color = 'var(--warning, #f59e0b)';
          label = 'Moderate';
        } else if (score >= 5) {
          width = '100%';
          color = 'var(--success, #10b981)';
          label = 'Strong';
        }
      }

      passwordProgress.style.width = width;
      passwordProgress.style.backgroundColor = color;
      passwordText.textContent = label;
      passwordText.style.color = val.length > 0 ? color : 'var(--text-subtle, #94a3b8)';
    });
  }

  function calculatePasswordStrength(pass) {
    let score = 0;
    if (!pass) return score;
    if (pass.length >= 8) score += 1;
    if (pass.length >= 12) score += 1;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 1;
    if (/\d/.test(pass)) score += 1;
    if (/[^a-zA-Z0-9]/.test(pass)) score += 1;
    return score;
  }

  // ==========================================
  // 4. Sign Up Form Submission & Redirect
  // ==========================================
  const signUpForm = document.getElementById('signUpForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('regFullName');
      const email = document.getElementById('regEmail');
      const phone = document.getElementById('regPhone');
      const password = document.getElementById('regPassword');
      const confirmPass = document.getElementById('regConfirmPassword');
      const terms = document.getElementById('termsAgree');

      clearErrors();
      let isValid = true;

      if (name && !name.value.trim()) {
        showFieldError('regFullNameError', 'Full name is required');
        isValid = false;
      }

      if (email && (!email.value.trim() || !validateEmail(email.value))) {
        showFieldError('regEmailError', 'Please enter a valid email address');
        isValid = false;
      }

      if (phone && (!phone.value.trim() || phone.value.length < 10)) {
        showFieldError('regPhoneError', 'Please enter a valid phone number');
        isValid = false;
      }

      if (password && (!password.value || password.value.length < 8)) {
        showFieldError('regPasswordError', 'Password must be at least 8 characters');
        isValid = false;
      }

      if (confirmPass && password && password.value !== confirmPass.value) {
        showFieldError('regConfirmPasswordError', 'Passwords do not match');
        isValid = false;
      }

      if (terms && !terms.checked) {
        showFieldError('termsError', 'You must agree to the Terms & Privacy Policy');
        isValid = false;
      }

      if (isValid) {
        showToast('Account created successfully! Redirecting...', 'success');
        
        // Save user data locally for session persistence
        const userData = {
          name: name ? name.value.trim() : '',
          email: email ? email.value.trim() : '',
          phone: phone ? phone.value.trim() : ''
        };
        localStorage.setItem('eduai_user', JSON.stringify(userData));

        // Redirect to Roadmap Explorer page
        setTimeout(() => {
          window.location.href = 'roadmap.html';
        }, 1200);
      }
    });
  }

  // ==========================================
  // 5. Sign In Form Submission & Fallback Redirect
  // ==========================================
  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('loginPhone');
      const password = document.getElementById('loginPassword');

      clearErrors();
      let isValid = true;

      // If specific login inputs exist, validate them; otherwise, allow a bypass for generic forms
      if (phone && !phone.value.trim()) {
        showFieldError('loginPhoneError', 'Phone number or email is required');
        isValid = false;
      }

      if (password && !password.value) {
        showFieldError('loginPasswordError', 'Password is required');
        isValid = false;
      }

      if (isValid) {
        showToast('Signed in successfully! Redirecting...', 'success');
        
        // Redirect to Dashboard page
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      }
    });
  }

  // Fallback listener for generic form or standalone "Continue" buttons on auth pages
  const genericForm = document.querySelector('form:not(#signUpForm):not(#signInForm)');
  if (genericForm) {
    genericForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Redirecting to dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  // ==========================================
  // 6. Utility Functions
  // ==========================================
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFieldError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }

  function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  }

  function showToast(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      padding: 12px 20px;
      border-radius: 8px;
      background: ${type === 'success' ? '#10b981' : '#ef4444'};
      color: white;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: all 0.3s ease;
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});