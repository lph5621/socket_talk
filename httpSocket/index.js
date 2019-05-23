let express = require('express');
let cors = require('cors');
const app  = express();


app.use(cors({
    origin: ['http://localhost:8000', 'http://10.1.7.49:8000'],
    methods: ['GET', 'POST']
}))

app.get('/',(req,res)=>{
    res.send({
        title:'aaaaaaa'
    })
})
let server = app.listen(3000,() => {
    console.log('服务已开启')
})
// socket的对象描述
let io = require('socket.io').listen(server);
// 和另一端 打开连接的状态 on监听 connection，socket 连接成功后的返回对象
io.sockets.on('connection',(socket) => {
    console.log('连接成功')
    let ArrObj = [
        {id:1, title:'突发事件1'}
    ]
    socket.emit('getEmergencyData', ArrObj)
})