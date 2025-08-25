import LightRays from './LightRays';
import BlurText from './BlurText';

function Hero({ id }) {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section id={id} className="hero">
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-white">C2D</span> <br />
            <BlurText 
              text="Create. Code. Develop." 
              delay={150} 
              animateBy="words" 
              direction="top" 
              onAnimationComplete={handleAnimationComplete} 
              className="text-2xl mb-8" 
            />
          </h1>
          <p className="hero-subtitle">
            We bring your ideas to life by designing visually appealing, user-friendly, 
            and fully functional digital products — from concept to deployment.
          </p>
          <div className="hero-btns">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;