const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true, 
  auth: {
    user: "sheroze.ahmed2239@gmail.com",
    pass: "rdgbcvvrlrrnjpgi",
  },
});

// async..await is not allowed in global scope, must use a wrapper


    async function sendMail(to,subject,text,html) {
        try {
        const info = await transporter.sendMail({
          from: 'connect@blucomtechnologies.com',
          to, 
          subject, 
          text, 
          html
        });
     
} catch (error) {
   console.log(error);
}
}
module.exports = sendMail;