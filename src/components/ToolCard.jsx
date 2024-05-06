import React from 'react';

export default function ToolCard({ title, description, iconClass, onCardClick }) {
  return (
    <div className="cursor-pointer bg-white text-gray-900 rounded-lg shadow-lg p-6" onClick={onCardClick}>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <i className={`${iconClass} text-4xl`}></i>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}