const Products = require("./productsSchema")


const productAdd = async (req, res, next) => {
    try {

        const {title, description, short_description, price,image, sku, stock, onhome, is_active}  =req.body
        const product_response = await Products.create({
            title :title,
            description  :description,
            short_description  : short_description,
            stock : stock,
            price : price,
            sku : sku,
            onhome : onhome,
            is_active : is_active,
            image : image
        })
        if(product_response){
            return res.status(201).json({
                message : "Product Added successfully",
                status: 201,
                data : product_response
            })
        }
        return res.status(402).json({
            message : "unable to add product",
            status : 402,
            
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            status : 500,
            data : err
        })
    }
}
const productsGet = async (req, res, next) => {
    try {

        const product_response = await Products.find({})
        if(product_response){
            return res.status(201).json({
                message : "Products fetched successfully",
                status: 201,
                data : product_response
            })
        }
        return res.status(402).json({
            message : "unable to find products",
            status : 402,
            
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            status : 500,
            data : err
        })
    }
}
const productUpdate = async (req, res, next) => {
    try {
        const {title, description, short_description, price,image, sku, stock, onhome, is_active}  =req.body
        const product_response = await Products.findByIdAndUpdate(req.params.id , {
            title : title,
            description : description,
            short_description : short_description,
            price:  price,
            image : image,
            stock : stock,
            onhome : onhome,
            is_active : is_active,
            sku  :sku
        })
        if(product_response){
            return res.status(201).json({
                message : "Product updated successfully",
                status: 201,
                data : product_response
            })
        }
        return res.status(402).json({
            message : "unable to update product",
            status : 402,
            
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            status : 500,
            data : err
        })
    }
}

const productDelete = async(req, res, next) => {
    try{
        const product_response = await Products.findByIdAndDelete(req.params.id)
        console.log(product_response);
        if(product_response){
            return res.status(201).json({
                message : "product delete successfully",
                data : product_response,
                status : 201,
            })
        } 
        return res.status(402).json({
            message : "unable to delete product",
            status  : 402,
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "something went wrong,",
            statua : 500,
        })
    }
}


module.exports = {productAdd, productsGet , productUpdate , productDelete}