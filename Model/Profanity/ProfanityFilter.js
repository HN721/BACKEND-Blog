const mongoose = require("mongoose");
const profanitySchema = new mongoose.Schema({
  bannedWords: [String],
});
module.exports = mongoose.model("Profanity", profanitySchema);
