const mongoose = require('mongoose');
const user = require('../model/user.model');

const create = async (req, res) => {
    try {
        let {username, password, name, age, phoneNumber } = req.body;
        let data = {
            username: username,
            password: password,
            name: name,
            age: age,
            phoneNumber: phoneNumber
        }
        let response = await user.create(data);

        if(response){
            res.status(200).send(`User created`)
        }
    } catch (error) {
        res.status(500).send(`something went wrong`)
    }
}

module.exports = {
    create
}