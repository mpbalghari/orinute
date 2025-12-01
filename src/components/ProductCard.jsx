import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6">
                <div className="text-xs font-medium text-secondary uppercase tracking-wider mb-2">
                    {product.category}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-primary">
                        PKR {product.price.toLocaleString()}
                    </span>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors duration-300 flex items-center justify-center group-active:scale-95"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
