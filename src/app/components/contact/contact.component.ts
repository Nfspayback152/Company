import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team of experts</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p>We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
            
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                <p>123 Tech Street, Silicon Valley, CA</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">✉️</div>
              <div>
                <h3>Email Address</h3>
                <p>info&#64;itsolutions.com</p>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name" 
                  required
                  placeholder="Enter your full name">
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email" 
                  required
                  placeholder="Enter your email address">
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject" 
                  required
                  placeholder="Enter subject">
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message" 
                  required
                  rows="5"
                  placeholder="Enter your message"></textarea>
              </div>

              <button type="submit" class="submit-btn" [disabled]="!contactForm.form.valid">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-header {
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      color: white;
      padding: 6rem 0 4rem;
      text-align: center;
    }
    .contact-header h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .contact-header p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    .contact-content {
      padding: 4rem 0;
      background-color: #f8f9fa;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      align-items: start;
    }
    .contact-info {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .contact-info h2 {
      color: #1a365d;
      margin-bottom: 1.5rem;
    }
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }
    .info-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: #2c5282;
    }
    .info-item h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #1a365d;
    }
    .info-item p {
      color: #4a5568;
      margin: 0;
    }
    .contact-form {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #1a365d;
      font-weight: 500;
    }
    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: #2c5282;
    }
    .submit-btn {
      background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 6px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
    }
    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .contact-header {
        padding: 4rem 0 2rem;
      }
      .contact-header h1 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Here you would typically handle the form submission
    console.log('Form submitted:', this.formData);
    // You can add your API call here to send the form data
    alert('Thank you for your message. We will get back to you soon!');
    // Reset form
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
} 