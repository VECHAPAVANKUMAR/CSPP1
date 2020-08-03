const WebSocket = require('ws')
const url  = "wss://dqvh31pat6.execute-api.ap-south-1.amazonaws.com/dev?token=24685";
// var sckt ;

// function createConnection() {

//     // if (sckt.readyState === WebSocket.CLOSED) {
//     //     sckt = new WebSocket(url);
//     // }
//     sckt = new WebSocket(url);
// }

// function sendKeyLogs(logs) {

//     logs.array.forEach(obj => {
        
//         const log = {
//             'action' : 'onMessage',
//             'data' :  obj
//         }
    
//         sckt.send(JSON.stringify(log));
    
//     });

// }

// // sckt.onerror = (error) => {
// //     console.log(error);
// // }

// // sckt.onmessage = (msg) => {
// //     console.log(msg);
    
// // }


// // let logs = ['A', 'B', 'C','d', 'A', 'B', 'C','d', 'A', 'B', 'C','d', 'A', 'B', 'C','d', 
// //             'A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 
// //             'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d',
// //             'A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d',
// //             'A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d','A', 'B', 'C','d'];
// let logs = ["A", 'B']
// createConnection();
// sendKeyLogs(logs);



const ws = new WebSocket(url);
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});