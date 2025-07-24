export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // Do something with `data` here (e.g. logging)
    console.log("✅ Received JSON:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Uploaded successfully', count: data.length })
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON', details: err.message })
    };
  }
}
