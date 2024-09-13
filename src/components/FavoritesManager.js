import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FavoritesManager = ({ favorites, data }) => {
  const favoriteData = data.filter(crypto => favorites.includes(crypto.id));

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Your Favorites</CardTitle>
      </CardHeader>
      <CardContent>
        {favoriteData.length === 0 ? (
          <p>No favorites selected yet. Click the star icon on any cryptocurrency to add it to your favorites.</p>
        ) : (
          <ul>
            {favoriteData.map(crypto => (
              <li key={crypto.id} className="mb-2">
                <strong>{crypto.name} ({crypto.symbol}):</strong> ${parseFloat(crypto.priceUsd).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default FavoritesManager;