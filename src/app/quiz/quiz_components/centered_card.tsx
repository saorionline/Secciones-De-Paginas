import React from 'react';

interface CenteredCardProps {
  // Add optional props here if needed
}

const CenteredCard: React.FC<CenteredCardProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold">Hello World</h2>
        {/* Card content here */}
      </div>
    </div>
  );
};

export default CenteredCard;