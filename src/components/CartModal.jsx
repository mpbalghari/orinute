import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight } from 'lucide-react';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        const phoneNumber = "923485949639";
        const message = `*New Order Request - Orinute*\n\n` +
            cartItems.map(item => `- ${item.name} x${item.quantity} (PKR ${item.price * item.quantity})`).join('\n') +
            `\n\n*Total: PKR ${total.toLocaleString()}*` +
            `\n\nPlease confirm my order.`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="font-serif text-2xl text-primary">Your Cart</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-primary transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                    <span className="text-6xl mb-4">🛒</span>
                                    <p>Your cart is empty</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-serif text-primary font-medium">{item.name}</h3>
                                                <p className="text-sm text-gray-500 mb-2">PKR {item.price}</p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1">
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                            className="text-gray-500 hover:text-primary"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                            className="text-gray-500 hover:text-primary"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => onRemoveItem(item.id)}
                                                        className="text-red-400 hover:text-red-600 transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-gray-600">Total</span>
                                    <span className="font-serif text-2xl text-primary font-bold">
                                        PKR {total.toLocaleString()}
                                    </span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-secondary text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary transition-colors duration-300"
                                >
                                    Checkout via WhatsApp
                                    <ArrowRight size={20} />
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    You will be redirected to WhatsApp to confirm your order.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartModal;
