// import './style.css'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupNavigation();
});

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <header class="header">
      <div class="container">
       <div class="logo-container">
          <img src="./images/Logoo/cd26fa5d-eabb-44cb-bfbd-f2ba1b32f838-removebg-preview.png" alt="AMI HVAC Logo" class="logo">
        </div>
        <nav class="main-nav">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html" class="active">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="index.html#clients">Clients</a></li>
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

    <div class="page-container">
      <h1 class="page-title">About AMI HVAC</h1>
      
      <div class="about-content">
        <div class="about-image-container">
          <img src="./images/about.jpeg" alt="AMI HVAC Team" class="about-main-image">
        </div>
        
        <div class="about-text">
          <h2>Our Story</h2>
          <p>Since its establishment in 2012, AMI HVAC has grown to become one of the leading mechanical contracting and trading companies in Egypt, specializing in air conditioning and firing technology.</p>
          <p>With a team of highly qualified engineers and technicians, we have successfully completed numerous projects across various sectors, including commercial, residential, and industrial.</p>
          
          <h2>Our Mission</h2>
          <p>is to consistently deliver high-quality
             projects efficiently and on schedule.
             We prioritize enhancing client
             satisfaction through continuous
             improvement in our business
practices, with a strong focus on
safety, quality, service delivery, and
environmental stewardship.</p>
          
          <h2>Our Vision</h2>
          <p>To become one of the leading and
most reliable MEP contracting and
trading companies in the Middle East.</p>
          
          <h2>Our Values</h2>
          <ul class="values-list">
            <li>
              <i class="fas fa-check-circle"></i>
              <div>
                <h3>Quality</h3>
                <p>We are committed to delivering the highest quality services and products to our clients.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <div>
                <h3>Integrity</h3>
                <p>We conduct our business with honesty, transparency, and ethical standards.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <div>
                <h3>Innovation</h3>
                <p>We continuously seek innovative solutions to improve our services and meet our clients' needs.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <div>
                <h3>Customer Satisfaction</h3>
                <p>We prioritize our clients' satisfaction and strive to exceed their expectations.</p>
              </div>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <div>
                <h3>Teamwork</h3>
                <p>We believe in the power of collaboration and teamwork to achieve our goals.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="team-section">
        <h2>Our Team</h2>
        <p class="team-intro">Our success is driven by our dedicated team of professionals who bring expertise, passion, and commitment to every project.</p>
        
        <div class="team-grid">
          <div class="team-member">
            <!-- <div class="member-image">
               <img src="https://i.ibb.co/Qp1Gk1C/team3.jpg" alt="Team Member">
            </div> -->
            <div class="member-info">
              <h3>Ahmed Sallam</h3>
              <p class="member-title">Founder & CEO</p>
              <p class="member-bio">With over 20 years of experience in the HVAC industry, Ahmed leads our company with vision and expertise.</p>
            </div>
          </div>
          
          <div class="team-member">
            <!-- <div class="member-image">
               <img src="https://i.ibb.co/Qp1Gk1C/team3.jpg" alt="Team Member">
            </div> -->
            <div class="member-info">
              <h3>Mohamed Hassan</h3>
              <p class="member-title">Technical Director</p>
              <p class="member-bio">Mohamed oversees all technical aspects of our projects, ensuring the highest standards of quality and efficiency.</p>
            </div>
          </div>
          
          <div class="team-member">
           <!-- <div class="member-image">
               <img src="https://i.ibb.co/Qp1Gk1C/team3.jpg" alt="Team Member">
            </div> -->
            <div class="member-info">
              <h3>Sara Ahmed</h3>
              <p class="member-title">Project Manager</p>
              <p class="member-bio">Sara manages our projects with precision and dedication, ensuring timely delivery and client satisfaction.</p>
            </div>
          </div>
          
          <div class="team-member">
           <!-- <div class="member-image">
               <img src="https://i.ibb.co/Qp1Gk1C/team3.jpg" alt="Team Member">
            </div> -->
            <div class="member-info">
              <h3>Khaled Mahmoud</h3>
              <p class="member-title">Lead Engineer</p>
              <p class="member-bio">Khaled brings innovative solutions to complex engineering challenges, leading our technical team with expertise.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="https://i.ibb.co/Qp1Gk1C/hvac-logo.png" alt="AMI HVAC Logo">
            <h3>HVAC</h3>
          </div>
          <div class="footer-info">
            <div class="footer-section">
              <h4>Who We Are</h4>
              <p>A specialized Mechanical contracting and trading company in air conditioning technology.</p>
            </div>
            <div class="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><i class="fas fa-envelope"></i> <a href="mailto:Ami.hvac@gmail.com">Ami.hvac@gmail.com</a></li>
                <li><i class="fas fa-phone"></i> <a href="tel:01000000000">01000000000</a></li>
                <li><i class="fas fa-phone"></i> <a href="tel:01111111111">01111111111</a></li>
                <li><i class="fas fa-map-marker-alt"></i> <address>Moharam Bek 1st St, Sidi Gaber, New Cairo</address></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Social Media</h4>
              <ul class="social-links">
                <li><a href="#"><i class="fab fa-facebook"></i> AMI-HVAC</a></li>
                <li><a href="#"><i class="fab fa-twitter"></i> @AMI_HVAC_twitter</a></li>
                <li><a href="#"><i class="fab fa-instagram"></i> @AMI_HVAC_instagram</a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i> @AMI_HVAC_linkedin</a></li>
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
}