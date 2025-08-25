import { IoGlobeOutline, IoPhonePortraitOutline, IoColorPaletteOutline } from 'react-icons/io5';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: <IoGlobeOutline />,
      items: [
        'Business & portfolio websites',
        'E-commerce stores with payment integration',
        'Custom web apps (booking systems, portals, dashboards)',
        'SEO optimization for better search rankings'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: <IoPhonePortraitOutline />,
      items: [
        'Cross-platform apps (Android & iOS)',
        'Business tools (POS systems, order trackers)',
        'Event & community apps',
        'Educational & quiz apps'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: <IoColorPaletteOutline />,
      items: [
        'Wireframes & prototypes (Figma)',
        'Website & app redesigns',
        'Branding: color schemes & typography',
        'Interactive design mockups'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="text-center">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;