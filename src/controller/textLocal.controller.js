const axios = require('axios');
const { message } = require('../jobFunctions/notificatiion');
const textLocalURl = 'https://api.textlocal.in/send';
const APIKey = `MzM3ODU3NTM1OTM1NTk2ZTcwNmE3MTUyNzE2Mjc2Nzc=`;
const order = require('../model/order.model');
const email = require('nodemailer');

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
        let date = new Date()
        let aggregationPipeline = [
            {
              $lookup: {
                from: 'users', 
                localField: 'userId', 
                foreignField: '_id', 
                as: 'userdata'
              }
            }, {
              $unwind: {
                path: '$userdata', 
                preserveNullAndEmptyArrays: true
              }
            },
            {
                $match:{
                    'orderDate': date
                }
            },
             {
              $project: {
                productName: 1, 
                productPrize: 1, 
                orderDate: 1, 
                'userdata.name': 1, 
                'userdata.email': 1
              }
            }
          ]
    
        let result = await order.aggregate(aggregationPipeline).exec();

        let emails = result.map(item => {
            return {
                name: item.userdata.name,
                email: item.userdata.email,
                orderDate: item.orderDate,
                product_name: item.productName
            }
        });

        console.log(emails);
        let notification = email.createTransport({
            service: 'gmail',
            auth: {
                user: 'prakashohm96@gmail.com',
                pass: 'vemsfabwfofkqend'
            }
        });

        for(let i = 0; i < emails.length; i++){
            let mail = {
                from:'prakashohm96@gmail.com',
                to:emails[i].email,
                subject:'Sample email',
                text:`Hello user Welcome:${emails[i].name}, you order ${emails[i].product_name} is to be delivered on ${emails[i].orderDate}`
            }
            
            notification.sendMail(mail, (err, data) => {
                if(err){
                    console.log(err)
                }else{
                    console.log(`Email send : ${data.response}`)
                }
            })
        }

        

        if(!result && result == undefined){
            return res.status(404).send(`No orders for today`)
        } else {
            console.log(`notifications sent`);
            return res.status(200).send({results: result})
        } 
    } catch (error) {
        res.status(500).send('ERROR: ' + error.message);
    }
    
}

module.exports = {
    SMS,
    orderData
}