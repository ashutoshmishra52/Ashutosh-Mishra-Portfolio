import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Email', value: 'ashutoshkrmishra2006@gmail.com', link: 'mailto:ashutoshkrmishra2006@gmail.com' },
    { icon: <Phone className="h-6 w-6 text-primary" />, title: 'Phone', value: '+91 979835****', link: 'tel:+91979835****' },
    { icon: <MapPin className="h-6 w-6 text-primary" />, title: 'Location', value: 'Purnia, Bihar, India', link: 'https://maps.google.com' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: 'GitHub', url: 'https://github.com/ashutoshmishra52' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashutosh-mishra-dev' },
    { icon: <ExternalLink className="w-5 h-5" />, name: 'Website', url: 'https://codewithashutosh.com' }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <div className="w-20 h-1.5 bg-primary/30 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Work Together</h3>
            <p className="text-muted-foreground">Have a project or want to collaborate? Reach out to me!</p>
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="flex items-center gap-4 p-4 glass rounded-xl hover-card">
                {info.icon}
                <div>
                  <h4 className="font-medium">{info.title}</h4>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </a>
            ))}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noreferrer" className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl space-y-4">
            <h3 className="text-2xl font-bold">Send Me a Message</h3>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-3 bg-secondary/50 rounded-lg" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-4 py-3 bg-secondary/50 rounded-lg" required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full px-4 py-3 bg-secondary/50 rounded-lg" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full px-4 py-3 bg-secondary/50 rounded-lg resize-none" rows="5" required></textarea>
            <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg flex items-center justify-center">
              {isSubmitting ? 'Sending...' : (<><Send className="mr-2" /> Send Message</>)}
            </button>
            {submitMessage && <p className="text-green-500 text-center mt-2">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;