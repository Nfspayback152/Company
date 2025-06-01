import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <section class="about-header">
      <div class="container">
        <h1>About Us</h1>
        <p>Pioneering the Future of Technology</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-section">
          <div class="story-card">
            <div class="card-icon">🚀</div>
            <h2>Our Journey</h2>
            <p>From a small startup in 2010 to a global technology leader, we've been at the forefront of digital innovation. Our journey is marked by continuous growth, learning, and a relentless pursuit of excellence.</p>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-number">500+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Countries Served</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Our Leadership Team</h2>
          <div class="team-grid">
            <div class="team-card">
              <div class="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p class="position">CEO & Founder</p>
              <p class="bio">Visionary leader with 20+ years of experience in technology and business transformation.</p>
              <div class="social-links">
                <span>📱</span>
                <span>💼</span>
                <span>📧</span>
              </div>
            </div>
            <div class="team-card">
              <div class="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p class="position">CTO</p>
              <p class="bio">Tech innovator specializing in AI and cloud architecture with multiple patents.</p>
              <div class="social-links">
                <span>📱</span>
                <span>💼</span>
                <span>📧</span>
              </div>
            </div>
            <div class="team-card">
              <div class="member-avatar">👨‍🔧</div>
              <h3>Michael Chen</h3>
              <p class="position">Lead Developer</p>
              <p class="bio">Full-stack expert with a passion for creating scalable, efficient solutions.</p>
              <div class="social-links">
                <span>📱</span>
                <span>💼</span>
                <span>📧</span>
              </div>
            </div>
            <div class="team-card">
              <div class="member-avatar">👩‍🎨</div>
              <h3>Emily Davis</h3>
              <p class="position">UX Designer</p>
              <p class="bio">Award-winning designer focused on creating intuitive user experiences.</p>
              <div class="social-links">
                <span>📱</span>
                <span>💼</span>
                <span>📧</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>Our Achievements</h2>
          <div class="achievements-grid">
            <div class="achievement-card">
              <div class="achievement-icon">🏆</div>
              <h3>Best Tech Company 2023</h3>
              <p>Awarded by Tech Innovators Association</p>
            </div>
            <div class="achievement-card">
              <div class="achievement-icon">🌟</div>
              <h3>Top 100 Companies</h3>
              <p>Featured in Global Tech Leaders List</p>
            </div>
            <div class="achievement-card">
              <div class="achievement-icon">🎯</div>
              <h3>Excellence in Innovation</h3>
              <p>Recognized for breakthrough solutions</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <div class="culture-card">
            <h2>Our Culture</h2>
            <div class="culture-grid">
              <div class="culture-item">
                <div class="culture-icon">💡</div>
                <h3>Innovation First</h3>
                <p>We encourage creative thinking and continuous learning</p>
              </div>
              <div class="culture-item">
                <div class="culture-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>Working together to achieve extraordinary results</p>
              </div>
              <div class="culture-item">
                <div class="culture-icon">🎯</div>
                <h3>Excellence</h3>
                <p>Setting high standards in everything we do</p>
              </div>
              <div class="culture-item">
                <div class="culture-icon">❤️</div>
                <h3>Work-Life Balance</h3>
                <p>Supporting our team's well-being and growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-header {
      background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }
    .about-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .about-header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    .about-content {
      padding: 4rem 0;
      background-color: #f8f9fa;
    }
    .about-section {
      margin-bottom: 4rem;
    }
    .about-section h2 {
      color: #2c3e50;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2rem;
    }
    .story-card {
      background: white;
      padding: 3rem;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin-bottom: 3rem;
    }
    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }
    .stat-item {
      text-align: center;
    }
    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: bold;
      color: #3498db;
    }
    .stat-label {
      color: #666;
      font-size: 0.9rem;
    }
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .team-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    .team-card:hover {
      transform: translateY(-5px);
    }
    .member-avatar {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .position {
      color: #3498db;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .bio {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    .social-links span {
      cursor: pointer;
      transition: transform 0.2s;
    }
    .social-links span:hover {
      transform: scale(1.2);
    }
    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .achievement-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    .achievement-card:hover {
      transform: translateY(-5px);
    }
    .achievement-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .culture-card {
      background: white;
      padding: 3rem;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .culture-item {
      text-align: center;
      padding: 1.5rem;
      border-radius: 10px;
      background: #f8f9fa;
      transition: transform 0.3s;
    }
    .culture-item:hover {
      transform: translateY(-5px);
    }
    .culture-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .culture-item h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }
    .culture-item p {
      color: #666;
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
      .story-card, .culture-card {
        padding: 2rem;
      }
    }
  `]
})
export class AboutUsComponent {} 