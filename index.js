'use scripts';

const Hapi = require('@hapi/hapi');
console.log("Running Backend User Service ")
const init = async () => {
    const server = Hapi.Server({
        port:3000,
        host:"0.0.0.0",
    })

    server.route({
        method:'GET',
        path:'/',
        handler:(request, h)=>{
            return 'Hello World';
        },
    });

    

    await server.start();
    console.log('Server is running on %s', server.info.uri);
}

process.on('unhandledRejection', (err)=>{
    console.log('Error', err);
    process.exit(1);
})


init()