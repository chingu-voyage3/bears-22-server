// Imports
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')

const api = require('./routes/api')
const auth = require('./routes/auth')
const passportSetup = require('./config/passport-setup')
const keys = require('./config/keys')
const data = require('./data.json')

// Set up express app
const app = express()

// configure CORS for accessing the prod and dev domains
const corsOptions = {
  origin: [
    'https://doum.herokuapp.com/',
    /^http:\/\/localhost(:[0-9]{0,4})?\/?$/,
  ],
  methods: ['GET', 'POST'],
  exposedHeaders: ['Access-Control-Allow-Origin'],
  credentials: true,
  optionsSuccessStatus: 200,
};
// Set up middlewares
app.use(cors(corsOptions))

//Set up session handling
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000, //Expires in an hour
    keys: [keys.session.encryptionKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

// app.use(express.static('public')); // Serve static files

// Set up routes
app.get('/users', (req, res) => {
  res.send(data)
})

app.get('/profile', (req, res) => {
  if (req.user) res.send(req.user)
  else res.send('Not logged in')
})

// app.use('/api', api);
app.use('/auth', auth)

// Listen for requests on port 8080
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Sever running at http://localhost:${PORT} ... `)
})
