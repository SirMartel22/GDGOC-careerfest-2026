import React from 'react';
import SubmitForm from '../submit/SubmitForm';

export const SubmitSection: React.FC = () => {
  return (
    <section id="submit" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Submit Your Project
        </h2>
        <p className="text-lg text-gray-600">
          The challenge window is May 20–25. Show us what you've built!
        </p>
      </div>
      
      <div className="mt-8">
        <SubmitForm />
      </div>
    </section>
  );
};

export default SubmitSection;
