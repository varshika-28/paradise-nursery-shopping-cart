import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

const plants = [
  {
    category: "Air Purifying",
    items: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=300&auto=format&fit=crop" },
      { id: 2, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=300&auto=format&fit=crop" },
      { id: 7, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=300&auto=format&fit=crop" },
      { id: 8, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d1e3d9?q=80&w=300&auto=format&fit=crop" },
      { id: 9, name: "English Ivy", price: 14, image: "https://images.unsplash.com/photo-1597055181300-8438bc86ed05?q=80&w=300&auto=format&fit=crop" },
      { id: 10, name: "Rubber Plant", price: 22, image: "https://images.unsplash.com/photo-1604595674068-d6219be59223?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  {
    category: "Low Light",
    items: [
      { id: 3, name: "ZZ Plant", price: 18, image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=300&auto=format&fit=crop" },
      { id: 4, name: "Pothos", price: 10, image: "https://images.unsplash.com/photo-1646667687331-e06974a7fda2?q=80&w=300&auto=format&fit=crop" },
      { id: 11, name: "Cast Iron Plant", price: 25, image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=300&auto=format&fit=crop" },
      { id: 12, name: "Philodendron", price: 16, image: "https://images.unsplash.com/photo-1620959142823-3b6b6cc0e6df?q=80&w=300&auto=format&fit=crop" },
      { id: 13, name: "Dracaena", price: 20, image: "https://images.unsplash.com/photo-1611078179261-6d7c71f49615?q=80&w=300&auto=format&fit=crop" },
      { id: 14, name: "Chinese Evergreen", price: 19, image: "https://images.unsplash.com/photo-1616422345511-b1e16f39385b?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  {
    category: "Pet Friendly",
    items: [
      { id: 5, name: "Boston Fern", price: 14, image: "https://images.unsplash.com/photo-1620959142823-3b6b6cc0e6df?q=80&w=300&auto=format&fit=crop" },
      { id: 6, name: "Calathea", price: 20, image: "https://images.unsplash.com/photo-1600411326463-5494191c7820?q=80&w=300&auto=format&fit=crop" },
      { id: 15, name: "Areca Palm", price: 30, image: "https://images.unsplash.com/photo-1596706085189-9b97b0a3c7bc?q=80&w=300&auto=format&fit=crop" },
      { id: 16, name: "Peperomia", price: 12, image: "https://images.unsplash.com/photo-1622384661852-c38f15ccdfc7?q=80&w=300&auto=format&fit=crop" },
      { id: 17, name: "Parlor Palm", price: 15, image: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=300&auto=format&fit=crop" },
      { id: 18, name: "Ponytail Palm", price: 22, image: "https://images.unsplash.com/photo-1616689895048-c89b88cf1db8?q=80&w=300&auto=format&fit=crop" }
    ]
  }
];

// Fixing the last image URL to a more reliable generic plant image from unsplash
plants[2].items[1].image = "https://images.unsplash.com/photo-1600411326463-5494191c7820?q=80&w=300&auto=format&fit=crop";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      image: plant.image,
      cost: plant.price
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Our Plants</h2>
      {plants.map((category, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h3>{category.category}</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {category.items.map(plant => {
              const isAdded = cartItems.some(item => item.name === plant.name);
              return (
                <div key={plant.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '250px', textAlign: 'center' }}>
                  <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button 
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded}
                    style={{
                      padding: '10px 15px',
                      backgroundColor: isAdded ? '#ccc' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: isAdded ? 'not-allowed' : 'pointer',
                      width: '100%'
                    }}
                  >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
