import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import RotatingText from '@/components/shared/RotatingText';
import LogoLoop from '@/components/shared/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGraphql
} from 'react-icons/si';
import Stack from '@/components/shared/Stack';
import { projects } from '@/lib/utils';
import { TECHNOLOGIES } from '@/constants';
import { Project } from '@/types';
import GooeyNav from '@/components/shared/GooeyNav';

interface HomeProps {
  onEnterApp?: () => void;
}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  const handleEnterApp = () => {
    navigate('/portfolio');
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  ];

  const stackCards = projects.map(cs => ({
    title: cs.clientName,
    image: cs.image,
    synopsis: cs.problem.length > 80 ? cs.problem.slice(0, 77) + '...' : cs.problem,
  }));

  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 ">
      {/* Minimal Header */}
      <nav className="border-b-2 border-black py-4 px-6 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="font-black text-2xl tracking-tighter">Dennis Mwangi.</div>
        <button
          onClick={handleEnterApp}
          className="font-bold underline decoration-2 underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-all"
        >
          View Portfolio
        </button>
      </nav>

      {/* Hero Section: Text Left, Image Right (Desktop) / Stacked (Mobile) */}
      <section className="max-w-7xl mx-auto pt-12 pb-16 px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col items-start fade-in">
          <div className="mb-6 inline-block bg-blue-100 text-blue-800 px-3 py-1 text-sm font-bold border border-blue-800 rounded-sm transform -rotate-1">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
            Building <br />
            <RotatingText
              texts={['elegant', 'transformative', 'scalable', 'efficient']}
              mainClassName="text-gray-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.050}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            software.
          </h1>
          <p className="text-xl font-medium text-gray-600 max-w-md mb-10 leading-relaxed">
            I create modern web applications and tools that solve real problems.
            Specializing in React, TypeScript, and full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={handleEnterApp}
              className="bg-black text-white px-8 py-4 text-lg font-bold flex items-center justify-between gap-6 hover:bg-gray-800 transition-colors shadow-hard border-2 border-black"
            >
              Explore My Work <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Visual: A "Stack" of project cards */}
        <div className="md:col-span-5 relative h-[400px] hidden md:block">
          <Stack
            randomRotation
            sensitivity={200}
            sendToBackOnClick={true}
            cards={stackCards.map((card, i) => (
              <div
                key={i}
                className="w-full h-full flex flex-col border border-gray-300 rounded shadow-md overflow-hidden bg-white"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-2 font-bold text-md">{card.title}</div>
                <div className="p-2 text-sm text-gray-600">{card.synopsis}</div>
              </div>
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto pt-8 md:pt-16">
          <h2 className="text-3xl font-black mb-8 px-4 text-center">Tech Stack</h2>
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-10">Featured Work.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'API Gateway Service',
              desc: 'Production-ready REST API with authentication and rate limiting',
              tags: ['Node.js', 'Express', 'MongoDB']
            },
            {
              title: 'React Component Library',
              desc: '40+ reusable components with full documentation and Storybook',
              tags: ['React', 'TypeScript', 'Storybook']
            }
          ].map((project) => (
            <div key={project.title} className="border-2 border-black p-6 hover:bg-black hover:text-white cursor-pointer transition-colors group">
              <h3 className="font-black text-lg mb-2">{project.title}</h3>
              <p className="text-sm mb-4 opacity-80">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold px-2 py-1 bg-gray-100 group-hover:bg-gray-800 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t-2 border-black bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            I'm interested in freelance work, full-time opportunities, and interesting projects.
            Feel free to get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dennis@example.com"
              className="bg-white text-black px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors rounded-sm"
            >
              <Mail size={20} /> Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black px-4 sm:px-6 py-6 bg-white">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-center md:text-left">
          <div>
            <p className="text-gray-500 max-w-xs text-sm mx-auto md:mx-0">
              Made with <span className="text-red-500">&hearts;</span> by Dennis Mwangi.
            </p>
          </div>
          <div className="flex gap-4 justify-center w-full md:w-auto">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-100 rounded-md transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 hover:bg-gray-100 rounded-md transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:dennis@example.com" className="p-3 hover:bg-gray-100 rounded-md transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
