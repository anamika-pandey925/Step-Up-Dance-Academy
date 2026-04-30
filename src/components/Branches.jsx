import React from 'react';

const Branches = () => {
  const branchData = [
    {
      name: "Nangloi Branch",
      address: "Hall No 5 Shiv Market, Bhooton Wali Gali, Near Surya Public School, Nangloi Delhi 110041",
      timing: "10 AM – 9 PM",
      features: ["Front Entry", "Awards", "Professional Studio"],
      color: "var(--primary)"
    },
    {
      name: "Bahadurgarh Branch",
      address: "Opposite Elenta Mart, Dharam Vihar, Near Bahadurgarh Metro Station",
      timing: "10 AM – 9 PM",
      features: ["Modern Infrastructure", "Awards Gallery", "Premium Studio"],
      color: "var(--neon-purple)"
    }
  ];

  return (
    <section className="branches section" id="branches">
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Our Locations</span>
          <h2 className="section-title">Visit Our <em>Branches</em></h2>
        </div>

        <div className="branches-grid">
          {branchData.map((branch, index) => (
            <div key={index} className="branch-card reveal">
              <div className="branch-visual" style={{ height: '250px', background: `linear-gradient(135deg, ${branch.color}22, ${branch.color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '4rem' }}>📍</span>
              </div>
              <div className="branch-info">
                <h3 style={{ color: branch.color }}>{branch.name}</h3>
                <p><strong>Address:</strong> {branch.address}</p>
                <p><strong>Timing:</strong> {branch.timing}</p>
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {branch.features.map((f, i) => (
                    <span key={i} style={{ padding: '5px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', fontSize: '0.75rem', border: `1px solid ${branch.color}33` }}>{f}</span>
                  ))}
                </div>
                <div style={{ marginTop: '30px' }}>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: branch.color, width: '100%', justifyContent: 'center' }}>Get Directions</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
