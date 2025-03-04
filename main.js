// import 'style.css'



function renderApp() {
  document.querySelector('#app').innerHTML = `
    <header class="header">
      <div class="container">
        <div class="logo-container">
          <img src="./images/Logoo/cd26fa5d-eabb-44cb-bfbd-f2ba1b32f838-removebg-preview.png" alt="AMI HVAC Logo" class="logo">
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>AMI <span>HVAC</span></h1>
        <p>Is a specialized Mechanical contracting and trading company in air conditioning and firing technology.</p>
      </div>
    </section>

    <section id="introduction" class="introduction">
      <div class="container">
        <div class="intro-content">
          <div class="intro-left">
            <h2 class="section-title">Since its establishment in 2012,</h2>
          </div>
          <div class="intro-right">
            <div class="intro-item">
              <h3>Company Profile</h3>
              <p>AMI HVAC is a specialized Mechanical contracting and trading company in air conditioning technology.</p>
            </div>
            <div class="intro-item">
              <h3>Expertise and Experience</h3>
              <p>With over 15 years of diversified mechanical activities across Egypt, our team of expert engineers and technicians are dedicated to delivering the highest quality services.</p>
            </div>
            <div class="intro-item">
              <h3>Client Satisfaction</h3>
              <p>We are committed to achieving total client satisfaction through professional standards and efficiency.</p>
            </div>
            <div class="intro-item">
              <h3>Achievements</h3>
              <p>We have accomplished numerous successful projects across various sectors and aim to contribute further to the country's values and development.</p>
            </div>
            <div class="intro-item">
              <h3>Project Range</h3>
              <p>Our work includes a wide range of projects, from simple to complex, requiring specific attention to detail, thorough knowledge of requirements, strategic planning, and efficient execution.</p>
            </div>
            <div class="intro-item">
              <h3>Capability</h3>
              <p>Our expertise enables us to handle all kinds of complex large mechanical projects and mechanical works effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">All services of AMI HVAC Company</h2>
        <div class="services-grid">
          <div class="service-item">
            <i class="fas fa-tools"></i>
            <h3>Equipment</h3>
            <p>State-of-the-art HVAC equipment for all your needs.</p>
          </div>
          <div class="service-item">
            <i class="fas fa-cogs"></i>
            <h3>HVAC Works</h3>
            <p>Professional installation, maintenance, and repair services.</p>
          </div>
          <div class="service-item">
            <i class="fas fa-snowflake"></i>
            <h3>Air Conditioning</h3>
            <p>Complete air conditioning solutions for residential and commercial spaces.</p>
          </div>
          <div class="service-item">
            <i class="fas fa-fire"></i>
            <h3>Firing Technology</h3>
            <p>Advanced firing technology systems and maintenance.</p>
          </div>
        </div>
        <div class="about-image">
          <img src="./images/275977770_1905009373038008_6848283200493299379_n-1.png" alt="Air Conditioning Promotion">
          <div class="promo-overlay">
            <h3>Your home's comfort starts here.</h3>
            <p>Your perfect air conditioner at unbeatable prices.</p>
            <a href="contact.html" class="btn">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery">
      <div class="container">
        <h2 class="section-title">Gallery</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="images/gallery/New folder/1.jpg" alt="HVAC Installation">
          </div>
          <div class="gallery-item">
            <img src="images/gallery/New folder/3.jpg" alt="Air Conditioning">
          </div>
          <div class="gallery-item">
            <img src="images/gallery/New folder/4.jpg" alt="HVAC System">
          </div>
          <div class="gallery-item">
            <img src="images/gallery/New folder/9.jpg" alt="Duct Work">
          </div>
        </div>
        <div class="gallery-link-container">
          <a href="gallery.html" class="btn">View Full Gallery</a>
        </div>
      </div>
    </section>

    <section id="clients" class="clients">
      <div class="container">
        <h2 class="section-title">Our Clients</h2>
        <p class="clients-subtitle">We're going to become partners for the long run.</p>
        <div class="clients-grid">
          <div class="client-item">
            <img src="images/ourClients/carrefour-logo-removebg-preview.png" alt="Carrefour">
          </div>
          <div class="client-item">
            <img src="images/ourClients/sample-507.png" alt="Green Town">
          </div>
          <div class="client-item">
            <img src="images/ourClients/mazloum-logo-1542119006.jpg" alt="Mazloum Home">
          </div>
          <div class="client-item">
            <img src="images/ourClients/Helwan_University_Logo-removebg-preview.png" alt="Misr Elkheir Group">
          </div>
          <div class="client-item">
            <img src="images/ourClients/images__1_-removebg-preview.png" alt="Helwan University">
          </div>
          <div class="client-item">
            <img src="images/ourClients/x.png" alt="Ezz Elarab">
          </div>
          <div class="client-item">
            <img src="images/ourClients/logo (2).png" alt="GLC">
          </div>
          <div class="client-item">
            <img src="images/ourClients/logo.png" alt="Misr El Nour">
          </div>
        </div>
      </div>
    </section>

    <section id="contact-section" class="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-text">
            <h2>Questions?</h2>
            <p>Get in touch.</p>
            <a href="contact.html" class="btn">Contact Us</a>
          </div>
          <div class="contact-form">
            <form id="contactForm">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Phone">
              </div>
              <div class="form-group">
                <textarea id="message" name="message" placeholder="Message" required></textarea>
              </div>
              <button type="submit" class="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="./images/Logoo/cd26fa5d-eabb-44cb-bfbd-f2ba1b32f838-removebg-preview.png" alt="AMI HVAC Logo" >
          </div>
          <div class="footer-info">
            <div class="footer-section">
              <h4>Who We Are</h4>
              <p>A specialized Mechanical contracting and trading company in air conditioning technology.</p>
            </div>
            <div class="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><i class="fas fa-envelope"></i> <a href="mailto:Aya.Ami.Hvac@gmail.com">Aya.Ami.Hvac@gmail.com</a></li>
                <li><i class="fas fa-phone"></i> <a href="tel:01005554113">
                    01005554113
                  </a></li>
                <li><i class="fas fa-phone"></i> <a href="tel:010007425291">010007425291</a></li>
                <li><address>Building 18, Adjacent 11/12, 1st Settlement, New Cairo
                  </address></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Social Media</h4>
              <ul class="social-links">
                <li><a href="https://www.facebook.com/Daikin.Powerr"><i class="fab fa-facebook"></i> AMI-HVAC</a></li>
                <li><a href="https://www.instagram.com/ami.hvac?igsh=N25ldjEwYWw2NmZw"><i class="fab fa-instagram"></i> @AMI_HVAC_instagram</a></li>
                <li><a href="https://www.linkedin.com/company/ami-hvac-solutions/"><i class="fab fa-linkedin"></i> @AMI_HVAC_linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2025 AMI HVAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

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

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
        
        // Close mobile menu if open
        mobileMenuBtn.classList.remove('active');
        mainNav.classList.remove('active');
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
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
      const message = document.getElementById('message').value;
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', { name, email, phone, message });
      
      // Show success message
      alert('Thank you for your message. We will get back to you soon!');
      
      // Reset form
      contactForm.reset();
    });
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupNavigation();
  setupContactForm();
});