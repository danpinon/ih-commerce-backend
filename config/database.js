const mongoose = require('mongoose');

const connectDataBase = async() => {
    try{
        await mongoose.connect(process.env.DB_LOCAL_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Database connected with HOST: ${mongoose.connection.host}`)

    }catch(error){
        console.log(error)
        process.exit(1)//STOP APP
    }
}

module.exports = connectDataBase