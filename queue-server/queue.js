'use strict';

const io =require('socket.io')(3001);
// const io=require('socket.io')(3001);


const uuid = require('uuid').v4;// random uuid
// const faker =require('faker');


const caps =io.of('/caps');
//  console.log(caps,'lllllllllll')
const queue ={
    orders:{}
};

caps.on('connection',socket=>{
    // recieve order from vendor
    console.log('Connected Sucsses',socket.id);
     
    

    socket.on('pickup',payload=>{
        console.log('adding the new order ',payload.orderID);
        const id = uuid();

        console.log('the id >>>',id);

        queue.orders[id]=payload;

        socket.emit('added',payload);

        caps.emit('order',{id:id,payload:queue.orders.id});

        console.log('After adding msgQueue >>>',queue.orders);
// for testing 
        let order={
            event:'pickup',
            time :new Date(),
            payload
        };
        console.log('the order',order)
    })

   //creat event (received / getAll /delivered)

   socket.on('received',id=>{
       console.log('we got a message ');
        // remove after it received 

        delete queue.orders[id];
        console.log('After Delete Queue ', queue.orders);

   });
/////////////////////////////////////////////////

   socket.on('getAll',()=>{
       console.log('the driver want to get all orers');

   });
/////////////////////////////////////////////////



   socket.on('delivered',payload=>{
    let orders={
        event:'delivered',
        time:new Date(),
        payload
    };
    console.log('Event',orders);

    caps.emit('delivered',payload)


   })
   
})






















// socket.on('newOrder',order=>{
//     //send order to delivery
//     // let id =uuid();
//     queue.orders[id]=order;

//     socket.emit('added');//to send it to the delivery
//     caps.emit()


// })