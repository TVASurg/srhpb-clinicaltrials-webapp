export async function handler() {
  const stored = await process.env.NETLIFY.blobs.get("xlsx_data");

  if (!stored) {
    return { statusCode: 404, body: 'Not found' };
  }

  return {
    statusCode: 200,
    body: stored,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  };
}
