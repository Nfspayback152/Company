import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="services-header">
      <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive IT solutions for your business needs</p>
      </div>
    </section>

    <section class="services-grid">
      <div class="container">
        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Software Development</h3>
          <p>Custom software solutions tailored to your business requirements</p>
          <ul>
            <li>Web Applications</li>
            <li>Mobile Apps</li>
            <li>Enterprise Software</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">🌐</div>
          <h3>Cloud Solutions</h3>
          <p>Scalable and secure cloud infrastructure services</p>
          <ul>
            <li>Cloud Migration</li>
            <li>DevOps Services</li>
            <li>Cloud Security</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">🔒</div>
          <h3>Cybersecurity</h3>
          <p>Protect your business with advanced security solutions</p>
          <ul>
            <li>Security Audits</li>
            <li>Threat Detection</li>
            <li>Data Protection</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>IT Consulting</h3>
          <p>Expert guidance for your technology decisions</p>
          <ul>
            <li>Digital Transformation</li>
            <li>Technology Strategy</li>
            <li>Process Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-header {
      background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
    }
    .services-header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .services-header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    .services-grid {
      padding: 4rem 0;
      background-color: #f8f9fa;
    }
    .services-grid .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    .service-card:hover {
      transform: translateY(-5px);
    }
    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .service-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    .service-card p {
      color: #666;
      margin-bottom: 1rem;
    }
    .service-card ul {
      list-style: none;
      padding: 0;
    }
    .service-card ul li {
      color: #666;
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }
    .service-card ul li:last-child {
      border-bottom: none;
    }
  `]
})
export class ServicesComponent {} 