export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  await process.env.NETLIFY.blobs.set("xlsx_data", JSON.stringify(data));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Uploaded successfully' })
  };
}
