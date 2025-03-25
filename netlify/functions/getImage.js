exports.handler = async (event) => {
  const { query } = event.queryStringParameters;

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing query parameter' }),
    };
  }

  const url = `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}&query=${query}`;

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
      body: JSON.stringify({ error: 'Failed to fetch image' }),
    };
  }
};
