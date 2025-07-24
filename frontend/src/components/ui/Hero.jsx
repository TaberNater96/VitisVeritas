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
      
      <div className="hero-content">
        <blockquote className="hero-quote">
          <p className="quote-text">
            "Wine can of their wits the wise beguile, make the sage frolic, and the serious smile."
          </p>
          <cite className="quote-attribution">
            ~ Homer, The Odyssey, 9th century B.C.
          </cite>
        </blockquote>
      </div>
      
      <div className="scroll-indicator">
        <div className="chevron-left">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="scroll-text">Let us together become wiser today than we were yesterday.</p>
        <div className="chevron-right">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
