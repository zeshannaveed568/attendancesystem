const app = require('./app');
const connectDatabase = require('./config/database')
const dotenv = require('dotenv');


dotenv.config({ path: 'config/config.env' })


connectDatabase()


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})


