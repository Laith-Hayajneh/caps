'use strict';

const events =require('./events');

require("./src/modules/driver");
require("./src/modules/vendor");

// pickup


events.on('pickup',payload=>{
    console.log('EVENT:',{
        event:'pickup',
        time:new Date().toLocaleDateString(),
        payload:payload,
    });
});

// in-transit

events.on('in-transit',payload=>{
    console.log('EVENT:',{
        event :'in-transit',
        time:new Date().toLocaleDateString(),
        payload:payload,
        
    });
});



// delivered 

events.on('delivered',payload=>{
    console.log('EVENT:',{
        event :'delivered',
        time:new Date().toLocaleDateString(),
        payload:payload,
        
    });
});


module.exports=events;