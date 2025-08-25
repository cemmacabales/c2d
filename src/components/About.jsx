import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger, 
} from "./ui/accordion";
import ChromaGrid from './ChromaGrid';
import aguasImage from '../assets/aguas.jpg';
import carlImage from '../assets/carl.jpeg';

const About = () => {
  const teamItems = [
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
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We are a group of passionate Computer Science students specializing in web development, 
              mobile app development, and UI/UX design.
            </p>
            <p>
              We bring your ideas to life by designing visually appealing, user-friendly, 
              and fully functional digital products — from concept to deployment.
            </p>
          </div>
          <div className="about-accordion">
            <Accordion type="single" collapsible>
              <AccordionItem value="web-dev">
                <AccordionTrigger>Web Development</AccordionTrigger>
                <AccordionContent>
                  Creating responsive, modern websites and web applications
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mobile-apps">
                <AccordionTrigger>Mobile Apps</AccordionTrigger>
                <AccordionContent>
                  Building cross-platform mobile applications for Android and iOS
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ui-ux">
                <AccordionTrigger>UI/UX Design</AccordionTrigger>
                <AccordionContent>
                  Designing intuitive and engaging user interfaces and experiences
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="about-team">
          <h3 className="text-center">Our Team</h3>
          <p className="text-center section-subtitle">Meet the talented developers behind C2D</p>
          
          <div style={{ 
            minHeight: '400px', 
            height: 'auto',
            position: 'relative'
          }}>
            <ChromaGrid 
              items={teamItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;