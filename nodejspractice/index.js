var events = require('events');
var util = require('util');

var Person = function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter)

var Hemanth = new Person('Hemanth');
var Amirtha = new Person('Amirtha');
var Ari = new Person('Ari');
var names = [Hemanth , Amirtha , Ari]

names.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" : "+msg)
    });
});

Hemanth.emit('speak','hi guys how are you');
Ari.emit('speak','i am fine');
Amirtha.emit('speak','having fun ah');