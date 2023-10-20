import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from './utils/dbConnect.js'
import apiRouter from './routes/index.js'
import chalk from 'chalk'
import csrf from 'csurf';
import helmet from 'helmet'; // Add this line

const portCon = chalk.blue.bgWhite.bold

const App = express()
App.use(express.json())
App.use(cors({ origin: 'http://localhost:3000' }))
App.disable('x-powered-by')

// Enable CSRF protection
const csrfProtection = csrf({ cookie: true });

// Use the CSRF middleware before the routes
// App.use(csrfProtection);

App.use(
  helmet({
    frameguard: {
      action: 'deny', // Use 'deny' to prevent framing entirely
    },
    // Content Security Policy with frame-ancestors directive:
    contentSecurityPolicy: {
      directives: {
        'frame-ancestors': "'none'", // Use "'none'" to disallow all framing
      },
    },
    noSniff: true, // Enable X-Content-Type-Options: nosniff
  }),
)

connect()

App.use('/api', apiRouter)

App.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3001
App.listen(
  port,
  console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`)),
)

export default App
