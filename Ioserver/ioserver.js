var mqtt = require('mqtt');
var server = require('http').createServer();
var io = require('socket.io')(server);

var client = mqtt.connect('mqtt://localhost');
//var client = mqtt.connect('mqtt://192.168.1.5'); // adres Ip brokera

io.on('connect', function(socket){
  console.log("User connected");
  socket.on('disconnect', function(){
    console.log("User disconnected");
  });
});

client.on('connect', function () {
    client.subscribe([
        "Gripper/Alive",
        "Arm/Alive",
        "Chassis/Alive",
        "Gps/Alive",
        "GpsUSB/Alive",

        "Gripper/GripperCurrent",
        "Gripper/MoveCurrent",
        "Gripper/RotateCurrent",
        "Gripper/RotatePosition",
        "Gripper/Voltage",

        "Arm/BarkPosition",
        "Arm/LokiecPosition",
        "Arm/ObrotPosition",

        "GpsUSB/LatitudeDD",
        "GpsUSB/LongitudeDD",
        "GpsUSB/Track",
        "GpsUSB/Speed",
        "COMPAS/DATA",

        "Chassis/AkuMot",
        "Chassis/AkuEle"
    ]);
});

client.on('message', function (topic, payload) {
  console.log(topic+'='+payload);
  io.emit('mqtt', {'topic':String(topic), 'payload':String(payload)});
});

server.listen(3000);
