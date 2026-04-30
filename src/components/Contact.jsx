import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Join the <em>Legacy</em></h2>
        </div>

        <div className="about-grid">
          <div className="contact-info reveal">
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to Move?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '40px' }}>
              Whether you're looking for a professional career or just want to explore your passion, we are here to guide you. Book your trial session today!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>📍</span>
                <div>
                  <strong>Nangloi Branch</strong>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Hall No 5 Shiv Market, Nangloi Delhi 110041</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>📍</span>
                <div>
                  <strong>Bahadurgarh Branch</strong>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Near Bahadurgarh Metro Station, Haryana</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>9555972389, 7982404565</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://www.instagram.com/addy_hip_hoper_official/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Instagram</a>
              <a href="https://www.facebook.com/stepupdanceacademy.official" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>Facebook</a>
              <a href="https://youtube.com/@stepupdanceacademy1999?si=R9zU4OdZfDNlxUR0" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>YouTube</a>
            </div>

            {/* Championship Info */}
            <div style={{ marginTop: '40px', padding: '30px', background: 'rgba(255, 85, 0, 0.05)', borderRadius: 'var(--r)', border: '1px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px', textTransform: 'uppercase' }}>Upcoming Championship</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Date: 31st May</p>
              <ul style={{ listStyle: 'none', marginTop: '15px', color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>• No participation fee</li>
                <li>• Solo performance only</li>
                <li>• 3+ dance styles required</li>
                <li>• Cash Prizes & Trophies</li>
              </ul>
            </div>
          </div>

          <div className="contact-form reveal">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--bg3)', padding: '40px', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <input type="text" placeholder="Your Name" style={{ flex: 1, padding: '15px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff' }} />
                <input type="tel" placeholder="Phone Number" style={{ flex: 1, padding: '15px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff' }} />
              </div>
              <select style={{ padding: '15px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff' }}>
                <option value="">Select Branch</option>
                <option value="nangloi">Nangloi</option>
                <option value="bahadurgarh">Bahadurgarh</option>
              </select>
              <select style={{ padding: '15px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff' }}>
                <option value="">Interested Style</option>
                <option value="bollywood">Bollywood</option>
                <option value="hiphop">Hip-Hop</option>
                <option value="classical">Classical</option>
                <option value="wedding">Wedding Choreography</option>
                <option value="pt">Personal Training</option>
                <option value="zumba">Zumba / Fitness</option>
              </select>
              <textarea placeholder="Message" rows="4" style={{ padding: '15px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', resize: 'none' }}></textarea>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
