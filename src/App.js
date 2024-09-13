import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Crypto Market Dashboard</h1>
      </header>
      <main className="container mx-auto p-4">
        <Dashboard />
      </main>
      <footer className="bg-gray-200 p-4 mt-8 text-center">
        <p>&copy; 2024 Crypto Market Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;