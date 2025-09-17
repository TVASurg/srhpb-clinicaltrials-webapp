const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

// Configure with your Auth0 domain
const client = jwksClient({
  jwksUri: `https://srhpb.ca.auth0.com/.well-known/jwks.json`
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function(err, key) {
    if (err) {
      callback(err);
    } else {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    }
  });
}

exports.handler = async (event) => {
  const authHeader = event.headers.authorization || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return { statusCode: 401, body: "Missing token" };
  }

  try {
    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, getKey, { audience: "68c449d70d9c7ef239c5e636", issuer: `https://srhpb.ca.auth0.com/` }, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
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

    console.log('that worked?');

  } catch (err) {
    return { statusCode: 401, body: "Invalid token" };
  }
};
