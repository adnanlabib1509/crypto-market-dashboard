import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMarketCap } from '../utils/formatters';

const CryptoCard = ({ crypto, isFavorite, onToggleFavorite }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{crypto.name} ({crypto.symbol})</span>
          <button onClick={onToggleFavorite} className="text-yellow-500">
            {isFavorite ? '★' : '☆'}
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Price:</strong> ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
        <p><strong>Market Cap:</strong> {formatMarketCap(crypto.marketCapUsd)}</p>
        <p><strong>24h Change:</strong> {parseFloat(crypto.changePercent24Hr).toFixed(2)}%</p>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;