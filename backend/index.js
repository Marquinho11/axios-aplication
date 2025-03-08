const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const cors = require('cors');
//middlewares
const ApiRoutes = require('./routes/ApiRoutes');
const port = 80;

//database
const data = require('./database/data');
//cors
app.use(cors());

// leitura do json com body-parser
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

// config handlebars
app.engine('handlebars', exhbs.engine());
app.set('view engine', 'handlebars');

//arquivos static
app.use(express.static('public'))


app.use('/', ApiRoutes);





data.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`http://192.168.1.6:${port}`);
    })
}).catch(error =>{
    console.log(error);
})

