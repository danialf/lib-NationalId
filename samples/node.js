var express = require('express');
const NationalId = require('@danialf/nationalid');

var app = express();

app.get('/validate/:id', (req, res) => {
    if (!req.params.id) {
        res.status(400).send("request is not valid");
        return;
    }

    var instance = NationalId.create(req.params.id);

    res.status(200).send({
        isValid: instance.IsValid,
        sectorCode: instance.getSectorCode,
        uID: instance.getUID,
        parity: instance.getParity,
        value: instance.ToString(),
        formatted: instance.ToFormattedString()
    });
})

app.listen(4001, () => {
    console.log("Listening on 4001");
})