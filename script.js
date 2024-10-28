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

// Handle YouTube Button Click
const youtubeButton = document.getElementById('youtubeButton');

// Add a click event listener to the button
youtubeButton.addEventListener('click', () => {
    window.open('https://www.youtube.com', '_blank');
});

        (async function() {
            try {
                // Fetch the construction status from the API
                const response = await fetch('https://www.exonetra.com/api/Construction');
                const data = await response.json();

                // Check if the site is under construction
                if (data.UnderConstruction) {
                    // Redirect immediately
                    window.location.href = 'https://www.exonetra.com/UnderConstruction';
                    
                    // Reload the page every 2 seconds after the initial redirect
                    setInterval(() => {
                        window.location.href = 'https://www.exonetra.com/UnderConstruction';
                    }, 1); // 2000 milliseconds = 2 seconds
                }
            } catch (error) {
                console.error('Error fetching construction status:', error);
            }
        })(); // IIFE to execute the function immediately


