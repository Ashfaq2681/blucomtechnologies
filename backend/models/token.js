// const { required } = require("joi");
const mongoose = require("mongoose");

const {schema} = mongoose;

const refreshTokenSchema = schema({
    token: {type: string, required: true},
    userId: {type: mongoose.Schema.ObjectId, ref: "users"}
},
{Timestamp:true}
)
module.exports = mongoose.model('refreshToken', refreshTokenSchema, 'tokens') 