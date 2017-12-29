const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //ES2015 require but for some reason not working

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
