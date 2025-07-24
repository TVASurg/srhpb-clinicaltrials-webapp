export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const token = process.env.GH_TOKEN;
  const repo = process.env.GH_REPO; // e.g., username/myrepo
  const folderPath = process.env.GH_FOLDER_PATH;

  if (!token || !repo) {
    return {
      statusCode: 500,
      body: 'GitHub token or repo not configured'
    };
  }

  try {
    const jsonData = JSON.parse(event.body);

    // Format today's date
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const fileName = `${today}.json`;

    const content = Buffer.from(JSON.stringify(jsonData, null, 2)).toString('base64');
    const [owner, repoName] = repo.split('/');

    // GitHub API URL for creating a file
    const url = `https://api.github.com/repos/${owner}/${repoName}/contents/${folderPath}${fileName}`;

    // Make the API call
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Netlify-Upload-JSON'
      },
      body: JSON.stringify({
        message: `Add JSON data for ${today}`,
        content: content
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: result.message, details: result })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: '✅ JSON uploaded to GitHub', url: result.content.html_url })
    };

  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON input', details: err.message })
    };
  }
}
