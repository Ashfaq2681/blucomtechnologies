const Joi = require("joi");
const User = require("../models/users");
const UserDTO = require("../dto/user");
const sendMail = require("../helpers/sendMail");

const authController = {
  async multiStepForm(req, res, next) {
    const multiStepFormSchema = Joi.object({
      
      firstName: Joi.string().max(30).required(),
      lastName: Joi.string().max(30).required(),
      email: Joi.string().email().required(),
      contact: Joi.string().max(20).required(),
      message: Joi.string().max(500).required(),
     
    });
    const { error } = multiStepFormSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    const { firstName, lastName, email, contact, message } = req.body;

    const userToMultiStepForm = new User({
      firstName,
      lastName,
      email,
      contact,
      message
    });

    const user = await userToMultiStepForm.save();

    sendMail(email, "wellcome to Blucom technologies", `Hi, ${firstName} thanks for your providing info`, "<h1>Thank you for submitting the form</h1>");
    console.log("email sent");
   

    const userDto = new UserDTO(user);


    return res.status(201).json({ user: userDto });
  },
  
};

module.exports = authController;
