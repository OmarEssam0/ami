function setupNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
      });
    }
  }
  
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, phone, subject, message });
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon!');
        
        // Reset form
        contactForm.reset();
      });
    }
  }
  
  function initMap() {
    // This is a placeholder for a map integration
    // In a real application, you would use Google Maps or another mapping service
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.innerHTML = `
        <div class="map-placeholder">
          <p>Map integration would be implemented here with Google Maps or another service.</p>
          <p>For this demo, we're using a placeholder.</p>
        </div>
      `;
    }
  }