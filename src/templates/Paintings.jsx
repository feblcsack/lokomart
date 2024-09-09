import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Paintings = ({ painterData = [], painterName }) => {
    // Generate unique categories from the painterData
    const categories = [...new Set(painterData.map(card => card.year))];

    // Automatically select the first category as active on load
    const [selectedCategory, setSelectedCategory] = useState(categories[0] || null);
    const [openCardIndex, setOpenCardIndex] = useState(null);

    if (!painterData || painterData.length === 0) {
        return (
            <div className="text-center">
                <p>No paintings available for {painterName}.</p>
            </div>
        );
    }
    
    const filteredCards = selectedCategory 
        ? painterData.filter(card => card.year === selectedCategory).slice(0, 4)
        : painterData.slice(0, 4);

    const handleCardToggle = (index) => {
        setOpenCardIndex(openCardIndex === index ? null : index); 
    };

    return (
        <div className="relative max-w-screen-2xl mx-auto py-12 md:py-24 w-full flex flex-col items-center px-5">
            <div className="text-center mb-12">
                <p className="text-primary text-xl md:text-2xl">Reska Multi Usaha</p>
                <p className="font-bold text-4xl md:text-6xl lg:text-7xl">Makanan</p>
                <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl sedow w-full md:max-w-5xl text-center p-1 md:p-5 my-8 md:my-10">
                    <div className="flex flex-wrap gap-5 py-1 px-3 justify-center md:gap-16 text-sm md:text-lg lg:text-xl">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`py-2 px-4 border-none cursor-pointer transition-colors duration-300 ease-in-out rounded-lg ${
                                    selectedCategory === category
                                        ? 'bg-primary text-white'
                                        : 'bg-transparent hover:bg-gray-300'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
                {filteredCards.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        description={data.description}
                        image={data.image}
                        isOpen={openCardIndex === index}
                        onToggle={() => handleCardToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Paintings;
