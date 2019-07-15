const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express()
const distDir = '../dist/event-entry-check'
const port = process.env.PORT || 4040


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router)

app.use(express.static(path.join(__dirname, distDir)))
app.use((req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'))
});



app.listen(port, (error) =>{
    if(error) {
        console.log(error)
    } else {
        console.log('server is listening to port '+port)
    }
})
