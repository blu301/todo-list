const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.listen(process.env.PORT || 8080, () => {
    console.log('server is running on port 8080')
});

const items = [
    'eat',
    'sleep',
    'eat some more'
]

app.get('/', (request, response) => {

    response.render('list', {date: date.getDay(), items: items});

});

app.post('/', (request, response) => {
    
    const item = request.body.item;
    items.push(item);

    response.redirect('/')

});