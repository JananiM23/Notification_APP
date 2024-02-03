const cron = require('node-cron');
const notification = require('./src/jobFunctions/notificatiion');
const text = require('./src/controller/textLocal.controller')

const runJob = async() => {
    let task = cron.schedule('* * * * *', async () =>{
        await text.SMS();
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