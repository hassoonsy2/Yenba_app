import React, { useState } from 'react';
import '@google/model-viewer'; // Ensure the model-viewer library is installed
import '../styles/MenuSection.css';

const MenuSection = ({ menu = [] }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null); // Default to no category selected.

    const handleViewDetails = (item) => setSelectedItem(item);
    const handleCloseDetails = () => setSelectedItem(null);

    const categories = menu?.length ? [...new Set(menu.map((item) => item.Category))] : [];

    const filteredMenu = activeCategory
        ? menu.filter((item) => item.Category === activeCategory)
        : [];

    return (
        <div className="onze-gerechten-section" id="menu">
            <h2>Onze Gerechten</h2>
            <p>Ontdek onze uitgebreide selectie van heerlijke gerechten.</p>

            {/* Categories */}
            {!selectedItem && (
                <div className="category-tabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`tab-button ${category === activeCategory ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* 3D Model */}
            {activeCategory && !selectedItem && (
                <div className="category-3d-model">
                    <model-viewer
                        src={`/assets/${activeCategory?.replace(/\s+/g, '_') || 'default'}.glb`}
                        alt={`${activeCategory} Model`}
                        auto-rotate
                        camera-controls
                        ar
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: '400px',
                            margin: '20px auto',
                        }}
                    ></model-viewer>
                </div>
            )}

            {/* Menu Items */}
            {!selectedItem && (
                <div className="menu-items">
                    {filteredMenu.map((item) => (
                        <div key={item["Item Name"]} className="menu-item">
                            <img
                                src={item.Image}
                                alt={item["Item Name"]}
                                className="details-image"
                                loading="lazy"
                            />
                            <div className="menu-item-details">
                                <h4>{item["Item Name"]}</h4>
                                <p>{item.Description || "Heerlijk gerecht met verse ingrediënten."}</p>
                                <div className="menu-item-bottom">
                                    <span>€{item["Price (€)"]}</span>
                                    <button className="btn" onClick={() => handleViewDetails(item)}>
                                        Bekijk Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Product Details */}
            {selectedItem && (
                <div className="product-details">
                    <h3>{selectedItem["Item Name"]}</h3>
                    <img
                        src={selectedItem.Image}
                        alt={selectedItem["Item Name"]}
                        className="details-image"
                    />
                    <p>Prijs: €{selectedItem["Price (€)"]}</p>
                    <p>
                        Ingrediënten:{" "}
                        {selectedItem.Ingredients
                            ? selectedItem.Ingredients.join(", ")
                            : "Geen informatie beschikbaar"}
                    </p>
                    <div className="icons">
                        {selectedItem.Icons &&
                            selectedItem.Icons.map((icon, index) => (
                                <img
                                    key={index}
                                    src={`/assets/icons/${icon}`}
                                    alt={selectedItem["Dietary Info"]?.[index]}
                                    title={selectedItem["Dietary Info"]?.[index]}
                                />
                            ))}
                    </div>
                    <button className="btn" onClick={handleCloseDetails}>
                        Terug naar menu
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuSection;
