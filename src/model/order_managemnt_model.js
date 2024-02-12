const mongoose = require('mongoose');

const order_management_Schema = new mongoose.Schema({
        customer_id: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        Payable_Amount: {
            type: String
        },
        Payment_Status: {
            type: String
        },
        Payment_Type: {
            type: String
        },
        DeliveryDate: {
            type: Date
        },
        OrderConfirmed: {
            type: String
        },
        Active_Status: {
            type: Boolean
        },
      })

const order_management = mongoose.model("order_management", order_management_Schema);
module.exports = order_management;