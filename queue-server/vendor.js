'use strict';
const faker=require('faker')
const io=require('socket.io-client');
const connectionToCaps=io.connect(`http://localhost:3001/caps`);
// connectionToCaps.emit('pickup',()=>{
//     console.log('object')
// })
// connectionToCaps.on('pickup',payload=>{
// })

setInterval(() => {
    let payload={
        store : 'Laith store',
        orderID:faker.datatype.uuid(),
        customer:faker.name.findName(),
        address:faker.address.streetAddress()

    }
    console.log(payload);
    connectionToCaps.emit('new_Order',payload);
    connectionToCaps.emit('pickup',payload)
}, 5000);

connectionToCaps.on('added',payload=>{
    console.log('We added the queue',payload)
})

connectionToCaps.on('delivered',payload=>{
    console.log('Thank You For Delivering ',payload)
})