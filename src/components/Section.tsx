'use client'
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const paddingTopClass = id === 'feed' ? 'pt-20' : 'pt-16';

  return (
    <div id={id} className={`h-screen flex flex-col justify-center items-center ${paddingTopClass}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Section;