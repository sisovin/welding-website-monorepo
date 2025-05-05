import React from 'react';
import dynamic from 'next/dynamic';

const CategoryTabs = dynamic(() => import('./CategoryTabs'), { ssr: false });

const CategoryTabsComponent = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabsComponent;
