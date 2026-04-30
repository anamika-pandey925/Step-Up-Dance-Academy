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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>📍</span>
                <div>
                  <strong>Nangloi Branch</strong>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Hall No 5 Shiv Market, Delhi 110041</p>
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
                  <strong>Contact Numbers</strong>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>9555972389, 7982404565</p>
                </div>
              </div>
            </div>

            {/* Championship Info */}
            <div style={{ marginTop: '60px', padding: '30px', background: 'linear-gradient(135deg, var(--primary)11, var(--neon-purple)11)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px', textTransform: 'uppercase' }}>Upcoming Championship</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Date: 31st May</p>
              <ul style={{ listStyle: 'none', marginTop: '15px', color: 'var(--muted)', fontSize: '0.85rem' }}>
                <li>• No participation fee</li>
                <li>• Solo performance only</li>
                <li>• 3+ dance styles required</li>
                <li>• Time: 1–2.5 minutes</li>
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
