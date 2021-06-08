const app =  require('./app')
const connectDataBase = require('./config/database')

const dotenv = require('dotenv')
// Handle Uncaght Exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`)
    console.log('Shutting down server due to uncaught exception')
    process.exit(1)
})

// Setting up config file
dotenv.config({ path: 'config/config.env'})

// Connecting to database
connectDataBase()

const server = app.listen(process.env.PORT, ()  => {
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//HANDLE UNHANDLED PROMISE REJECTIONS
process.on('unhandledRejection', err => {
    console.log(`ERROR $E{err.message}`)
    console.log(`Shutting down the server due to Unhandled Promise rejection: ${err.message}`)
    server.close(() => {
        process.exit(1)
    })
})
