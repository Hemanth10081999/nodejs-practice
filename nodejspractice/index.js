var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('dummy',function(msg){
    console.log(msg);
});

myEmitter.emit('dummy','emitter is emitted and caught')