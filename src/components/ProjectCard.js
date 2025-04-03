import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, sourceUrl, className }) => (
  <div 
    className={`group rounded-lg bg-white dark:bg-gray-800
    hover:shadow-medium hover:-translate-y-1 mb-6 ${className || ''}`}
  >
    <div className="p-3">
      <h3 className="text-xl font-bold mb-1 text-sage-400 dark:text-sage-300">
        {title}
      </h3>
      <p className="mb-2">{description}</p>
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 hover:bg-pink-300 hover:scale-105 text-sm"
          aria-label="View Source Code"
        >
          <span>Source Code</span>
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;