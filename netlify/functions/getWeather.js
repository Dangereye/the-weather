exports.handler = async (event) => {
  const location = event.queryStringParameters.location;

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

    if (response.status === 400 || data.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: data.error.message || 'Invalid location',
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch weather data' }),
    };
  }
};
