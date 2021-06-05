const app =  require('./app')
const connectDataBase = require('./config/database')

const dotenv = require('dotenv')

// Setting up config file
dotenv.config({ path: 'config/config.env'})

// Connecting to database
connectDataBase()

app.listen(process.env.PORT, ()  => {
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})
