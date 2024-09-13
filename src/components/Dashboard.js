import React, { useState } from 'react';
import CryptoChart from './CryptoChart';
import CryptoCard from './CryptoCard';
import FavoritesManager from './FavoritesManager';
import SearchBar from './SearchBar';
import useCryptoData from '../hooks/useCryptoData';
import { formatMarketCap } from '../utils/formatters';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useCryptoData();
  const [favorites, setFavorites] = useState([]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredData = data.filter(crypto => 
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id) => {
    setFavorites(prevFavorites => 
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cryptocurrency Market Dashboard</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <FavoritesManager favorites={favorites} data={data} />

      <CryptoChart data={filteredData} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((crypto) => (
          <CryptoCard 
            key={crypto.id}
            crypto={crypto}
            isFavorite={favorites.includes(crypto.id)}
            onToggleFavorite={() => toggleFavorite(crypto.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;