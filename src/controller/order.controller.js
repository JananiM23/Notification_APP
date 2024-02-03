const mongoose = require('mongoose');
const order = require('../model/order.model');

const createOrder = async (req, res) => {
    try {
        let {productName, productPrize, orderDate, orderAddress, orderMobileNumber} = req.body;
        let data = {
            productName: productName,
            productPrize: productPrize,
            orderDate: orderDate,
            orderAddress: orderAddress,
            orderMobileNumber: orderMobileNumber
        }
        let response = await order.create(data);

        if(response){
            res.status(200).send(`Ordered successfully`);
        } else {
            res.status(400).send(`kindly check the fields`);
        }
    }
    catch(error) {
        res.status(500).send(`Something went wrong`);
    }
}

module.exports = {
    createOrder
}