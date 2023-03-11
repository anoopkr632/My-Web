$(document).ready(function(){
    $("#formContact").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
            },
            email:{
                required:true,
                email:true,
            },
            contactNo:{
                required:true,
                minlength:10,
            },
            place:{
                required:true,
            }
            
        }
    })
     
})



// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Serve static files
// app.use(express.static(__dirname + '/public'));

// // Route to handle form submission
// app.post('/form-submit', (req, res) => {
//     console.log('error')
//   const { name, email, message } = req.body;
//   console.log('error')

//   // Create a transport object to send email
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'anoopkr632@gmail.com',
//         pass: '8281526303'// Your Gmail password
//     }
//   });

//   // Define email options
//   const mailOptions = {
//     from: email, // Sender's email address
//     to: 'anoopatwork632@gmail.com', // Recipient email address
//     subject: 'New message from your website',
//     html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Message: ${message}</p>
//     `
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send('Error');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Success');
//     }
//   });
// });

// // Start server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
