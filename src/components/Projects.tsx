
import { ExternalLink } from 'lucide-react';

const PROJECT_AUTHOR = {
  name: 'Ashutosh Mishra',
  linkedin: 'https://www.linkedin.com/in/ashutosh-mishra-dev/',
};

const Projects = () => {
  const projects = [
    {
      title: 'Aetheris AI Chatbot',
      description: 'An advanced AI chatbot supporting document analysis and natural language processing with custom features.',
      image: '/lovable-uploads/Screenshot%202025-03-29%20181203.png',
      tags: ['OpenAI API', 'Node.js', 'React', 'NLP'],
      demo: 'https://www.codewithashutosh.com/',
      author: PROJECT_AUTHOR,
    },
    {
      title: 'Fake Account Detection',
      description: 'Machine learning system to detect fake accounts on social media platforms using profile authenticity prediction.',
      image: '/lovable-uploads/Screenshot%202025-03-29%20181230.png',
      tags: ['Python', 'ML/AI', 'Data Analysis', 'Web Interface'],
      demo: 'https://fakeaccdetect.vercel.app/',
      author: PROJECT_AUTHOR,
    },
    {
      title: 'Coding 1v1 Battle Platform',
      description: 'A multiplayer competitive platform where developers can compete in real-time coding challenges and algorithmic problems.',
      image: '/lovable-uploads/Screenshot%202025-03-29%20181416.png',
      tags: ['React', 'WebAssembly', 'Node.js', 'Socket.io'],
      demo: 'https://codiny.codewithrandom.com/',
      author: PROJECT_AUTHOR,
    },
    {
      title: 'Bright Career School, Purnea',
      description: 'A modern school website built for Bright Career School, Purnea, showcasing academics, facilities, and more.',
      image: "/lovable-uploads/cba6cd4e-bf81-443b-ba81-8b8c86d29d63.png", // Graduation cap image
      tags: ['Next.js', 'School Website', 'Modern Design'],
      demo: 'https://brightcareerschoolpurnea.codewithashutosh.com/',
      author: PROJECT_AUTHOR,
    },
    {
      title: 'GD Goenka, Purnea',
      description: 'Official website for GD Goenka Purnea. Features school info, activities, gallery, and more.',
      image: "/lovable-uploads/ca779191-e0b2-4e96-ad74-3913cf517940.png", // GD Goenka building image
      tags: ['React', 'Landing Page', 'School Portal'],
      demo: 'https://gdgoenkapurnea.codewithashutosh.com/',
      author: PROJECT_AUTHOR,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p className="text-primary font-medium mb-2">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.demo}
              target="_blank" 
              rel="noreferrer"
              className="glass overflow-hidden rounded-2xl hover-card transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                <p className="text-xs text-primary mb-4">
                  By <a 
                    href={project.author.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:underline"
                  >
                    {project.author.name}
                  </a>
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-primary">
                  <ExternalLink className="h-4 w-4 mr-1" /> 
                  <span className="text-sm">View Project</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

