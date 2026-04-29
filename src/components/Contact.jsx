import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Nangloi',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    setTimeout(() => {
      setStatus('Success');
      setFormData({ name: '', email: '', phone: '', branch: 'Nangloi', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1200);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Start Your <em>Dance Journey</em></h2>
            <p>Ready to move? Contact us for class schedules, trial bookings, or any enquiries. Our team is here to help you find the perfect rhythm.</p>
            <div className="contact-details">
              <div className="cd-item">
                <span className="cd-ico">📍</span>
                <div>
                  <strong>Nangloi Branch</strong>
                  <span>Hall No 5 Shiv Market Bhooton Wali Gali, Nangloi, Delhi</span>
                </div>
              </div>
              <div className="cd-item">
                <span className="cd-ico">📍</span>
                <div>
                  <strong>Bahadurgarh Branch</strong>
                  <span>Opposite Elenta Mart Dharam Vihar Nala Road, Bahadurgarh</span>
                </div>
              </div>
              <div className="cd-item">
                <span className="cd-ico">📞</span>
                <div>
                  <strong>Phone Enquiries</strong>
                  <a href="tel:+919555972389">09555972389</a>, <a href="tel:+917982404565">079824 04565</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Preferred Branch</label>
                <select name="branch" value={formData.branch} onChange={handleChange}>
                  <option value="Nangloi">Nangloi Branch</option>
                  <option value="Bahadurgarh">Bahadurgarh Branch</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Sending...' : 'Send Message ✦'}
              </button>
              <div className={`form-success ${status === 'Success' ? 'show' : ''}`} id="formSuccess">
                Thanks! We'll get back to you soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
