'use strict';
require('dotenv').config();
const faker =require('faker');
const io=require('socket.io-client');
const host = process.env.HOST;
// console.log(host,'sssssss');
const connectionToCaps=io.connect(`${host}/caps`);


setInterval(() => {
    let storeOrder={
        store: process.env.STORE_NAME || 'LAITH',
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address:  faker.address.cityName(),
    };
    connectionToCaps.emit('pickup',storeOrder)
    // console.log(storeOrder)
    
}, 5000);

connectionToCaps.on('delivered',payload=>{
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`)

})

module.exports=connectionToCaps;



