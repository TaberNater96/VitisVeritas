import './Hero.css';
import vineyardImage from '../../assets/images/vineyard_landscape.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src={vineyardImage} 
          alt="Vineyard landscape" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content hero-content-left">
        <h1 className="hero-main-title">
          <span className="large-v">V</span>itis <span className="large-v">V</span>eritas
        </h1>
        <h2 className="hero-subtitle">
          ~ The truth of wine
        </h2>
        <p className="hero-description">
          Welcome to the ultimate guide on the Willamette Valley terroir. Let's elevate your palate by understanding how this land shapes every glass of this world famous wine.
        </p>
      </div>

      <div className="scroll-indicator">
        <div className="chevron-left">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="scroll-text">Let us become wiser today than we were yesterday.</p>
        <div className="chevron-right">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
