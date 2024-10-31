$(() => {
    $('#login-button').prop('disabled', true);
  
    const validateEmail = () => {
      const email = $('#email').val();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
      if (!email) {
        $('#email-error').text('Email cannot be empty');
        return false;
      } else if (!emailRegex.test(email)) {
        $('#email-error').text('Email must be a Northeastern email');
        return false;
      }
      $('#email-error').text('');
      return true;
    };
  
    const validateUsername = () => {
      const username = $('#username').val();
      const specialCharRegex = /[^a-zA-Z0-9]/;
      if (!username) {
        $('#username-error').text('Username cannot be empty');
        return false;
      } else if (specialCharRegex.test(username)) {
        $('#username-error').text('Username cannot contain special characters');
        return false;
      } else if (username.length < 5 || username.length > 15) {
        $('#username-error').text('Username must be 5-15 characters long');
        return false;
      }
      $('#username-error').text('');
      return true;
    };
  
    const validatePassword = () => {
      const password = $('#password').val();
      if (!password) {
        $('#password-error').text('Password cannot be empty');
        return false;
      } else if (password.length < 8 || password.length > 20) {
        $('#password-error').text('Password must be 8-20 characters long');
        return false;
      }
      $('#password-error').text('');
      return true;
    };
  
    const validateConfirmPassword = () => {
      const password = $('#password').val();
      const confirmPassword = $('#confirm-password').val();
      if (!confirmPassword) {
        $('#confirm-password-error').text('Confirm password cannot be empty');
        return false;
      } else if (confirmPassword !== password) {
        $('#confirm-password-error').text('Passwords do not match');
        return false;
      }
      $('#confirm-password-error').text('');
      return true;
    };
  
    const enableLoginButton = () => {
      if (validateEmail() && validateUsername() && validatePassword() && validateConfirmPassword()) {
        $('#login-button').prop('disabled', false);
      } else {
        $('#login-button').prop('disabled', true);
      }
    };
  
    $('#email').on('input', () => {
      validateEmail();
      enableLoginButton();
    });
  
    $('#username').on('input', () => {
      validateUsername();
      enableLoginButton();
    });
  
    $('#password').on('input', () => {
      validatePassword();
      enableLoginButton();
    });
  
    $('#confirm-password').on('input', () => {
      validateConfirmPassword();
      enableLoginButton();
    });
  
    $('#login-button').on('click', () => {
      const username = $('#username').val();
      window.location.href = `home.html?username=${encodeURIComponent(username)}`;
    });
  });
  