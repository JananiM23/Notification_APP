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
        phoneNumber:{
            type: String
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    }
);

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;