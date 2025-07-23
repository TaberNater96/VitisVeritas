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
            ~Homer, The Odyssey, 9th century B.C.
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
