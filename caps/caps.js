'use strict';
require('dotenv').config();
const port =process.env.PORT || 3001;

const io =require('socket.io')(port);//localhost:3001

const caps =io.of('/caps'); //localhost:3001/caps


// pickup

caps.on('connection',(socket)=>{
    
    socket.on('pickup',payload=>{
        console.log('EVENT:',{
            event:'pickup',
            time:new Date().toLocaleDateString(),
            payload:payload,
        });
        caps.emit('pickup',payload);

    });
    
    // in-transit
    
    socket.on('in-transit',payload=>{
        console.log('EVENT:',{
            event :'in-transit',
            time:new Date().toLocaleDateString(),
            payload:payload,
            
        });
        caps.emit('in-transit',payload);

    });
    
    
    
    // delivered 
    
    socket.on('delivered',payload=>{
        console.log('EVENT:',{
            event :'delivered',
            time:new Date().toLocaleDateString(),
            payload:payload,
            
        });
        caps.emit('delivered',payload);

    });




})



// caps.on('connection', (socket) => {
//     console.log('connected to health');

//     socket.on('pickup', (payload) => {
//         // process health data
//         // re-direct to nose
//         console.log('the health is recieved in the brain :))', payload);
//         caps.emit('covid-19', payload);
//     });
// });








module.exports=caps;