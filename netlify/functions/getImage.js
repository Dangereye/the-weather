exports.handler = async (event) => {
  const { query } = event.queryStringParameters;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing query parameter' }),
    };
  }

  const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

  const url = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&query=${query}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Unsplash API error:', errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorData }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error('Netlify function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch image' }),
    };
  }
};
