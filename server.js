const app = require('./app');

const userRoute = require('./routes/user');


const client = require('./db/connectDB');

const port = process.env.PORT || 3001;

app.listen(port, () =>
{
    console.log(`Server Running On port ${port}`);
});