const mongoose = require('mongoose');

const order_management_Schema = new mongoose({
        userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        FromBasket: {
            type: String
        },
        Order_Reference: {
            type: String
        },
        Order_Unique: {
            type: String
        },
        Order_Type: {
            type: String
        },
        Item_Details: {
            type: String
        }, 
        Item_Counts: {
            type: String
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
        If_Partial: {
            type: String
        },
        ReduceFrom_Wallet: {
            type: String
        },
        ReduceFrom_Online: {
            type: String
        },
        ReduceFrom_Credit: {
            type: String
        },
        DeliveryDate: {
            type: String
        },
        Region: {
            type: String
        },
        OrderConfirmed: {
            type: String
        },
        OrderConfirmedBy: {
            type: String
        },
        DeliveredSession: {
            type: String
        },
        OrderDelivered: {
            type: String
        },
        DeliveredDateTime: {
            type: String
        },
        DeliveryNotes: {
            type: String
        },
        OrderUnDelivered: {
            type: String
        },
        DeliveryPerson: {
            type: String
        },
        Active_Status: {
            type: String
        },
        If_Deleted: {
            type: String
        }
      })

const order_management = mongoose.model("order_management", order_management_Schema);
module.exports = order_management;