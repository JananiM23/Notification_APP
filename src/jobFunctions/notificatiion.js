const message = async () => {
    try {
        let time = new Date()
        console.log(`This is an sample job ${time}`);
    } catch (error) {
        console.log(`Error:`,error.message);
    }
}

module.exports = {
    message
}