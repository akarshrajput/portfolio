const axios = require("axios");
const Message = require("./../models/messageModel");

exports.portfolio = async (req, res) => {
  res.status(200).render("portfolio", {
    title: "Open Minder : Beyond Boundaries",
  });
};
