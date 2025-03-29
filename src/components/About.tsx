import { Code, Cpu, Server, BookOpen } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'AI Development',
      description: 'Building intelligent solutions with OpenAI API, NLP, and custom AI applications.'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Web Development',
      description: 'Full-stack development with React, Node.js, WebAssembly, and modern frameworks.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: 'SEO Writing',
      description: 'Crafting SEO-optimized content, technical articles, and engaging blog posts.'
    },
    {
      icon: <Server className="w-8 h-8 text-yellow-500" />,
      title: 'Technical Skills',
      description: 'Proficient in Python, TensorFlow, JavaScript, and IoT integrations.'
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center mb-16">
          <p className="text-primary font-medium mb-2">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Who Am I?</h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-bold">
              AI Developer & <span className="gradient-text">SEO Writer</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Ashutosh Mishra, a B.Tech CSE student passionate about AI development 
                and technical writing with over 4 years of experience in web development and AI integration.
              </p>
              
              <p>
                I've worked on multiple AI projects, including <strong>Aetheris</strong>, an advanced 
                AI chatbot, and upgrading AI solutions for <strong>Vidya Vihar Institute of Technology 
                (VVIT), Purnia</strong>.
              </p>
              
              <p>
                My expertise spans from building intelligent AI solutions to crafting 
                SEO-optimized content. I'm constantly exploring new technologies to create 
                innovative digital experiences that combine cutting-edge functionality with 
                user-friendly interfaces.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-primary text-white rounded-full transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              Hire Me
            </a>
          </div>
          
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-1 md:order-2 w-full justify-center">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl hover-card text-center"
              >
                <div className="mb-4 flex justify-center">{skill.icon}</div>
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
