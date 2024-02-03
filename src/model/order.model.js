const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        productName:{
            type: String
        },
        productPrize:{
            type: String
        },
        orderDate:{
            type: String
        },
        orderAddress:{
            type: String
        },
        orderMobileNumber:{
            type: String
        }
    }
);

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;