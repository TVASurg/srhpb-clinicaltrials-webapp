export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const token = process.env.GH_TOKEN;
  const repo = process.env.GH_REPO;
  const folderPath = process.env.GH_FOLDER_PATH || 'data/';

  if (!token || !repo) {
    return {
      statusCode: 500,
      body: 'GitHub token or repo not configured'
    };
  }

  try {
    const jsonData = JSON.parse(event.body);

    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const fileName = `${today}.json`;
    const latestFileName = 'latest.json';
    const content = Buffer.from(JSON.stringify(jsonData, null, 2)).toString('base64');
    const [owner, repoName] = repo.split('/');

    const uploadToGitHub = async (filename) => {
      const url = `https://api.github.com/repos/${owner}/${repoName}/contents/${folderPath}${filename}`;

      // Check if file already exists to fetch its SHA (required for overwrite)
      const getResp = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'User-Agent': 'Netlify-Upload-JSON'
        }
      });

      const existingFile = getResp.ok ? await getResp.json() : null;
      const sha = existingFile?.sha;

      const putResp = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Netlify-Upload-JSON'
        },
        body: JSON.stringify({
          message: `Update ${filename}`,
          content,
          ...(sha && { sha })
        })
      });

      const result = await putResp.json();

      if (!putResp.ok) {
        throw new Error(`${filename} upload failed: ${result.message}`);
      }

      return result.content.html_url;
    };

    const archiveUrl = await uploadToGitHub(fileName);
    const latestUrl = await uploadToGitHub(latestFileName);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: '✅ JSON files uploaded',
        files: {
          archive: archiveUrl,
          latest: latestUrl
        }
      })
    };

  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Upload failed', details: err.message })
    };
  }
}
