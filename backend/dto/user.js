class UserDTO{
    constructor(user){
        this._id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.contact = user.contact;
        this.message = user.message;
    }
}
module.exports = UserDTO;