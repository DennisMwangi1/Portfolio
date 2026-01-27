import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import Dennis from '../assets/lanyard/Dennis.png';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="md:flex gap-12 items-start">
        <div className="flex-1 max-w-2xl">
          <div className="mb-16">
            <h1 className="text-5xl font-black mb-4">Dennis Mwangi.</h1>
            <p className="text-xl text-gray-600 font-medium mb-6">
              Full Stack Software Engineer | Solutions Architect
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/DennisMwangi1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-sm hover:bg-black transition-colors">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/in/dennismwangi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:denniskamau1803@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-sm hover:bg-gray-200 transition-colors">
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
                Dynamic Factory Lead and Solutions Architect with over three years of experience delivering innovative software
                solutions across diverse projects. Expertise in frontend and backend development, complemented by a strong
                foundation in cloud technologies and DevOps practices.
              </p>
              <p>
                Proven ability to establish operational frameworks that enhance efficiency and drive project success.
                Adept at leading technical direction while maintaining strong client relationships, ensuring impactful delivery
                and exceptional user experiences. Committed to leveraging technical acumen and collaborative spirit to excel
                in driving technological innovation.
              </p>
            </div>
          </section>

        </div>
        <div className="hidden md:block w-1/3 h-[600px] sticky top-24">
          <ProfileCard
            name="Dennis Mwangi"
            title="Solutions Architect"
            handle="dennis_mwangi"
            status="Online"
            contactText="Contact Me"
            avatarUrl={Dennis}
            showUserInfo
            enableTilt={true}
            enableMobileTilt
            onContactClick={() => window.location.href = 'mailto:denniskamau1803@gmail.com'}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black mb-6">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• React, Next.js</li>
              <li>• TypeScript, JavaScript</li>
              <li>• HTML5 / CSS3</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Node.js, Express</li>
              <li>• PostgreSQL, MongoDB</li>
              <li>• RESTful API Design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">DevOps & Cloud</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• AWS, Azure</li>
              <li>• Docker, CI/CD</li>
              <li>• Git Version Control</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Testing & Quality</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Playwright, Cypress</li>
              <li>• Jest, Vitest</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black mb-6">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Factory Lead | Solutions Architect</h3>
            <p className="text-gray-600 mb-2">Digital Qatalyst • 04/2024 – Present</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Accountable for end-to-end delivery governance across the Solutions Factory, bridging product, development, and architecture.</li>
              <li>• Established operational frameworks for planning, resourcing, and execution efficiency.</li>
              <li>• Leading as Solutions Architect / Dev Lead on Khalifa Fund, owning both technical direction and client-facing delivery.</li>
            </ul>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Software Developer (Freelance)</h3>
            <p className="text-gray-600 mb-2">Kenya Universities Esports Ranking • 10/2024 – 04/2025</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Collaborated with a client to develop an esports ranking website for Kenyan universities.</li>
              <li>• Integrated features to track, rank, and promote student participation in esports events.</li>
              <li>• Handled both frontend and backend development, optimizing for scalability and performance.</li>
            </ul>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Frontend Developer</h3>
            <p className="text-gray-600 mb-2">Megatherium • 01/2023 – 12/2024</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Led the development of crucial UI components for an internal project, significantly improving user experience.</li>
              <li>• Designed and implemented robust testing frameworks using Playwright and Vitest for a German client.</li>
              <li>• Built and optimized AWS S3 file upload/download functionalities with seamless UI integration.</li>
              <li>• Collaborated with cross-functional international teams ensuring timely delivery.</li>
            </ul>
          </div>

          <div className="border-l-4 border-black pl-6">
            <h3 className="font-bold text-lg">Data Entry Associate</h3>
            <p className="text-gray-600 mb-2">Kytabu</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Streamlined the editing and formatting of educational content for accessibility.</li>
              <li>• Ensured quality control by verifying the accuracy and relevance of data.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-black mb-6">Education</h2>
        <div className="space-y-4">
          <div className="border-2 border-black p-6 rounded-sm">
            <h3 className="font-bold text-lg">Bachelor of Science in Informatics</h3>
            <p className="text-gray-600">Rongo University • 11/2020 – 12/2024</p>
          </div>
          <div className="border-2 border-gray-200 p-6 rounded-sm">
            <h3 className="font-bold text-lg">Software Engineering Certificate</h3>
            <p className="text-gray-600">Moringa School • 04/2022 – 11/2022</p>
          </div>
          <div className="border-2 border-gray-200 p-6 rounded-sm">
            <h3 className="font-bold text-lg">Standard Level Software Development Certificate</h3>
            <p className="text-gray-600">Zalego Institute of Technology and Innovation • 12/2019 – 04/2020</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white p-8 rounded-sm text-center">
        <h2 className="text-2xl font-black mb-4">Ready to Work Together?</h2>
        <p className="text-gray-300 mb-6">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a href="mailto:denniskamau1803@gmail.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold rounded-sm hover:bg-gray-200 transition-colors">
          <Mail size={18} /> Get In Touch
        </a>
      </section>

    </div>
  );
};

export default About;
