const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'The username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'The email is required'],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    match: [
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain at least 1 letter and 1 number',
    ],
  },
}, { timestamps: true });

userSchema.virtual('confirmpassword')
  .get(function () {
    return this._confirmpassword;
  })
  .set(function (value) {
    this._confirmpassword = value;
  });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  if (this.password !== this._confirmpassword) {
    return next(new Error('Passwords do not match'));
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
