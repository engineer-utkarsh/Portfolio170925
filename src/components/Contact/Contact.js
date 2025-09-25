import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // Mark all fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate processing delay
    setTimeout(() => {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:mcautkarsh@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setFormStatus({ submitting: false, submitted: true, error: null });
      
      // Optional: Clear form after successful "submission"
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
      
    }, 1000);
  };

  const errors = validateForm();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question or want to work together? Fill out the form and your default email client will open with your message ready to send.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.name && errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
              {touched.name && errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
                placeholder="Enter your email address"
              />
              {touched.email && errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${touched.subject && errors.subject ? 'error' : ''}`}
              placeholder="What is this regarding?"
            />
            {touched.subject && errors.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-textarea ${touched.message && errors.message ? 'error' : ''}`}
              placeholder="Tell me about your project or question..."
              rows="6"
            ></textarea>
            {touched.message && errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={`submit-button ${formStatus.submitting ? 'submitting' : ''}`}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? (
              <>
                <span className="spinner"></span>
                Preparing Email...
              </>
            ) : (
              'Open Email Client'
            )}
          </button>

          {formStatus.submitted && (
            <div className="success-message">
              ✅ Your email client should open with your message. Please review and send the email.
            </div>
          )}

          {formStatus.error && (
            <div className="error-message-general">
              ❌ {formStatus.error}
            </div>
          )}
        </form>

        <div className="contact-info">
          <div className="info-item">
            <h4>Direct Email</h4>
            <p>
              <a href="mailto:mcautkarsh@gmail.com" className="email-link">
                mcautkarsh@gmail.com
              </a>
            </p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 7408217943</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Kanpur, India</p>
          </div>
        </div>

        <div className="alternative-contact">
          <p className="alternative-text">
            Prefer to contact me directly? Email me at{' '}
            <a href="mailto:mcautkarsh@gmail.com" className="direct-email-link">
              mcautkarsh@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;