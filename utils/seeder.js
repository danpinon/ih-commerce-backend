const Product = require('../models/product')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')

const products = require('../data/products')
const { connect } = require('mongoose')

// Setting dotenv file path
dotenv.config({ path: 'config/config.env'})


connectDatabase()

const seedProducts = async () => {
    try{
        await Product.deleteMany()
        console.log('Products are deleted')

        await Product.insertMany(products)
        console.log('All Products are added')

        proccess.exit()
        
    } catch(error) {
        console.log(error.message)
        process.exit()
    }
}

seedProducts()