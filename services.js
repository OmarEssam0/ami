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
            <li><a href="./index.html" class="active">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./projects.html">Projects</a></li>
            <li><a href="./gallery.html">Gallery</a></li>
            <li><a href="#clients">Clients</a></li>
             <!--   <li><a href="contact.html">Contact</a></li> -->
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
      <h1 class="page-title">Our Services</h1>
      <div class="services-detailed">
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-snowflake"></i></div>
          <h3>Air Conditioning Systems</h3>
          <p>We provide complete air conditioning solutions for residential, commercial, and industrial spaces. Our services include installation, maintenance, and repair of all types of AC systems.</p>
          <ul>
            <li>Split AC Systems</li>
            <li>Central AC Systems</li>
            <li>VRF/VRV Systems</li>
            <li>Ducted Systems</li>
            <li>Preventive Maintenance</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-tools"></i></div>
          <h3>HVAC Equipment</h3>
          <p>We supply and install high-quality HVAC equipment from leading manufacturers, ensuring optimal performance and energy efficiency.</p>
          <ul>
            <li>Chillers</li>
            <li>Air Handling Units</li>
            <li>Fan Coil Units</li>
            <li>Cooling Towers</li>
            <li>Heat Pumps</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-fire"></i></div>
          <h3>Firing Technology</h3>
          <p>Our firing technology services include installation and maintenance of heating systems for various applications.</p>
          <ul>
            <li>Boilers</li>
            <li>Furnaces</li>
            <li>Heating Systems</li>
            <li>Combustion Equipment</li>
            <li>Energy Recovery Systems</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon"><i class="fas fa-cogs"></i></div>
          <h3>Mechanical Contracting</h3>
          <p>We offer comprehensive mechanical contracting services for new construction and renovation projects.</p>
          <ul>
            <li>MEP Design</li>
            <li>Project Management</li>
            <li>System Integration</li>
            <li>Commissioning</li>
            <li>Energy Audits</li>
          </ul>
        </div>
      </div>
    </div>

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
}