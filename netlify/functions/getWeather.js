exports.handler = async (event) => {
  const { location } = event.queryStringParameters;

  if (!location) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing location parameter' }),
    };
  }

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=3`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch weather' }),
    };
  }
};
