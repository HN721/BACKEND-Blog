const monggose = require("mongoose");

const postSchema = new monggose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: Object,
  },
  author: {
    type: monggose.Schema.Types.ObjectId,
    ref: "User",
  },
  nextEarningDate: {
    type: Date,
    default: () =>
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
  },
  thisMonthEarnings: { type: Number, default: 0 },
  totalEarnings: { type: Number, default: 0 },
  category: {
    type: monggose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
  likes: [
    {
      type: monggose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: monggose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  viewers: [
    {
      type: monggose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: monggose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  isBlocked: { type: Boolean, default: false },
});
module.exports = monggose.model("Post", postSchema);
