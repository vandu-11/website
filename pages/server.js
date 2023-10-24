const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port

// Create a transport for sending email using your Gmail account
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'vandanavandana494@gmail.com',
    pass: 'Vandu@123',
  },
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'yourEmail@gmail.com',
    to: 'yourEmail@gmail.com', // The email where you want to receive notifications
    subject: 'New Enquiry Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
