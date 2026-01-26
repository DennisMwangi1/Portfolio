import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import Lanyard from '../lib/Lanyard';

const About: React.FC = () => {
  return (
    <div className="max-w- mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className='flex gap-4'>
        <div>
          <div className="mb-16">
            <h1 className="text-5xl font-black mb-4">Dennis Mwangi</h1>
            <p className="text-xl text-gray-600 font-medium mb-6">
              Full Stack Developer | Building elegant software solutions
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-sm hover:bg-black transition-colors">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:dennis@example.com" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-sm hover:bg-gray-200 transition-colors">
                <Mail size={18} /> Email
              </a>
              <a href="/Dennis-Mwangi-Resume.pdf" download className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-sm hover:bg-gray-200 transition-colors">
                <Download size={18} /> Resume
              </a>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for creating clean, efficient, and user-friendly applications.
                With experience in modern web technologies, I specialize in building scalable solutions that solve real-world problems.
              </p>
              <p>
                My journey in software development has taught me the importance of writing maintainable code,
                understanding user needs, and continuously learning new technologies. I enjoy collaborating with teams and
                mentoring others in the development community.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React & React Hooks</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS & Styled Components</li>
                  <li>• Responsive Design</li>
                  <li>• State Management (Redux, Context API)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django</li>
                  <li>• PostgreSQL & MongoDB</li>
                  <li>• REST APIs & GraphQL</li>
                  <li>• Authentication & Security</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">DevOps & Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Docker & Containerization</li>
                  <li>• AWS & Cloud Services</li>
                  <li>• Git & Version Control</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Testing & Debugging</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Other</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• UI/UX Design Principles</li>
                  <li>• Technical Writing</li>
                  <li>• Project Management</li>
                  <li>• Mentoring & Code Review</li>
                  <li>• Agile Methodologies</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
      </div>

      {/* Skills Section */}


      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black mb-6">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Senior Full Stack Developer</h3>
            <p className="text-gray-600 mb-2">Tech Company • 2021 - Present</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Led the development of scalable web applications using React and Node.js</li>
              <li>• Mentored junior developers and reviewed code for quality standards</li>
              <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
            </ul>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Full Stack Developer</h3>
            <p className="text-gray-600 mb-2">Startup • 2019 - 2021</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Developed full-stack applications using React, TypeScript, and Python</li>
              <li>• Designed and maintained PostgreSQL databases</li>
              <li>• Collaborated with product team to deliver user-focused features</li>
            </ul>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Junior Developer</h3>
            <p className="text-gray-600 mb-2">Web Agency • 2018 - 2019</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Built responsive websites using HTML, CSS, and JavaScript</li>
              <li>• Worked on various client projects with different technologies</li>
              <li>• Learned best practices in web development and teamwork</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black mb-6">Education</h2>
        <div className="space-y-4">
          <div className="border-2 border-black p-6 rounded-sm">
            <h3 className="font-bold text-lg">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University Name • 2014 - 2018</p>
          </div>
          <div className="border-2 border-gray-200 p-6 rounded-sm">
            <h3 className="font-bold text-lg">Various Online Certifications</h3>
            <p className="text-gray-600">Advanced React, Full Stack Development, Cloud Architecture</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white p-8 rounded-sm text-center">
        <h2 className="text-2xl font-black mb-4">Ready to Work Together?</h2>
        <p className="text-gray-300 mb-6">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a href="mailto:dennis@example.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold rounded-sm hover:bg-gray-200 transition-colors">
          <Mail size={18} /> Get In Touch
        </a>
      </section>
    </div>
  );
};

export default About;
