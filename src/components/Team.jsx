import ChromaGrid from './ChromaGrid';
import aguasImage from '../assets/aguas.jpg';
import carlImage from '../assets/carl.jpeg';

const Team = () => {
  const items = [
    {
      image: aguasImage,
      title: "Yñikko Arzee Neo Aguas",
      subtitle: "Developer",
      handle: "@flatearther666",
      borderColor: "#ffffff",
      gradient: "linear-gradient(145deg,rgb(80, 83, 82), #000)",
      url: "https://cozy-gnome-1fe53d.netlify.app/"
    },
    {
      image: carlImage,
      title: "Carl Emmanuel Macabales",
      subtitle: "Developer",
      handle: "@clivebixby0",
      borderColor: "#ffffff",
      gradient: "linear-gradient(180deg,rgb(80, 83, 82), #000)",
      url: "https://relaxed-salamander-f57d36.netlify.app/?fbclid=IwY2xjawMMXfhleHRuA2FlbQIxMQABHjIPIjMuvp4JbXHa-Ssbf6ivEcKCd1tou_8iA6EI6ZKFVbZdTG-Cl38ZJ0-u_aem_pnVxFrNEs2ELnjtuEHuVkg"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="text-center">Our Team</h2>
        <p className="text-center section-subtitle">Meet the talented developers behind C2D</p>
        
        <div style={{ 
          minHeight: '400px', 
          height: 'auto',
          position: 'relative',
          '@media (max-width: 768px)': {
            minHeight: '800px'
          }
        }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;