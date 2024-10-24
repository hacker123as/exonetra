// Handle Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

loginBtn.onclick = function() {
  loginModal.style.display = 'block';
}

closeLogin.onclick = function() {
  loginModal.style.display = 'none';
}

// Handle Signup Modal
const signupBtn = document.getElementById('signupBtn');
const signupModal = document.getElementById('signupModal');
const closeSignup = document.getElementById('closeSignup');

signupBtn.onclick = function() {
  signupModal.style.display = 'block';
}

closeSignup.onclick = function() {
  signupModal.style.display = 'none';
}

// Close modals if clicked outside the modal content
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target == signupModal) {
    signupModal.style.display = 'none';
  }
}
