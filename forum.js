const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    let success = "message submitted"
    return res.json({success})
});

app.listen(8080, () => console.log(`Listening on port 8080`));
