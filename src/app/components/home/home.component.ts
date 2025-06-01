import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Innovative Technology Solutions</h1>
          <p class="hero-subtitle">Transforming businesses through cutting-edge technology and digital innovation</p>
          <div class="hero-buttons">
            <button class="btn-primary" (click)="navigateToServices()">Get Started</button>
            <button class="btn-secondary" (click)="scrollToFeatures()">Learn More</button>
          </div>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <section class="features" id="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Us</h2>
          <p class="section-subtitle">Delivering excellence through innovation and expertise</p>
        </div>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <h3>Innovative Solutions</h3>
            <p>Cutting-edge technology solutions tailored to your specific business needs and challenges</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Expert Team</h3>
            <p>Highly skilled professionals with extensive experience in delivering complex projects</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Efficient project management ensuring timely delivery without compromising quality</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your digital transformation goals</p>
          <button class="btn-primary" (click)="navigateToContact()">Schedule a Consultation</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') center/cover;
      color: white;
      padding: 8rem 0;
      text-align: center;
      overflow: hidden;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(44, 82, 130, 0.9) 100%);
    }
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
    }
    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2.5rem;
      opacity: 0.9;
    }
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .btn-primary {
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
    .features {
      padding: 6rem 0;
      background-color: #f8f9fa;
    }
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    .section-header h2 {
      font-size: 2.5rem;
      color: #1a365d;
      margin-bottom: 1rem;
    }
    .section-subtitle {
      font-size: 1.2rem;
      color: #4a5568;
    }
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
    }
    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .feature-card h3 {
      color: #1a365d;
      margin-bottom: 1rem;
    }
    .feature-card p {
      color: #4a5568;
    }
    .cta-section {
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      color: white;
      padding: 6rem 0;
      text-align: center;
    }
    .cta-content {
      max-width: 800px;
      margin: 0 auto;
    }
    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }
      .hero-buttons {
        flex-direction: column;
      }
      .section-header h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToServices() {
    this.router.navigate(['/services']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 