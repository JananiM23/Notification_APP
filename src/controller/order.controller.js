const mongoose = require('mongoose');
const order = require('../model/order.model');

const createOrder = async (req, res) => {
    try {
        let {productName, productPrize, orderDate, orderAddress, phoneNumber, userId} = req.body;
        let data = {
            productName: productName,
            productPrize: productPrize,
            orderDate: orderDate,
            orderAddress: orderAddress,
            phoneNumber: phoneNumber,
            userId: userId
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