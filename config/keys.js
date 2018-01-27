module.exports = {
  session: {
    encryptionKey: process.env.ENCRYPTION_KEY
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
  },
  chingu_api: {
    endpoint: process.env.CHINGU_API_ENDPOINT
  },
}
