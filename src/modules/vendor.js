'use strict';
require('dotenv').config();
const faker =require('faker');
const events=require('../../events');

setInterval(() => {
    let storeOrder={
        store: process.env.STORE_NAME || 'laith',
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address:  faker.address.cityName(),
    };
    events.emit('pickup',storeOrder)
    // console.log(storeOrder)
    
}, 5000);

events.on('delivered ',payload=>{
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`)

})

module.exports=events;



