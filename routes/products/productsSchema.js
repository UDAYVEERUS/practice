const mongoose = require("mongoose")

const { Schema } = require("mongoose")

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        default: 5,
        required: false
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: "https://media.gettyimages.com/id/1359097757/photo/white-sport-sneakers-shoes-on-the-violet-background-fitness-background.jpg?s=612x612&w=gi&k=20&c=CH8D7jvVBoHR66uRiP2k-NU6BBCbHltDjwhXCmxPVGc=",
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    onhome: {
        type: Boolean,
        required: true,
        default: false
    },

    is_active: {
        type: Boolean,
        required: true,
        default: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories",
        required: false
    },


},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

const Products = mongoose.model("Products", productSchema)
module.exports = Products