import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { caseStudies } from '../lib/utils';

interface CaseStudy {
  clientName: string;
  problem: string;
  solution: string;
  outcome: string;
  image: string;
  liveUrl: string;
}

const Portfolio: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world solutions delivered for clients across Africa and beyond. Each project represents a unique challenge solved through strategic design and development.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.clientName}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedStudy(study)}
            >
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-black transition-all duration-300 hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.clientName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-black mb-2">{study.clientName}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{study.problem}</p>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>View Case Study</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
              <img
                src={selectedStudy.image}
                alt={selectedStudy.clientName}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-black text-black mb-6">{selectedStudy.clientName}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    The Challenge
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedStudy.problem}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Our Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedStudy.solution}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                    The Outcome
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{selectedStudy.outcome}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={selectedStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    Visit Live Project
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
