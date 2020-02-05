// // var nodemailer = require('nodemailer');

// // var transporter = nodemailer.createTransport({
// //     service : 'gmail',
// //     auth : {
// //         user : 'vhemantharajan@gmail.com',
// //         pass : 'Alien106@Anna'
// //     }
// // });

// // var mailoptions = {
// //     from : 'vhemantharajan@gmail.com',
// //     to : 'priyanjanari@gmail.com',
// //     subject : 'testing mail from hemanth',
// //     text : 'This is a system generated mail from nodejs kindly dont reply, reply panravan kaila kedacha sethan'
// // };

// // transporter.sendMail(mailoptions, function(error,info){
// //     if(error){
// //         console.log(error);
// //     }
// //     else{
// //         console.log('email sent '+ info.response);
// //     }
// // });


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
    
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'ethereal.user@ethereal.email',
//             pass: 'verysecret'
//         }
// });

// var mailOptions = {
//   from: 'vhemantharajan@gmail.com',
//   to: 'priyanjanhari@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



const sendmail = require('sendmail')();
 
sendmail({
    to: 'vhemantharajan@gmail.com',
    from: 'ceo@vugha.com',
    subject: 'Mail testing',
    html: 'eppadi, innaiku itha vachi fun pannituirrukom inga',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});