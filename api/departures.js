// api/departures.js
import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.API_KEY;
  const apiUrl = 'https://external.transitapp.com/v3/public/stop_departures?global_stop_id=RITECHNY:619'; // Hardcoded API endpoint

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'apiKey': apiKey // Pass the API key as 'apiKey' in the headers
      }
    });

    // Log the response data for debugging purposes (remove in production)
    console.log('API Response Status:', response.status);
    console.log('API Response Data:', response.data);

    // Ensure the response is in JSON format
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
