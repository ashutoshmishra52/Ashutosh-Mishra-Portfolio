
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'contact@ashumishra.com',
      link: 'mailto:contact@ashumishra.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      value: 'Purnia, Bihar, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p className="text-primary font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Me</h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out to me using the contact form or through any of the channels below.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-4 glass rounded-xl hover-card"
                >
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.582 9.521 21.27 9.521 21.007C9.521 20.742 9.499 19.705 9.499 18.787C7 19.318 6.35 18.171 6.15 17.61C6.037 17.305 5.55 16.387 5.125 16.122C4.775 15.91 4.275 15.379 5.112 15.368C5.9 15.356 6.462 16.022 6.675 16.338C7.55 17.792 8.937 17.649 9.557 17.386C9.65 16.74 9.925 16.312 10.225 16.073C8.125 15.834 5.925 15.016 5.925 11.266C5.925 10.145 6.312 9.223 6.7 8.515C6.595 8.265 6.25 7.274 6.8 5.958C6.8 5.958 7.613 5.695 9.512 6.926C10.312 6.7 11.162 6.587 12.012 6.587C12.862 6.587 13.712 6.7 14.512 6.926C16.412 5.684 17.225 5.958 17.225 5.958C17.775 7.274 17.43 8.265 17.325 8.515C17.713 9.223 18.1 10.133 18.1 11.266C18.1 15.028 15.888 15.834 13.788 16.073C14.163 16.368 14.488 16.94 14.488 17.828C14.488 19.102 14.463 20.638 14.463 21.007C14.463 21.27 14.65 21.593 15.15 21.489C17.13 20.8185 18.841 19.5235 20.0292 17.8115C21.2175 16.0996 21.8055 14.0733 21.8 12C21.8 6.477 17.323 2 12 2Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92927 4.59318 2.50255 4.84824 2.16211 5.19941C1.82138 5.55057 1.57995 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 0.999999 11.75C0.988773 13.537 1.14273 15.3213 1.46 17.08C1.59096 17.5398 1.83333 17.953 2.16958 18.2822C2.50583 18.6115 2.92362 18.8491 3.38 18.98C5.1 19.4 12 19.4 12 19.4C12 19.4 18.88 19.4 20.6 18.94C21.0708 18.8068 21.498 18.5518 21.8387 18.2006C22.1787 17.8494 22.4208 17.4146 22.54 16.94C22.8524 15.2054 23.0063 13.4383 23 11.67C23.0112 9.88304 22.8572 8.09872 22.54 6.34V6.42Z" fill="currentColor"/>
                  <path d="M9.75 8.32999V15.17L15.5 11.75L9.75 8.32999Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://t.me/username" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0717 3.32C21.9776 3.2445 21.8676 3.18968 21.7498 3.1598C21.6319 3.12993 21.5089 3.12565 21.3887 3.147C21.2685 3.16528 21.1541 3.20856 21.0535 3.27395C20.9529 3.33934 20.8682 3.4252 20.8047 3.525L17.5267 8.574C15.8547 7.46267 13.9512 6.73267 11.9717 6.44C9.99172 6.147 7.96872 6.30033 6.06872 6.88C4.16772 7.46 2.45172 8.45 1.09472 9.773C-0.262277 11.097 -0.997277 12.714 -1.02928 14.4C-1.06128 16.086 0.140723 17.727 1.43972 19.09C2.73872 20.452 4.42772 21.4667 6.31472 22.0667C8.20172 22.6667 10.2157 22.8267 12.1957 22.5267C14.1757 22.2267 16.0667 21.48 17.7267 20.334L22.6437 16.951C22.7482 16.8794 22.8333 16.7836 22.891 16.6721C22.9487 16.5606 22.9772 16.4365 22.9732 16.3113C22.9693 16.186 22.9332 16.0641 22.8687 15.9566C22.8041 15.8492 22.7132 15.7595 22.6047 15.6957L19.5527 13.9987C19.452 13.9399 19.3394 13.9066 19.2242 13.9014C19.109 13.8962 18.9937 13.9193 18.8882 13.9689C18.7827 14.0184 18.6902 14.0932 18.6188 14.1865C18.5474 14.2799 18.4994 14.3891 18.4787 14.505L18.1687 16.2267L17.1927 16.8817C16.0697 17.6177 14.7697 18.0447 13.4307 18.116C12.0917 18.187 10.7547 17.9 9.55472 17.2817C8.35572 16.664 7.34572 15.741 6.64372 14.6177C5.94272 13.4947 5.57772 12.2077 5.59072 10.8977C5.60372 9.58766 5.99272 8.31166 6.71472 7.20766C7.43672 6.10366 8.46372 5.20466 9.67372 4.60966C10.8837 4.01466 12.2267 3.75366 13.5657 3.84766C14.9047 3.94166 16.1927 4.38766 17.2957 5.14766L14.0187 10.1957C13.9161 10.3538 13.8607 10.5371 13.859 10.7247C13.8573 10.9123 13.9093 11.0966 14.0092 11.2567C14.109 11.4167 14.2525 11.5456 14.4235 11.6279C14.5945 11.7101 14.7861 11.7426 14.9767 11.7217L21.7427 10.896C21.8538 10.8822 21.9604 10.8443 22.0554 10.7846C22.1504 10.7249 22.2314 10.6449 22.293 10.55C22.3546 10.455 22.3954 10.3473 22.4124 10.2343C22.4294 10.1214 22.4222 10.0059 22.3917 9.896L22.3867 9.878L21.5607 2.927C21.5463 2.81387 21.5049 2.7053 21.4399 2.60879C21.3748 2.51229 21.2878 2.42999 21.1847 2.367C21.0804 2.30375 20.9626 2.26236 20.8391 2.24607C20.7157 2.22978 20.5896 2.23896 20.4707 2.273L14.7287 3.87C14.6151 3.90049 14.5084 3.95387 14.4145 4.02678C14.3206 4.09969 14.2412 4.19065 14.1805 4.29484C14.1199 4.39903 14.0791 4.51424 14.0605 4.63396C14.0419 4.75368 14.0458 4.87581 14.0717 4.994C14.098 5.11269 14.1508 5.22366 14.2267 5.32153C14.3027 5.4194 14.3998 5.50182 14.5113 5.5629C14.6228 5.62398 14.7462 5.66235 14.8735 5.67563C15.0008 5.68891 15.1294 5.67682 15.2517 5.64L19.9267 4.414L20.5717 9.724L15.8457 10.2917L18.7357 5.92C18.8358 5.76627 18.8899 5.58774 18.8921 5.40466C18.8944 5.22158 18.8446 5.04175 18.7481 4.88545C18.6516 4.72915 18.5123 4.60303 18.3468 4.52212C18.1814 4.44121 17.9965 4.40881 17.8127 4.427L17.8127 4.427L17.5577 4.448L15.1857 2.921C15.4847 2.75033 15.8047 2.616 16.1387 2.521C16.4727 2.426 16.8177 2.37033 17.1667 2.354C17.8647 2.322 18.5627 2.428 19.2137 2.666C19.8657 2.90467 20.4557 3.27033 20.9447 3.74L22.3587 2.498C22.4312 2.43456 22.4887 2.35731 22.5272 2.27141C22.5656 2.1855 22.5842 2.09299 22.5817 2C22.5793 1.90701 22.5558 1.81548 22.5129 1.73147C22.47 1.64747 22.4087 1.57301 22.3337 1.513C21.6637 0.942 20.8837 0.51 20.0487 0.241C19.2127 -0.028 18.3367 -0.129 17.4627 -0.056C16.5887 0.016 15.7377 0.26 14.9617 0.661C14.1857 1.062 13.5037 1.612 12.9567 2.273L11.0417 4.619C9.14172 3.69233 7.01772 3.28667 4.90672 3.44633C2.79572 3.606 0.777723 4.32367 -0.862277 5.5C-2.50328 6.67633 -3.66928 8.282 -4.20028 10.094C-4.73128 11.9053 -4.60528 13.828 -3.84028 15.567C-3.07528 17.306 -1.70828 18.7747 0.0387232 19.76C1.78572 20.7453 3.81572 21.204 5.85872 21.084C7.90172 20.9647 9.85872 20.2733 11.4747 19.096L17.2967 22.149C17.9987 22.5327 18.7567 22.7863 19.5427 22.8983C20.3287 23.0103 21.1307 22.979 21.9047 22.806C22.6787 22.633 23.4117 22.3213 24.0657 21.8873C24.7197 21.4533 25.2827 20.9043 25.7237 20.273L27.1487 18.2073C27.2243 18.0915 27.2636 17.9572 27.2622 17.8204C27.2609 17.6836 27.219 17.5502 27.1412 17.4356C27.0634 17.321 26.9528 17.2319 26.8229 17.1788C26.693 17.1257 26.5494 17.1108 26.4107 17.136L20.3937 18.1913C20.2826 18.2093 20.1766 18.2506 20.0816 18.3129C19.9866 18.3752 19.9046 18.4571 19.8404 18.5533C19.7762 18.6495 19.7312 18.7581 19.7081 18.8726C19.685 18.987 19.6841 19.1049 19.7057 19.22C19.7272 19.3351 19.7708 19.4448 19.8335 19.5424C19.8963 19.64 19.9767 19.7237 20.0717 19.7881C20.1669 19.8527 20.2747 19.8964 20.3883 19.917C20.5019 19.9375 20.6187 19.9343 20.7307 19.908L25.4607 19.0763L24.5007 20.472C24.1457 20.9727 23.6917 21.4013 23.1647 21.7333C22.6377 22.0653 22.0527 22.2957 21.4397 22.4127C20.8267 22.5297 20.1967 22.5307 19.5837 22.4157C18.9707 22.3007 18.3847 22.0717 17.8567 21.7413L12.0347 18.6883C12.6747 18.188 13.2577 17.6263 13.7737 17.013L14.8707 16.247L14.9757 16.1607L15.1817 16.0157L15.4137 14.5957L17.7587 16.0077L17.0317 16.483C16.6914 16.7085 16.3274 16.8967 15.9457 17.0437C15.5631 17.191 15.166 17.2958 14.7617 17.3563C13.9507 17.4837 13.1227 17.4457 12.3287 17.2447C11.5347 17.0437 10.7917 16.6837 10.1417 16.1887C9.49272 15.6937 8.95072 15.0743 8.54672 14.3673C8.14272 13.6607 7.88172 12.8817 7.77872 12.0723C7.67572 11.2627 7.73072 10.4403 7.94072 9.65233C8.15072 8.86433 8.51272 8.12566 9.00172 7.47833C9.49072 6.831 10.1007 6.28933 10.8027 5.88367C11.5047 5.478 12.2857 5.218 13.0957 5.121C13.9057 5.02367 14.7277 5.09033 15.5127 5.308C16.2977 5.52566 17.0337 5.896 17.6787 6.397L15.8427 9.03C15.7398 9.18665 15.6838 9.37014 15.682 9.5585C15.6803 9.74687 15.7329 9.93131 15.8327 10.09C15.9325 10.2487 16.0759 10.3764 16.2467 10.4576C16.4175 10.5388 16.6087 10.5705 16.7987 10.549L20.1137 10.1753L20.6787 6.021L22.8767 7.205L22.0717 3.32Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello Ashutosh, I'd like to discuss a project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary text-white rounded-lg flex items-center justify-center transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </>
              )}
            </button>
            
            {submitMessage && (
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-center">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
