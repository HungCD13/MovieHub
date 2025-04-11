document.addEventListener('DOMContentLoaded', async function() {
    // Lấy ID phim từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id') || '1';
  
    try {
      // Fetch dữ liệu từ file JSON
      const response = await fetch('../data/product.json');
      const data = await response.json();
      const movieData = data.movies;
      
      // Lấy thông tin phim cụ thể
      const movie = movieData[movieId];
      
      if (!movie) {
        window.location.href = '../index.html';
        return;
      }
  
      // Render thông tin phim
      renderMovieDetails(movie);
      setupEventListeners();
  
    } catch (error) {
      console.error('Error loading movie data:', error);
      // Fallback hoặc xử lý lỗi
      alert('Error loading movie data. Please try again later.');
      window.location.href = '../index.html';
    }
  
    function renderMovieDetails(movie) {
      // Cập nhật tiêu đề trang
      document.title = `${movie.title} | Netflix Clone`;
      
      // Render thông tin chính
      const movieContainer = document.getElementById('movie-container');
      movieContainer.innerHTML = `
          <!-- Left Banner Section -->
          <section class="movie-banner">
              <img src="${movie.banner}" alt="${movie.title} Banner" class="banner-image">
              <div class="play-trailer">
                  <button class="play-button" data-movie-id="${movieId}">
                      <i class="fas fa-play"></i> Play Trailer
                  </button>
              </div>
          </section>
  
          <!-- Right Content Section -->
          <section class="movie-content">
              <div class="movie-header">
                  <h1>${movie.title}</h1>
                  <div class="movie-meta">
                      <span class="match">${movie.match}</span>
                      <span class="year">${movie.year}</span>
                      ${movie.seasons ? `<span class="season">${movie.seasons} Seasons</span>` : ''}
                      <span class="rating"><i class="fas fa-star"></i> ${movie.rating}/10</span>
                      <span class="hd">${movie.quality}</span>
                  </div>
              </div>
  
              <div class="action-buttons">
                  <button class="play-btn">
                      <i class="fas fa-play"></i> Play
                  </button>
                  <button class="add-btn">
                      <i class="fas fa-plus"></i> My List
                  </button>
                  <button class="like-btn">
                      <i class="far fa-thumbs-up"></i>
                  </button>
                  <button class="share-btn">
                      <i class="fas fa-share"></i>
                  </button>
              </div>
  
              <div class="movie-info">
                  <div class="synopsis">
                      <h3>Synopsis</h3>
                      <p>${movie.synopsis}</p>
                  </div>
  
                  <div class="details">
                      <p><strong>Cast:</strong> ${movie.cast}</p>
                      <p><strong>Genres:</strong> ${movie.genres}</p>
                      <p><strong>This show is:</strong> ${movie.mood}</p>
                  </div>
              </div>
  
              ${movie.episodes && movie.episodes.length > 0 ? `
              <!-- Episodes -->
              <div class="episodes">
                  <h3>Episodes</h3>
                  <div class="season-selector">
                      <label for="seasons">Season 1</label>
                      <select id="seasons">
                          ${Array.from({length: parseInt(movie.seasons) || 1}, (_, i) => 
                              `<option value="${i+1}">Season ${i+1}</option>`).join('')}
                      </select>
                  </div>
  
                  <div class="episode-list" id="episode-list">
                      ${movie.episodes.map(episode => `
                          <div class="episode">
                              <div class="episode-number">${episode.number}</div>
                              <img src="${episode.image}" alt="Episode ${episode.number}">
                              <div class="episode-info">
                                  <h4>${episode.title}</h4>
                                  <p>${episode.description}</p>
                                  <span class="duration">${episode.duration}</span>
                              </div>
                          </div>
                      `).join('')}
                  </div>
              </div>
              ` : ''}
  
              <!-- Reviews -->
              <div class="reviews">
                  <h3>Reviews <span class="review-count">(${movie.reviews.length})</span></h3>
                  ${movie.reviews.map(review => `
                      <div class="user-review">
                          <div class="user-info">
                              <img src="${review.avatar || review.photo}" alt="User Avatar">
                              <div>
                                  <h4>${review.user || review.name || review.author}</h4>
                                  <div class="user-rating">
                                      ${Array.from({length: 5}, (_, i) => 
                                          `<i class="${i < (review.rating || 0) ? 'fas' : 'far'} fa-star"></i>`).join('')}
                                      <span>${review.rating}/5</span>
                                  </div>
                              </div>
                          </div>
                          <p class="review-text">${review.text || review.content}</p>
                          <p class="review-date">${review.date}</p>
                      </div>
                  `).join('')}
  
                  <!-- Comment Form -->
                  <div class="comment-form">
                      <h4>Add Your Review</h4>
                      <textarea placeholder="Write your review here..."></textarea>
                      <div class="rating-input">
                          <span>Your Rating:</span>
                          <div class="stars">
                              <i class="far fa-star" data-rating="1"></i>
                              <i class="far fa-star" data-rating="2"></i>
                              <i class="far fa-star" data-rating="3"></i>
                              <i class="far fa-star" data-rating="4"></i>
                              <i class="far fa-star" data-rating="5"></i>
                          </div>
                      </div>
                      <button class="submit-review">Submit Review</button>
                  </div>
              </div>
          </section>
      `;
  
      // Render similar movies
      if (movie.similar && movie.similar.length > 0) {
          const similarContainer = document.getElementById('similar-movies-row');
          similarContainer.innerHTML = movie.similar.map(similar => `
              <div class="movie-item" data-movie-id="${similar.id}">
                  <img src="${similar.image || similar.poster}" alt="${similar.title}">
              </div>
          `).join('');
      } else {
          document.getElementById('similar-container').style.display = 'none';
      }
    }
  
    function setupEventListeners() {
        // Star rating functionality
        const stars = document.querySelectorAll('.stars i');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                
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
        document.querySelector('.play-trailer .play-button')?.addEventListener('click', function() {
            const movieId = this.getAttribute('data-movie-id');
            // Tìm video trailer trong dữ liệu (nếu có)
            const trailer = movie.videos?.find(v => v.type === 'Trailer');
            if (trailer) {
                window.open(trailer.url, '_blank');
            } else {
                alert(`No trailer available for this movie.`);
            }
        });
  
        // Add to list button
        document.querySelector('.add-btn')?.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-check"></i> Added';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-plus"></i> My List';
            }, 2000);
        });
  
        // Season selector
        document.getElementById('seasons')?.addEventListener('change', function() {
            // Có thể thêm logic load episodes theo season ở đây
            alert('Loading episodes for Season ' + this.value);
        });
  
        // Similar movies click
        document.querySelectorAll('.movie-item').forEach(item => {
            item.addEventListener('click', function() {
                const movieId = this.getAttribute('data-movie-id');
                if (movieId) {
                    window.location.href = `product.html?id=${movieId}`;
                }
            });
        });
  
        // Submit review
        document.querySelector('.submit-review')?.addEventListener('click', function() {
            const textarea = document.querySelector('.comment-form textarea');
            const rating = document.querySelectorAll('.stars i.fas').length;
            
            if (textarea.value.trim() === '') {
                alert('Please write your review before submitting.');
                return;
            }
            
            if (rating === 0) {
                alert('Please select a rating.');
                return;
            }
            
            alert('Thank you for your review!');
            textarea.value = '';
            
            // Reset stars
            document.querySelectorAll('.stars i').forEach(star => {
                star.classList.remove('fas');
                star.classList.add('far');
            });
        });
    }
  });