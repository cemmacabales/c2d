import { useState, useEffect } from 'react';

const Pricing = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const localPricing = [
    {
      id: 1,
      title: 'Starter Website',
      price: '₱10,000 – ₱15,000',
      description: '3–5 pages, mobile-friendly, basic SEO',
      foreignPrice: '$200 – $300',
      features: ['Responsive Design', 'Basic SEO', 'Contact Form']
    },
    {
      id: 2,
      title: 'Pro Website',
      price: '₱18,000 – ₱35,000',
      description: 'Up to 10 pages, animations, forms, CMS',
      foreignPrice: '$350 – $700',
      features: ['Custom Animations', 'CMS Integration', 'Advanced Forms']
    },
    {
      id: 3,
      title: 'E-commerce Website',
      price: '₱25,000 – ₱50,000',
      description: 'Shop setup, payment integration, 20–50 products',
      foreignPrice: '$500 – $900',
      features: ['Payment Gateway', 'Product Management', 'Order Tracking']
    },
    {
      id: 4,
      title: 'Basic Mobile App',
      price: '₱25,000 – ₱40,000',
      description: '5–7 screens, Android & iOS, no complex backend',
      foreignPrice: '$500 – $800',
      features: ['Cross-Platform', 'Basic UI/UX', 'App Store Ready']
    },
    {
      id: 5,
      title: 'Custom Mobile App',
      price: '₱45,000 – ₱80,000',
      description: 'API integration, authentication, database',
      foreignPrice: '$900 – $1,500',
      features: ['API Integration', 'User Authentication', 'Database Setup']
    },
    {
      id: 6,
      title: 'UI/UX Design Only',
      price: '₱8,000 – ₱20,000',
      description: 'Wireframes, prototypes, style guide',
      foreignPrice: '$150 – $350',
      features: ['Wireframes', 'Prototypes', 'Style Guide']
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      localPricing.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 150);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header-section">
          <h2 className="pricing-main-title">Packages & Pricing</h2>
          <p className="pricing-subtitle">Choose the perfect solution for your project</p>
        </div>
        <div className="pricing-grid">
          {localPricing.map((item, index) => (
            <div 
              key={item.id} 
              className={`pricing-card-modern ${
                visibleCards.includes(index) ? 'pricing-card-visible' : 'pricing-card-hidden'
              }`}
            >
              <div className="pricing-card-content">
                <div className="pricing-header-modern">
                  <h3 className="pricing-title-modern">{item.title}</h3>
                  <div className="pricing-price-container">
                    <div className="pricing-price-modern">{item.price}</div>
                    <div className="pricing-foreign-price">{item.foreignPrice}</div>
                  </div>
                </div>
                
                <p className="pricing-description-modern">{item.description}</p>
                
                <div className="pricing-features-modern">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="pricing-feature-item">
                      <span className="pricing-feature-icon">✓</span>
                      <span className="pricing-feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pricing-footer-modern">
                   <button 
                     className="pricing-btn-modern"
                     onClick={() => {
                       const contactSection = document.getElementById('contact');
                       if (contactSection) {
                         contactSection.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                   >
                     Get Started
                     <span className="pricing-btn-arrow">→</span>
                   </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;