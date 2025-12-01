import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category
                            ? 'text-white'
                            : 'text-gray-600 hover:text-primary'
                        }`}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-secondary rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
