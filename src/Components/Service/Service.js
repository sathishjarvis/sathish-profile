import React from 'react'
import statics from '../../images/static.png'
import dynamics from '../../images/dynamic.jpeg'
import mobiles from '../../images/mobile_app.jpeg'
import logodesign from '../../images/logodesign.jpg'
import digital from '../../images/digital marketing.jpg'
import { Link } from 'react-router-dom'
import './service.css'

const Service = () => {

  const services = [
    {
      id: 1,
      title: 'Business Website Development',
      description: 'We build fast, secure, and responsive static websites tailored to your needs.',
      icon: statics
    },
    {
      id: 2,
      title: 'E-commerce Website Development',
      description: 'Our dynamic websites are built to handle all your business needs with advanced features.',
      icon: dynamics
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'We offer native and cross-platform mobile app development services for Android.',
      icon: mobiles
    },
    {
      id: 4,
      title: 'Logo Designs',
      description: 'We offer custom logos with unique design ideas.',
      icon: logodesign
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'digital Marketing was potential for digital growth of organisation.',
      icon: digital
    }
  ];
  return (
    <section className="services-section">
      <h2>Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>


      <div className="pricing-container">
        <div className="pricing-header">
          <div className="plan-selector">
            <span className="active">Business Website Plan</span>
          </div>
        </div>
        <div className="pricing-content">
          <div className="plan-image">
            <img src={statics} alt={services.title} />
            <div className="price">
              <p>2999</p>
              <p>+12% GST</p>
            </div>
            <h2>STARTUP PLAN</h2>
          </div>
          <div className="plan-details">
            <ul>
              <li>Free Domain 1 Year</li>
              <li>Free Hosting 1 Year</li>
              <li>Upto 5 pages</li>
              <li>Social Media Integration</li>
              <li>Google Maps</li>
              <li>Contact Form</li>
              <li>Mobile Responsive</li>
              <li>Yearly Renewal Rs.500+Domain Charge</li>
            </ul>
            <Link to="/contact" className="get-quote-btn">GET QUOTE </Link>
          </div>
        </div>
      </div>
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="plan-selector">
            <span className="active">E-Commerce Website Plan</span>
          </div>
        </div>
        <div className="pricing-content">
          <div className="plan-image">
            <img src={dynamics} alt={services.title} />
            <div className="price">
              <p>5999</p>
              <p>+12% GST</p>
            </div>
            <h2>STANDARD PLAN</h2>
          </div>
          <div className="plan-details">
            <ul>
              <li>Free Domain 1 Year</li>
              <li>Free Hosting 1 Year</li>
              <li>Upto 10 pages</li>
              <li>Whatsapp Intagration</li>
              <li>Social Media Integration</li>
              <li>Standard Design</li>
              <li>Gallery Section</li>
              <li>Business Mail-1</li>
              <li>Google Maps</li>
              <li>Contact Form</li>
              <li>Mobile Responsive</li>
              <li>Yearly Renewal Rs.1000+Domain Charge</li>
            </ul>
            <Link to="/contact" className="get-quote-btn">GET QUOTE </Link>
          </div>
        </div>
      </div>
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="plan-selector">
            <span className="active">Logo Design Plan</span>
          </div>
        </div>
        <div className="pricing-content">
          <div className="plan-image">
            <img src={logodesign} alt={services.title} />
            <div className="price">
              <p>999</p>
              <p>+12% GST</p>
            </div>
            <h2>SMART PLAN</h2>
          </div>
          <div className="plan-details">
            <ul>
              <li>Logo Design Format - JPG/PNG</li>
              <li>3D Logo</li>
              <li>text Logo</li>
              <li>Business Card</li>
              <li>Competitors Logo Analysis</li>
              <li>Extra Design</li>
              <li>Responsive Facebook Cover & Profile Pic</li>
              <li>Letterhead</li>
              <li>Logo within a day</li>
              <li>Custom graphics</li>
              <li>Mobile Responsive</li>
            </ul>
            <Link to="/contact" className="get-quote-btn">GET QUOTE </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service