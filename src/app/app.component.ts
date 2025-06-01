import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <span class="brand-text">IT Solutions</span>
        </a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/services" routerLinkActive="active">Services</a>
          <a routerLink="/about-us" routerLinkActive="active">About Us</a>
          <a routerLink="/contact" class="contact-btn">Contact Us</a>
        </div>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>IT Solutions</h4>
            <p>Transforming businesses through innovative technology solutions.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <a routerLink="/">Home</a>
            <a routerLink="/services">Services</a>
            <a routerLink="/about-us">About Us</a>
            <a routerLink="/contact">Contact</a>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Email: info&#64;itsolutions.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, Silicon Valley, CA</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .navbar {
      background-color: white;
      padding: 1.25rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar-brand {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1a365d;
      text-decoration: none;
    }
    .brand-text {
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    .nav-links a {
      color: #4a5568;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .nav-links a:hover {
      color: #1a365d;
    }
    .nav-links a.active {
      color: #1a365d;
    }
    .contact-btn {
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      color: white !important;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    }
    .contact-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    main {
      margin-top: 5rem;
      min-height: calc(100vh - 5rem - 300px);
    }
    .footer {
      background: #1a365d;
      color: white;
      padding: 4rem 0 2rem;
    }
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .footer-section h4 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    .footer-section a {
      display: block;
      color: #e2e8f0;
      text-decoration: none;
      margin-bottom: 0.5rem;
      transition: color 0.3s ease;
    }
    .footer-section a:hover {
      color: white;
    }
    .footer-section p {
      color: #e2e8f0;
      margin-bottom: 0.5rem;
    }
    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .footer-bottom p {
      color: #e2e8f0;
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class AppComponent {
  title = 'IT Solutions';
}
