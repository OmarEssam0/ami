// import './style.css'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupNavigation();
  setupProjectFilters();
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
      <h1 class="page-title">Our Projects</h1>
      <div class="projects-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="residential">Residential</button>
        <button class="filter-btn" data-filter="commercial">Commercial</button>
        <button class="filter-btn" data-filter="industrial">Industrial</button>
      </div>
      
      <div class="projects-grid">
        <div class="project-card" data-category="commercial">
          <div class="project-image">
            <img src="https://i.ibb.co/Qp1Gk1C/project1.jpg" alt="Commercial Project">
          </div>
          <div class="project-info">
            <h3>Carrefour HVAC System</h3>
            <p class="project-location">Cairo, Egypt</p>
            <p class="project-description">Complete HVAC system installation for Carrefour hypermarket, including central air conditioning, ventilation, and building management system.</p>
            <!-- <a href="#" class="btn-small">View Details</a> -->
          </div>
        </div>
        
        <div class="project-card" data-category="residential">
          <div class="project-image">
            <img src="https://i.ibb.co/Qp1Gk1C/project2.jpg" alt="Residential Project">
          </div>
          <div class="project-info">
            <h3>Green Town Residential Complex</h3>
            <p class="project-location">Alexandria, Egypt</p>
            <p class="project-description">Installation of VRF systems for a luxury residential complex with 200+ apartments, including individual control systems.</p>
             <!-- <a href="#" class="btn-small">View Details</a> -->
          </div>
        </div>
        
        <div class="project-card" data-category="industrial">
          <div class="project-image">
            <img src="https://i.ibb.co/Qp1Gk1C/project3.jpg" alt="Industrial Project">
          </div>
          <div class="project-info">
            <h3>Misr El Nour Factory</h3>
            <p class="project-location">10th of Ramadan City, Egypt</p>
            <p class="project-description">Industrial HVAC system design and installation for manufacturing facility, including specialized ventilation and air filtration.</p>
             <!-- <a href="#" class="btn-small">View Details</a> -->
          </div>
        </div>
        
        <div class="project-card" data-category="commercial">
          <div class="project-image">
            <img src="https://i.ibb.co/Qp1Gk1C/project4.jpg" alt="Commercial Project">
          </div>
          <div class="project-info">
            <h3>Helwan University Campus</h3>
            <p class="project-location">Cairo, Egypt</p>
            <p class="project-description">Complete HVAC renovation for university campus buildings, improving energy efficiency and comfort.</p>
             <!-- <a href="#" class="btn-small">View Details</a> -->
          </div>
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

function setupProjectFilters() {
  // Project filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}