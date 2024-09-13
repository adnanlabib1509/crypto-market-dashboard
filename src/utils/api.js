const API_URL = 'https://api.coincap.io/v2/assets';

export const fetchCryptoData = async (limit = 20) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};