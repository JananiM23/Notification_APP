const cron = require('node-cron');
const text = require('./src/controller/textLocal.controller')

const runJob = async() => {
    let task = cron.schedule('* * * * *', async () =>{
        await text.orderData()
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    }
    )
    task.start()
}

module.exports = {
    runJob
}