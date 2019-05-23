var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');



var app = require("./httpRequest");

// app.get("/api/loginChat",(res,req){

// })


//1、创建服务；
let httpServer = http.createServer(function(req, res, next) {
    app.run(req, res)
})

let io = require("socket.io")(httpServer);



// 服务端监听连接状态：io的connection事件表示客户端与服务端成功建立连接，它接收一个回调函数，回调函数会接收一个socket参数。
io.on("connection",(socket) => {
    console.log("成功连接");

    //断开连接状态监听
    // socket.on('disconnect', () => {
    //     console.log('断开连接');
    // });

    // setInterval(() => {
    //     socket.emit("data",{
    //         msg: Math.floor(Math.random() * 10000)
    //     });
    // },2000)
    socket.broadcast.emit('server message', { msg: '靳攀' });
    // var arr = [];

    socket.on("data",(data) => {
        //arr.push(data)
        console.log(data);
        //console.log(arr)

        socket.emit("data",{
            msg: data
        });
        socket.broadcast.emit('server message', { msg: data });
    })
    
    
})


httpServer.listen(3700);

