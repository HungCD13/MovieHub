document.addEventListener('DOMContentLoaded', function() {
  // Lấy ID phim từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id') || '1'; // Mặc định ID 1 nếu không có
  
  // Giả lập dữ liệu - trong thực tế bạn sẽ fetch từ API/JSON
  const movieData = {
      "1": {
          "title": "Stranger Things",
          "banner": "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
          "match": "98% Match",
          "year": "2016",
          "seasons": "4",
          "rating": "8.7",
          "quality": "HD",
          "synopsis": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
          "cast": "Millie Bobby Brown, Finn Wolfhard, Winona Ryder, David Harbour",
          "genres": "Sci-Fi & Fantasy, Teen TV, Horror",
          "mood": "Dark, Exciting, Nostalgic",
          "episodes": [
              {
                  "number": "1",
                  "title": "Chapter One: The Hellfire Club",
                  "image": "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true",
                  "description": "Eleven's plans for spring break are ruined when she loses a battle with the school bully. Meanwhile, a new horror begins in Hawkins.",
                  "duration": "76m"
              },
              {
                  "number": "2",
                  "title": "Chapter Two: Vecna's Curse",
                  "image": "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true",
                  "description": "After defeating the Demogorgon, the group faces new threats from the Upside Down. Max begins having terrifying visions.",
                  "duration": "68m"
              }
          ],
          "reviews": [
              {
                  "user": "Mike Johnson",
                  "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
                  "rating": 4,
                  "text": "The new season takes the show to a whole new level. The acting, especially from Millie Bobby Brown, is phenomenal!",
                  "date": "Posted on June 5, 2023"
              }
          ],
          "similar": [
              {
                  "id": "2",
                  "title": "The Witcher",
                  "image": "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true"
              },
              {
                  "id": "3",
                  "title": "Dark",
                  "image": "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true"
              },
              {
                  "id": "4",
                  "title": "Umbrella Academy",
                  "image": "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true"
              },
              {
                  "id": "5",
                  "title": "Daredevil",
                  "image": "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true"
              }
          ]
      },
      "2": {
          "title": "The Witcher",
          "banner": "https://image.tmdb.org/t/p/original/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
          "match": "95% Match",
          "year": "2019",
          "seasons": "3",
          "rating": "8.2",
          "quality": "4K",
          "synopsis": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
          "cast": "Henry Cavill, Anya Chalotra, Freya Allan",
          "genres": "Fantasy, Adventure, Action",
          "mood": "Dark, Exciting, Violent",
          "episodes": [],
          "reviews": [],
          "similar": []
      },
        "3": {
          "title": "Money Heist",
          "original_title": "La Casa de Papel",
          "banner": "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
          "poster": "https://image.tmdb.org/t/p/original/z01Dc0q6QgPDgTUXmHivR6E8h7A.jpg",
          "logo": "https://image.tmdb.org/t/p/original/zeaUiyBoF9k8AYqx4VuvESCXwJr.png",
          "match": "98% Match",
          "year": "2017",
          "seasons": "5",
          "episodes_count": "41",
          "rating": "8.3",
          "quality": "HD",
          "synopsis": "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history – to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and a desperate desire to succeed.",
          "cast": [
            {
              "name": "Álvaro Morte",
              "character": "The Professor",
              "photo": "https://image.tmdb.org/t/p/w185/6aOjYVyV9wjvA2fH4Nq6xFi2Xwi.jpg"
            },
            {
              "name": "Úrsula Corberó",
              "character": "Tokyo",
              "photo": "https://image.tmdb.org/t/p/w185/7d6N5dUBdkV5zED7sJSjbQ+5+u.jpg"
            },
            {
              "name": "Pedro Alonso",
              "character": "Berlin",
              "photo": "https://image.tmdb.org/t/p/w185/d4W2UdA6l7z+Z+Q+Qv+Q+Qv+Q+Qv.jpg"
            }
          ],
          "genres": ["Crime", "Drama", "Thriller"],
          "mood": ["Suspenseful", "Tense", "Exciting"],
          "episodes": [
            {
              "season": 1,
              "number": 1,
              "title": "Do as Planned",
              "image": "https://image.tmdb.org/t/p/w780/1Wlwnhn5sXUIxgxpU7oJThYH5y6.jpg",
              "description": "The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.",
              "duration": "50m",
              "rating": "8.5"
            },
            {
              "season": 1,
              "number": 2,
              "title": "The Plan Perfectionist",
              "image": "https://image.tmdb.org/t/p/w780/yUwjNxX4Q+Q+Q+Q+Q+Q+Q+Q+Q+Q.jpg",
              "description": "The robbers take hostages inside the Mint as the police arrive on the scene. The Professor communicates with the police from his secret hideout.",
              "duration": "45m",
              "rating": "8.4"
            }
          ],
          "reviews": [
            {
              "author": "Emma Stone",
              "avatar": "https://image.tmdb.org/t/p/w185/6aOjYVyV9wjvA2fH4Nq6xFi2Xwi.jpg",
              "rating": 5,
              "content": "One of the most intense and clever heist dramas ever made! The Professor is a genius character.",
              "date": "2022-03-15"
            }
          ],
          "similar": [
            {
              "id": "101",
              "title": "Elite",
              "poster": "https://image.tmdb.org/t/p/w185/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg"
            },
            {
              "id": "102",
              "title": "White Lines",
              "poster": "https://image.tmdb.org/t/p/w185/7d6N5dUBdkV5zED7sJSjbQ+5+u.jpg"
            }
          ],
          "videos": [
            {
              "type": "Trailer",
              "url": "https://www.youtube.com/embed/_InqQJRqGW4",
              "thumbnail": "https://img.youtube.com/vi/_InqQJRqGW4/maxresdefault.jpg"
            }
          ],
          "details": {
            "creator": "Álex Pina",
            "country": "Spain",
            "language": "Spanish",
            "awards": "International Emmy Award for Best Drama Series",
            "release_date": "2017-05-02"
          }
        }

      
  };

  // Lấy thông tin phim
  const movie = movieData[movieId];
  if (!movie) {
      window.location.href = '../index.html';
      return;
  }

  // Render thông tin phim
  renderMovieDetails(movie);
  setupEventListeners();

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
                              <img src="${review.avatar}" alt="User Avatar">
                              <div>
                                  <h4>${review.user}</h4>
                                  <div class="user-rating">
                                      ${Array.from({length: 5}, (_, i) => 
                                          `<i class="${i < review.rating ? 'fas' : 'far'} fa-star"></i>`).join('')}
                                      <span>${review.rating}/5</span>
                                  </div>
                              </div>
                          </div>
                          <p class="review-text">${review.text}</p>
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
                  <img src="${similar.image}" alt="${similar.title}">
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
          alert(`Would play trailer for movie ID: ${movieId}`);
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
          alert('Loading episodes for ' + this.value);
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
  }
});