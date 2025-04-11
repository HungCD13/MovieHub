document.addEventListener('DOMContentLoaded', function() {
  
  // ========== HEADER EFFECTS ========== //
  const header = document.querySelector('header');
  
  // Hiệu ứng scroll header
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ========== NAVIGATION ========== //
  // Highlight menu active
  function setActiveMenu() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.main-nav a');

    menuItems.forEach(item => {
      const itemPath = item.getAttribute('href').split('/').pop();
      item.classList.toggle('active', 
        itemPath === currentPath ||
        (currentPath === 'index.html' && itemPath === '#home')
      );
    });
  }
  setActiveMenu();

  // Cuộn mượt cho anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - header.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== MOVIE INTERACTIONS ========== //
  // Hiệu ứng hover cho phim
  document.querySelectorAll('.movie-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.zIndex = '2';
      this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
      this.style.transform = 'scale(1)';
    });
  });

  // ========== SEARCH FUNCTIONALITY ========== //
  const searchIcon = document.querySelector('.search-icon');
  const searchBox = document.querySelector('.search-box');
  const searchInput = searchBox?.querySelector('input');

  if (searchIcon && searchBox) {
    searchIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      searchBox.classList.toggle('active');
      searchInput?.focus();
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchBox.classList.remove('active');
      }
    });
  }

  // ========== NOTIFICATIONS ========== //
  const notificationIcon = document.querySelector('.notification-icon');
  const notificationDropdown = document.querySelector('.notification-dropdown');

  if (notificationIcon && notificationDropdown) {
    notificationIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.notification-container')) {
        notificationDropdown.classList.remove('active');
      }
    });

    // Đánh dấu đã đọc tất cả
    document.querySelector('.mark-all-read')?.addEventListener('click', () => {
      document.querySelectorAll('.notification-item.unread').forEach(item => {
        item.classList.remove('unread');
      });
      document.querySelector('.notification-badge').style.display = 'none';
    });
  }

  // ========== LOADING INDICATOR ========== //
  window.addEventListener('beforeunload', () => {
    document.body.classList.add('loading');
  });

  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    console.log('Netflix Clone loaded successfully!');
  });
  // ========== BANNER SLIDER ========== //
  const bannerSlides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.banner-dots .dot');
  const prevBtn = document.querySelector('.banner-prev');
  const nextBtn = document.querySelector('.banner-next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Hide all slides
    bannerSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    bannerSlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % bannerSlides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + bannerSlides.length) % bannerSlides.length;
    showSlide(currentSlide);
  }

  // Auto slide
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Event listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
  }

  // Initialize
  showSlide(0);
  startSlideShow();

  // Pause on hover
  const banner = document.querySelector('.banner');
  banner.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  banner.addEventListener('mouseleave', () => {
    startSlideShow();
});
});