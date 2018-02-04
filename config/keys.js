module.exports = {
  session: {
    encryptionKey: process.env.ENCRYPTION_KEY || 'B5QSjXjHg38xgcem'
  },
  github: {
    clientID: process.env.GITHUB_CLIENT_ID || '3ecb68868598c04ed4b5',
    clientSecret: process.env.GITHUB_CLIENT_SECRET|| 'a50fad7b7381d4019075cf2f179d9a45c99d6437',
    callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:8080/auth/github/redirect'
  },
  chingu_api: {
    endpoint: process.env.CHINGU_API_ENDPOINT || 'https://chingu-api-dev.herokuapp.com/graphql'
  },
  redirects:{
    loginSuccess: process.env.LOGIN_SUCCESS_REDIRECT || 'http://localhost:3000',
    loginFailure: process.env.LOGIN_FAILURE_REDIRECT || 'http://localhost:3000/login',
    logout: process.env.LOGOUT_REDIRECT || 'http://localhost:3000'
  }
}
