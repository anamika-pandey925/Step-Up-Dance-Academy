import React from 'react';
import intlReview from '../assets/international_review_vid.mp4';
import natlReview from '../assets/national-review.mp4';

const VideoReviews = () => {
  return (
    <section className="video-reviews section" id="video-reviews">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Global Impact</span>
          <h2 className="section-title">International & National <em>Reviews</em></h2>
          <p className="section-sub">Hear directly from our global and local community about their journey with us.</p>
        </div>
        <div className="reviews-video-grid">
          <div className="review-video-card reveal" data-delay="0">
            <h3>International Review</h3>
            <div className="video-container">
              <video src={intlReview} controls loop muted playsInline preload="auto"></video>
            </div>
          </div>
          <div className="review-video-card reveal" data-delay="1">
            <h3>National Review</h3>
            <div className="video-container">
              <video src={natlReview} controls loop muted playsInline preload="auto"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
