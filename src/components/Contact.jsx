import React, { useState } from 'react';
import { 
  IoCodeSlash, 
  IoPhonePortrait, 
  IoColorPalette,
  IoMail,
  IoCall,
  IoLogoInstagram 
} from 'react-icons/io5';

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Service Selection
    selectedService: '',
    serviceDetails: [],
    // Package Selection
    selectedPackage: '',
    packageBudget: '',
    // Project Details
    projectTimeline: '',
    projectDescription: '',
    additionalRequirements: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    // Contact Information
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const steps = [
    { id: 1, title: 'Service', description: 'Choose your service' },
    { id: 2, title: 'Package', description: 'Select a package' },
    { id: 3, title: 'Details', description: 'Project information' },
    { id: 4, title: 'Contact', description: 'Your information' }
  ];

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <IoCodeSlash />,
      items: [
        'Business & portfolio websites',
        'E-commerce stores with payment integration',
        'Custom web apps (booking systems, portals, dashboards)',
        'SEO optimization for better search rankings'
      ]
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      icon: <IoPhonePortrait />,
      items: [
        'Cross-platform apps (Android & iOS)',
        'Business tools (POS systems, order trackers)',
        'Event & community apps',
        'Educational & quiz apps'
      ]
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      icon: <IoColorPalette />,
      items: [
        'Wireframes & prototypes (Figma)',
        'Website & app redesigns',
        'Branding: color schemes & typography',
        'Interactive design mockups'
      ]
    }
  ];

  const packages = [
    {
      id: 'starter-website',
      title: 'Starter Website',
      price: '₱10,000 – ₱15,000',
      foreignPrice: '$200 – $300',
      description: '3–5 pages, mobile-friendly, basic SEO'
    },
    {
      id: 'pro-website',
      title: 'Pro Website',
      price: '₱18,000 – ₱35,000',
      foreignPrice: '$350 – $700',
      description: 'Up to 10 pages, animations, forms, CMS'
    },
    {
      id: 'ecommerce-website',
      title: 'E-commerce Website',
      price: '₱25,000 – ₱50,000',
      foreignPrice: '$500 – $900',
      description: 'Shop setup, payment integration, 20–50 products'
    },
    {
      id: 'basic-mobile-app',
      title: 'Basic Mobile App',
      price: '₱25,000 – ₱40,000',
      foreignPrice: '$500 – $800',
      description: '5–7 screens, Android & iOS, no complex backend'
    },
    {
      id: 'custom-mobile-app',
      title: 'Custom Mobile App',
      price: '₱45,000 – ₱80,000',
      foreignPrice: '$900 – $1,500',
      description: 'API integration, authentication, database'
    },
    {
      id: 'ui-ux-design-only',
      title: 'UI/UX Design Only',
      price: '₱8,000 – ₱20,000',
      foreignPrice: '$150 – $350',
      description: 'Wireframes, prototypes, style guide'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceSelect = (serviceId) => {
    setFormData({
      ...formData,
      selectedService: serviceId
    });
  };

  const handlePackageSelect = (packageId) => {
    setFormData({
      ...formData,
      selectedPackage: packageId
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.selectedService !== '';
      case 2:
        return formData.selectedPackage !== '';
      case 3:
        return formData.projectTimeline !== '' && formData.projectDescription !== '';
      case 4:
        return formData.name !== '' && formData.email !== '';
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get selected service and package details
    const selectedServiceData = services.find(s => s.id === formData.selectedService);
    const selectedPackageData = packages.find(p => p.id === formData.selectedPackage);
    
    // Create Gmail compose URL with pre-filled content
    const recipient = 'createcodedevelop@gmail.com';
    const subject = encodeURIComponent('Project Inquiry - ' + (selectedServiceData?.title || 'General'));
    const body = encodeURIComponent(
      `PROJECT INQUIRY\n\n` +
      `CLIENT INFORMATION:\n` +
      `Name: ${formData.clientName}\n` +
      `Email: ${formData.clientEmail}\n` +
      `Phone: ${formData.clientPhone}\n\n` +
      `SERVICE REQUESTED:\n` +
      `${selectedServiceData?.title || 'Not specified'}\n\n` +
      `PACKAGE SELECTED:\n` +
      `${selectedPackageData?.title || 'Not specified'}\n` +
      `Price Range: ${selectedPackageData?.price || 'Not specified'}\n\n` +
      `PROJECT DETAILS:\n` +
      `Timeline: ${formData.projectTimeline}\n` +
      `Description: ${formData.projectDescription}\n` +
      `Additional Requirements: ${formData.additionalRequirements}\n\n` +
      `ADDITIONAL CONTACT INFO:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `MESSAGE:\n${formData.message}`
    );
    
    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    
    // Open Gmail compose in a new tab
    window.open(gmailUrl, '_blank');
    
    // Show confirmation message
    alert('Opening Gmail to send your project inquiry!');
    
    // Reset form
    setFormData({
      selectedService: '',
      serviceDetails: [],
      selectedPackage: '',
      packageBudget: '',
      projectTimeline: '',
      projectDescription: '',
      additionalRequirements: '',
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setCurrentStep(1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h3>Choose Your Service</h3>
            <p>Select the service that best fits your project needs</p>
            <div className="service-selection">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className={`service-option ${formData.selectedService === service.id ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className="service-icon-large">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <ul>
                    {service.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h3>Select Your Package</h3>
            <p>Choose a package that matches your budget and requirements</p>
            <div className="package-selection">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`package-option ${formData.selectedPackage === pkg.id ? 'selected' : ''}`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  <h4>{pkg.title}</h4>
                  <div className="package-price">
                    <span className="local-price">{pkg.price}</span>
                    <span className="foreign-price">{pkg.foreignPrice}</span>
                  </div>
                  <p>{pkg.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h3>Project Details</h3>
            <p>Tell us more about your project requirements and contact information</p>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="clientName">Client Name</label>
                <input 
                  type="text" 
                  id="clientName" 
                  name="clientName" 
                  className="form-control" 
                  placeholder="Your full name"
                  value={formData.clientName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="clientEmail">Client Email</label>
                <input 
                  type="email" 
                  id="clientEmail" 
                  name="clientEmail" 
                  className="form-control" 
                  placeholder="your.email@example.com"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="clientPhone">Client Phone</label>
                <input 
                  type="tel" 
                  id="clientPhone" 
                  name="clientPhone" 
                  className="form-control" 
                  placeholder="+63 9XX XXX XXXX"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectTimeline">Project Timeline</label>
                <select 
                  id="projectTimeline" 
                  name="projectTimeline" 
                  className="form-control"
                  value={formData.projectTimeline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="3-4 weeks">3-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3+ months">3+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectDescription">Project Description</label>
                <textarea 
                  id="projectDescription" 
                  name="projectDescription" 
                  className="form-control"
                  rows="4"
                  placeholder="Describe your project goals, target audience, and key features..."
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="additionalRequirements">Additional Requirements</label>
                <textarea 
                  id="additionalRequirements" 
                  name="additionalRequirements" 
                  className="form-control"
                  rows="3"
                  placeholder="Any specific features, integrations, or requirements..."
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h3>Contact Information</h3>
            <p>How can we reach you about this project?</p>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-control" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control"
                  rows="4"
                  placeholder="Any additional information or questions..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to bring your ideas to life? Let's discuss your project!
        </p>
        
        <div className="contact-stepper-container">
          {/* Stepper Header */}
          <div className="stepper-header">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`stepper-step ${
                  index < currentStep ? 'active' : 
                  index === currentStep ? 'current' : ''
                }`}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-info">
                  <div className="step-title">{step.title}</div>
                  <div className="step-description">{step.description}</div>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
          
          {/* Contact Info Sidebar */}
          <div className="contact-info-sidebar">
            <div className="contact-item">
              <div className="contact-icon">
                <IoMail size={20} />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>createcodedevelop@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <IoCall size={20} />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+63 966 267 8981</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <IoLogoInstagram size={20} />
              </div>
              <div className="contact-text">
                <h4>Instagram</h4>
                <p>@c2d.tech</p>
              </div>
            </div>
          </div>
          
          {/* Stepper Content */}
          <div className="stepper-content">
            <form onSubmit={handleSubmit} className="stepper-form">
              <div className="step-content">
                {renderStepContent()}
              </div>
              
              <div className="stepper-navigation">
                {currentStep > 0 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="nav-btn"
                  >
                    Previous
                  </button>
                )}
                
                <div className="step-progress">
                  Step {currentStep + 1} of {steps.length}
                </div>
                
                {currentStep < steps.length - 1 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="nav-btn primary"
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    type="submit"
                    disabled={!isStepValid()}
                    className="nav-btn primary"
                  >
                    Send Project Inquiry
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;