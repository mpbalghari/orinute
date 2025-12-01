import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative h-screen overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
                    alt="Gilgit Baltistan Mountains"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block text-white/90 text-lg md:text-xl tracking-[0.2em] uppercase mb-4 font-medium"
                >
                    Pure & Organic
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
                >
                    Nature’s Potency from <br />
                    <span className="italic">Gilgit Baltistan</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    Discover the healing power of the mountains. Rare herbs, premium oils, and organic dry fruits harvested from the roof of the world.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-primary px-8 py-4 rounded-full font-medium text-lg tracking-wide hover:bg-secondary hover:text-white transition-colors duration-300"
                >
                    Explore Collection
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;
