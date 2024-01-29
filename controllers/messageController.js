const Message = require("./../models/messageModel");

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      status: "success",
      results: messages.length,
      dats: {
        messages,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Can't find messages.",
    });
  }
};

exports.createMessage = async (req, res, next) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(202).json({
      status: "success",
      data: {
        newMessage,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
};
