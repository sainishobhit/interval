const mongoose = require('mongoose');
const validator = require('../utils/validator')

const scheduledJob = async function (req, res) {
    try {
        let requestBody = req.body;

        if (!validator.isValidRequestBody(requestBody)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide blog details' })
            return
        }

        function Interval(text, time) {
            setInterval(function () {
                console.log(text)
            }, time * 60 * 1000);
        }

        for (let i = 0; i < requestBody.length; i++) {
            if (!validator.isValid(requestBody[i].text)) {
                res.status(400).send({ status: false, message: "Text is not provided" })
                return;
            }
            if (!validator.isValid(requestBody[i].dateTime)) {
                res.status(400).send({ status: false, message: "dateTime is not provided" })
                return;
            }

            Interval(requestBody[i].text.split("").reverse().join(""),requestBody[i].dateTime)
        }

        res.status(200).send({status: true, message: "success"})
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
};

module.exports = {
    scheduledJob
}