import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { products } from '../data/products';
import { AnimatePresence, motion } from 'framer-motion';

const ProductShowcase = ({ onAddToCart }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Filter products
    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="shop" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">
                        Our Collection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                        Curated from the Mountains
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Each product is hand-picked and sustainably harvested from the pristine valleys of Gilgit Baltistan.
                    </p>
                </div>

                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;
