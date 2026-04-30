import React from 'react';
import intlReview from '../assets/international_review_vid.mp4';
import natlReview from '../assets/national-review.mp4';

const VideoReviews = () => {
  return (
    <section className="reviews section" id="reviews" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What They <em>Say</em> About Us</h2>
        </div>

        <div className="branches-grid"> {/* Reusing 2-column grid */}
          <div className="branch-card reveal">
            <div className="video-container" style={{ width: '100%', height: '300px', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <video src={intlReview} controls style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div className="branch-info" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>International Review</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Global recognition for our training excellence.</p>
            </div>
          </div>

          <div className="branch-card reveal">
            <div className="video-container" style={{ width: '100%', height: '300px', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <video src={natlReview} controls style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div className="branch-info" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--neon-purple)', fontSize: '1.2rem' }}>National Review</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Trusted by dancers across India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
