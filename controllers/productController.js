const Product = require('../models/product')


//Create new product => /api/v1/product/new

exports.newProduct = async (req, res, next) => {
    try{
        const product = await Product.create(req.body)

        res.status(201).json({
            success: true,
            product
        })
    }catch(e){
        res.status(400).json({
            msg: 'error creating product.'
        })
    }
}

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all products in database'
    })
}