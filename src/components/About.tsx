
import { Code, Edit, Lightbulb, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Web Development',
      description: 'Full-stack development with React/Next.js, Node.js, and modern frameworks.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'AI Integration',
      description: 'Building advanced AI chatbots and integrating LLMs into web applications.'
    },
    {
      icon: <Edit className="w-8 h-8 text-green-500" />,
      title: 'Content Writing',
      description: 'Technical articles, blogs, and content strategy with SEO optimization.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Innovation',
      description: 'Combining cutting-edge technologies to create unique solutions.'
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p className="text-primary font-medium mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Who Am I?</h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-bold">
              Full-Stack Developer & <span className="gradient-text">AI Enthusiast</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Ashutosh Mishra, a Full-Stack Web Developer with over 4 years of 
                experience specializing in React (Next.js), AI chatbot development, and content 
                creation.
              </p>
              
              <p>
                I graduated with a B.Tech in Computer Science from BEU University and am 
                affiliated with Vidya Vihar Institute of Technology, Purnia, Bihar (VVIT R&D Cell).
              </p>
              
              <p>
                My passion lies in creating innovative digital experiences that combine beautiful 
                interfaces with powerful functionality. I'm constantly exploring new technologies 
                and methodologies to deliver exceptional results.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-primary text-white rounded-full transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              Let's Work Together
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-1 md:order-2">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl hover-card"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
