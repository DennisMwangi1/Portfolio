import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/lib/utils';
import DomeGallery from '@/components/DomeGallery';
import TrueFocus from '@/components/TrueFocus';

const Portfolio: React.FC = () => {
  return (
    <div className="h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <div
          className="text-center mb-0 animate-fade-in"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            <TrueFocus
              sentence="Featured Projects"
              manualMode={false}
              blurAmount={6.5}
              borderColor="#030303"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive showcase of digital solutions delivered across Africa. Click any project to explore the full case study.
          </p>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="w-full h-[70vh] min-h-[600px] relative overflow-hidden">
        <DomeGallery
          caseStudies={caseStudies}
          grayscale={false}
          openedImageWidth="900px"
          openedImageHeight="600px"
          openedImageBorderRadius="24px"
        />
      </div>
    </div>
  );
};

export default Portfolio;
