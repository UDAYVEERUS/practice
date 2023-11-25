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

module.exports = productAdd