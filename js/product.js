document.addEventListener('DOMContentLoaded', function() {
    // Star rating functionality
    const stars = document.querySelectorAll('.stars i');
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        
        // Update star display
        stars.forEach((s, index) => {
          if (index < rating) {
            s.classList.remove('far');
            s.classList.add('fas');
          } else {
            s.classList.remove('fas');
            s.classList.add('far');
          }
        });
      });
    });
  
    // Play trailer button
    const playTrailerBtn = document.querySelector('.play-trailer .play-button');
    playTrailerBtn.addEventListener('click', function() {
      alert('Trailer would play in a modal or fullscreen!');
      // In a real implementation, this would open a YouTube embed or similar
    });
  
    // Add to list button
    const addToListBtn = document.querySelector('.add-btn');
    addToListBtn.addEventListener('click', function() {
      this.innerHTML = '<i class="fas fa-check"></i> Added';
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-plus"></i> My List';
      }, 2000);
    });
  
    // Season selector
    const seasonSelector = document.getElementById('seasons');
    seasonSelector.addEventListener('change', function() {
      alert('Loading episodes for ' + this.value);
      // In a real implementation, this would fetch episodes for selected season
    });
  
    // Smooth scroll for similar movies
    document.querySelectorAll('.movie-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Would navigate to another movie detail page');
      });
    });
  });