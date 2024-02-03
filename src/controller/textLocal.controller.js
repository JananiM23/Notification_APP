const axios = require('axios');
const { message } = require('../jobFunctions/notificatiion');
const textLocalURl = 'https://api.textlocal.in/send';
const APIKey = `MzM3ODU3NTM1OTM1NTk2ZTcwNmE3MTUyNzE2Mjc2Nzc=`

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

module.exports = {
    SMS
}