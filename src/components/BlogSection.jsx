import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "The Ancient Art of Apricot Drying",
        excerpt: "Discover how the people of Hunza have been preserving apricots for centuries using natural sun-drying techniques.",
        image: "https://images.unsplash.com/photo-1596073419667-9d77d59f033f?auto=format&fit=crop&q=80&w=800",
        date: "Oct 12, 2023"
    },
    {
        id: 2,
        title: "Shilajit: The Destroyer of Weakness",
        excerpt: "Unveiling the myths and scientific benefits of the black resin found in the high altitude rocks of the Himalayas.",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        date: "Nov 05, 2023"
    },
    {
        id: 3,
        title: "Why Wild Thyme is a Super Herb",
        excerpt: "Thymus Linearis, or Tumoro, is more than just tea. It's a remedy for respiratory health and digestion.",
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
        date: "Dec 01, 2023"
    }
];

const BlogSection = () => {
    return (
        <section id="journal" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">
                        From the Valley
                    </span>
                    <h2 className="text-4xl font-serif text-primary mb-6">
                        Journal & Stories
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <span>By Orinute Team</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                Read Story <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
