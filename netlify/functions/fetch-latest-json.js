// No requires needed – we'll use the built-in Web Crypto API + fetch

async function getKey(kid) {
  // Fetch JWKS from Auth0
  const res = await fetch(`https://srhpb.ca.auth0.com/.well-known/jwks.json`);
  const { keys } = await res.json();

  // Find the matching JWK
  const jwk = keys.find(k => k.kid === kid);
  if (!jwk) throw new Error("Key not found");

  // Import as CryptoKey
  return crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );
}

async function verifyJwt(token, { audience, issuer }) {
  console.log("Token audience:", payload.aud);
  const [headerB64, payloadB64, signatureB64] = token.split(".");
  if (!headerB64 || !payloadB64 || !signatureB64) {
    throw new Error("Invalid JWT format");
  }

  const header = JSON.parse(Buffer.from(headerB64, "base64").toString("utf8"));
  const payload = JSON.parse(Buffer.from(payloadB64, "base64").toString("utf8"));
  const signature = Buffer.from(signatureB64, "base64url");

  // Get public key for this JWT header.kid
  const key = await getKey(header.kid);

  // Verify signature
  const valid = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    signature,
    Buffer.from(`${headerB64}.${payloadB64}`)
  );

  if (!valid) throw new Error("Invalid signature");

  // Verify claims
  if (payload.exp * 1000 < Date.now()) throw new Error("Token expired");
  if (payload.iss !== issuer) throw new Error("Bad issuer");
  if (payload.aud !== audience) throw new Error("Bad audience");

  return payload;
}

exports.handler = async (event) => {
  const authHeader = event.headers.authorization || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return { statusCode: 401, body: "Missing token" };
  }

  try {
    const decoded = await verifyJwt(token, {
      audience: "https://srhpb.ca.auth0.com/api/v2/",
      issuer: "https://srhpb.ca.auth0.com/"
    });

    // ✅ If valid, return JSON
    const protectedData = {
      message: "This is protected JSON",
      user: decoded.sub,
      timestamp: new Date().toISOString()
    };

    return {
      statusCode: 200,
      body: JSON.stringify(protectedData)
    };

  } catch (err) {
    return { statusCode: 401, body: "Unauthorized: " + err.message };
  }
};
