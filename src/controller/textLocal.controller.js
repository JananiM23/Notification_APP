const axios = require('axios');
const { message } = require('../jobFunctions/notificatiion');
const textLocalURl = 'https://api.textlocal.in/send';
const APIKey = `MzM3ODU3NTM1OTM1NTk2ZTcwNmE3MTUyNzE2Mjc2Nzc=`;
const user = require('../model/user.model');
const order = require('../model/order.model');
const mongoose = require('mongoose');

const SMS = async (req, res) => {
    try {
        let { message, number, sender } =  req.body;
        // let number =  req.body.number;
        // let sender =  req.body.sender;
        const mess  = encodeURIComponent(message);
        const params = {
        apiKey: APIKey,
        numbers: number,
        message: mess,
        sender: sender
    }
        let response = await axios.post(textLocalURl, params)
        console.log(response);
        
        res.status(200).send(response.data)
    } catch (error) {
        console.log(`Error:`,error.message)
    }
    
}

const orderData = async (req, res) => {
    try {
        let aggregationPipeline = [
            {
              $lookup: {
                from: 'users', 
                localField: 'userId', 
                foreignField: '_id', 
                as: 'result'
              }
            }, {
              $unwind: {
                path: '$result', 
                preserveNullAndEmptyArrays: true
              }
            }, {
              $project: {
                productName: 1, 
                productPrize: 1, 
                orderDate: 1, 
                orderAddress: 1, 
                phoneNumber: 1, 
                userId: 1, 
                "result.username": 1, 
                "result.name": 1, 
                "result.phoneNumber": 1
              }
            }
          ]
    
        let result = await order.aggregate(aggregationPipeline).exec();
        
        if(!result && result == undefined){
            return res.status(404).send(`No orders for today`)
        } else {
            console.log(`notifications sent`);
            return res.status(200).send(`notifications sent`)
        } 
    } catch (error) {
        res.status(500).send(`ERROR:`, error.message);
    }
    
}

module.exports = {
    SMS,
    orderData
}