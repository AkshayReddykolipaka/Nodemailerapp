const nodemailer = require("nodemailer");
const { isAsyncFunction } = require("util/types");

const sendEmail = async (to, messageContent) => {
  try {
    //create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "kolipakaakshay219@gmail.com",
        pass: "zzbn zjrq njbt oidc",
      },
    });

    //message obj
    const message = {
      to,
      subject: "New MEssage from Node mailer app",
      html: `
            <h3>You have received a new message from Nodemailer APP</h3>
            <p>${messageContent}</p>
            `,
    };

    //send the email
    const info = await transporter.sendMail(message);
    console.log("Message sent", info.messageId);
  } catch (error) {
    console.log(error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
