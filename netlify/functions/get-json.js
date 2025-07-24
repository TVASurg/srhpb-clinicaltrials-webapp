export async function handler() {
  const stored = await process.env.NETLIFY.blobs.get("xlsx_data");

  if (!stored) {
    return { statusCode: 404, body: 'Not found' };
  }

  return {
    statusCode: 200,
    body: stored,
    headers: { 'Content-Type': 'application/json' }
  };
}
