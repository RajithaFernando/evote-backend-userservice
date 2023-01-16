const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const date = require('date-and-time');

const app = require('../app');


const justAuthenticate = require('../middlewares/verifyToken');


//All Users



//For creating Account
app.post('/register', function (req, response) {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password || !req.body.gender || !req.body.phone_number || !req.body.state_of_origin || !req.body.local_govt || !req.body.vin) {
        console.log('Request failed due to all required inputs were not included');
        res.status(500).json({
            "message": 'Request failed due to all required inputs were not included',
            "required inputs": "firstname, lastname, email, password, gender, phone_number, state_of_origin, local_govt, vin"
        });
    }
    else {
        // Grab data from http request
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            phone_number: req.body.phone_number,
            state_of_origin: req.body.state_of_origin,
            local_govt: req.body.local_govt,
            vin: req.body.vin
        };

        if (req.body.email == 'rajithaf@gmail.com') {
            response.send(`${req.body.email} Already Exist`);
        }
        else {
            const usersData = {
                email: req.body.email,
                password: req.body.password
            };
            jwt.sign({ usersData }, 'myscreteisreal', { expiresIn: '7d' }, (tokenErr, token) => {
                if (tokenErr) {
                    console.log('Token could not be processed but account has been created');
                    response.status(201).send('Token could not be processed but account has been created');
                }

                if (token) {
                    response.status(201).json({
                        "status": "success",
                        "data": {
                            "message": "User account successfully created",
                            "token": token,
                            "userId": 'rajithaf'
                        }
                    });
                }
            });




        }
    }
});


//For Login
app.post('/login', (req, result) => {
    console.log('login method')
    if (!req.body.email || !req.body.password) {
        console.log('Request failed due to all required inputs were not included');
        res.status(500).json({
            "message": 'Request failed due to all required inputs were not included',
            "required inputs": "email, password"
        });
    }
    else {
        const data = {
            email: req.body.email,
            password: req.body.password
        };

        if (data.password != 'Raji@123') {
            console.log('Incorrect password!');
            result.status(401).send('Incorrect password!');
        }
        else {

            if (false) {
                console.log('Email Is Not Registered With Us');
                result.status(404).send('Email Is Not Registered With Us');
            }
            else {
                result.json({
                    "status": "success",
                    "data": {
                        "token": 'token',
                        "userId": 'rajithaf'
                    }
                });
                // jwt.sign({ data }, 'myscreteisreal', { expiresIn: '7d' }, (derr, token) => {
                //     result.json({
                //         "status": "success",
                //         "data": {
                //             "token": token,
                //             "userId": userId
                //         }
                //     });
                // });

            }

        }


    }
});


//For Viewing Profile
app.get('/profile', justAuthenticate, (req, res) => {
    jwt.verify(req.token, 'myscreteisreal', (err, authData) => {
        if (false) {
            res.status(403).json({ error: "You're Not Authorized To View This Profile, As You're Not Logged In With Correct Token..." });
        }
        else {
            // const currentLoggedInEmail = authData.data.email;
            res.status(200).json({
                "user_info": {
                    // "fullname": `${resquery.rows[0].firstname+" "+resquery.rows[0].lastname}`,
                    // "email": currentLoggedInEmail,
                    // "gender": `${resquery.rows[0].gender}`,
                    // "phone_number": `${resquery.rows[0].phone_number}`,
                    // "state_of_origin": `${resquery.rows[0].state_of_origin}`,
                    // "local_govt": `${resquery.rows[0].local_govt}`,
                    // "vin": `${resquery.rows[0].vin}`
                    "fullname": `Rajitha Fernando`,
                    "email": 'rajithaf@gmail.com',
                    "gender": `Male`,
                    "phone_number": `0713777113`,
                    "state_of_origin": `California `,
                    "local_govt": `Los Angeles`,
                    "vin": `962472869v`
                }
            })

        }
    });
});


//Update user's basic profile
app.patch('/profile/:id', justAuthenticate, (req, res) => {
    jwt.verify(req.token, 'myscreteisreal', (err, authData) => {
        if (err) {
            res.status(403).json({ error: "You're Not Authorized To Manage Profile, As You're Not Logged In With Correct Token..." });
        }
        else {
            if (!req.body.firstname || !req.body.lastname || !req.body.phone_number) {
                console.log('Request failed due to all required inputs were not included');
                res.status(500).json({
                    "message": 'Request failed due to all required inputs were not included',
                    "required inputs": "firstname, lastname, phone_number"
                });
            }
            else {
                const currentUserEmail = authData.data.email;

                const userId = req.params.id;

                if (!userId) {
                    return res.status(400).send({ error: true, message: 'Please provide an user ID' });
                }
                else {
                    if (currentUserEmail == 'rajithaf@gmail.com') {
                        console.log('Account updated successfully');
                        res.status(200).send("Account updated successfully")
                    }
                    else {
                        console.log(`Sorry You're Not Authorized To Edit This Profile`);
                        res.status(403).send(`Sorry You're Not Authorized To Edit This Profile`);
                    }
                }


            }
        }
    });
});


const userRoute = app;

module.exports = userRoute;