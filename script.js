 // Replace your existing typing effect code with this:
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = "SIDDHARTH SINGH";
    heroTitle.textContent = ''; // Clear the text
    
    // Create a span for the typing cursor
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '|';
    heroTitle.appendChild(cursor);
    
    let i = 0;
    function type() {
        if (i < originalText.length) {
            // Insert character before cursor
            heroTitle.insertBefore(document.createTextNode(originalText.charAt(i)), cursor);
            i++;
            setTimeout(type, 150); // Adjust speed as needed
        } else {
            // Blinking cursor effect after typing completes
            setInterval(() => {
                cursor.style.visibility = (cursor.style.visibility === 'hidden' ? 'visible' : 'hidden');
            }, 500);
        }
    }
    setTimeout(type, 500); // Initial delay
});



        // Theme Toggle
       const toggle = document.getElementById('theme-toggle');
        const themeLabel = document.getElementById('theme-label');
        const htmlElement = document.documentElement;

        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            htmlElement.setAttribute('data-theme', 'dark');
            toggle.checked = true;
            themeLabel.textContent = 'Light Mode';
        }

        // Toggle theme when switch is clicked
        toggle.addEventListener('change', function() {
            if (this.checked) {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeLabel.textContent = 'Light Mode';
            } else {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeLabel.textContent = 'Dark Mode';
            }
        });




        // Modal functionality
    function openModal(src) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = "block";
        modalImg.src = src;
    }
    
    function closeModal() {
        document.getElementById('imageModal').style.display = "none";
    }
    
    // Close modal when clicking outside the image
    window.onclick = function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target == modal) {
            closeModal();
        }
    }
    
    // Close with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });




        
    

   //contact form
   document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.getElementById('formSuccess').style.display = 'none';
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        // Validate subject
        if (subject === '') {
            document.getElementById('subjectError').textContent = 'Subject is required';
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message should be at least 10 characters';
            isValid = false;
        }
        
        if (isValid) {
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent';
                document.getElementById('formSuccess').textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
                document.getElementById('formSuccess').style.display = 'block';
                document.getElementById('contactForm').reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        }
    });