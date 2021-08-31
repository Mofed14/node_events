const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')
const eventsRouter = require('./routes/events_routes')


// BRING EJS TEMPLATE
app.set('view engine', 'ejs')

// BRING STATIC
app.use(express.static('public')) 
{/* <script src="/bootstrap/dist/js/bootstrap.bundle.min.js"></script> 
عشان انا ضفت الاستاتك فولد فانا مش محتاج احط
<script src="../../node_moule/bootstrap/dist/js/bootstrap.bundle.min.js"></script> 
*/}
app.use(express.static('node_modules'))


// DB
mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if (err) return console.log(`${err} => CONNECTION WITH DB IS FAILED`);
    if (!err) return console.log(`SUCCESSFULLY CONNECTION WITH DB!`);
})


// ROUTER
app.use('/events', eventsRouter)


// SERVER
app.listen( process.env.PORT , () => {
    console.log(`THE APP IS RUNNING ON PORT ${process.env.PORT}`);
})