// import './style.css'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  setupNavigation();
  setupGallery();
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
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="gallery.html" class="active">Gallery</a></li>
            <li><a href="index.html#clients">Clients</a></li>
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
      <h1 class="page-title">Our Gallery</h1>
      
      <div class="gallery-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="installations">Installations</button>
        <button class="filter-btn" data-filter="equipment">Equipment</button>
        <button class="filter-btn" data-filter="projects">Projects</button>
      </div>
      
      <div class="gallery-masonry">
        <div class="gallery-item" data-category="installations">
          <img src="./images/gallery/New folder/1.jpg" alt="HVAC Installation">
          <div class="gallery-overlay">
            <h3>Commercial HVAC Installation</h3>
            <p>Carrefour Hypermarket</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="equipment">
          <img src="./images/gallery/New folder/2.jpg" alt="Air Conditioning Unit">
          <div class="gallery-overlay">
            <h3>VRF System</h3>
            <p>High-efficiency cooling solution</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="projects">
          <img src="./images/gallery/New folder/3.jpg" alt="Project Site">
          <div class="gallery-overlay">
            <h3>Residential Complex</h3>
            <p>Green Town Project</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="installations">
          <img src="./images/gallery/New folder/4.jpg" alt="Duct Installation">
          <div class="gallery-overlay">
            <h3>Duct Work</h3>
            <p>Industrial facility ventilation system</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="equipment">
          <img src="./images/gallery/New folder/5.jpeg" alt="Cooling Tower">
          <div class="gallery-overlay">
            <h3>Cooling Tower</h3>
            <p>Industrial cooling solution</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="projects">
          <img src="./images/gallery/New folder/6.jpeg" alt="Office Building">
          <div class="gallery-overlay">
            <h3>Corporate Headquarters</h3>
            <p>Complete HVAC system installation</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="installations">
          <img src="./images/gallery/New folder/9.jpg" alt="AC Installation">
          <div class="gallery-overlay">
            <h3>Split AC Installation</h3>
            <p>Residential project</p>
          </div>
        </div>
        
        <div class="gallery-item" data-category="equipment">
          <img src="./images/gallery/New folder/8.jpg" alt="Chiller">
          <div class="gallery-overlay">
            <h3>Industrial Chiller</h3>
            <p>High-capacity cooling equipment</p>
          </div>
        </div>
      </div>
      
      <div id="gallery-modal" class="gallery-modal">
        <span class="close-modal">&times;</span>
        <img id="modal-image" class="modal-content">
        <div id="modal-caption"></div>
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
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

function setupGallery() {
  // Gallery filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Gallery modal
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-image');
  const modalCaption = document.getElementById('modal-caption');
  const closeModal = document.querySelector('.close-modal');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  let currentIndex = 0;
  const visibleItems = () => Array.from(galleryItems).filter(item => item.style.display !== 'none');
  
  // Open modal when clicking on gallery item
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      modal.style.display = 'flex';
      
      const img = item.querySelector('img');
      const overlay = item.querySelector('.gallery-overlay');
      const title = overlay.querySelector('h3').textContent;
      const description = overlay.querySelector('p').textContent;
      
      modalImg.src = img.src;
      modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
      
      // Set current index
      currentIndex = visibleItems().indexOf(item);
    });
  });
  
  // Close modal
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  // Close modal when clicking outside the image
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // Previous image
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const items = visibleItems();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      
      const item = items[currentIndex];
      const img = item.querySelector('img');
      const overlay = item.querySelector('.gallery-overlay');
      const title = overlay.querySelector('h3').textContent;
      const description = overlay.querySelector('p').textContent;
      
      modalImg.src = img.src;
      modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    });
  }
  
  // Next image
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const items = visibleItems();
      currentIndex = (currentIndex + 1) % items.length;
      
      const item = items[currentIndex];
      const img = item.querySelector('img');
      const overlay = item.querySelector('.gallery-overlay');
      const title = overlay.querySelector('h3').textContent;
      const description = overlay.querySelector('p').textContent;
      
      modalImg.src = img.src;
      modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
      if (e.key === 'ArrowLeft') {
        prevBtn.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn.click();
      } else if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    }
  });
}