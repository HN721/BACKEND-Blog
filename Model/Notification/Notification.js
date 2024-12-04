const monggose = require("mongoose");

const notificationSchema = new monggose.Schema(
  {
    userId: {
      type: monggose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: monggose.Schema.Types.ObjectId,
      ref: "Post",
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = monggose.model("Notification", notificationSchema);
