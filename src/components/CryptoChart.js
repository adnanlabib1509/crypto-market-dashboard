import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMarketCap } from '../utils/formatters';

const CryptoChart = ({ data }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Top Cryptocurrencies by Market Cap</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="symbol" />
            <YAxis tickFormatter={formatMarketCap} />
            <Tooltip formatter={formatMarketCap} />
            <Legend />
            <Bar dataKey="marketCapUsd" fill="#8884d8" name="Market Cap" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CryptoChart;