const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()
const distDir = '../dist/event-entry-check'

app.use(express.static(path.join(__dirname, distDir)))
app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, distDir + '/index.html'))
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** GET /health-check - Check service health */
app.get('/api/health-check',
  (req, res) => {
    res.status(200).json({ message: 'OK' })
  }
);

app.listen(4040, (error) =>{
    if(error) {
        console.log(error)
    } else {
        console.log('server is listening to port 4040')
    }
})
