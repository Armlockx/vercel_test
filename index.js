const express = require('express');
const home = require('./routes/home')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world.')
});
//app.use("/home", home);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})