const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser');





dotenv.config();

// mongoose
//     .connect(process.env.MONGO_URL, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     })
//     .then(() => console.log('DB Connection successful!'))
//     .catch((err) => {
//         console.log(err);
//     });

    app.use(express.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(cors())
    // app.use('/api/user', userRoute)
    // app.use('/api/auth', authRoute)
    // app.use('/api/products', productRoute)
    // app.use('/api/cart', cartRoute)
    // app.use('/api/order', orderRoute)
    // app.use('/api/checkout', stripeRoute)



app.listen(process.env.PORT || 5000, () => {
    console.log('backend server is running')
})