'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/navyabijoy14@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        textAlign: 'center',
        padding: '32px',
      }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>✅</div>
        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Message Sent!</h2>
        <p style={{ fontSize: '11px', color: '#666' }}>
          Thank you for reaching out. I'll get back to you as soon as possible!
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '8px' }}></div>
        <h2 style={{ fontSize: '16px', marginBottom: '4px' }}>Get In Touch</h2>
        <p style={{ fontSize: '11px', color: '#666' }}>
          Fill out the form below and I'll respond within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What is this regarding?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here..."
            rows={6}
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <button 
            type="button"
            onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
          >
            Clear
          </button>
        </div>
      </form>

      <div style={{ 
        marginTop: '24px', 
        padding: '12px', 
        background: '#e0e0e0', 
        border: '1px inset #808080',
        fontSize: '10px',
      }}>
        <p style={{ marginBottom: '8px' }}>
          <strong>Email:</strong> <a href="mailto:navyabijoy14@gmail.com">navyabijoy14@gmail.com</a>
        </p>
        <p style={{ marginBottom: '8px' }}>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/navya-bijoy-883a35249/">linkedin.com/in/navya-bijoy-883a35249/</a>
        </p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/navyabijoy">github.com/navyabijoy</a>
        </p>
      </div>
    </div>
  );
}
