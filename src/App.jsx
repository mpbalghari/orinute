import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import CartModal from './components/CartModal';
import BlogSection from './components/BlogSection';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen bg-background text-gray-800 font-sans selection:bg-secondary selection:text-white">
            <Navbar
                cartCount={cartCount}
                onOpenCart={() => setIsCartOpen(true)}
            />

            <main>
                <Hero />
                <ProductShowcase onAddToCart={addToCart} />

                {/* About Section */}
                <section id="our-story" className="py-20 px-4 bg-white">
                    <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1566996694954-90b052c413c4?auto=format&fit=crop&q=80&w=1000"
                                alt="Gilgit Baltistan Landscape"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">
                                Our Story
                            </span>
                            <h2 className="text-4xl font-serif text-primary mb-6">
                                Rooted in Tradition
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Orinute was born from a desire to share the hidden treasures of Gilgit Baltistan with the world. Our journey takes us to the most remote valleys, where we partner with local farmers who have been cultivating these lands for generations.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Every product you buy supports sustainable farming practices and helps preserve the unique biodiversity of the Himalayas.
                            </p>
                        </div>
                    </div>
                </section>

                <BlogSection />

                {/* Contact/Footer */}
                <footer id="contact" className="bg-primary text-white py-16 px-4">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="font-serif text-2xl font-bold mb-6">Orinute</h3>
                            <p className="text-white/80 mb-6">
                                Premium organic products from the heart of the mountains.
                            </p>
                            <div className="text-white/80 text-sm">
                                <p>Lahore & Skardu, Gilgit Baltistan</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                            <ul className="space-y-4 text-white/80">
                                <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
                                <li><a href="#our-story" className="hover:text-white transition-colors">Our Story</a></li>
                                <li><a href="#journal" className="hover:text-white transition-colors">Journal</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                            <p className="text-white/80 mb-2">orinutegb@gmail.com</p>
                            <p className="text-white/80">+92 348 5949639</p>
                            <div className="mt-6 flex gap-4">
                                <a
                                    href="https://instagram.com/orinute_gilgit_baltistan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                >
                                    IG
                                </a>
                                <a
                                    href="https://facebook.com/orinutegilgitbaltistan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                >
                                    FB
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
                        © {new Date().getFullYear()} Orinute. All rights reserved.
                    </div>
                </footer>
            </main>

            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onRemoveItem={removeFromCart}
                onUpdateQuantity={updateQuantity}
            />
        </div>
    );
}

export default App;
